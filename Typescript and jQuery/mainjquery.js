///<reference path="node_modules/@types/jquery/jquery.d.ts" />
$(document).ready(function () {
    var randomColor = function () {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
    $('div').each(function (idx, elem) {
        $(elem).css('background-color', randomColor());
    });
});
