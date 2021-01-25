//let lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista[0])
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
/*
let fruta = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(fruta[0].nome);
console.log(fruta[0].cor);
console.log(fruta[1].nome);
console.log(fruta[1].cor);*/


/*
let idade = prompt("Qual a sua idade")
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
}
*/

/*
let count = 0;
while (count <= 5) {
    console.log(count);
    count++
}
*/

/*
let count;
for (count = 0; count <= 5; count++) {
    alert(count);

}*/
/*
let d = new Date();
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()));
*/
function soma(n1, n2) {
    return n1 + n2
};

/*function validaIdade(idade) {

    let validar = true;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar
}
let idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));*/
function clicou() {
    document.getElementById("Agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>";
    //  alert("Obrigado por clicar!");
}

function redirecionar() {
    window.open("https://Amazon.com"); // abre outra pagina com a Amazon 
    //window.location.href = "https://Amazon.com/"; // abre a Amazon na mesma pagina
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}