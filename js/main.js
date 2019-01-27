let mobileViewOpen = document.getElementById('mobile__view_btn');
let mobileView = document.getElementById('mobile__view');
let mobileViewClose = document.getElementById('close__button_mob');

mobileViewOpen.addEventListener('click', function() {
     mobileView.style.display = "flex";
});

mobileViewClose.addEventListener('click', function(){
    mobileView.style.display = "none";
})


$(document).ready(()=>{
    $('.team-acco__item').on('click', (e) => {
        e.preventDefault();
        let itemA = $(e.currentTarget);
        let containerUl = itemA.closest('.team-acco');
        let contentDiv = $('.team-acco__content', itemA);
        let otherContent = $('.team-acco__content', containerUl);
        
        if(!itemA.hasClass('team-acco__active')) {
        itemA.toggleClass('team-acco__active').siblings().removeClass('team-acco__active');

        otherContent.css ({
            'height' : 0
        })
        contentDiv.css({
            'height' : '100px'
        })
        } else {
            itemA.removeClass('team-acco__active')
            contentDiv.css({
                height : 0
            })
        }
        
    })
    $('.menu-acco__item').on('click', (e) => {
        let push = $(e.currentTarget)
            push.toggleClass('menu-acco-active').siblings().removeClass('menu-acco-active');
    })
    $('.burger__content').slick({
        adaptiveHeight: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
})

