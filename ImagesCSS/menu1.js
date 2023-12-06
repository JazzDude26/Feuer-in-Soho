var json = [
    {
        title: "jazz dude",
        link: "https://jazz-dude.com/Portfolio/mars.html"
    },
    {
        title: "uuupah",
        link: "https://uuupah.neocities.org/"
    },
    {
        title: "gusbus",
        link: "https://gusbus.space/"
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

    
