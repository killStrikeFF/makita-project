window.addEventListener('DOMContentLoaded', () => {

    /* banner slider */
    var mySwiper = new Swiper ('.swiper-container-baner', {
        loop: true,
    
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    
    });


    /* fade catalog products */
    let btnProduct = document.querySelector('#btn-products'),
        products = document.querySelector('.main-products-block-content-ul');
    
    btnProduct.addEventListener('click', () => {
        if (products.classList.contains('active-products')) {
            products.classList.remove('active-products');
        } else {
            products.classList.add('active-products');
        }

    });


    /* main plus slider*/
    let tab = document.querySelectorAll('.info-header-tab'),        
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].style.color = '#525151';
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    tab[i].style.color = '#fa3f3e';
                    break;
                }
            }
        }
        
    });


    /* slider products */
    let widthScreen = document.documentElement.clientWidth,
        colOfslides = 4;

    if (widthScreen > 1100 ) {
        colOfslides = 4
    } else if (widthScreen > 700 && widthScreen < 1100) {
        colOfslides = 3
    } else if (widthScreen > 0 && widthScreen < 700) {
        colOfslides = 2
    }

    var mySwiper = new Swiper ('.swiper-container-products', {
        loop: true,
        slidesPerView: colOfslides,
        spaceBetween: 10,

        navigation: {
          nextEl: '.products-button-next',
          prevEl: '.products-button-prev',
        },
      })

});
