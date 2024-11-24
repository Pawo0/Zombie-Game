export default class SoundManage {
    constructor() {
        this.endGameSound = new Audio("assets/sad-music.mp3");
        this.endGameSound.loop = true
        this.endGameSound.volume = 0.5;

        this.backgroundSound = new Audio("https://kappa.vgmsite.com/soundtracks/doom-eternal-original-game-soundtrack/rkyvxfygyy/05.%20BFG%20Division%202020.mp3");
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 0.2;

        this.loseScream = new Audio("assets/scream.ogg");
    }
    playZombieAttackSound(){
        const zombieAttackSound = new Audio(`assets/bigchomp.ogg`);
        zombieAttackSound.play();
    }

    playZombieFallingSound() {
        setTimeout(() => {
            const zombieFallingSound = new Audio(`assets/zombie_falling_${Math.random() < 0.5 ? "1" : "2"}.ogg`);
            zombieFallingSound.play();
        },100)
    }

    playLoseScreamSound() {
        this.loseScream.currentTime = 0;
        this.loseScream.play();
    }

    playBackgroundSound() {
        this.backgroundSound.currentTime = 0;
        this.backgroundSound.play();
    }

    stopBackgroundSound() {
        this.backgroundSound.pause();
    }

    playEndGameSound() {
        this.endGameSound.currentTime = 0;
        this.endGameSound.play();
    }

    stopEndGameSound() {
        this.endGameSound.pause();
    }

    playShotSound() {
        const shotSound = new Audio("assets/p90_shot.mp3");
        shotSound.volume = 0.5;
        shotSound.play();
    }
}