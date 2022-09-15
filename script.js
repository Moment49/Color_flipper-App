//A program that flips colors at a random

let body = document.querySelector('body');
let span = document.querySelector('span')
//Get the button from the DOM
const btn = document.querySelector('button');
function getColor(){
    //Generate a random color from the array
    let random_color = getRandomColor();

    //DOM changes
    body.style.backgroundColor = random_color;
    span.textContent = random_color;
    span.style.color = random_color;
    return console.log(random_color); 
}

function getRandomColor(){
     //Store colors in an array
    const colors = ['red','blue','green', 'purple', 'navy', 'orange', 'gold', 'goldenrod'];
    return colors[Math.floor(Math.random()*colors.length)]
}
//Call an event litsener on the button that will trigger a click event and which will take a callback ()
btn.addEventListener('click', getColor)




