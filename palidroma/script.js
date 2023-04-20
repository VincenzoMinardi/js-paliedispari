// const parola = (prompt('Inserisci una parola'));



// function palindromo(word){

//     let parolaReverse = word.split('').reverse().join('');

//     if( parolaReverse == word){
//        console.log('è palindormo')
//     }

//     else{
//         console.log('non è palindromo')
//     }
// };

// palindromo(parola);


// chiedere all'utente "inserisci una parola"
 const parola = (prompt('Inserisci una parola'));
// creare un funziona affinchè la parola che ha scritto l'utente venga messa al contrario
 function palindromo (word){
 
    let reverse = '';
    
    for (let i = word.length -1; i >= 0; i-- ){

        reverse += word[i];
    }
// se la parola e palindromo va bene, altrimenti non è palindromo
    if(reverse == word){
        console.log('è palindromo');
    }
    else{
        console.log("non è palindormo");
    }
}
//prendre nome funzione con (costante della domanda fatta all'utente )
palindromo(parola);