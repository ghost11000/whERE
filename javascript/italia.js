let panel = document.querySelectorAll('.panel');
let big = document.querySelectorAll('.big');

big.forEach(e  => {
    e.addEventListener('click', () => { 
        removeBigs();
        e.classList.add('actives');
    });
});

function removeBigs() {
    big.forEach(e => {
        e.classList.remove('actives');
    });
};


