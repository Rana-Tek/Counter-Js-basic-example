const btns = document.querySelectorAll(".btn")
let span = document.querySelector("span")
let counter=0;

btns.forEach((e) =>{ 

e.addEventListener("click", (event) => {

let clckButon = event.currentTarget.classList

if (clckButon.contains("btn-container--decrease")){
     counter--;
}
else if(clckButon.contains("btn-container--increase")){
    counter++;
}else {
    counter = 0;
}

if(counter > 0){
    span.style.color = "green"
} 
if(counter < 0){
    span.style.color = "magenta"
} 
if (counter === 0){
    span.style.color = "red"
}

span.innerText = counter;


})
})