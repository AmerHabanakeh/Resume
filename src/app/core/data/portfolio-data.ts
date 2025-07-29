import { Project } from "../../shared/models/project"
import { createPercent, Skill } from "../../shared/models/skills"
import { techStackItem } from "../../shared/models/tech-stack"
import { IconType, TimelineItem, TimelineItemType } from "../../shared/models/timeline"

export type PortfolioData = {
    techStackItems: techStackItem[],
    skills: Skill[],
    additionalSkills: string[],
    projects: Project[],
    timeLineItems: TimelineItem[],
    contactInfo:{
        phone:string
        email:string
        address:string
        workingHours:string
    }
}

export const portfolioData: PortfolioData = {
    techStackItems: [
        {
            title: "Angular",
            icon: "/images/angular-logo.png"
        },
        {
            title: "HTML",
            icon: "ri-html5-fill",
            color: "#E34F26"
        },
        {
            title: "CSS",
            icon: "ri-css3-fill",
            color: "#1572B6"
        },       
        {
            title: "JavaScript",
            icon: "ri-javascript-fill",
            color: "#F7DF1E"
        },
        {
            title: "TypeScript",
            icon: "/images/typescript-logo.png"
        },
        {
            title: "Git",
            icon: "ri-git-branch-fill",
            color: "#F05032"
        },
        {
            title: "PrimeNG",
            icon: "/images/primeng-logo.png"
        },
        {
            title: "Angular Material",
            icon: "/images/angular-logo.png"
        },
        {
            title: "Tailwind CSS",
            icon: "ri-tailwind-css-fill",
            color: "#36b7f0"
        },
        {
            title: "NgRx",
            icon: "/images/ngrx-logo.png"
        },
        {
            title: "Bootstrap",
            icon: "ri-bootstrap-fill",
            color: "#7411f6"
        },
    ],
    skills: [
        {
            title: "Angular",
            percent: createPercent(80)
        },
        {
            title: "JavaScript / TypeScript",
            percent: createPercent(85)
        },
        {
            title: "Css / Sass / Tailwind CSS",
            percent: createPercent(90)
        },
    ],
    additionalSkills: [
        'Redux',
        'Firebase',
        'CI/CD',
        'Responsive Design',
        'Performance Optimization',
        'Clean Architecture',
        'Reactive Programming',
        'Third-Party Integrations',
        'API Integrations',
        'Webpack / Vite',
        'WebSockets (real-time features)',
    ],
    projects: [
        // {
        //     name: 'Praxta',
        //     description: "A multi-tenant system built for psychiatric clinics in Austria, offering appointment scheduling with daily/weekly/monthly views, Zoom/Google Meet integration, Nuki e-key room access, Stripe payments, Google Auth, and a sleek modern UI.",
        //     image: "praxta.png",
        //     publishUrl: "https://my.saluvion.com/",
        //     type: "Website",
        //     tags: [
        //         "Angular",
        //         "Multi-Tenant",
        //         "Dashboard",
        //         "Psychiatry",
        //         "Modern UI",
        //         "Calendar",
        //         "Zoom",
        //         "Google Meet",
        //         "Nuki",
        //         "Stripe",
        //         "Google Auth",
        //         "Clinics",
        //         "Appointments",
        //         "Healthcare Tech",
        //         "E-Key Integration"
        //     ]
        // },
        {
            name: 'Zahi',
            description: `
                    ERP system for Zahi company covering billing, HR, sales, vehicles, warehouses, full accounting,
                    dynamic roles, multi-year databases, KPIs, reports, charts, custom invoices, orders, receipts, and mobile app.
                    Built with team collaboration.            `,
            image: "zahi.png",
            publishUrl: "https://zahi-co.website/",
            type: "Website",
            tags: [
                "Angular",
                "ERP",
                "Dashboard",
                "Industry",
                "Accounting",
                "Inventory",
                "Sales",
                "KPIs",
                "Reports",
                "Mobile App",
                "Multi-Database",
                "Permissions",
                "HR",
                "Vehicles",
                "Orders",
                "Warehouses",
                "Charts",
                "Analytics",
            ]
        },
        {
            name: 'Aalamy',
            description: `
                LMS for virtual schools with real-time board,
                online meetings, homework management, student tracking,
                multi-role access (school, teacher, student), and mobile app. I contributed to its development in collaboration with the team.
            `,
            image: "aalamy.png",
            publishUrl: "https://site.aalamy.org/",
            type: "Website",
            tags: [
                "Angular",
                "LMS",
                "Virtual School",
                "E-Learning",
                "Real-Time Board",
                "Online Meetings",
                "Homework",
                "Student Tracking",
                "Teacher Portal",
                "Education Tech",
                "Multi-Role",
            ]
        },
        {
            name: 'Medicine Reader',
            description: `
                Dashboard for managing mobile app subscriptions and app/ai-model versions.
                Supports an AI system aiding blind users in recognizing objects—especially medicines—via camera.
                I co-developed this platform with the team.            `,
            image: "medicine-reader.png",
            publishUrl: "https://glanceread.com/",
            type: "Website",
            tags: [
                "Angular",
                "Dashboard",
                "AI",
                "Accessibility",
                "Blind Assistance",
                "Medicine Recognition",
                "Mobile App",
                "Subscriptions",
                "AI Model Management",
                "Healthcare Tech",
                "Assistive Tech",
            ]
        },
        {
            name: 'Central Test',
            description: `
                Dashboard built for the Syrian Ministry of Endowments to manage Quran recitation programs,
                including student, teacher, and supervisor roles. Handles queues, attendance, exam marks,
                and printer integration.
            `,
            image: "central-test.png",
            publishUrl: "https://quiz.tamayouz-me.com/",
            type: "Website",
            tags: [
                "Angular",
                "Dashboard",
                "Quran Recitation",
                "Education",
                "Ministry of Endowments",
                "Teacher Management",
                "Student Management",
                "Queue System",
                "Attendance",
                "Printer Integration",
                "Government Tech",
            ]
        },
        {
            name: 'Manazel Al-Abrar',
            description: `
                Online platform for students to join Islamic courses and diplomas,
                contribute to content, take exams, view marks, and receive certificates.
                Includes multi-role support,
                a student landing site, and an admin dashboard.            
            `,
            image: "manazel-alabrar.png",
            publishUrl: "https://manazelalabrar.com/",
            type: "Website",
            tags: [
                "Angular",
                "E-Learning",
                "Courses",
                "Diplomas",
                "Exams",
                "Certificates",
                "Student Portal",
                "Online Education",
                "Multi-Role",
                "Education Tech",
                "Content Contribution",
            ]
        },
        {
            name: 'Samaoman',
            description: `
            The Invest Hub platform is a unified system providing five key portals: 
            Investment Opportunities for browsing and investing in projects, 
            a Business Academy offering educational content, 
            a Business Clinic delivering personalized consulting, 
            a Visitor section serving as the public gateway, 
            and an Admin Dashboard that manages everything—from listings and content to users, 
            appointments, analytics, and finances. Together, 
            these portals offer a seamless user experience for exploration, learning, consulting, investment, and backend management
            `,
            image: "samaoman-logo.png",
            publishUrl: 'https://invest-hub.net/#/',
            type: 'Website',
            tags: [
                "Angular",
                "invest",
                "academy",
                "business clinic",
                "consulting service",
                "financial consulting services"
            ]
            
        }

    ],
    timeLineItems: [
        {
            id: 6,
            type: TimelineItemType.EXPERIENCE,
            title: 'Frontend Developer',
            organization: 'Freelance',
            period: '2024 - present',
            description: `
                Worked as a freelance Frontend Developer, delivering diverse projects and individual tasks across various industries. Built tailored web solutions, strengthened problem-solving skills, and adapted quickly to client needs using Angular and modern tools.
            `,
            icon: {
                type: IconType.ICON,
                value: 'ri-global-line',
                color:"var(--primary)"
            }
        },
        {
            id: 1,
            type: TimelineItemType.EXPERIENCE,
            title: 'Frontend Engineer (Angular)',
            organization: 'Joybox',
            period: '2023 - 2025',
            description: `
                Worked as a Frontend Angular Developer, contributing to multiple projects across various domains. Gained strong experience in building responsive, scalable web apps and deepened my skills in Angular and modern frontend practices.
            `,
            icon: {
                type: IconType.IMAGE,
                value: '/images/joybox-logo.png'
            }
        },
        {
            id: 2,
            type: TimelineItemType.EDUCATION,
            title: 'Faculty Of Information Technology Engineering',
            organization: 'Arab International University - Bachelor Degree',
            period: '2020 - present (expected 2025)',
            description: 'Specialized in Software Engineering',
            icon: {
                type: IconType.ICON,
                value: 'ri-graduation-cap-fill',
                color: 'white'
            }
        },
        {
            id: 5,
            type: TimelineItemType.EDUCATION,
            title: 'Computer Technologies',
            organization: 'Damascus - Higher School Certificate',
            period: '2019 - 2020',
            description: '',
            icon: {
                type: IconType.ICON,
                value: 'ri-school-line',
                color: 'var(--secondary)'
            }
        },

    ],
    contactInfo:{
        address:"Syria - Damascus",
        email:"amer.hm.syr@gmail.com",
        phone: "+963937918351",
        workingHours:"Sunday - Thursday: 09:00 - 17:00"
    }
}
