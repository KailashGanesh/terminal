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
                console.log("case help")
            break;
        }
    }
}

function printLineByLine(list,element,className,changeSpaces){
    for(let i = 0; i < list.length; i++){
        let para = document.createElement("p");
        let newText = list[i]
        if(changeSpaces){
            newText = list[i].replace(/ /g,'&nbsp;');
        }
        para.className = className;
        para.innerHTML += newText;
        element.append(para)
    }
}

printLineByLine(dice,terminalHistory,"blueGlowText",changeSpaces=true)
printLineByLine(banner,terminalHistory,"blueGlowText",changeSpaces=true)
printLineByLine(welcome,terminalHistory,changeSpaces=false)
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
