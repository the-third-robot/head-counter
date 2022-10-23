const enterButton = document.getElementById('enter-button')
const resetButton = document.getElementById('reset-button')
const exitButton = document.getElementById('exit-button')

const number = document.getElementById('add-number')
let count = 0
function enterCount(){
    count++ 
    number.innerText = count
}
function exitCount(){
    
    if (count == 0){
        number.innerText = 0 
    }else{
        count--
    number.innerText = count
    }
}
function resetClick(){
    count = 0
    number.innerText = count
    
}
enterButton.addEventListener('click', enterCount)
exitButton.addEventListener('click', exitCount)
resetButton.addEventListener('click', resetClick)