
let btn = document.getElementById("upper-btn");


let ip = document.getElementById("name-input")

let user = document.getElementById("user")


 ip.addEventListener("input" , function() {

    ip.value = ip.value.toUpperCase();
 })

btn.addEventListener("click", (e) => {


    console.log(e.target);


    console.log(ip.outerHTML)

    console.log(user.outerHTML)


    user.textContent = ip.value.toUpperCase();

    ip.value = ""

});