var json = [
     {
        title: "Old art up to 12.2023",
        link: "https://jazz-dude.com/Portfolio/2024-jan-to-april.html"
    },
    {
        title: "Old art up to 12.2023",
        link: "https://jazz-dude.com/Portfolio/old-to-12-2023.html"
    },
    {
        title: "Some doodles",
        link: "https://jazz-dude.com/Portfolio/doodles.html"
    },
    {
        title: "Isopodtober 2022",
        link: "https://jazz-dude.com/Portfolio/isopodtober2022.html"
    },
    {
        title: "Isopodtober 2023",
        link: "https://jazz-dude.com/Portfolio/isopodtober2023.html"
    },
    {
        title: "Sci-Fi Worldbuilding: Timeline",
        link: "https://jazz-dude.com/Portfolio/important-dates.html"

    },
    {
        title: "Sci-Fi Worldbuilding: Mars",
        link: "https://jazz-dude.com/Portfolio/mars.html"
    },
    {
        title: "Communal Worldbuilding Project",
        link: "https://jazz-dude.com/neighborhood.html"
    },
    {
        title: "Silly 4 Panel Comics",
        link: "https://jazz-dude.com/Yonkomas/Yonkoma%20Chapter%201.html"
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

    
