//Find cookie that was created in avalon.js

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function cookieValue() {
    let amount = getCookie('cookie');
    let formattedamount = Number(amount).toLocaleString("en-US")
    document.getElementById('amount').textContent = "$" + formattedamount;
}

//Call cookie when page is loaded.

window.onload = function() {
    cookieValue();
  };