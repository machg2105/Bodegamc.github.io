const player = new Plyr('#player');

function reproducirVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const source = document.querySelector('video source');
    source.setAttribute('src', videoUrl);
    player.source = {
        type: 'video',
        sources: [
            {
                src: videoUrl,
                type: 'video/mp4',
            },
        ],
    };
    player.play();
}

function limpiarUrl() {
    document.getElementById('videoUrl').value = '';
}