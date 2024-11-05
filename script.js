var batteries = document.querySelectorAll('.battery');
//function to handle click event
function toggleBattery(battery) {
    //toglle height and color
    if (battery.classList.contains('clicked')) {
        battery.style.height = '100px'; //reset height 
        battery.classList.remove('clicked');
    }
    else {
        battery.style.height = '120px'; //increase height on click
        battery.classList.add('clicked');
    }
    //change color based on battery  id and click status
    switch (battery.id) {
        case 'battery-full':
            battery.style.backgroundColor = battery.classList.contains('clicked') ? '#006400' : 'green'; //dark green on click
            break;
        case 'battery-charging':
            battery.style.backgroundColor = battery.classList.contains('clicked') ? '#e6b800' : '#ffd700'; // Dark yellow on click
            break;
        case 'battery-empty':
            battery.style.backgroundColor = battery.classList.contains('clicked') ? '#b71c1c' : '#f44336'; // Dark red on click
            break;
    }
}
//add click event listener tob each battery 
batteries.forEach(function (battery) {
    battery.addEventListener('click', function () { return toggleBattery(battery); });
});
