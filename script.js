function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if(input === content.password) {
        document.getElementById('passwordScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        loadContent();
    } else {
        document.getElementById('wrongPass').style.display = 'block';
    }
}

let currentImage = 0;

function loadContent() {
    // عنوان ورسالة
    document.getElementById('title').innerText = content.title;
    document.getElementById('message').innerText = content.message;

    // الصورة تتغير تلقائيًا كل 5 ثواني
    const imgElement = document.getElementById('mainImage');
    imgElement.src = content.images[currentImage];
    setInterval(() => {
        currentImage = (currentImage + 1) % content.images.length;
        imgElement.src = content.images[currentImage];
    }, 5000);

    // الفيديو أول عنصر
    document.getElementById('mainVideo').src = content.videos[0];

    // النشيد أول عنصر
    document.getElementById('mainAudio').src = content.nasheeds[0];
}