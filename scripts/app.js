"use strict";

window.addEventListener('load', ()=>{
    const form = document.querySelector("form");

    form.classList.remove('no-widget');
    form.classList.add('widget');
});

///let data = textBox.value;
//console.log("data:", data);

// textBox.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("Hi", e.data);
//     let str = [];
//     str.push(e.data);
//     console.log("str", str);
//     return str;
// });

document.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Submit eventListener:", event.target);

});

function notebox() {
    console.log("notebox function");
};


// console.log("textBox Value:", textBox.value)

// textBox.addEventListener("onchange", (e)=>{

// });

//let note = textBox.input;

//console.log("note:", note);

/*
const formBanner = document.querySelector("div");

formBanner.textContent = "Hello formers";


let listArray = document.getElementById("listArray");

function listItems(){
    const
}

*/

