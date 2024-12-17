let currentIndex = {
    slider1: 0,
    slider2: 0
};

function moveSlider(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const track = slider.querySelector('.slider-track');
    const totalImages = track.children.length;

    currentIndex[sliderId] += direction;

    if (currentIndex[sliderId] < 0) {
        currentIndex[sliderId] = totalImages - 1;
    } else if (currentIndex[sliderId] >= totalImages) {
        currentIndex[sliderId] = 0;
    }

    track.style.transform = `translateX(-${currentIndex[sliderId] * 100}%)`;
}

// Fungsi untuk menangani perubahan saat elemen muncul di viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // Jika elemen masuk ke viewport, tambahkan kelas 'show'
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Hentikan pemantauan setelah elemen muncul
        }
    });
}

// Atur opsi untuk observer
const options = {
    threshold: 0.5 // Elemen harus setidaknya 50% terlihat
};

// Buat instance Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Pilih semua elemen yang ingin dipantau
const fadeElements = document.querySelectorAll('.fade-in');

// Mulai pantau setiap elemen
fadeElements.forEach(element => {
    observer.observe(element);
});


function goToLink(url) {
    window.location.href = url;
}
