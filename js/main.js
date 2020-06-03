function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML  = "<b>Obrigado por Clicar</b>";
}

function redirecionar(){
   // window.open("http://www.schalinski.adv.br");
   window.location.href = "http://www.schalinski.adv.br";
}
// neste codigo se eu tiver um novo elemento exemplo um novo campo clicavel eu terei que fazer 
// para cada elemento um id diferente no exemplo abaixo recebendo o proprio elemento por parametro
// ele serve para todos os campos clicaveis que colocar na pagina. 
/* 
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui";
}
*/
// colocando o this como parametro dentro da chamada da função no Html
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
    elemento.innerHTML = "Obrigado por passar o Mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui";
    elemento.innerHTML = "Passe o Mouse aqui";

}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}



/*
var validar = 0;
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ")
//console.log(validar);
console.log(validaIdade(idade));
//console.log(validaIdade(idade));


/*
function soma(n1 , n2){
    return (n1 + n2);
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome , novo_nome);
}

alert (soma(10 , 5));
alert (setReplace("Vai Japão" , "Japão" , "Brasil"));



/*
var d = new Date();
alert(d);
alert("Dia " + d.getDay());
alert("Hora " + d.getHours());
alert("Minutos " + d.getMinutes());
alert("Mês " +( d.getMonth() + 1));
*/



/*
var count;
for(count =0 ; count <= 5 ; count++){
    alert(count);
    console.log(count);
};
*

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;    
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
};
*/



/*
//Lista de Dicionarios
var frutas = [{nome: "maça" , cor: "vermelha"} , {nome: "uva" , cor: "verde"} , {nome: "pera" , cor: "amarela"}];
console.log(frutas);
console.log(frutas[0].nome);
alert(frutas[1].nome);


/* Dicionario
var fruta = {nome: "maça" , cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.nome);
*/

/*
var nome = "Aldo Macedo";
var idade = 50;
var idade2 = 51;
//alert(nome + " tem " + idade + " anos");
var frase = "Japão é o melhor time do mundo";
console.log(nome);
console.log(nome + " tem " + idade + " anos");
console.log(idade + idade2);
console.log(frase.toUpperCase());
console.log(frase.replace("Japão","Brasil"));
*/
/*
var lista = ["Maça", "Pera", "Laranja"];
lista.push("Uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
*/
