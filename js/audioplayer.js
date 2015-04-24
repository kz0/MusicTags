var playpause = document.getElementsByClassName('play');
var audios = document.getElementsByTagName('audio');

var playPause = function() {
	var player = audios[$(this).prop('tabindex')];
	if (player.paused) {
        player.play();
        $(this).addClass("active");
    } else {
        player.pause();
        $(this).removeClass("active");
    }
};

for(var i=0;i<playpause.length;i++){
    playpause[i].addEventListener('click', playPause, false);
}

for(var i = 0, len = audios.length; i < len;i++){
    $(audios[i]).bind('ended', function () {
        $(this).parent().children(".play").removeClass("active");
    });
}

document.addEventListener('play', function(e){
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            $(playpause[i]).removeClass("active");
            audios[i].currentTime = 0;
        }
    }
}, true);