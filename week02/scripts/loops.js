//loops.js

myInfo = {
    name: "Brother Fernando",
    photo: "images/fernando-profile.jpg",
    favoritesFoods: ["Sushi", "Carne Asada", "Aguachile", "Enchiladas", "Ceviche"],
    hobbies: ["Basketball", "Soccer", "FC2024"],
    placesLived: [
        {
            place: "Culiacan, SIN",
            length: "19 years",
        },
        {
            place: "Tampico, TAM",
            length: "2 years",
        },
        {
            place: "Provo, UT",
            length: "1 year",
        },
    ],
};

//activity 3 all together
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
//requires an food string
//returns that string embedded in HTML markup
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

//requires an place string
//return that string embedded in HTML markup
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoritesFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);

//.foreach
// const foodsElement = document.querySelector("#favorite-foods");

// function createNewLi(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood)
// }
// myInfo.favoritesFoods.forEach(createNewLi);

// with .map

// const foodsElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }
// //this function could also be written this way using a template literal:
// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }
// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // we need to flatten the array of strings into one big string.  .join does this.
// foodsElement.innerHTML = foodListElements.join('');
// //STEP 4: For Each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoritesFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoritesFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoritesFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoritesFoods[3];


// //STEP 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of a favorite-foods
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);


const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// //for loop 
for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

//forEach loop 
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

//for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

