const entrada1= require("readline-sync");

let letra: string = entrada1.question("Digite uma letra: ");

if(letra == "a" ||letra == "e" || letra == "o" ||letra == "i" ||letra == "u"){
console.log("Esta letr é uma vogal !");

}

else{
    console.log("Esta letra é uma consoante !!");
}