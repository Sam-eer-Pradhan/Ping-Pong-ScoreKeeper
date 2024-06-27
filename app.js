const p1 = {
    score: 0,
    display: document.querySelector('#p1Score'),
    button: document.querySelector('#p1btn')
}
const p2 = {
    score: 0,
    display: document.querySelector('#p2Score'),
    button: document.querySelector('#p2btn')

}
const rstbtn = document.querySelector('#rstbtn');

const option = document.querySelector('#options');
let winScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');

        }
        player.display.innerText = player.score;
    }

}
option.addEventListener('change', (e) => {
    winScore = parseInt(e.target.value);
    reset();
});

rstbtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('winner', 'loser');
    }

}

p1.button.addEventListener('click', (e) => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', (e) => {
    updateScores(p2, p1);
})
