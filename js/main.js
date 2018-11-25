let mobileViewOpen = document.getElementById('mobile__view_btn');
let mobileView = document.getElementById('mobile__view');
let mobileViewClose = document.getElementById('close__button_mob');

mobileViewOpen.addEventListener('click', function() {
     mobileView.style.display = "flex";
}
);

mobileViewClose.addEventListener('click', function(){
    mobileView.style.display = "none";

})


$(document).ready(()=>{
    $('.team-acco__item').on('click', (e) => {
        e.preventDefault();
        let psuh = $(e.currentTarget)
        psuh.toggleClass('team-acco__active');
    })
    $('.menu-acco__item').on('click', (e) => {
        let push = $(e.currentTarget)
        push.find('.menu-acco__content').toggleClass('menu-acco__content-active');
    })
})