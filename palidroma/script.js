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

 const parola = (prompt('Inserisci una parola'));

 function palindromo (word){
 
    let reverse = '';
    
    for (let i = word.length -1; i >= 0; i-- ){

        reverse += word[i];
    }

    if(reverse == word){
        console.log('è palindromo');
    }
    else{
        console.log("non è palindormo");
    }
}

palindromo(parola);