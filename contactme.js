$(() => {

    $('.submenu').hide()
    
    $(document).ready(function(){
        
        $('#projects').hover(function(){
        $('.submenu').toggle();
        })
       
    })


    $('form').hide('slow').delay('100')
    $('form').show('slow')   


    // when submit button is clicked popup prints (`${name}`) + 'you submited your email! Carolina will be in touch soon :)')
    
    // const submission =() => {
    //     prompt (`${$nameText} + "you submited your email! Carolina will be in touch soon :)"`);
    // }
    
    // $('#submit').on('click', submission);
   
    // $('#submit').click(function(){
    //     alert("you submited your email! Carolina will be in touch soon :)");
    // });
   

    // print(`${$nameText} + " you submited your email! Carolina will be in touch soon :)"`);
})