$(() => {
    
    $('.submenu').hide()
    
    $(document).ready(function(){
        $('#projects').hover(function(){
        $('.submenu').toggle();
        })
       
    });


})    