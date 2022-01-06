$(function() {
    var images = ['algometeo82.gif', 'algometeo88.gif', 'algoparrot.jpg', 'soulpod014.gif', 'pixelducky512.png'];
    $('#background').css({'background-image': 'url(pics/' + images[Math.floor(Math.random() * images.length)] + ')'});
});