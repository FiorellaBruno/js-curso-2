let titulo = document.querySelector('h1');
titulo.innerHTML =  " Hora del desafío ";

function consoleButton(){
    console.log("El botón fue clicado");
}

function showPrompt(){
    let ciudadBr = prompt ("Ingrese por favor una ciudad de Brasil");
    alert("Estuve en " + ciudadBr + " y me acordé de ti");
}

function showAlert() {
    alert ("Amo JS");
}

function sumOfTwo(){
    let firstNum = parseInt(prompt("Por favor, ingrese el primer num"));
    let secondNum = parseInt(prompt("Por favor, ingrese el segundo num"));

    let resultOfTwo = firstNum + secondNum;
    alert(`${firstNum} + ${secondNum} = ${resultOfTwo}`);
        
    }