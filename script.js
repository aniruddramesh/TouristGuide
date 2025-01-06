function changeBackground(imageName) {
    const body = document.body;
    body.style.backgroundImage = `url('${imageName}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
    sessionStorage.setItem('background', imageName);
}

const galleryImages = {
    mysore: ["./images/mp1.jpg", "./images/mp2.jpg", "./images/mp3.jpg"],
    jaganmohan: ["./images/jm1.jpg", "./images/jm2.jpg", "./images/jm3.jpg"],
    krs: ["./images/krs1.jpg", "./images/krs2.jpg", "./images/krs3.jpg"],
    shivanasamudra: ["./images/ss1.jpg", "./images/ss2.jpg", "./images/ss3.jpg"]
};

function changeImage(gallery, direction) {
    const images = galleryImages[gallery];
    const imgElement = document.getElementById(`${gallery}-image`);
    let currentIndex = images.indexOf(imgElement.src.split('/').pop());

    currentIndex = (currentIndex + direction + images.length) % images.length;
    imgElement.src = images[currentIndex];
}

window.onload = function () {
    const savedBackground = sessionStorage.getItem('background');
    if (savedBackground) {
        document.body.style.backgroundImage = `url('${savedBackground}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
    }

    for (const gallery in galleryImages) {
        const imgElement = document.getElementById(`${gallery}-image`);
        if (imgElement) {
            imgElement.src = galleryImages[gallery][0];
        }
    }
};