var generatorButton = document.getElementById('color_generator');
var randomColor = document.getElementById('color_area');
var generatedColor = [
    'red', 'green', 'blue', 'yellow', 'pink', 
    'purple', 'black', 'brown', 'orange', 'teal', 'skyblue', 'aquamarine', 'navy', 'lightgreen',
    '#32CD32', '#f7a888', '#d0abf7', '#4c5d85', '#8cab6f', '#e310bc', '#463387', '#66d9a9', '#e35f00',
    '#543b28', '#e6aa3c', '#ffce73', '#fcff9c', '#1c6b09', '#dcff9c',
];

generatorButton.addEventListener('click', pickColor);

function pickColor() { 
var colorIndex= Math.floor(Math.random() * generatedColor.length);
randomColor.style.backgroundColor = generatedColor[colorIndex];
}