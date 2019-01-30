// слайдер
const display = $('.maincontent');
const sections = $('.section');
let scrol = false;

// инициализация мобилок
const mobileDetect = new MobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile();

// установка active класса на крошки справа
const switchFixedMenu = sectionEq => {
    $('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active'); 
    }

// прокрутка секцийй
const perform = sectionEq => {
    if (scrol) return 
        scrol = true
        const position = (sectionEq * -100) + '%';
        display.css({'transform' : `translate(0, ${position})`,})
    sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
    setTimeout(() => {scrol = false;
    switchFixedMenu(sectionEq)}, 1300);
    }
// поиск активной секции
const definedSections = sections => {
    const active = sections.filter('.active');
    return {
        active: active,
        nexts: active.next(),
        prevs: active.prev(),
    }
}

const scrollToSection = direction => {
    const section = definedSections(sections);
    if (scrol) return;
    if(direction === 'up' && section.nexts.length) {
        perform(section.nexts.index())    } 

    if(direction === 'down' && section.prevs.length) {
        perform(section.prevs.index())    } 
}


// прокрутка слайдера
$('.wrapper').on({
    wheel : e => {
        const deltaY = e.originalEvent.deltaY;
        const section = definedSections(sections);
        
        if (deltaY > 0 && section.nexts.length) {
            perform(section.nexts.index())
        }
    
        if (deltaY < 0 && section.prevs.length) {
            perform(section.prevs.index())
        }
},

touchmove: e => {
    e.preventDefault()
}
});

// управление кнопками вверх и вниз
$(document).on('keydown', e =>{

    const section = definedSections(sections);
    if (scrol) return
    switch (e.keyCode) {
        case 40: //вверх
        if (!section.nexts.length) return;
        perform(section.nexts.index());
        break;

        case 38: //вниз
        if (!section.prevs.length) return;
        perform(section.prevs.index());
        break;
    }
});

// мобильное меню на JS
let mobileViewOpen = document.getElementById('mobile__view_btn');
let mobileView = document.getElementById('mobile__view');
let mobileViewClose = document.getElementById('close__button_mob');

mobileViewOpen.addEventListener('click', function() {
     mobileView.style.display = "flex";
});

mobileViewClose.addEventListener('click', function(){
    mobileView.style.display = "none";
})

// слайдеры и аккордеоны на jQuery
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
});


// слайдер на мобилки
if (isMobile) {
    $(window).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        scrollToSection(direction);
        }
    })
}
// прокрутка через навигацию
$('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));
    perform(sectionIndex);
});
