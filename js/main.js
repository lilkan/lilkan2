let mobileViewOpen = document.getElementById('mobile__view_btn');
let mobileView = document.getElementById('mobile__view');
let mobileViewClose = document.getElementById('close__button_mob');

console.log (mobileView);
console.log (mobileViewOpen);
console.log (mobileViewClose);

mobileViewOpen.addEventListener('click', function() {
     mobileView.style.display = "flex";
}
);

mobileViewClose.addEventListener('click', function(){
    mobileView.style.display = "none";

})
