// Query Selectors

//1.
function spanReSize() {

    let messWithMe = document.querySelector('.mess-with-me'); //Changes the "span" with the class mess-with-me to a font size of 40px at the first iteration of the class.
    messWithMe.style.fontSize = "40px"; 

}

spanReSize();

//2.
function changeParagraphColor() {

    let newParagraph = document.querySelector('p.mess-with-me');
    newParagraph.style.backgroundColor = 'green';

}   

changeParagraphColor();

//3.
function hideImage() {

    let hiddenImage = document.querySelector('#hide-me');
    hiddenImage.style.visibility = 'hidden';

}

hideImage();

//4.
function changeImageDimensions() {

    let newDimensions = document.querySelector('#triceratops');
    newDimensions.style.width = "324px";

}

changeImageDimensions();

// Event Listeners

//1.
let orangeText = document.querySelector('.mess-with-me');

orangeText.addEventListener('click', function() {

    orangeText.style.color = 'orange';

})

//2.
let redBorder = document.querySelector('#triceratops');

redBorder.addEventListener('click', function() {

    // redBorder.style.border = 'solid';
    // redBorder.style.color = 'red';

    //***OR*** 
    redBorder.style.border = '2px solid red'
 
})

//3.
let  transparent = document.querySelector('#feathers');

feathers.addEventListener('click', function() {

    feathers.style.opacity = '.5';

})

//4.
let toggler = document.querySelector('#toggle');
let row = document.querySelector('#row')

// toggler.addEventListener('click', function() {

//     row.style.backgroundColor = 'blue';

// })

//5.
let getBigOnHover = document.querySelector('#biggify');

getBigOnHover.addEventListener('mouseenter', function() {

    getBigOnHover.style.width = '200px';

})

//Stretch Goals

//1.
let onOff = false;
let toggleBackgroundColor = function() {

    if (onOff === false) {
        row.style.backgroundColor = 'gray';
        onOff = true; 
    } else {
        row.style.backgroundColor = 'white';
        onOff = false;
    }

}

toggler.addEventListener('click', toggleBackgroundColor);

2.
getBigOnHover.addEventListener('mouseleave', function() {

    getBigOnHover.style.width = '162px'

})

