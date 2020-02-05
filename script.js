let listaDiv = document.querySelectorAll('div');
let div = document.getElementById('caixa1');
let body = document.querySelector('body');
div.style.color = "#FFFF";

listaDiv.forEach((div, index) => {
    if (index === 2) {
        return
    }
    div.style.backgroundColor = "red";
});

let section = document.createElement("section");
section.innerHTML "OIOIOIOIOIOIOIOI";
section.setAttribute: ('class', 'content minhaClass')
body.appendChild(section);

console.log(body);
