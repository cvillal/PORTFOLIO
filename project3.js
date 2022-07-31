$(() => {

   
    
    $('.submenu').hide()
    
    $(document).ready(function(){
        $('#projects').hover(function(){
        $('.submenu').toggle();
        })
       
    })
    
    $(".modalButton").on("click", function(){
        $(".popup-content").addClass("active");
    });
    
    $(".close, .popup").on("click", function(){
        $(".popup-content").removeClass("active");
    });
    
    $(".modalButton2").on("click", function(){
        $(".popup-content2").addClass("active");
    });
    
    $(".close2, .popup").on("click", function(){
        $(".popup-content2").removeClass("active");
    });
    
    
    
    
    })