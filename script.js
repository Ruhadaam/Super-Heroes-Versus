addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "superHeroes.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.id;
                option.textContent = element.name;
                leftSelect.appendChild(option.cloneNode(true));
                rightSelect.appendChild(option.cloneNode(true));
            });


        }
    }
    xhr.send();


});


API_URL = 'https://www.superheroapi.com/api.php/7368841443180507/search/'


const req = new Request();


let profile = document.querySelectorAll(".profile-pic")[0];
let button = document.querySelector(".btn");
let leftSelect = document.querySelector("#leftSelect");
let rightSelect = document.querySelector("#rightSelect");




button.addEventListener("click", async () => {
    //SELECT HERO
    const selectedHeroLeft = leftSelect.value;
    const selectedHeroRight = rightSelect.value;
    const responseRight = await req.get(`https://www.superheroapi.com/api.php/${WRITE YOUR ACCESS TOKEN}/${selectedHeroRight}`);
    const responseLeft = await req.get(`https://www.superheroapi.com/api.php/${WRITE YOUR ACCESS TOKEN}/${selectedHeroLeft}`);


    //SELECTED HERO IMAGE CHANGE
    let leftImage = document.querySelector(".left-pic");
    let rightImage = document.querySelector(".right-pic");

    leftImage.src = responseLeft.image.url;
    rightImage.src = responseRight.image.url;

    //SELECTED HERO NAME CHANGE
    let leftName = document.querySelector(".left-name");
    let rightName = document.querySelector(".right-name");

    leftName.innerHTML = responseLeft.name;
    rightName.innerHTML = responseRight.name;


    try {
        //SELECT HTML TAGS
        const leftElements = {
            power: document.querySelector(".leftPower"),
            strength: document.querySelector(".leftstrength"),
            speed: document.querySelector(".leftSpeed"),
            durability: document.querySelector(".leftDurability"),
            intelligence: document.querySelector(".leftIntelligence"),
            combat: document.querySelector(".leftCombat"),
        };

        const rightElements = {
            power: document.querySelector(".rightPower"),
            strength: document.querySelector(".rightstrength"),
            speed: document.querySelector(".rightSpeed"),
            durability: document.querySelector(".rightDurability"),
            intelligence: document.querySelector(".rightIntelligence"),
            combat: document.querySelector(".rightCombat"),
        };


        //SET STATS
        let leftStats = responseLeft.powerstats;
        let rightStats = responseRight.powerstats;

        function updateProgressBar(element, stat) {
            if (stat === "null") {
                element.style.width = "50%";
                element.innerHTML = "unknown value";
            } else {
                element.style.width = stat + "%";
                element.innerHTML = stat + "%";
            }
        }
        //SET PROGRESSBAR
        for (let key in leftElements) {
            if (leftElements.hasOwnProperty(key)) {
                updateProgressBar(leftElements[key], leftStats[key.toLowerCase()]);
            }
        }

        // Sağ karakterin ilerleme çubuklarını güncelleyin
        for (let key in rightElements) {
            if (rightElements.hasOwnProperty(key)) {
                updateProgressBar(rightElements[key], rightStats[key.toLowerCase()]);
            }
        }

    }
    catch (err) {
        console.error(err);
    }
});

