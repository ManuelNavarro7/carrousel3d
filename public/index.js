let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

let currentDegA = `rotateY(90deg) translateZ(250px) rotateY(-90deg) `;
let currentDegB = `rotateY(300deg) translateZ(250px) rotateY(-300deg)`;
let currentDegC = ` translateZ(250px) rotateY(-0deg) `;

a.style.transform = currentDegC;
b.style.transform = currentDegA;
c.style.transform = currentDegB;

let counter = 0;

function rotate() {
  counter++;

  console.log(counter);
  if (counter === -1) {
    a.style.transform = currentDegB;
    b.style.transform = currentDegC;
    c.style.transform = currentDegA;
  }
  if (counter === -2) {
    a.style.transform = currentDegA;
    b.style.transform = currentDegB;
    c.style.transform = currentDegC;
  }
  if (counter === -3) {
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }

  if (counter === 0) {
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }

  if (counter === 1) {
    a.style.transform = currentDegA;
    b.style.transform = currentDegB;
    c.style.transform = currentDegC;
  }

  if (counter === 2) {
    console.log(counter);
    a.style.transform = currentDegB;
    b.style.transform = currentDegC;
    c.style.transform = currentDegA;
  }
  if (counter === 3) {
    console.log(counter);
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }
}

function rotateBack() {
  counter--;
  currentDegA = `rotateY(90deg) translateZ(250px) rotateY(-90deg) `;
  currentDegB = `rotateY(300deg) translateZ(250px) rotateY(-300deg)`;
  currentDegC = ` translateZ(250px) rotateY(-0deg) `;
  console.log(counter);
  if (counter === 0) {
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }
  if (counter === -1) {
    a.style.transform = currentDegB;
    b.style.transform = currentDegC;
    c.style.transform = currentDegA;
  }
  if (counter === -2) {
    a.style.transform = currentDegA;
    b.style.transform = currentDegB;
    c.style.transform = currentDegC;
  }
  if (counter === -3) {
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }

  if (counter === 1) {
    a.style.transform = currentDegA;
    b.style.transform = currentDegB;
    c.style.transform = currentDegC;
  }

  if (counter === 2) {
    console.log(counter);
    a.style.transform = currentDegB;
    b.style.transform = currentDegC;
    c.style.transform = currentDegA;
  }
  if (counter === 3) {
    console.log(counter);
    a.style.transform = currentDegC;
    b.style.transform = currentDegA;
    c.style.transform = currentDegB;
  }
}
