const KEPEKLISTA = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
];
let db = 1;
const KIVALASZTOTTKEPEK = [];

$(function () {
  //mostantól ezt használjuk
  /**tedd ki a képeket a felső sectionbe, minden kép külön divbe kerüljön */

  let szoveg = osszeAllit();
  const FELSOELEM = $("#felso");
  FELSOELEM.append(szoveg);
  /* const ALSOELEM = $('#also');
  ALSOELEM.append(szoveg); */

  /**Kisképekre kattintás
   * fogd meg a kisképeket
   * add hozzá az eseménykezelős*/
  const FELSOKEPEK = $("#felso img");
  FELSOKEPEK.on("click", kepreKattintas);
});

function osszeAllit() {
  //**Itt összeállítjuk azt a szöveget amít  meg kell majad jeleníteni */
  let txt = "";
  for (let index = 0; index < KEPEKLISTA.length; index++) {
    txt += `<div><img src="kepek/hatter.jpg" alt="" id="${index}"></div>`;
  }
  //console.log(txt);
  return txt;
}

function kepreKattintas() {
  const aktKep = event.target;
  console.log($(aktKep).attr("id"));
  /**Kicseréljük a kép src-jét */
  aktKep.src = KEPEKLISTA[aktKep.id];
  KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));

  db++;
  if (db == 2) {
    db = 0;
    visszaFordit();    
  }
}

function visszaFordit() {
  /**visszaállítjuk az src a háttérre, amelyikre kattintottunk
   *
   */
  console.log(KIVALASZTOTTKEPEK);

  setTimeout(function () {
    const FELSOKEPEK = $("#felso img");
    let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    $(aktKep).attr("src", "kepek/hatter.jpg");

    aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    $(aktKep).attr("src", "kepek/hatter.jpg");

    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
  }, 1000);
}


