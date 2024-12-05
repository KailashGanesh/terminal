const terminalHistory = document.getElementById("terminalHistory");
const textArea = document.getElementById("textarea");
const command = document.getElementById("command");
const apiUrl = "https://v2.jokeapi.dev/joke/Dark?type=single"

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
                display(textArea.value)
                printLineByLine(help,terminalHistory);
            break;
            case "clear":
                textArea.value = "";
                terminalHistory.innerHTML = '';
            break;
            case "whois":
                display(textArea.value)
                printLineByLine(whois,terminalHistory)
            break;
            case "banner":
                display(textArea.value)
                printLineByLine(banner,terminalHistory,"blueGlowText")
            break;
            case "socials":
                display(textArea.value)
                printLineByLine(socials,terminalHistory)
            break;
            case "projects":
                display(textArea.value)
                printLineByLine(projects,terminalHistory)
            break;
            case "why?":
                display(textArea.value)
                printLineByLine(["</br>","<span class='purpleGlowText'>because why not?</span>"],terminalHistory)
            break;
            case "email":
                display(textArea.value)
                printLineByLine(email,terminalHistory)
            break;
            case "secret":
                display(textArea.value)
                printLineByLine(secret,terminalHistory)
                setTimeout(() => {window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ") },600)
            break;
            case "dark-joke":
                getJoke(textArea.value)
            break;
            default:
                display(textArea.value,glow=false)
                printLineByLine(notFound,terminalHistory)
        }
    }
}

function printLineByLine(list,element,className = "",changeSpaces){
    for(let i = 0; i < list.length; i++){
        let para = document.createElement("p");
        let newText = list[i]
        // if(changeSpaces){
        //     newText = list[i].replace(/ /g,'&nbsp;');
        // }
        if(className){
            para.className = className;
        }
        para.innerHTML += newText;
        element.append(para);
    }
    textArea.scrollIntoView();
}

function printBanner(){
    // printLineByLine(dice,terminalHistory,"blueGlowText",changeSpaces=true)
    printLineByLine(banner,terminalHistory,"blueGlowText")
    printLineByLine(welcome,terminalHistory,changeSpaces=false)
}

function display(textAreaValue,glow=true){
    textArea.value = ""
    let currentLine = document.createElement('div');
    let prompt = document.createElement('div');
    let text = document.createElement('div');

    currentLine.className = "current-line"
    prompt.className = "prompt"
    text.className = "command"

    if(glow){
        text.className +=" greenGlowText"
    }

    prompt.innerHTML = "Guest@Portfolio:-$"
    text.innerHTML = textAreaValue;

    currentLine.appendChild(prompt);
    currentLine.appendChild(text);
    terminalHistory.appendChild(currentLine)

}

async function getJoke(textAreaValue){
    // making api call request
    const response = await fetch(apiUrl);

    // parsing it to JSON
    const data = await response.json();
    console.log(data.joke)
    display(textAreaValue)
    printLineByLine(["</br>",data.joke],terminalHistory, "wrap")
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
