var playpause = document.getElementsByClassName('artwork');
var audios = document.getElementsByTagName('audio');

var playPause = function() {
	var player = audios[$(this).prop('tabindex')];
	if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
};

for(var i=0;i<playpause.length;i++){
    playpause[i].addEventListener('click', playPause, false);
}

document.addEventListener('play', function(e){
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);