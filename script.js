function changeBackground(imageName) {
    const body = document.body;
    body.style.backgroundImage = `url('${imageName}')`;
    body.style.backgroundSize = 'contain';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
    sessionStorage.setItem('background', imageName);
}

const galleryImages = {
    mysore: ["./images/mp1.jpg", "./images/mp2.jpg", "./images/mp3.jpg"],
    jaganmohan: ["./images/jm1.jpg", "./images/jm2.jpg", "./images/jm3.jpg"],
    krs: ["https://imgs.search.brave.com/CE05G6fZaCDT_ikfMOJmN93BxWAXadJguc68G2KoHCg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHkuNHNxaS5uZXQv/aW1nL2dlbmVyYWwv/NjAweDYwMC8xNTMy/OTA0Nl9JV1ZOd1dX/ZUo3WlJLMm1kanpH/eUJBOS1LMTkyalYw/OURQaGZFT3k4NDNz/LmpwZw", "https://imgs.search.brave.com/tlHFhWphPMWkaYd3N9jYYdGcKgDW9lnzCda7k8AZe7M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGVjY2FuY2hy/b25pY2xlLmNvbS9k/Yy1Db3Zlci1mbHZ1/OTlhYXNhdGd1Zjhq/amQ5YjNucWQzMy0y/MDE3MDIwNzAzNDE1/MC5NZWRpLmpwZWc", "./images/krs3.jpg"],
    shivanasamudra: ["./images/shiva1.jpg", "./images/shiva2.jpg", "./images/ss3.jpg"]
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
