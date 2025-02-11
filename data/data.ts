const tasks = [
    {
        id: 1,
        title: 'Task 1',
        list: [
            { id: 1, name: 'Subtask 1.1',},
            { id: 2, name: 'Subtask 1.2', },
            { id: 3, name: 'Subtask 1.3', }
        ]
    },
    {
        id: 2,
        title: 'Task 2',
        list: [
            { id: 1, name: 'Subtask 2.1',},
            { id: 2, name: 'Subtask 2.2',},
            { id: 3, name: 'Subtask 2.3',}
        ]
    },
    {
        id: 3,
        title: 'Task 3',
        list: [
            { id: 1, name: 'Subtask 3.1'},
            { id: 2, name: 'Subtask 3.2'},
            { id: 3, name: 'Subtask 3.3'}
        ]
    },
    {
        id: 4,
        title: 'Task 4',
        list: [
            { id: 1, name: 'Subtask 4.1'},
            { id: 2, name: 'Subtask 4.2'},
            { id: 3, name: 'Subtask 4.3'}
        ]
    },
]

const quests = [
    {
        id: 1,
        title: "Pre-algebra Refresher",
        description:
            "Review concepts to prepare for Algebra! Translate expressions, integer operations, order of operations, evaluate expressions, solve equations, combine like terms, and identify number properties. Created in cooperation with Mathy Cathy!",
        author: "almed-demded",
        color: "#D13333",
    },
    {
        id: 2,
        title: "Geometry Basics",
        description:
            "Understand the fundamentals of geometry including angles, shapes, area, perimeter, and volume calculations.",
        author: "geo-master",
        color: "#4A90E2",
    },
    {
        id: 3,
        title: "Trigonometry Essentials",
        description:
            "Learn the key concepts of trigonometry, including sine, cosine, tangent, and their applications.",
        author: "tri-genius",
        color: "#8B5CF6",
    },
    {
        id: 4,
        title: "Calculus Introduction",
        description:
            "A beginner-friendly course covering limits, derivatives, and integrals with step-by-step explanations.",
        author: "calc-expert",
        color: "#22C55E",
    },
];

export {tasks, quests};