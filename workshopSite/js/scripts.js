// This is the javascript file, here we can make calculation and add interactivity
let standardNumberOfPortions = 4;
// Here we store all the objects which display the quantity needed
let elemListOfIngredients = document.querySelectorAll("dt");
// Here we write this objecs into the console, you can find the console with "ctrl+shift+i" or right click on the page and select inspect.
console.log(elemListOfIngredients);
// Here we initialize a new array
let listOfIngredients = [];
// We now fill this array with the numbers displayed
// To do this we loop through all the elements and get the innerHTML of this object
for (let index = 0; index < elemListOfIngredients.length; index++) {
    listOfIngredients[index] = elemListOfIngredients[index].innerHTML;
}
 
// This variable is used for the image slider
let picturePointer = 1;
// This command makes that every 1o second the function slide Image is called.
setInterval(slideImage, 10000);

// With this line we add a event to the input field.
// This makes that every time a key is pressed that the functions recalculateIngre is called.
document.getElementById("numOfPersons").addEventListener("keyup", recalculateIngre);

function recalculateIngre() {
    // With this line we store what the user typed into the input field
    let newNumberOfPortions = document.getElementById("numOfPersons").value;
    // Here we check if the field is empty or if the user typed in something that is Not a Number
    // If this is the case we won't continue and exit the function this is done with the return keyword.
    if (newNumberOfPortions == 0 || isNaN(newNumberOfPortions)) {
        return;
    }
    // Here we need all the things we set up at the beginning of the file. 
    // We write the new value we calculate into the objects of the Ingredientlist we got
    for (let index = 0; index < elemListOfIngredients.length; index++) {
        elemListOfIngredients[index].innerHTML = newNumberOfPortions / standardNumberOfPortions * listOfIngredients[index];
    }
    // Here we change the placeholder of the input field, that if you delete the number you typed in you still see what you have typed.
    document.getElementById("numOfPersons").placeholder = newNumberOfPortions;
}

// This is the function that gets called every 10 seconds
function slideImage() {
    // We increment the slider by one, meaning we change to the next picture
    picturePointer++;
    // We only have three images so if the slider is at the end (3) we loop back to 1
    if (picturePointer > 3) {
        picturePointer = 1;
    }
    // And here we finally change the image
    document.getElementById("background-image").style.backgroundImage = "url(img/Pizza_" + picturePointer + ".jpg)";
}
