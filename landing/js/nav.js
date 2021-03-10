$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    if ($(window).width() <= 943) {
        $('.navbar.fixed-top').addClass('top-0');
    }
    var y = $(this).scrollTop();
    if (y > 10 || $(window).width() <= 943 || $(".advert").length == 0) {
        $('.fixed-top').addClass('top-0');
    } else {
        $('.fixed-top').removeClass('top-0');
    }
});
$(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 10 || $(window).width() <= 943 || $(".advert").length == 0) {
        $('.fixed-top').addClass('top-0');
    } else {
        $('.fixed-top').removeClass('top-0');
    }
});


$(".phone").intlTelInput({
    defaultCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    nationalMode: false,
    // preferredCountries: ['ng'],
    utilsScript: "js/utils.js"
});

$('.slick-center').slick({
    centerMode: true,
    autoplay: true,
    centerPadding: '10px',
    slidesToShow: 3,
    nextArrow: `<div class="cursor-pointer slick-arrow position-absolute" style="height: 50px; top: 32%; right: 0px; z-index:99">
                        <i class="text-muted ion-ios-arrow-forward font-45"></i></div>`,
    prevArrow: `<div class="cursor-pointer slick-arrow position-absolute" style="height: 50px; top: 32%; left: 0px; z-index:99">
                        <i class="text-muted ion-ios-arrow-back font-45"></i></div>`,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(document).on('click', '.callback', function(e) {
    e.stopPropagation();
});

$(document).on('click', '.close', function(e) {
    $('.callback').dropdown('toggle')
});

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("game");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

$(document).on('click', '#copy-code', function(e) {
    myFunction()
});

$(document).ready(function() {
    // $('#partner_phone, #partner_email, #partner_fullname').on('input', function(){
    //     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
    //     if($('#partner_phone').val().length <= 15 && $('#partner_phone').val().length > 7 && $('#partner_email').val().match(re) && $('#partner_fullname') !==''){
    //         $('#partner_register').attr('disabled',false);  
    //     }
    //     else{
    //        $('#partner_register').attr('disabled',true);   
    //     }
    // });

    $('.close-modal').click(function(e){
        e.preventDefault();
        $(this).closest('.modal').modal('hide')
    })

    $('#partner_register').click(function(e){
        e.preventDefault();
        $('#partnerModal').modal('hide')
        iziToast.show({
            title: 'Success!',
            titleSize : '20px',
            titleColor: '#fff',
            message: "Your request has been received, we'll contact you shortly",
            messageSize: '18px',
            messageColor: '#fff',
            backgroundColor: '#4CAF50',
            position : 'topRight'
        });
    })
})