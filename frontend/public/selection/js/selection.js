let mainText = document.querySelectorAll('h4');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    console.log("scorllY", value);
    if(value <= 800){
        mainText.forEach(function(mainText) {
            mainText.style.animation = 'disappeared 1s ease-out forwards';
        });
    }
    if(value > 800 && value <= 1590){
        mainText.forEach(function(mainText) {
            mainText.style.animation = 'slide-in 1s ease-out forwards';
        });
    }
    if(value > 1800){
        mainText.forEach(function(mainText) {
            mainText.style.animation = 'disappeared 1s ease-out forwards';
        });
    }
});
