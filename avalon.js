let btn1 = document.getElementById("button1");
let btn1r = document.getElementById("button1r");
let btn2 = document.querySelector('.button2')
let btn2r = document.querySelector('.button2r')
let totalCost = document.querySelector('.total');
let cost = 43000

// Button parameters

btn1r.disabled = true;

btn1.addEventListener("click", function(){
    cost += 300;
    btn1r.disabled = false
    btn1.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn1r.addEventListener("click", function(){
    cost -= 300;   
    btn1.disabled = false
    btn1r.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn2r.disabled = true;

btn2.addEventListener("click", function(){
    cost += 1200;
    btn2r.disabled = false
    btn2.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn2r.addEventListener("click", function(){
    cost -= 1200;   
    btn2.disabled = false
    btn2r.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});