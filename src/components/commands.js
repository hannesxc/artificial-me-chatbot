/* eslint-disable import/no-anonymous-default-export */
export default {
    commands: {
        echo: {
            description: 'prints text',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        about: {
            description: 'about me',
            usage: 'about',
            fn: () => {
                return "Male, 20 y/o\nFull Stack Developer\nCS undergrad, with a 9.04 CGPA."
            }
        },
        about_site: {
            description: 'about the site',
            usage: 'about-site',
            fn: () => {
                return "Specifically deployed to showcase Artificial-Me, an AI curated chatbot named Anna, made with IBM Watson.\nClick on the bottom widget to activate."
            }
        },
        github: {
            description: 'github account',
            usage: 'git',
            fn: () => {
                window.open('https://github.com/hannesxc', '_blank')
                return "redirecting to git profile..."
            }
        },
        facebook: {
            description: 'facebook account',
            usage: 'facebook',
            fn: () => {
                window.open('https://www.facebook.com/aditya.chakravorty.18', '_blank')
                return "redirecting to facebook profile..."
            }
        },
        linkedin: {
            description: 'linkedin account',
            usage: 'linkedin',
            fn: () => {
                window.open('https://linkedin.com/in/aditya-chakravorty', '_blank')
                return "redirecting to linkedin profile..."
            }
        },
        credly: {
            description: 'credly account (certifications)',
            usage: 'credly',
            fn: () => {
                window.open('https://www.credly.com/users/aditya-chakravorty', '_blank')
                return "redirecting to credly profile..."
            }
        },
        languages: {
            description: 'tech stack',
            usage: 'languages',
            fn: () => {
                return `
                    Languages I'm familiar with\n-------\n
                    Python
                    C/C++
                    HTML5
                    CSS3
                    Javascript
                    Java
                    React
                `
            }
        },
        tools: {
            description: 'tools',
            usage: 'tools',
            fn: () => {
                return `
                    Tools I'm familiar with\n-------\n
                    Git
                    VSCode
                    IBM Cloud
                    AWS
                    Bash
                `
            }
        },
        traits: {
            description: 'character traits',
            usage: 'traits',
            fn: () => {
                return `
                    Soft-Skills :-\n-------\n
                    Problem-Solving
                    Self-Motivated
                    Versatile
                    Teamwork
                    Communication
                `
            }
        },
        projects: {
            description: 'projects I have made',
            usage: 'projects',
            fn: () => {
                return `
                    Projects I've implemented till date\n-------\n
                    Aerum
                    Rest-Up
                    DownpourChat
                    Artificial-Me
                    Hannes & Co.
                    To-Do List V2
                    Personal-Portfolio
                    Flipcrackt
                    Calculator
                `
            }
        },
        fluency: {
            description: 'languages I speak fluently',
            usage: 'fluency',
            fn: () => {
                return `
                    Languages I'm fluent in\n-------\n
                    English
                    Hindi
                    Bengali
                `
            }
        },
        repo: {
            description: "opens this site's git repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/hannesxc/artificial-me-chatbot", '_blank')
                return "opening git repository..."
            }
        }
    },
    overwrites:{
        help: {
            description: 'list available commands',
            usage: 'help',
        },
        cd: {
            description: 'change dir',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'list current dir',
            usage: 'ls',
        },
        mkdir: {
            description: 'make dir',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'clear terminal',
            usage: 'clear'
        }
    }
}