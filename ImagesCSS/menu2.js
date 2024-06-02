var json = [
     {
        title: "Comics 1",
        link: "https://jazz-dude.com/Yonkomas/Yonkoma%20Chapter%201.html"
    },
     {
        title: "Comics 2",
        link: "https://jazz-dude.com/Yonkomas/chapter2.html"
    },
   
]

function makeUL(json) {
    // Create the list element:
    var ul = document.createElement("ul");

    json.forEach((x) => {
        var li = document.createElement("li");
        var a = document.createElement('a');

        a.textContent = x.title;
        a.href = x.link;
    
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Finally, return the constructed list:
    return ul;
}

// Add the contents of json to #Menu:
document.getElementById("Menu").appendChild(makeUL(json));
