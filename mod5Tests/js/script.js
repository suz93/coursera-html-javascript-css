// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello(event) {
    var name =  document.getElementById("name").value;
    var message = "<h2>Hello " + name + ' !</h2>';

    document.getElementById("content").innerHTML = message;

    if (name === "student"){
        var title = document.querySelector("#title").textContent;
        title += " & loving it";
        document.querySelector("#title").textContent = title;

    }
}

// document.querySelector("button").addEventListener('click',sayHello);

// document.addEventListener('DOMContentLoaded', 
//     function (event){

//     })

// AJAX