var all = 300;

let sabzi = 1;
let kartoshka = 1;
let piyoz = 1;
let tarvuz = 1;
let qovun = 1;

let Sabzi = 7;
let Kartoshka = 10;
let Piyoz = 8;
let Tarvuz = 20;
let Qovun = 30;

const summa = document.querySelector(".sum");
const jsabziSumma = document.querySelector(".somma-sabzi");
const jsabzi = document.querySelector(".kg-sabzi");
const hammaBittalilar = document.querySelector(".y");
const btn1 = document.querySelector(".btns1");
const btn2 = document.querySelector(".btns2");
const btn3 = document.querySelector(".btn3");
const jkartoshka = document.querySelector("kg-kartoshka");
const jkartoshkasum = document.querySelector("somma-kartoshka");
btn1.addEventListener("click", function () {
  let newSab = sabzi++;
  jsabzi.textContent = sabzi + " " + "kg";
  jsabziSumma.textContent = Sabzi * sabzi + " " + "ming so'm";
  all = all - Sabzi * sabzi;
  summa.textContent = all + " " + "ming so'm";
  if (sabzi == 3) {
    alert("Siz faqat 3 kg sotib ololasiz");
  }
  btn2.addEventListener("click", function () {
    newSab--;
    if (newSab > 0) {
      jsabzi.textContent = newSab + " " + "kg";
      jsabziSumma.textContent = Sabzi * newSab + " " + "ming so'm";
      let sabAll = (all = all + Sabzi * newSab);
      summa.textContent = all + " " + "ming so'm";
    } else {
      alert("Siz 1 kg sotib olishga majbursiz");
    }
    btn3.addEventListener("click", function () {
        let newKart = kartoshka++;
        jkartoshkasum.textContent = kartoshka * 10
        console.log(jkartoshka);
      });
  });
});

