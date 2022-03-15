

// selecting each box div and converting into an array 
let gameBoxes =  Array.from (document.querySelectorAll('.box'));
let restartButton = document.querySelector('.button')



//player selection 

let playerOne = "X"
let playerTwo = "O" 




// all array combinations that equal a win 
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]







// fills player selection in box along with restart function that makes div empty again
gameBoxes.forEach(function(box){
    box.addEventListener('click',e =>{
        e.target.textContent = playerTwo;
        playerTwo = playerTwo === "O" ? "X" : "O";
        gameWin()
    
    }, {once : true})
    
    restartButton.addEventListener('click', ()=>{
        window.location.reload()
    })


})



//checks for 3 of the same player in a row based on winningCombos
function gameWin(){
for (const combos of winningCombos){
   if ( combos.every(idx => gameBoxes [idx].innerText == playerOne )){
       alert ("winner")
   }

  if ( combos.every(idx => gameBoxes [idx].innerText == playerTwo )){
    alert(`${playerTwo} is the winner` )
   }
   
   

}
    
}












