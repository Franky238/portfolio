// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

//Modals
$(function() {

    $('a[data-toggle="modal"]').on('click', function () {
        var el = $(this);
        var modal = new Modal(el.attr('data-company'));

        $('.portfolio-modal.modal').on('hidden.bs.modal', function () {
            $(this).remove();
        });
    });

});

//ScrollReveal
$(function() {
    var revealLeft = {
        origin: 'left',
        distance: '80px',
        scale: 1,
        viewFactor: 0.5,
        easing: 'linear',
        viewOffset: {
            top: 80
        }
    };

    var revealRight = {
        origin: 'right',
        distance: '80px',
        scale: 1,
        viewFactor: 0.5,
        easing: 'linear',
        viewOffset: {
            top: 80
        }
    };

    var revealBottom = {
        origin: 'top',
        distance: '80px',
        scale: 1,
        viewFactor: 0.5,
        easing: 'linear',
        viewOffset: {
            top: 80
        }
    };

    var revealProgress = $.extend({}, revealBottom);

    revealProgress["afterReveal"] = function (element) {
        var el = $(element);

        var skill = el.attr('data-skill');
        var percentage = SkillsModel.getSkill(skill);
        el.find('.progress-bar').width(percentage);
    };

    var revealPercentage = $.extend({}, revealRight);

    revealPercentage["afterReveal"] = function (element) {
        var el = $(element);

        var skill = el.attr('data-skill');
        var percentage = parseInt(SkillsModel.getSkill(skill));
        var countUp = new CountUp(skill + '-count', 0, percentage, 0, 2.5, {useEasing : true, separator : ',', suffix: '%'});
        countUp.start();
    };


    var sr = ScrollReveal({duration: 700});

    //Global classes
    sr.reveal('.reveal-left', revealLeft);
    sr.reveal('.reveal-right', revealRight);
    sr.reveal('.reveal-top', revealBottom);

    //Special Classes
    sr.reveal('.reveal-top--progress', revealProgress);
    sr.reveal('.reveal-right--percentage', revealPercentage);

});

$(function () {
    $('#curriculum-click').on('click', function () {
        gaClick();
    });
});

