$(document).ready(function(){

    // SLICK SLIDDER SETTINGS 
    $('.slider-section__wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_slide.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_slide.svg"></button>'
    });


    // TABS DESCRIPTION
    $('.catalog__tabswrapper').on('click', '.catalog__tab:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    // DESCRIPTION OF FUNCTION FOR BACKCONTENT OF ITEMS
    function itemLink(itemClass) {
        $(itemClass).each( function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__backcontent').eq(i).toggleClass('catalog-item__backcontent_active');
            })
        });
    }
    // CALLING THIS FUNCTION
    itemLink('.catalog-item__link');
    itemLink('.catalog-item__backlink');


    // MODAL WINDOW 
    $('[data-modal="consultation"]').on('click', function(e) {
        e.preventDefault();
        $('#modal-consultation').fadeIn();
    });
    $('.modal-consultation__close').on('click', function() {
        $('#modal-consultation, #modal-buy, #modal-thankyou').fadeOut();
    });
    $('.button_buy').on('click', function(e) {
        e.preventDefault();
        $('#modal-buy').fadeIn('fast');
    });

    $('.button_buy').each( function(i) {
        $(this).on('click', function() {
            $('#modal-buy .modal-consultation__subtitle').text($('.catalog-item__title').eq(i).text())
        })
    });


    // VALIDATION  FUNCTION
    function validateThis(selectorForm) {
        $(selectorForm).validate( {
            rules: {
                username: "required",
                usernumber: "required",
                useremail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                username: "Пожалуйста введите ваше имя!",
                usernumber: "Хммм, Чёт я не вижу номера",
                useremail: {
                    required: 'Давай вводи эту почту ну',
                    email: "Нормальную почту пожалуйста!"
                }
            }
        })
    };
    

    //CALLING THIS FUNCTION
    validateThis('#modal-consultation .modal-consultation form.form');
    validateThis('#modal-buy .modal-consultation form.form');
    validateThis('.consultation form.form');


    // MASK THE INPUT NUMBER
    $('[name="usernumber"]').mask("+7 (999) 999-9999");

    // SCRIPT FOR SENDING FORM ( AJAX )

    $('form.form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#modal-consultation, #modal-buy').fadeOut();
            $('#modal-thankyou').fadeIn('slow');

            $('form.form').trigger("reset");
        })
        return false
    });

    // SMOOTH SCROLLING
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});


    // ARROW APEARS WHEN SCROLL DOWN 
    $(window).scroll(function() {
        if ($(this).scrollTop() >1100 ) {
            $('.arrow-up').fadeIn('slow');
        } else {
            $('.arrow-up').fadeOut('fast');
        }
    })

    // ACTIVATE WOW MODULE
    new WOW().init();
  });