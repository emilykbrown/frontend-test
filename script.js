const messages = [
    "Foo bar baz!",
    "Random vibes activated.",
    "Hello from the JS side!",
    "Clickity click!",
    "Surprise message!"
];

document.getElementById("randomBtn").addEventListener("click", () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("output").textContent = randomMsg;

    // Random color for fun
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
});
