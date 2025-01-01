import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    password,
    gym,
    product,
    portfolio,
    threejs,
    erp
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "FrontEnd Developer",
        icon: backend,
    },
    {
        title: "UX/UI Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

// const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#383E56",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#E6DEDD",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#383E56",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#E6DEDD",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

const experiences = [
    {
        title: "Mern Stack Developer",
        company_name: "Coderatory",
        icon: nodejs,
        iconBg: "#383E56",
        date: "September 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js, Nextjs ,MongoDb and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]
const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    // {
    //     name: "Ecommerce",
    //     description:
    //         "Web-based platform that allows users to search,Their Products , and manage their cart , providing a minimal  and responsive design static site.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Firebase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: carrent,
    //     source_code_link: "https://github.com/",
    // },
    {
        name: "Portfolio",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Muhammad-Abdullah786/Portfolio_.git",
    },
    {
        name: "Fitness",
        description:
            "A comprehensive Fitness Static  Website that show users interactive design. I used tailwind css and vite react for creating this site",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: gym,
        source_code_link: "https://github.com/Muhammad-Abdullah786/gym-site",
    },
    {
        name: "Shipment Conatainer ERP",
        description:
            "i have Develped a SEO Friendly Website that allow  users to book a container with payment too design. I used tailwind css and vite react for creating this site",
        tags: [
            {
                name: "NExt",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Tracking Map",
                color: "yellow-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: erp,
        source_code_link: "https://github.com/Muhammad-Abdullah786/erp_frontend",
    },
    {
        name: "Password Generator",
        description:
            "A dynamic and engaging fitness-focused static website designed with an interactive user interface. Built using Tailwind CSS and Vite React, it showcases modern design principles and a seamless user experience",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
        ],
        image: password,
        source_code_link: "https://super-marshmallow-e524ed.netlify.app/",
    },

    {
        name: "Product Cards",
        description:
            "A dynamic web application that showcases product cards with full backend functionality. The platform allows administrators to seamlessly add, update, and remove product cards. Built with modern technologies, the project combines an interactive user interface with a robust backend for managing data efficiently.",
        tags: [
            {
                name: "Next js",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "yellow-text-gradient",
            },
            {
                name: "NodeJS",
                color: "purple-text-gradient",
            },
            {
                name: "Backend integration",
                color: "green-text-gradient",
            },
        ],
        image: product,
        source_code_link: "https://github.com/Muhammad-Abdullah786/protfolio_front",
    },
];

export { services, technologies, experiences, testimonials, projects };