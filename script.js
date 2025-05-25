// Show modal for experience cards (flip-card)
document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
        // Prevent flip if clicking on the modal close button
        if (e.target.classList.contains('cert-modal-close')) return;

        var modal = document.getElementById('cert-modal');
        var modalImg = document.getElementById('certModalImg');
        // Get the image from the front of this card
        var img = card.querySelector('.flip-card-front img');
        if (img) {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        }
    });
});

// Show modal for certificates and my work images
document.querySelectorAll('.exp-cert-img, .cert-img, .collage-img').forEach(function(img) {
    img.addEventListener('click', function(e) {
        var modal = document.getElementById('cert-modal');
        var modalImg = document.getElementById('certModalImg');
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        e.stopPropagation();
    });
});

// Modal close logic
document.getElementById('certModalClose').onclick = function() {
    document.getElementById('cert-modal').style.display = "none";
};
window.onclick = function(event) {
    var modal = document.getElementById('cert-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// ...existing code...
document.querySelectorAll('.collage-img').forEach(img => {
    img.addEventListener('animationend', function() {
        img.style.animationPlayState = 'paused';
        img.style.opacity = '1';
        img.style.transform = `scale(1) translateY(0) rotate(${getComputedStyle(img).getPropertyValue('--collage-rotate') || '0deg'})`;
    });
});
// ...existing code...
// ...existing code...

// AI Automation Slideshow
const aiSlides = document.querySelectorAll('.ai-slide');
let aiCurrent = 0;
if (aiSlides.length > 0) {
    setInterval(() => {
        aiSlides[aiCurrent].classList.remove('active');
        aiCurrent = (aiCurrent + 1) % aiSlides.length;
        aiSlides[aiCurrent].classList.add('active');
    }, 2500); // Change slide every 2.5 seconds
}
document.querySelectorAll('.ai-slide').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});