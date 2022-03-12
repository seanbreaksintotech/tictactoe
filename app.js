

// selecting each box div and converting into an array 
let gameBoxes =  Array.from (document.querySelectorAll('.box'));
let restartButton = document.querySelector('.button')
//player selection 

let playerOne = "X"




// fills player selection in box along with restart function that makes div empty again
gameBoxes.forEach(function(box){
    box.addEventListener('click',()=>{

        box.innerText = playerOne
        playerOne = playerOne == "X" ? "O" : "X"

        restartButton.addEventListener('click', ()=>{
            box.innerText = " "
        })

        

        
    
    })

})



