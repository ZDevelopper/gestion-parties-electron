
for (let i = 1; i <= 6; i++) {
    let btnStop = document.querySelector('#btnStop' + i);
    let game = document.querySelector('#game' + i);
    btnStop.addEventListener('click', () => {
        if (btnStop.classList.contains('stopped')) {
            btnStop.classList.remove('btnStopped');
            btnStop.classList.add('btnPending');
            game.classList.add('pending');
            game.classList.remove('stopped');
        } else {
            btnStop.classList.remove('btnPending');
            btnStop.classList.add('btnStopped');
            game.classList.add('stopped');
            game.classList.remove('pending');
        }
    });

}
