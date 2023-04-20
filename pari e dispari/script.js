
let user = prompt('pari o dispari?')
console.log(user);
let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(userNumber);
 
let numberPcRandom = Math.floor(Math.random()*5)+1;
console.log(numberPcRandom);

let somma = userNumber + numberPcRandom;
console.log(somma);

let esito = check(somma);

function check(number){
    if (number % 2 === 0){
    return 'pari';
    }
    else{
        return 'dispari';
    }
}

if(user === esito){
    console.log('Hai Vinto');
}

else{
    console.log('Hai Perso');
}





 