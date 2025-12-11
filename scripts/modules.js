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
            "Hydrology 2017 paper.pdf",
            "Hydrology 2020 paper.pdf",
            "Hydrology 2021 paper.pdf",
            "Hydrology 2022 paper.pdf",
            "Hydrology 2023 paper.pdf",
            "Hydrology 2024 paper.pdf",
            "Key Conceptual Points to Memorize.pdf",
            "Senior Environment (Annotated).pdf"
        ],
        "Fluid Mechanics 2": [
            "c2 Real Fluids.pdf",
            "c3 Pipe Flows.pdf",
            "c4 Open Channel.pdf",
            "Data Sheet (Annotated).pdf",
            "Senior Fluids (Annotated).pdf",
            "t1 Governing Equations.pdf",
            "t2 Real Fluids.pdf",
            "t3 Steady Pipe Flow.pdf",
            "t4 Flow Profiles in Pipes.pdf",
            "t5 Pipe Systems.pdf",
            "t6 Uniform Open Channel Flow.pdf",
            "t7 Gradually Varied Flow.pdf"
        ],
        "Mathematics 2": [
            "Mathematics 2 Notes.pdf"
        ],
        "Soil Mechanics 2": [
            "Consolidation Examples.pdf",
            "Limit Equilibrium Examples.pdf",
            "Senior Soils (Annotated).pdf",
            "Soil 2013 paper (q1, q2 and q4 only).pdf",
            "Soil 2018 paper (q1 only).pdf",
            "Soil 2019 paper.pdf",
            "Soil 2020 paper.pdf",
            "Soil 2023 paper (q1 only).pdf",
            "Soil 2024 paper.pdf",
            "Soil Mechanics Question 5.pdf"
        ],
        "Statistics": [
            "Statistics Year 2.pdf",
            "stats 2024 paper.pdf"
        ],
        "Structural Mechanics 2": [
            "2023 working (q3 hard).pdf",
            "2024 working.pdf",
            "Structural Mechanics Year 2 Sem 1.pdf",
            "Structural Mechanics Year 2 Sem 2.pdf"
        ]
    },
    "Year 3": {
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
