// ==========================
// QKR - QR Code Generator
// ==========================

const qrText = document.getElementById("qrText");
const qrBox = document.getElementById("qrcode");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");

let qr = null;

// Generate QR Code
generateBtn.addEventListener("click", () => {

    const text = qrText.value.trim();

    if (text === "") {

        alert("Please enter a website link.");

        qrText.focus();

        return;
    }

    qrBox.innerHTML = "";

    qr = new QRCode(qrBox, {
        text: text,
        width: 220,
        height: 220,
        colorDark: "#111827",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrBox.classList.add("show");

});

// Press Enter to Generate
qrText.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        generateBtn.click();

    }

});

// Clear
clearBtn.addEventListener("click", () => {

    qrText.value = "";

    qrBox.innerHTML = "";

    qrBox.classList.remove("show");

    qrText.focus();

});

// Smooth Fade Animation
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Floating Animation
const circles = document.querySelectorAll(".background span");

circles.forEach((circle, index) => {

    circle.style.animationDuration = (10 + index * 2) + "s";
    circle.style.animationDelay = (index * 0.8) + "s";

});

// Small Hover Effect
document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// Auto-add https:// if missing
generateBtn.addEventListener("click", () => {

    let value = qrText.value.trim();

    if (
        value !== "" &&
        !value.startsWith("http://") &&
        !value.startsWith("https://")
    ) {

        qrText.value = "https://" + value;

    }

});

// Copy Link on Double Click
qrText.addEventListener("dblclick", () => {

    qrText.select();

    document.execCommand("copy");

});

// Keyboard Shortcut (Ctrl + Enter)
document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "Enter") {

        generateBtn.click();

    }

});

// Random Glow Effect
setInterval(() => {

    document.querySelectorAll("button").forEach(btn => {

        btn.style.boxShadow =
            "0 0 " +
            (20 + Math.random() * 20) +
            "px rgba(0,255,255,.5)";

    });

}, 1500);