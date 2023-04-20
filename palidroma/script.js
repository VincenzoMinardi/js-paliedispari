
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

