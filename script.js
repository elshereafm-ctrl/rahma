document.getElementById('password-btn').addEventListener('click', () => {
    const input = document.getElementById('password-input').value;
    if(input === content.password){
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        loadContent();
    } else {
        document.getElementById('password-error').innerText = 'الباسورد غلط 😢';
    }
});

function loadContent(){
    document.getElementById('title').innerText = content.title;
    document.getElementById('message').innerText = content.message;

    const galleryDiv = document.getElementById('gallery');
    content.images.forEach(img => {
        const image = document.createElement('img');
        image.src = img;
        galleryDiv.appendChild(image);
    });

    const videosDiv = document.getElementById('videos');
    content.videos.forEach(v => {
        const video = document.createElement('video');
        video.src = v;
        video.controls = true;
        videosDiv.appendChild(video);
    });

    const audioDiv = document.getElementById('audio');
    content.nasheeds.forEach(a => {
        const audio = document.createElement('audio');
        audio.src = a;
        audio.controls = true;
        audioDiv.appendChild(audio);
    });
}