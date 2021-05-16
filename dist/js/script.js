$(document).ready(function(){
    $('.slider-section__wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_slide.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_slide.svg"></button>'
    });

    $('.catalog__tabswrapper').on('click', '.catalog__tab:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });



    function itemLink(itemClass) {
        $(itemClass).each( function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__backcontent').eq(i).toggleClass('catalog-item__backcontent_active');
            })
        });
    }

    itemLink('.catalog-item__link');
    itemLink('.catalog-item__backlink');
  });