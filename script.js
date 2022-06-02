const terminal_history = document.getElementById("terminal_history")
const textarea = document.getElementById("textarea")
const command = document.getElementById("command")

// console.log(textarea.text)


document.addEventListener('keypress', logKey);

function logKey(e) {
    if (e.key == " "){
        command.textContent +=" ";
    } else if (e.key == "Backspace"){
        command.textContent = command.textContent.slice(0, -1);
    } else{
        command.textContent += `${e.key}`;
    }
    console.log(e);
}
