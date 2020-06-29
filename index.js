let inputId = 0;
let history = [];
let historyIndex = 0;


const setFocusAtTheLastInput = () => {
    document.getElementById(inputId).focus();
};

const printResult = () => {

    const command = document.getElementById(inputId).value;

    let output = `bash: ${command}: command not found...`;

    if (command === "date") output = new Date().toString();

    if (command !== "") {
        history.push(command);
        const line = `<span class="output">${output}</span>`;
        document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
    }

    setFocusAtTheLastInput();
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
        printResult();
        newLine();
        return false;

    }
    else if (it.which == 38 || it.keyCode == 38) {
        getHistory();
        return false;
    }

    return true;
}