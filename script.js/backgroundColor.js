const colors = [
    'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'brown',
    'gray', 'silver', 'gold', 'beige', 'ivory', 'indigo', 'violet', 'navy', 'maroon', 'teal',
    'olive', 'turquoise', 'orchid', 'salmon', 'tomato', 'crimson', 'plum', 'chocolate', 'coral',
    'peach', 'mintcream', 'seashell', 'snow', 'azure', 'lemonchiffon', 'mistyrose', 'lavender',
    'floralwhite', 'aliceblue', 'antiquewhite', 'papayawhip', 'blanchedalmond', 'bisque', 'burlywood',
    'chartreuse', 'cherry', 'chocolate', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen'
];

let currentColorIndex = 0;

document.getElementById('theme-color-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
