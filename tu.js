const color = [0,1,2,3,4,5,6,7,8,9,];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    // get random number between 0 - 3 colors[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
