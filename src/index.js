document.addEventListener('DOMContentLoaded', () => {
    dogFetch();
    breedFetch();

})

function dogFetch() {
    let dogCon = document.querySelector("#dog-image-container")

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        object.message.forEach(function (dog) {
            let img = document.createElement("img");
            img.src = dog
            dogCon.appendChild(img)
        })
    });
}

function breedFetch() {
    let dogBreed = document.querySelector("#dog-breeds")
    let formVal = document.querySelector("#breed-dropdown")

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        for(let key in object.message) {
            
            let li = document.createElement("li");
            li.innerHTML = key
            dogBreed.appendChild(li)

            eventForChange(formVal, li, key, dogBreed);

            eventForClick(li);
        }
    })
}

function eventForChange(formVal, li, key, dogBreed) {
    formVal.addEventListener("change", function() {
        li.remove();
        if(key[0] === formVal.value){
            li.innerHTML = key
            dogBreed.appendChild(li)
            }
    })
}

function eventForClick(li) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    li.addEventListener("click", function(e) {
        e.target.style.color = "#" + randomColor;
    })
}