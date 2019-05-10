$(document).ready(function () {
  // mobile menu
  $('.nav-icon, .mobile-background').click(function () {
    $("body").toggleClass('navOpen');
  });



  // gallery filtering
  $('.portfolio-filter').on('click', function () {

    var $gallery = $(this).attr('data-gallery');

    if ($gallery == 'all') {
      $('.portfolio-filterable').removeClass('is-hidden');
    } else {
      $('.portfolio-filterable').addClass('is-hidden');
      $('.portfolio-filterable[data-gallery=' + $gallery + ']').removeClass('is-hidden');
    }
  });
  $('.portfolio-navigation a').click(function () {
    $(this).siblings('a').removeClass('portfolio-active');
    $(this).addClass('portfolio-active');
  });



  // countdown timer
  $(".stats").waypoint(function(){
    $('.stat-numb').each(function () {
    $(this).prop('Counter',0).animate({
    Counter:$(this).text()
     }, {
    duration:2000,
    easing:'swing',
    step:function (now) {
    $(this).text(Math.ceil(now));
     }
     });
     });
    this.destroy()
     },{offset:'70%'})





     $('.quote-container').textSlider();

  

  // form validation
  if ($('div').hasClass('formValidation')) {
    formValidation.init();
  }
});

var formValidation = {
  init: function () {
    formValidation.submitForm();
    formValidation.inputKeyUp();
  },

  submitForm: function () {
    $(".contact-form").submit(function (e) { 
      var count = 0;
      $(".form-field").each(function () {
        
        var _inputData = $(this).find("input");
        var value = _inputData.val();
        var regex = _inputData.attr('data-regex');
        var errorMsg = $(this).find('input').attr('data-msg');
        var pattern = $(this).find('span').text();
        if (value.length == 0) {
          $(this).find('.error-message').html(errorMsg).show();
          count++;
        }
        else {
          if (!value.match(regex)) {
            $(this).find('.error-message').html(pattern).show();
            count++;
          }
        }
      });
      if (count > 0) {
        e.preventDefault();
      }
    });
  },

  inputKeyUp: function () {
    $('.contact-form input').keyup(function () {
      var inputData = $(this);
      var val = inputData.val();
      var regex = inputData.attr('data-regex');

      if (!val.match(regex)) {
        inputData.parent().addClass("error");
      }
      else {
        inputData.parent().removeClass("error");
      }
    });
  },
}