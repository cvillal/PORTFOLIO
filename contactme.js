$(() => {

    $('.submenu').hide()
    
    $(document).ready(function(){
        setInterval(changeImg, 1000)
        $('#projects').hover(function(){
        $('.submenu').toggle();
        })
       
    })

})