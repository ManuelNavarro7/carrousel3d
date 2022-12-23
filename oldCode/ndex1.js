// var carousel = $(".carousel"),
// items = $(".item"), currdeg = 0;

let carousel = document.querySelector(".carousel");
let items = document.querySelector(".item");
let counter = 0;

// let next = document.querySelector(".next").addEventListener("click", rotate);

// //let prev = document.querySelector(".prev").addEventListener("click", rotate);

function rotate(e) {
  console.log(e);
  if (e === "n") {
    counter++;
    console.log(counter);
    //   document.getElementsByClassName(".a").classList.remove(".a");
    //   document.getElementById("a").classList.add("nueva_clase");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    if (counter == 3) {
      a.style.transform = `translateZ(250px)`;
      b.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
      c.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;

      return;
    }
    if (counter == 4) {
      a.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
      b.style.transform = `translateZ(250px)`;
      c.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
      counter = 1;
      return;
    }

    if (counter == 1) {
      a.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
      b.style.transform = `translateZ(250px)`;
      c.style.transform = `rotateY(60deg) translateZ(250px) rotateY(-60deg)`;
    }
    if (counter == 2) {
      a.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
      b.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
      c.style.transform = `translateZ(250px)`;
    }
  }
  if (e === "p") {
    if (counter > 0) {
      counter--;
      console.log(counter);
      let a = document.getElementById("a");
      let b = document.getElementById("b");
      let c = document.getElementById("c");

      // if (counter == 0) {
      //   a.style.transform = `translateZ(250px)`;
      //   b.style.transform = `rotateY(60deg) translateZ(250px) rotateY(-60deg)`;
      //   c.style.transform = `rotateY(300deg) translateZ(250px) rotateY(-300deg)`;
      //   counter = 0;
      //   return;
      // }
      if (counter == 3) {
        a.style.transform = `translateZ(250px)`;
        b.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
        c.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;

        return;
      }
      if (counter == 4) {
        a.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
        b.style.transform = `translateZ(250px)`;
        c.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
        counter = 1;
        return;
      }

      if (counter == 1) {
        a.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
        b.style.transform = `translateZ(250px)`;
        c.style.transform = `rotateY(60deg) translateZ(250px) rotateY(-60deg)`;
      }
      if (counter == 2) {
        a.style.transform = `rotateY(-300deg) translateZ(250px) rotateY(300deg)`;
        b.style.transform = `rotateY(-60deg) translateZ(250px) rotateY(60deg)`;
        c.style.transform = `translateZ(250px)`;
      }
    }
    if (counter <= 0) {
      a.style.transform = `rotateY(60deg) translateZ(250px) rotateY(-60deg)`;
      b.style.transform = `rotateY(300deg) translateZ(250px) rotateY(-300deg)`;
      c.style.transform = ` rotateY(360deg) translateZ(250px) rotateY(-360deg)`;
      console.log(counter);
    }
  }
}
