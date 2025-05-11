document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const obstacle = document.getElementById("obstacle");

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            jump();
        }
    });

    function jump() {
        player.style.bottom = "120px";
        setTimeout(() => {
            player.style.bottom = "10px";
        }, 500);
    }
});
