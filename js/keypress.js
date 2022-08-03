var el;

function  charCount(e){
    var textEtered,charDisplay,counter,lastkey;
    textEtered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180-(textEtered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ACII code:' + e.keyCode;
    }
    el = document.getElementById('message');
el.addEventListener('keyup',charCount,false);