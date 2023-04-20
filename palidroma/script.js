const parola = (prompt('Inserisci una parola'));

function palindromo(word){

    let parolaReverse = word.split('').reverse().join('');

    if( parolaReverse == word){
       console.log('è palindormo')
    }

    else{
        console.log('non è palindromo')
    }
};

palindromo(parola);





































// function parolaInversa (word){
//    for (let i = 0; i < word.length; i--){
// }

// }



// function confrontoParola (word){
    
//     if (word == parolaInversa){
//         return true
//     }

//     else{
//         return false 
//      }   
// }


//  let result = confrontoParola (word)

//  if(result == true){
//      console.log('è palindroma ')
//  }


//  else{
//     console.log ('non è palindroma')
// }


