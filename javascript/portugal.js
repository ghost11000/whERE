let big = document.querySelectorAll('.big');

big.forEach(e => {
    e.addEventListener('click', () => {
        removeActive();
        e.classList.add('active');
    });
})


function removeActive() {
    big.forEach(e => {
        e.classList.remove('active');
    });
}