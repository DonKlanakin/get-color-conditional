let input = null;

setTimeout(() => {
    input = prompt("fill color");
}, 2000);

let p = document.getElementsByTagName("p")[0];

if ((input === "red") || (input === "yellow") || (input === "green")) {
    p.style.color = input;
    p.innerHTML = input;
    console.log(input);
};