const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red.";
redPara.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3.";
blueH3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
div.style.padding = "10px";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";

const divPara = document.createElement("p");
divPara.textContent = "I'm in a div";


div.appendChild(divH1);
div.appendChild(divPara);

container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(div);