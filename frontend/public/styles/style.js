let mainText = document.querySelector('.main-text, .home-main-text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    

    if(value > 200){
        mainText.style.animation = 'disappear 1s ease-out forwards';
    }
    else{
        mainText.style.animation = 'slide 1s ease-out forwards';
    }
});