window.addEventListener("load", () => {
    const content = document.getElementById("MrBeast");
    let rotation = 0;
    let count = 1;

    function tick() {
        requestAnimationFrame(tick);
        let x = Math.random() * 2 + 1;
        let y = Math.random() * 2 + 1;
        content.style.transform =
            "rotate(" +
            rotation +
            "deg) translate(" +
            x +
            "%," +
            y +
            "%) scale(" +
            (Math.random() / 20 + 1) +
            "," +
            (Math.random() / 20 + 1) +
            ")";
        rotation *= 0.9;
    }

    function action() {
        rotation = 40 * count;
        count *= -1;
    }
    window.addEventListener("click", () => {
        action();
    });
    setInterval(() => {
        action();
    }, 500);

    tick();
});