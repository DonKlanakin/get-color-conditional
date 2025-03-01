let input = prompt("fill color");
let p = document.getElementsByTagName("p")[0];

if ((input === "red") || (input === "yellow") || (input === "green")) {
    p.style.color = input;
    p.innerHTML = input;
};