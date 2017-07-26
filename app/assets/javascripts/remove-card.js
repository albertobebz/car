$( document ).ready(function() {

  function removeCard(){
    $(this).closest('li').remove();
  }
  $('.btn-bin').click(removeCard);
  
});
