document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bg-music');
    var stopButton = document.getElementById('stop-music');
    stopButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
