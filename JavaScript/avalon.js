
let btn1 = document.getElementById("button1");
let testing = document.getElementById("test");
let btn1r = document.getElementById("button1r");
let btn2 = document.getElementById("button2");
let btn2r = document.getElementById("button2r");
let btn3 = document.getElementById("button3");
let btn3r = document.getElementById("button3r");
let totalBtn = document.getElementById("totalBtn")
let totalCost = document.querySelector('.total');


cost = 43000


// Button parameters

btn1r.disabled = true;

btn1.addEventListener("click", function(){
    cost += 300;
    btn1r.disabled = false;
    btn1.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn1r.addEventListener("click", function(){
    cost -= 300;   
    btn1.disabled = false;
    btn1r.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});



btn2r.disabled = true;

btn2.addEventListener("click", function(){
    cost += 1200;
    btn2r.disabled = false;
    btn2.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn2r.addEventListener("click", function(){
    cost -= 1200;   
    btn2.disabled = false;
    btn2r.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});



btn3r.disabled = true;

btn3.addEventListener("click", function(){
    cost += 1500;
    btn3r.disabled = false;
    btn3.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

btn3r.addEventListener("click", function(){
    cost -= 1500;   
    btn3.disabled = false;
    btn3r.disabled = true;
    totalCost.textContent = "$" + cost.toLocaleString("en-US");
});

//Store price set by customer in a cookie

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

totalBtn.addEventListener("click", function(){
    setCookie("cookie", cost, 1);
});
