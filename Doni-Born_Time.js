let currentRotation = 0;

function rotateDiv() {
    currentRotation += 180;
    const topElement = document.getElementById('top');
    
    topElement.style.transform = `rotateX(${currentRotation}deg) translateY(-226px) rotateY(180deg) rotateZ(10deg)`;
    document.getElementById("detonator").style.display = "none";
    document.getElementById("letter_1").style.display = "none";
    document.getElementById("ggggggg_1").style.display = "none";
    document.getElementById("Pqwesad").style.display = "none";
    document.getElementById("gretsdf").style.display = "none";
    document.getElementById("Iasdwerasd").style.display = "none";
    document.getElementById("tyujthgfj").style.display = "none";
    document.getElementById("tryghf").style.display = "none";
    document.getElementById("utyitjhngf").style.display = "none";
    document.getElementById("lower-and-loweer").style.display = "none";
    

    setTimeout(() => {
        document.getElementById("writen").style.display = "block";
    }, 500);
}