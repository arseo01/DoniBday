let currentRotation = 0;

function rotateDiv() {
    currentRotation += 180;
    const topElement = document.getElementById('top');
    
    topElement.style.transform = `rotateX(${currentRotation}deg) translateY(-226px) rotateY(180deg) rotateZ(10deg)`;
    document.getElementById("opener").style.display = "none";
    document.getElementById("H_1").style.display = "none";
    document.getElementById("P_1").style.display = "none";
    document.getElementById("P").style.display = "none";
    document.getElementById("B").style.display = "none";
    document.getElementById("I").style.display = "none";
    document.getElementById("T").style.display = "none";
    document.getElementById("D").style.display = "none";
    document.getElementById("Y").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    

    setTimeout(() => {
        document.getElementById("text").style.display = "block";
    }, 500);
}