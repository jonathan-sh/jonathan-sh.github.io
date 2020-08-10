let inputId = 0;
let history = [];
let historyIndex = 0;


const source = {
    "about": [
        "<b>ABOUT</b>",
        "",
        "",
        "Jonathan Silva - Software Developer",
        "Um desenvolvedor que quase sempre usa ponto e virgula :)",
        "",
        "Elaborando APIs backend estou acostumado a usar: Spring, Kotlin, Java e Nodejs.",
        "Dou preferência para Java e Kotlin quando tenho que lidar com esquemas mais complexos.",
        "Porém entendo o poder de solucionar problemas com nodejs, bem... assim penso, mas podemos conversar sobre isso rs.",
        "",
        "Quando preciso construir alguma interface gráfica, um front-end, penso logo em usar reactjs ou se for algo muito simples, html + js puro. ",
        "Tenho familiaridade com o muito util material-ui.",
        "",
        "Atualmente estou começando a implementar algumas coisas com apache-kafka, tenho gostado bastante."
    ]
}


const setFocusAtTheLastInput = () => {
    document.getElementById(inputId).focus();
};

const printLn = (output) => {
    const line = `<span class="output">${output}</span>`;
    document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
};

const getPromisesByCommand = {
    'date': () => {
        let promises = [];
        const promise = new Promise(resolve => {
            const output = new Date().toString();
            printLn(output);
            resolve(true)
        });
        promises.push(promise);

        return promises;
    },
    'about': () => {
        const lines = source['about'];
        let promises = [];
        for (let index = 0; index < lines.length; index++) {
            const promise = new Promise((resolve) => {
                setTimeout(() => {
                    printLn(lines[index]);
                    resolve(true)
                }, (index + 1) * 150)
            });
            promises.push(promise);
        }

        return promises;
    }
};

const runCommand = () => {

    const command = document.getElementById(inputId).value.toString().toLocaleLowerCase();

    if (command == "") {
        newLine();
    }
    else {
        const promises = getPromisesByCommand[command];
        if (promises) {
            Promise.all(promises()).then(() => newLine());
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
    document.getElementById(inputId).disabled = true;
    const line = `<input-line style="display: inline-block; width: 100%;">
                    <span class="name">headhunter@jarvis:~$&nbsp;</span>
                    <input id ="${++inputId}"class="input" onkeyup="pressKey(event)">
                  </input-line>`;
    document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
    setFocusAtTheLastInput();
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
