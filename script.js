const noButton = document.getElementById("no");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

noButton.addEventListener("mouseover", moveButton);

// Open the second page when YES is clicked
document.getElementById("yes").addEventListener("click", function () {
    window.location.href = "success.html";
});