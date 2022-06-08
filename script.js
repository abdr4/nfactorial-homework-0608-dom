const background = document.getElementById("background-video");
let btnVideo = document.getElementById("video");
const btnMusic = document.getElementById("button-music");
const audio = document.getElementById("audio");

function playVideo() {
    if (background.paused) {
        background.play();
        btnVideo.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    } else {
        background.pause();
        btnVideo.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
    }
}
function playMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}