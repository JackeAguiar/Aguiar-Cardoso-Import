import contacts from "../JS/contacts";

const main = document.querySelector("#main");

const init = function ()  {
    main.innerHTML = " ";
    switch (window.location.hash) {
        case "#contacts":
            main.appendChild(contacts())
            break;
        case "#login":  
            main.appendChild(login())
            break;
        case "#about":
            main.appendChild(about())
            break;
        default:
            main.appendChild(home())
    }
    
}

window.addEventListener("load", () => {
    init()
})

window.addEventListener("Hashchange", () => {
    init()
})