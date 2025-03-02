let input = null;
let p = document.getElementsByTagName("p")[0];

setTimeout(() => {
    input = prompt("fill color");
    if ((input === "red") || (input === "yellow") || (input === "green")) {
        p.style.color = input;
        p.innerHTML = input;
        console.log(input);
    };
}, 400);