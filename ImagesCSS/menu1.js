var json = [
     {
        title: "Art from Jan to April 2024",
        link: "https://feuer-in-soho.art/Portfolio/2024-jan-to-april.html"
    },
     {
        title: "Art from May to August 2024",
        link: "https://feuer-in-soho.art/Portfolio/2024-5-8.html"
    },
     {
        title: "Art from September to December 2024",
        link: "https://feuer-in-soho.art/Portfolio/2024-9-12.html"
    }, 
    {
        title: "Old art up to 12.2023",
        link: "https://feuer-in-soho.art/Portfolio/old-to-12-2023.html"
    },
    {
        title: "Some doodles",
        link: "https://feuer-in-soho.art/Portfolio/doodles.html"
    },
    {
        title: "Isopodtober 2022",
        link: "https://feuer-in-soho.art/Portfolio/isopodtober2022.html"
    },
    {
        title: "Isopodtober 2023",
        link: "https://feuer-in-soho.art/Portfolio/isopodtober2023.html"
    },
    {
        title: "Sunday Comics",
        link: "https://feuer-in-soho.art/Portfolio/SundayC.html"
    },
    {
        title: "Commissions",
        link: "https://feuer-in-soho.art/Comissions%20page.html"
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

    
