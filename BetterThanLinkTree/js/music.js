var button = document.getElementById('stop-music');
var muteIcon = document.getElementById('unmute-icon');
var unmuteIcon = document.getElementById('mute-icon');
muteIcon.style.display = 'inline';
unmuteIcon.style.display = 'none';

button.addEventListener('click', function () {
    if (muteIcon.style.display === 'inline') {
        muteIcon.style.display = 'none';
        unmuteIcon.style.display = 'inline';
        stopMusic();
    } else {
        unmuteIcon.style.display = 'none';
        muteIcon.style.display = 'inline';
        startMusic();
    }
});
function startMusic() {
    console.log('Music started');
}

function stopMusic() {
    console.log('Music stopped');
}