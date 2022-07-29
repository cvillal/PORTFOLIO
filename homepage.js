$(() => {

$('.submenu').hide()

$(document).ready(function(){
    setInterval(changeImg, 1000)
    $('#projects').hover(function(){
    $('.submenu').toggle();
    })
   
    

})

// on scroll to .project1 start displying images at a speed of x
//carousel as per class corgi example
//not working

// let currentImgIndex = 0;
// let numOfImages = $('.carousel1-images').children().length-1
// // let time = 3000;

// $('.project1').on('scroll', () => {
//     $('.carousel1-images').children().eq(currentImgIndex).css('display', 'none')
//     if(currentImgIndex < numOfImages){
//         currentImgIndex++
//     }else{
//         currentImgIndex = 0
//     }
//     $('.carousel1-images').children().eq(currentImgIndex).css('display', 'block')
// })

// window.onload = ("nameoffunction()", time))

// slideshow attempt2

let i = 0;
let images = [];
let time = 3000;

//image list
images[0] = "https://i.imgur.com/e09tUM9.jpg";
images[1] = "https://i.imgur.com/onafOnn.jpg";
images[2] = "https://i.imgur.com/j6RbFqx.jpg";

//change image

function changeImg(){
    // document.slide.src = images[i];
    if(i < images.length -1){
        i++;
    } else{
        i=0;
    }
   console.log("changeImg")
    $('.carousel1-images').css("background-image", `url("${images[i]}")`)
}


// $('.carousel1-images').hide()

// $('.project1').on('scroll')

// $('#imagetwo').show('slow').delay('3000');
// $('#imagetwo').hide('slow');

// $('#imagethree').show('slow').delay('3000');
// $('#imagethree').hide('slow');
    











})