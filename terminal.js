let inputId = 0;
let outputId = 0;
let history = [];
let historyIndex = 0;

const terminalInit = () => {
    return `<terminal id="terminal">
                <input-line style="display: inline-block; width: 100%;">
                     <span class="name">headhunter@jarvis:~$&nbsp;</span>
                <input id="${inputId}" class="input" onkeyup="pressKey(event)" autofocus>
                </input-line>        
            </terminal>`};


const source = {
    'about': [
        '',
        '<b style="color:white"> ► ABOUT</b>',
        '',
        'JONATHAN SILVA - SOFTWARE DEVELOPER',
        '',
        'A developer who almost always uses semicolons : )',
        '',
        'Here’s a list of developing back-end technologies I am familiar with: Spring, Kotlin, Java and Nodejs.',
        'I prefer Java and Kotlin when I have to deal with more complex schemes, but I understand the power to solve problems with Nodejs. Well, so I think, but we can talk about it lol.',
        `When I need to build a graphical interface, a front-end, I immediately think to use reactjs, or if it's something very simple, html + vanilla js.`,
        'I am not a designer, I am not able to create a logo or something like that, but I know about UX. I know how to avoid unnecessary clicks, sizes and colors. I am familiar with the very useful material-ui.',
        '',
        'I am currently starting to implement some things with apache-kafka, which I have been enjoying a lot.',
    ],
    'languages': [
        '',
        '<b style="color:white"> ► LANGUAGES</b>',
        '',
        '★★★★★ Português',
        '★★★☆☆ Inglês',
        '★★★☆☆ Espanhol',
    ],
    'skills': [
        '',
        '<b style="color:white"> ► SKILLS</b>',
        '',
        '★★★★☆ java / kotlin',
        '★★★★☆ javascript',
        '★★★★☆ spring-web',
        '★★★★☆ spring-jpa',
        '★★★☆☆ spring-cloud-stream',
        '★★★☆☆ spring-webflux',
        '★★★☆☆ reactjs',
        '★★★☆☆ expressjs',
        '★★★☆☆ aws / firebase',
        '★★★☆☆ linux',
        '★★★☆☆ kafka',
        '★★☆☆☆ kubernetes',
        '★★★☆☆ junit',
        '★★★☆☆ jest',
        '★★★☆☆ agile methodology',
        '★★★☆☆ docker',
        '★★★☆☆ no-sql (mongoDB)',
        '★★★★☆ sql (oracle | postgresql)',
        '',
    ],
    'social': [
        '',
        '<b style="color:white"> ► SOCIAL</b>',
        '',
        '<a href="https://www.linkedin.com/in/jonathan-sh/"> <i class="fab fa-linkedin"></i>  linkedin </a>',
        '<a href="https://github.com/jonathan-sh/"> <i class="fab fa-github"></i>  github </a>',
    ],
    'hobbies': [
        '',
        '<b style="color:white"> ► HOBBIES</b>',
        '',
        '-bike trail 🚲',
        '-make bread 🍞🥖',
    ],
    'work': [
        '&nbsp&nbsp&nbsp',
        '<b style="color:white"> ► WORK EXPERIENCE</b>',
        '',
        '<b style="color:#00ff00">Software Developer at Solinftec</b>',
        '<div style="color:#00ff00"><b>start:</b> Novembro 2016 | <b>end:</b> Current</div>',
        '&nbsp&nbsp&nbsp ',
        `&nbsp&nbsp&nbsp I started working as an intern to join the team that started the development of sgpa (the company's core system),`,
        `&nbsp&nbsp&nbsp I was hired and we worked on the sgpa until it went into production.`,
        `&nbsp&nbsp&nbsp Since the sgpa was in large-scale production, I had the opportunity to move on to the research and development team.`,
        `&nbsp&nbsp&nbsp Where our task is to deal with new projects with a certain degree of innovative difficulty, among these challenges: `,
        '&nbsp&nbsp&nbsp&nbsp ✓ processing ranking algorithms in parallel',
        '&nbsp&nbsp&nbsp&nbsp ✓ integrations with our AI (alice)',
        '&nbsp&nbsp&nbsp&nbsp ✓ real time notifications with multiple devices',
        '&nbsp&nbsp&nbsp&nbsp ✓ intersection of geographic polygons for triggering events',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp Some projects I worked on and their most important technologies:',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b style="color:white">NOTIFICATION-API (notifications orchestrator for devices)</b>',
        '&nbsp&nbsp&nbsp&nbsp - kotlin with spring boot and spring jpa',
        '&nbsp&nbsp&nbsp&nbsp - fire cloud message',
        '&nbsp&nbsp&nbsp&nbsp - apache-kafka',
        '&nbsp&nbsp&nbsp&nbsp - aws eks',
        '&nbsp&nbsp&nbsp&nbsp - openApi specification (3.0)',
        '&nbsp&nbsp&nbsp&nbsp - junit',
        '&nbsp&nbsp&nbsp&nbsp - github actions (to run tests by pull request)',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b style="color:white">ALICE-GEO-TRIGGER (geographic polygon intersection for triggering events)</b>',
        '&nbsp&nbsp&nbsp&nbsp - nodejs',
        '&nbsp&nbsp&nbsp&nbsp - turf',
        '&nbsp&nbsp&nbsp&nbsp - aws lambda',
        '&nbsp&nbsp&nbsp&nbsp - jest',
        '&nbsp&nbsp&nbsp&nbsp - github actions (to deploy and run tests by pull request)',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b style="color:white">WHITE-RABBIT (internal AI orchestrator)</b>',
        '&nbsp&nbsp&nbsp&nbsp - nodejs (typescript with expressjs)',
        '&nbsp&nbsp&nbsp&nbsp - aws s3',
        '&nbsp&nbsp&nbsp&nbsp - aws eks',
        '&nbsp&nbsp&nbsp&nbsp - docker',
        '&nbsp&nbsp&nbsp&nbsp - jest',
        '&nbsp&nbsp&nbsp&nbsp - github actions (to run tests by pull request)',
        '&nbsp&nbsp&nbsp ',
        `&nbsp&nbsp&nbsp <b style="color:white">SGPA-API (company's core system)</b>`,
        '&nbsp&nbsp&nbsp&nbsp - java with srping boot, spring jpa and spring security',
        '&nbsp&nbsp&nbsp&nbsp - oracle (11g)',
        '&nbsp&nbsp&nbsp&nbsp - javacript',
        '&nbsp&nbsp&nbsp&nbsp - junit',
    ],
    'help':[
        '',
        '<b style="color:white"> ► HELP</b>',
        '',
        '<b style="color:#a7ff00">profile</b> to get a overview',
        '<b style="color:#a7ff00">work</b> to get work experience',    
        '<b style="color:#a7ff00">about</b> to get about text',
        '<b style="color:#a7ff00">languages</b> to get language level',
        '<b style="color:#a7ff00">skills</b> to get the skills ',
        '<b style="color:#a7ff00">social</b> to get links',
        '<b style="color:#a7ff00">hobbies</b> to get the hobbies',
        '<b style="color:#a7ff00">clear</b> to clearup',
        '<b style="color:#a7ff00">exit</b> to get out',
        '',
    ]
}


