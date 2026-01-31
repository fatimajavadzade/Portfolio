import { NextResponse } from "next/server";

const experienceData = [
    {
        role: "Frontend Developer",
        location: "Freelance",
        startYear: "2025",
        endYear: "2026",
        bulletPoints: [
            "Translated Figma designs into responsive, user-friendly web interfaces using HTML, Tailwind CSS, and JavaScript.",
            "Built and maintained reusable web components, ensuring performance and accessibility.",
            "Collaborated with clients to refine requirements and deliver high-quality solutions on time.",
            "Followed best practices for clean, efficient frontend code.",
        ]
    }
]

const educationData = [
    {
        date: "Sep 2025 - Jan 2026",
        title: "AI - Powered Programming",
        subtitle: "CodeAcademy"
    },
    {
        date: "Oct 2024 - Apr 2025",
        title: "Frontend Development",
        subtitle: "Div Academy"
    },
    {
        date: "Sep 2022 - Present",
        title: "Information Technology",
        subtitle: "National Aviation Academy"
    }
];


const projectOverview = {
    frontProjects: [
        { name: "Puma Clone", url: "https://github.com/fatimajavadzade/puma" },
        { name: "Neptun Clone", url: "https://github.com/fatimajavadzade/NeptunFinal" },
        { name: "CountryApp Clone", url: "https://github.com/fatimajavadzade/CountryApp" },
        { name: "Turbo.az Clone", url: "https://github.com/fatimajavadzade/TurboAz" },
        { name: "Sayt.az Clone", url: "https://github.com/fatimajavadzade/saytaz" },
    ],
    backendProjects: [
        { name: "Pustok", url: "https://github.com/fatimajavadzada/Pustok" },
        { name: "Liberty", url: "https://github.com/fatimajavadzada/LibertyExamTask" },
        { name: "Pronia", url: "https://github.com/fatimajavadzada/Pronia" },
        { name: "Car Management", url: "https://github.com/ElchinAliyevCode/CarManagement" },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};