// Jonas Notes - Module Data Structure
// This file contains the hardcoded structure of all modules and PDFs

const MODULES = {
    "Year 1": {
        "Mathematics 1": [
            "Mathematics 1 Notes.pdf"
        ]
    },
    "Year 2": {
        "Environmental Engineering 2": [
            "Key Conceptual Points to Memorize.pdf",
            "Senior Environment (Annotated).pdf"
        ],
        "Fluid Mechanics 2": [
            "Data Sheet (Annotated).pdf",
            "Senior Fluids (Annotated).pdf"
        ],
        "Mathematics 2": [
            "Mathematics 2 Notes.pdf"
        ],
        "Soil Mechanics 2": [
            "Consolidation Examples.pdf",
            "Limit Equilibrium Examples.pdf",
            "Senior Soils (Annotated).pdf",
            "Soil Mechanics Question 5.pdf"
        ],
        "Statistics": [
            "Statistics Year 2.pdf"
        ],
        "Structural Mechanics 2": [
            "Structural Mechanics Year 2 Sem 1.pdf",
            "Structural Mechanics Year 2 Sem 2.pdf"
        ]
    },
    "Year 3": {
        "Environmental Engineering": [
            "Environmental Notes.pdf",
            "Exam Preparation (Full).pdf"
        ],
        "Fluid Mechanics": [
            "Fluid Mechanics Notes.pdf"
        ],
        "Traffic Engineering": [
            "Traffic Engineering Notes.pdf"
        ],
        "Transport Engineering": [
            "Transport Engineering Notes.pdf"
        ]
    },
    "Year 4": {
        // Empty for now - will be populated as notes are added
    }
};

// Helper function to get modules for a specific year
function getModulesForYear(year) {
    const yearKey = `Year ${year}`;
    return MODULES[yearKey] || {};
}

// Helper function to get PDFs for a specific module
function getPdfsForModule(year, moduleName) {
    const yearKey = `Year ${year}`;
    if (MODULES[yearKey] && MODULES[yearKey][moduleName]) {
        return MODULES[yearKey][moduleName];
    }
    return [];
}

// Helper function to build the path to a PDF
function getPdfPath(year, moduleName, pdfName) {
    return `notes/Year ${year}/${moduleName}/${pdfName}`;
}

// Helper function to get all years
function getYears() {
    return Object.keys(MODULES);
}
