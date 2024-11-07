const dancing = document.getElementById("js--dancing");
const pixelify = document.getElementById('js--pixelify');
const tilt = document.getElementById('js--tilt');
const input = document.getElementById('js--input');

input.oninput = function(event){
    dancing.innerText = event.target.value;
    pixelify.innerText = event.target.value;
    tilt.innerText = event.target.value;
}

const hearts = document.getElementsByClassName("heart");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}

const toggle = document.getElementById("toggle");
const body = document.getElementById("js--body");
const header = document.getElementById("js--header");
const showcase = document.getElementById("js--showcase");

const h3s = document.getElementsByClassName("showcase__font");

toggle.checked = false;
toggle.onchange = function(){
    if(toggle.checked === true){
        body.classList = "body darkmode__background";
        header.classList = "header darkmode__header";
        showcase.classList = "showcase darkmode__showcase";
        input.classList = "showcase__input darkmode__input";
        for(let i =0; i < h3s.length; i++){
            h3s[i].classList = "showcase__font darkmode__h3";
        }
        dancing.classList = "showcase__output showcase__output--cursive darkmode__h2";
        pixelify.classList = "showcase__output showcase__output--pixelify darkmode__h2";
        tilt.classList = "showcase__output showcase__output--tilt darkmode__h2";
        return;
    }
    body.classList = "body ";
    header.classList = "header";
    showcase.classList= "showcase";
    input.classList = "showcase__input";
    for(let i =0; i < h3s.length; i++){
        h3s[i].classList = "showcase__font";
    }
    dancing.classList = "showcase__output showcase__output--cursive";
        pixelify.classList = "showcase__output showcase__output--pixelify";
        tilt.classList = "showcase__output showcase__output--tilt";
}