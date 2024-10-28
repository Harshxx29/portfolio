console.log("the console is starting...")

document.querySelector(".hamicon").addEventListener("click", () => {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger.style.opacity === "0" || hamburger.style.opacity === "") {
        hamburger.style.opacity = "1"; 
    } else {
        hamburger.style.opacity = "0"; 
    }
});

