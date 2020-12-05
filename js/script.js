$(function() {
    keypad();
  });
  
  function keypad(){
    $('#pinpad td').on('click', function(){
      console.log('clicked')
      if ( $(this).attr('id') == 'clear' ) {
        $('form input').val('');
      }
      else if ( $(this).attr('id') == 'confirm' ) {
        console.log('submit')
      }
      else {
        var current_input = $('form input').val();
        var current_button = $(this).text();
        var new_input = current_input + current_button;
        $('form input').val(new_input);
      }
    });
  }


  $(document).ready(function () {
  
    jQuery('.option-input.radio').each(function() {
    var currentElement = $(this);
  
    currentElement.click(function() {
      if ($('.active_checkbox') != $(this)) {
        $('.active_checkbox').removeClass('active_checkbox');
        $('.active_checkbox').find("input").prop('checked', '');
      }
      $(this).addClass('active_checkbox');
      $(this).find("input").prop('checked', 'checked');
    });
  });
  
  jQuery('.option-input.checkbox').each(function() {
    var currentElement = $(this);
  
    currentElement.click(function() {
      if ($(this).hasClass('active_checkbox')) {
        $(this).removeClass('active_checkbox');
        $(this).find("input").prop('checked', '');
      }
      else {
        $(this).addClass('active_checkbox');
        $(this).find("input").prop('checked', 'checked');
      }
    });
  });
    });