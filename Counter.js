const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const resetbtn = document.getElementById("resetbtn");
const display_value = document.getElementById("display_value");


// for decrement button
dec.addEventListener("click", () =>{
    const value = Number(display_value.innerText);
    if (value > 0) {
        display_value.innerText = value - 1;
    } else {
        alert("negative value not allowed");
    }
});

// for increment button
inc.addEventListener("click", () =>{
    const value = Number(display_value.innerText);
    if (value >= 10) {
        alert("10+ value aren not allowed")
    } else {
       display_value.innerText = value +1 ; 
    }
});


// for reset btn
resetbtn.addEventListener("click", ()=>{
    display_value.innerText = 0;
});
