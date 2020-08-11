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
        '<b> ► ABOUT</b>',
        '',
        'JONATHAN SILVA - SOFTWARE DEVELOPER',
        '',
        'Um desenvolvedor que quase sempre usa ponto e virgula :)',
        '',
        'Elaborando APIs backend estou acostumado a usar: Spring, Kotlin, Java e Nodejs.',
        'Dou preferência para Java e Kotlin quando tenho que lidar com esquemas mais complexos.',
        'Porém entendo o poder de solucionar problemas com nodejs, bem... assim penso, mas podemos conversar sobre isso rs.',
        '',
        'Quando preciso construir alguma interface gráfica, um front-end, penso logo em usar reactjs ou se for algo muito simples, html + js puro. ',
        'Tenho familiaridade com o muito util material-ui.',
        '',
        'Atualmente estou começando a implementar algumas coisas com apache-kafka, tenho gostado bastante.'
    ],
    'languages': [
        '',
        '<b> ► LANGUAGES</b>',
        '',
        '★★★★★ Português',
        '★★★☆☆ Inglês',
        '★★★☆☆ Espanhol',
    ],
    'skills': [
        '',
        '<b> ► SKILLS</b>',
        '',
        '★★★★☆ java / kotlin',
        '★★★★☆ javascript',
        '★★★★☆ spring-boot / spring-jpa',
        '★★★☆☆ reactjs',
        '★★★☆☆ expressjs',
        '★★★☆☆ aws / firebase',
        '★★★☆☆ linux',
        '★★☆☆☆ kafka',
    ],
    'social': [
        '',
        '<b> ► SOCIAL</b>',
        '',
        '<a href="https://www.linkedin.com/in/jonathan-sh/"> <i class="fab fa-linkedin"></i>  linkedin </a>',
        '<a href="https://github.com/jonathan-sh/"> <i class="fab fa-github"></i>  github </a>',
    ],
    'hobbies': [
        '',
        '<b> ► HOBBIES</b>',
        '',
        ' Trilhas de mtb 🚲',
        ' Fazer pães 🍞🥖',
    ],
    'work': [
        '',
        '<b> ► WORK EXPERIENCE</b>',
        '',
        '<b>Software Developer at Solinftec</b>',
        '<b>start:</b> Novembro 2016 | <b>end:</b> Presente',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp Comecei trabalhando como estagiário para integrar a equipe que começou o desenvolvimento do sgpa (sistema core da empresa), ',
        '&nbsp&nbsp&nbsp fui efetivado e trabalhamos no sgpa até ele entrar em produção. ',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp Uma vez que o sgpa estava em produção em larga escala, ',
        '&nbsp&nbsp&nbsp tive a oportunidade de passar para a equipe de pesquisa e desenvolvimento, ',
        '&nbsp&nbsp&nbsp onde a nossa tarefa é lidar com projetos novos com um certo grau de dificuldade inovatória dentre estes desafios: ',
        '&nbsp&nbsp&nbsp&nbsp ✓ processamento de algoritmos de ranqueamento em paralelo',
        '&nbsp&nbsp&nbsp&nbsp ✓ integrações com nossa AI (alice)',
        '&nbsp&nbsp&nbsp&nbsp ✓ notificações em tempo real com múltiplos devices',
        '&nbsp&nbsp&nbsp&nbsp ✓ intersecção de polígonos geográfico para o disparo de eventos',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp Alguns projetos que trabalhei e suas tecnologias mais importantes:',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b>SGPA-API (sistema core da empresa)</b>',
        '&nbsp&nbsp&nbsp&nbsp - java com spring boot;',
        '&nbsp&nbsp&nbsp&nbsp - javascript;',
        '&nbsp&nbsp&nbsp&nbsp - oracle;',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b>WHITE-RABBIT (centralizador de integração com a IA interna)</b>',
        '&nbsp&nbsp&nbsp&nbsp - nodejs (typescript com express);',
        '&nbsp&nbsp&nbsp&nbsp - s3;',
        '&nbsp&nbsp&nbsp&nbsp - github actions (testes automatizados);',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b>NOTIFICATION-API (centralizador do notificações)</b>',
        '&nbsp&nbsp&nbsp&nbsp - kotlin com spring boot;',
        '&nbsp&nbsp&nbsp&nbsp - fire cloud mensagem;',
        '&nbsp&nbsp&nbsp&nbsp - apache-kafka;',
        '&nbsp&nbsp&nbsp&nbsp - github actions (testes automatizados);',
        '&nbsp&nbsp&nbsp ',
        '&nbsp&nbsp&nbsp <b>ALICE-GEO-TRIGGER (intersecção de polígonos geográfico para o disparo de eventos)</b>',
        '&nbsp&nbsp&nbsp&nbsp - nodejs;',
        '&nbsp&nbsp&nbsp&nbsp - turf;',
        '&nbsp&nbsp&nbsp&nbsp - aws lambdas;',
        '&nbsp&nbsp&nbsp&nbsp - github actions (deploy e github actions (testes automatizados);',
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
        const line = `<input-line style="display: inline-block; width: 100%;">
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
