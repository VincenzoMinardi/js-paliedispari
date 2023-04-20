const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

min = 1
max = 5

function numberComputer (min, max){
    
    let  numberPcRandom  = Math.floor(Math.random() * (max - min) ) + min;

    if(numberPcRandom > userNumber){
        console.log ("Ha vinto l'utente")
    }

    else if(userNumber > numberPcRandom){
        
        console.log('Ha vinto il computer')
    }
}

numberComputer (userNumber)

    