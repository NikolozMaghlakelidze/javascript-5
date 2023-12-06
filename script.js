console.log("hello world");


let div1 = document.getElementById("div1");

let wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.style.border = "1px solid red"

let img = document.createElement("img");
img.src = "th.jpg";
img.alt = "image";
img.width = 700;

let h2 = document.createElement("h2");
h2.className = "title";
h2.textContent = "image title";
h2.style.color = "red";
h2.style.fontSize = "30px";

wrapper.appendChild(img);
wrapper.appendChild(h2);
div1.appendChild(wrapper);


// 2
document.addEventListener('DOMContentLoaded', function () {
    let divs = document.querySelectorAll('.div3');

    divs.forEach(function (div) {
        let paragraphElement = document.createElement('p');
        paragraphElement.className = 'text';
        paragraphElement.textContent = 'hello';

        div.appendChild(paragraphElement);
    });
});


// 3

let divElement = document.createElement('div');
divElement.className = 'box';


let googlelink = document.createElement('a');
googlelink.className = 'link';
googlelink.href = 'https://google.com';
googlelink.target = '_blank';
googlelink.textContent = 'google link';
googlelink.style.textDecoration = "none"
googlelink.style.color = "red"

divElement.appendChild(googlelink);
googlelink.className = 'newclass';


document.body.appendChild(divElement);