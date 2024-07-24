$('.owl-carousel').owlCarousel({
    loop: false,
    center: true,
    items: 3,
    margin: 0,
    nav:true,
    autoplay: false,
    dots:true,
    autoplayTimeout: 1000,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
            },
            768: {
            items: 2
            },
            1170: {
            items: 3
        }
    }
});