const setFocusAtTheLastInput = () => {
    if (document.getElementById(inputId)) {
        document.getElementById(inputId).focus();
    }
};


const printLn = (output) => {
    const spanId = `out-${++outputId}`;
    const line = `<span id="${spanId}" class="output">${output}</span>`;
    document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
    document.getElementById(spanId).scrollIntoView({ behavior: 'auto', block: 'start' });
};

const buildPromises = (topics) => {
    let lines = [];
    topics.forEach(topic => {
        source[topic].forEach(line => {
            lines.push(line);
        });
    });

    let promises = [];
    for (let index = 0; index < lines.length; index++) {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                printLn(lines[index]);
                resolve(true)
            }, (index + 1) * 110)
        });
        promises.push(promise);
    }

    return promises;
};

const getPromisesByCommand = {
    'date': () => {
        const promise = new Promise(resolve => {
            const output = new Date().toString();
            printLn(output);
            resolve(true)
        });

        return [promise];
    },
    'clear': () => {
        const promise = new Promise(resolve => {
            $("#terminal").remove();
            $("#terminal_mode").append(terminalInit());
            resolve(false)
        });

        return [promise];
    },
    'exit': () => {
        const bye = new Promise(resolve => {
            setTimeout(() => {
                printLn("")
                printLn("<b>(¯ ▽ ¯) ノ bye! </b>")
                printLn("")
                newLine();
                resolve(true)
            }, 100);
        });

        const close = new Promise(resolve => {
            setTimeout(() => {
                outTermianlMode();
                resolve(true)
            }, 1100);
        });
        

        return [bye, close];
    },
    'mode': () => outTermianlMode(),
    'help': () => buildPromises(['help']),
    'about': () => buildPromises(['about']),
    'languages': () => buildPromises(['languages']),
    'skills': () => buildPromises(['skills']),
    'social': () => buildPromises(['social']),
    'hobbies': () => buildPromises(['hobbies']),
    'work': () => buildPromises(['work']),
    'profile': () => buildPromises(['about', 'skills', 'social', 'languages']),
};

const runCommand = () => {

    const command = document.getElementById(inputId).value.toString().toLocaleLowerCase();
    if (command == "") {
        newLine();
    }
    else {
        const promises = getPromisesByCommand[command];
        if (promises) {
            Promise.all(promises()).then((out) => {
                if (out.filter(it => it == false).length == 0) {
                    newLine();
                }

            }
            );
        } else {
            const output = `bash: ${command} : command not found...`;
            printLn(output);
            newLine();
        }

        history.push(command);
        setFocusAtTheLastInput();
    }
}

const newLine = () => {
    if (document.getElementById(inputId)) {
        document.getElementById(inputId).disabled = true;
        const line =`<input-line style="display: inline-block; width: 100%;">
                        <span class="name">headhunter@jarvis:~$&nbsp;</span>
                        <input id ="${++inputId}"class="input" onkeyup="pressKey(event)">
                    </input-line>`;
        document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
        setFocusAtTheLastInput();
    }
};

const getHistory = () => {
    if (history.length > 0) {
        let element = document.getElementById(inputId);
        element.value = history[historyIndex];
    }

    if (historyIndex != 0) {
        --historyIndex;
    }
};

const resetHistoryIndex = () => {
    historyIndex = history.length
};

const pressKey = (it) => {
    if (it.which == 13 || it.keyCode == 13) {
        resetHistoryIndex();
        runCommand();
        return false;

    }
    else if (it.which == 38 || it.keyCode == 38) {
        getHistory();
        return false;
    }

    return true;
}
