// Firebase Configuration
// IMPORTANT: Replace these values with your actual Firebase project config
// Go to Firebase Console > Project Settings > Your apps > Web app > Config

const firebaseConfig = {
  apiKey: "AIzaSyAjB-5m8gItpaEbA2dfl9Tu-s6jZfVkZr8",
  authDomain: "jonas-academy-6f6ca.firebaseapp.com",
  projectId: "jonas-academy-6f6ca",
  storageBucket: "jonas-academy-6f6ca.firebasestorage.app",
  messagingSenderId: "93327941772",
  appId: "1:93327941772:web:8eab80ed3937630f75dba9",
  measurementId: "G-KYYBPHNJ7X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// Initialize Firestore (for storing additional user data like full name, DOB, age)
const db = firebase.firestore();

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// --- Auth Helper Functions ---

// Get current user
function getCurrentUser() {
    return auth.currentUser;
}

// Check if user is logged in
function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

// Get user data from Firestore
async function getUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
}

// Save user data to Firestore
async function saveUserData(uid, userData) {
    try {
        await db.collection('users').doc(uid).set(userData, { merge: true });
        return true;
    } catch (error) {
        console.error('Error saving user data:', error);
        return false;
    }
}

// Sign up with email and password
async function signUpWithEmail(email, password, fullName, dob, age) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Update display name
        await user.updateProfile({
            displayName: fullName
        });

        // Save additional user data to Firestore
        await saveUserData(user.uid, {
            fullName: fullName,
            email: email,
            dob: dob,
            age: age,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        return { success: true, user: user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign in with email and password
async function signInWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        const result = await auth.signInWithPopup(googleProvider);
        const user = result.user;

        // Check if user exists in Firestore
        const userData = await getUserData(user.uid);

        if (!userData) {
            // New Google user - they need to complete profile
            return { success: true, user: user, isNewUser: true };
        }

        return { success: true, user: user, isNewUser: false, userData: userData };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign out
async function signOutUser() {
    try {
        await auth.signOut();
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Listen to auth state changes
function onAuthStateChange(callback) {
    return auth.onAuthStateChanged(callback);
}

// Get full user info (Firebase Auth + Firestore data)
async function getFullUserInfo() {
    const user = getCurrentUser();
    if (!user) return null;

    const userData = await getUserData(user.uid);
    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        ...userData
    };
}
