const terminalHistory = document.getElementById("terminalHistory");
const textArea = document.getElementById("textarea");
const command = document.getElementById("command");

// console.log(textarea.text)


function inputFocus(){
    textArea.focus();
    console.log("click");
}

function runCommand(e){
    if (e.key === "Enter"){
        console.log(textArea.value);

        switch(textArea.value){
            case "help":
                display(help,textArea.value)
                console.log("case help")
            break;
            case "clear":
                textArea.value = "";
                terminalHistory.innerHTML = '';
            break;
        }
    }
}

function printLineByLine(list,element,className,changeSpaces){
    for(let i = 0; i < list.length; i++){
        let para = document.createElement("p");
        let newText = list[i]
        // if(changeSpaces){
        //     newText = list[i].replace(/ /g,'&nbsp;');
        // }
        para.className = className;
        para.innerHTML += newText;
        element.append(para)
    }
}

function printBanner(){
    printLineByLine(dice,terminalHistory,"blueGlowText",changeSpaces=true)
    printLineByLine(banner,terminalHistory,"blueGlowText",changeSpaces=true)
    printLineByLine(welcome,terminalHistory,changeSpaces=false)
}

function display(command,textAreaValue){
    textArea.value = ""
    let currentLine = document.createElement('div');
    let prompt = document.createElement('div');
    let text = document.createElement('div');

    currentLine.className = "current-line"
    prompt.className = "prompt"
    text.className = "command greenGlowText"

    prompt.innerHTML = "Guest@Portfolio:-$"
    text.innerHTML = textAreaValue;

    currentLine.appendChild(prompt);
    currentLine.appendChild(text);
    terminalHistory.appendChild(currentLine)

    printLineByLine(command,terminalHistory,changeSpaces=false);
}

printBanner();
document.addEventListener('click', inputFocus);
textArea.addEventListener('keypress',runCommand);
// solution to not use a text area/ input feild
// downside being can't move cursor to edit text

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//     if (e.key == " "){
//         command.textContent +=" ";
//     } else if (e.key == "Backspace"){
//         command.textContent = command.textContent.slice(0, -1);
//     } else if (e.key =="Enter"){
//         console.log('enter')
//     } else{
//         command.textContent += `${e.key}`;
//     }
//     console.log(e);
// }
