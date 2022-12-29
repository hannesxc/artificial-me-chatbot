import Terminal from 'react-console-emulator'
import commands from './commands.js'
import { useState, useRef } from 'react'

export default function Term() {
    const cmds = commands.commands
    const owrs = commands.overwrites
    const terminal = useRef()
    const [ prompt, setPrompt ] = useState('me@/hannesxc:~$ ')
    const [ home, sethome]  = useState('hannesxc')
    const [ dir, setdir ] = useState({
        'hannesxc': []
    })
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={[
                "Welcome to Artificial-Me! Terminal type website made to demonstrate my first AI chatbot.",
                "-------",
                "Type 'help' to see the list of commands."
            ]}
            commands={{
                clear: {
                    description: 'clear the terminal',
                    usage: 'clear',
                    fn: () => {
                        terminal.current.clearStdout()
                    }
                },
                cd: {
                    description: 'change dir',
                    usage: 'cd <directory>',
                    fn: (...args) => {
                        if (args.length===1 && args[0]==='..') {
                            if (prompt === 'me@/hannesxc:~$ ') {
                                return 'cannot go up'
                            } else {
                                setPrompt(prompt.substring(0, prompt.lastIndexOf('/'))+":~$ ")
                                sethome(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                return 'changed directory'
                            }
                        } else {
                            if (dir[home].includes(args[0])) {
                                setPrompt(`${prompt.slice(0, -4)+ "/" + args.join('/') + ":~$ "}`)
                                sethome(args.join('/'))
                                return 'changed directory'
                            } else {
                                return 'cannot find directory'
                            }
                        }
                        
                    }
                },
                ls: {
                    description: 'list current dir',
                    usage: 'ls',
                    fn: () => {
                        if (dir[home].length === 0) {
                            return 'Empty directory. Use mkdir to create a directory.'
                        } else {
                            return dir[home].join('\n')
                        }
                    }

                },
                mkdir: {
                    description: 'make directory',
                    usage: 'mkdir <directory>',
                    fn: (...args) => {
                        if (args.length===1) {
                            setdir({
                                ...dir,
                                [home]: [...dir[home], args[0]],
                                [args[0]]:[]
                            })
                            return `created directory ${args[0]}.`
                        } else {
                            return 'invalid arguments'
                        }
                    }
                },
                help: {
                    description: 'list available commands',
                    usage: 'help',
                    fn: () => {
                        return `
                            ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${owrs[cmd].description}${" ".repeat(39-owrs[cmd].description.length)}`).join('\n')}
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${cmds[cmd].description}${" ".repeat(39-cmds[cmd].description.length)}`).join('\n')}
                        `
                    }
                },
                ...cmds
            }}
            promptLabel={prompt} 
            autoFocus
            style={{
                backgroundColor: null,
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',     
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}}
            promptLabelStyle={{ color: '#ff3737' , fontWeight:'normal'}}
            inputTextStyle={{ color: '#68a2b9' , fontWeight: 'normal'}}
            messageStyle={{ color: '#92bdc7' , fontWeight: 'normal', paddingLeft: null}}
            scrollBehavior='auto'
            noDefaults
        />
    )
}