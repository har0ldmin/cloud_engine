let mainTexts = document.querySelectorAll('.home-main-text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    mainTexts.forEach(function(mainText) {
        if(value > 200){
            mainText.style.animation = 'disappear 1s ease-out forwards';
        }
        else{
            mainText.style.animation = 'slide 1s ease-out forwards';
        }
    });
});


// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


// Initialize glightbox
const lightbox = GLightbox();

function closeModal() {
   lightbox.close();
}
// Wait until the DOM has loaded before initializing the lightbox
window.addEventListener('load', function() {
    const lightbox = GLightbox({
       touchNavigation: true,
       loop: true,
       closeOnOutsideClick: true
    });
 });