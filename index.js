let input_id = 0;
const printResult = () => {

    const command = document.getElementById(input_id).value;
    
    let output = `bash: ${command}: command not found...`;

    if(command === "date") output = new Date()

    if(command!==""){
        const line = `<span class="output">${output}</span>`;
        document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
    }
    
    document.getElementById(input_id).focus();

}

const newLine = () => {
    document.getElementById(input_id).disabled = true;
    const line = `<input-line style="display: inline-block; width: 100%;">
                    <span class="name">headhunter@jarvis:~$&nbsp;</span>
                    <input id ="${++input_id}"class="input" onkeypress="onEnter(event)">">
                  </input-line>`;
    document.getElementById("terminal").insertAdjacentHTML('beforeend', line);
    document.getElementById(input_id).focus();
};


let onEnter = (it) => {
    if (it.which == 13 || it.keyCode == 13) {
        printResult();
        newLine();
        return false;
    }
    return true;
}