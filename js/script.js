document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    
    });
    
    let btnProduct = document.querySelector('#btn-products'),
        products = document.querySelector('.main-products-block-content-ul');
    
    btnProduct.addEventListener('click', () => {
        if (products.classList.contains('active-products')) {
            products.classList.remove('active-products');
        } else {
            products.classList.add('active-products');
        }

    });


});
