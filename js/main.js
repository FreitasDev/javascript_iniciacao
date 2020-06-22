/* Introdução a Javascript

// Trabalhando com Strings e números
var nome = "FreitasDev";
var idade = 25;
var idade2 = 10;
var n1 = 20;
var n2 = 8;

var frase = "Japão é o melhor time do mundo";
alert("Olá" + nome + ", Bem vindo!");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
console.log(n1 % n2);

//Lista

var lista = ["Maça", "Pera", "Laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString);
console.log(lista.join(" | "));

// Dicionário

var fruta ={nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

// Lista de Dicionários

var frutas =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ]
console.log(frutas);
alert(frutas[1].nome);

// Condicional 
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
 
// Laço de repetição
    //While
    var count = 0;
    while (count < 5){
        console.log(count);
        //count = count + 1;
        count++;
    };

    //For
    var count;
    for(count=0; count <= 5; count++){
        alert(count);
    }

// Data
var d = new Date();
alert(Date());
alert("Mês " + (d.getMonth()+1)); 
alert("Dia" + d.getDate); // mostra o dia
//alert("Dia " + d.getDay()); // deu erro
alert("Horas " + d.getHours());
alert("Minutos " + d.getMinutes());

// Praticando  function
function soma(n1, n2){
    return n1 + n2;
};
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome) 
};
var validar = 0; // Global
function validaIdade(idade){
    //var validar // Local
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
}
var idade = prompt("Qual sua idade? ");
validaIdade(idade);
console.log(validar);
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil")) // Troca Japão por Brasil
*/
// Manipulando elementos HTML
function mensagem(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado, e agora clique em mim e veja o GitHub do FreitasDev</b>";
    //console.log( document.getElementById("agradecimento").innerHTML = "<b> Obrigado, e agora clique em mim e veja o GitHub do FreitasDev</b>");
}
function redirecionar(){
    window.open("http://github.com/FreitasDev/"); // outra pagina
    //window.location.href = "http://github.com/FreitasDev/"; // mesma pagina
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}