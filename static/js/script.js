function eyeopen(){
    $(".eye").css('background','rgb(247, 246, 245)');
    $(".eye-ball").css('background','rgb(32, 29, 29)');
}setInterval(eyeopen,200);

function eyeclose(){
    $(".eye").css('background','rgb(163, 138, 104)');
    $(".eye-ball").css('background','rgb(163, 138, 104)');
}setInterval(eyeclose,3000);

