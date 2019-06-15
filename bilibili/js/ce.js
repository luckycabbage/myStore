
var clickbar = $('#pop'),
    buttonOn = $('#portrait'),
    buttonOut = $('#btn');

function showClickbar() {
    clickbar.animate({
        'left': 0
    });
    buttonOut.fadeIn();
}

function hideClickbar() {
    clickbar.animate({
        'left': -clickbar.width()
    });
    buttonOut.fadeOut();
    buttonOn.fadeIn();
}

buttonOn.on('click', showClickbar)
buttonOut.on('click', hideClickbar)