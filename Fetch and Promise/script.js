let geocoder;
let map;

window.onload = function () {
    let button = document.querySelector(".search_for_people");
    button.addEventListener('click', processData);
}

function initMap() {
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: 'terrain'
    });
}

function getData () {
    return fetch('https://randomuser.me/api/?results=15')
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("error");
        }
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        //an error occured
        console.log("error" + error);
    })
}

async function processData () {
    // process result code goes here
    let responseFromServer = await getData();
    let users = responseFromServer.results;

    let list = document.createElement('ul');
    let listContainer = document.querySelector('.search_results');
    listContainer.appendChild(list);

    let usersDOM;

    for(let counter = 0; counter < users.length; counter++) {
        let user = users[counter];

        usersDOM += `
            <li>
                <div class = "left_card">
                    <img src='${user.picture.thumbnail}'/>
                </div>
                <div class = "right_card">
                    <span>${user.name.first} ${user.name.last}</span>
                    <span>${user.email}</span>
                    <span>${user.location.street}</span>
                    <span>${user.location.postcode}</span>
                </div>
            </li>
            `;

            let address = user.location.street;
            geocoder.geocode( {'address' : address}, function (results, status){
                if (status == 'OK') {
                    let marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
    }
    console.log(users[0]);

    list.innerHTML = usersDOM;
}