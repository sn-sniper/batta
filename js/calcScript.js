function showShape() {
    var shape = document.getElementById("shape").value;
    var sections = document.querySelectorAll(".shape-section");
    sections.forEach(function(section){
        section.style.display = "none";
    });
    document.getElementById(shape + "Section").style.display = "block";
}

function calculateSquare() {
    var side = parseFloat(document.getElementById("squareSide").value);
    var area = side * side;
    var perimeter = 4 * side;
    document.getElementById("squareResult").innerText = "Calculation Result:" + "\n" + "Area=" + area + ", Perimeter=" + perimeter;
}

function calculateRectangle() {
    var length = parseFloat(document.getElementById("rectLength").value);
    var width = parseFloat(document.getElementById("rectWidth").value);
    var area = length * width;
    var perimeter = 2 * (length + width);
    document.getElementById("rectangleResult").innerText = "Calculation Result:" + "\n" + "Area= " + area + ", Perimeter= " + perimeter;
  }

function calculateTriangle() {
    var base = parseFloat(document.getElementById("triBase").value);
    var height = parseFloat(document.getElementById("triHeight").value);
    var a = parseFloat(document.getElementById("triA").value);
    var b = parseFloat(document.getElementById("triB").value);
    var c = parseFloat(document.getElementById("triC").value);
    var area = 0.5 * base * height;
    var perimeter = a + b + c;
    document.getElementById("triangleResult").innerText ="Calculation Result:" + "\n" + "Area= " + area + ", Perimeter= " + perimeter;
  }

function calculateCircle() {
    var radius = parseFloat(document.getElementById("circleRadius").value);
    var area = Math.PI * radius * radius;
    var circumference = 2 * Math.PI * radius;
    document.getElementById("circleResult").innerText = "Calculation Result:" + "\n" +"Area= " + area + ", Circumference= " + circumference;
  }

function calculateCube() {
    var side = parseFloat(document.getElementById("cubeSide").value);
    var surfaceArea = 6 * side * side;
    var volume = side * side * side;
    document.getElementById("cubeResult").innerText = "Calculation Result:" + "\n" +"Surface Area= " + surfaceArea + ", Volume= " + volume;
  }
