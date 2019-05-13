///<reference path="node_modules/@types/jquery/jquery.d.ts" />
$(document).ready(function () {
    var $cityList = $('#cityList');
    var $cityContent = $('#cityContent');
    // 1) make a call using the "fetch" method to the URL: 
    // hint: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch('http://api.openweathermap.org/data/2.5/find?lat=-31&lon=115&cnt=10&appid=81f82b18f84330242679a2cc0041a426')
        .then(function (response) {
        return response.json();
    })
        .then(function (myJson) {
        console.log(myJson);
        // 2a) iterate over the returned results in myJson.list
        //     create a new 'li' element for each result
        //     insert the new elements into the $cityList ('ul') element
        // hint1: forEach
        // hint2: <HTMLLIElement>document.createElement('li')
        // hint3: jquery append 
        myJson.list.forEach(function (element) {
            var li = document.createElement('li'); // make sure you're castin to the most logical type
            $cityList.append(li);
            console.log(element);
            // 2b) create a new 'a' tag element and insert it into the new 'li' element
            var a = document.createElement('a');
            li.append(a);
            $cityList.append(li);
            // 2c) get a jquery reference to the new 'a' element
            // hint: let $a = $(a)
            var $a = $(a);
            // 2d) create an onCityClick event handler and set this as the click event on the new $a variable
            //     set the text inside the $a variable (the jquery 'a' tag), to the name of the city
            // hint1: .click
            // hint2: .text
            var onCityClick = function (evt) {
                var coordsData = $(evt.currentTarget).data('coord');
                var coords = JSON.parse(coordsData);
            };
            $a.click(onCityClick);
            $a.text(element.name);
            // 2e) set the data attribute of the $a variable to the JSON serialised coords
            // hint1: .data
            // hint2: JSON.stringify
            // reading: https://www.w3schools.com/tags/att_global_data.asp
            $a.data('coord', JSON.stringify(element.coord));
        });
    });
});
//# sourceMappingURL=main.js.map