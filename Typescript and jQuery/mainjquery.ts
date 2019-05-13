///<reference path="node_modules/@types/jquery/jquery.d.ts" />

$(document).ready(() => { //global variable, want to decorate whole document object, callback function when ready event happens

    const randomColor = () : string => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    $('div').each((idx, elem) => {
        $(elem).css('background-color', randomColor())
    })

})