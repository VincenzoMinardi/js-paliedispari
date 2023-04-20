let word
let contraryWord

for (let i = 0; i < 1; i++ ){
    word = (prompt('Inserisci una parola'))
    contraryWord = (prompt('Inserisci la parola però al contrario'))

    if (word == contraryWord){
        console.log('è palindroma ')
    }

    else if (contraryWord !== word){
        console.log ('non è palindroma')
    }
}


