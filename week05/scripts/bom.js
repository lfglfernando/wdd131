// Initialize chaptersArray with either the result of getChapterList() or an empty array
let chaptersArray = getChapterList() || [];

// Function to display a chapter item in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // Assume CSS rule .delete{width:fit-content;} exists
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Remove the chapter from the array and localStorage
        input.focus(); //Set focus back to the input
    });
}

//Function to update localStorage with the current chaptersArray
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

//Function to retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to remove a chapter from chaptersArray and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, -1); //Remove the '❌' character
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); //Update localStorage with the new array
}

// Display the initial list of the chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#submit');
    const list = document.querySelector('#list');

    button.addEventListener('click', () => {
        //verificar que la entrada no este vacia
        if (input.value.trim() !== '') {
            //crear un nuevo elemento li
            displayList(input.value);
            chaptersArray.push(input.value) // Add the chapter to the array
            setChapterList(); //Update localStorage
            input.value = ''; // Clear the input
            input.focus(); //Set focus back to the input

        }
    });
});



