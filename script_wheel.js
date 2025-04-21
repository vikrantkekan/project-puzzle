function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  //wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  
  let One  = shuffle([1890, 2250, 2610]);
  let Two = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let Three = shuffle([1810, 2170, 2530]);
  let Four = shuffle([1770, 2130, 2490]);

  let Five = shuffle([1750, 2110, 2470]);
  let Six = shuffle([1630, 1990, 2350]);
  let Seven = shuffle([1570, 1930, 2290]);
  


  // Bentuk acak
  let Hasil = shuffle([
    One[0],
    Two[0],
    Three[0],
    Four[0],
    Five[0],
    Six[0],
    Seven[0],
  ]);
   console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (One.includes(Hasil[0])) SelectedItem = "FLAT ₹2 LAKH DISCOUNT"; //3 DONE
  if (Two.includes(Hasil[0])) SelectedItem = "FREE DESIGNER LANDSCAPING FOR YOUR PLOT";//7
  if (Three.includes(Hasil[0])) SelectedItem = "FREE FURNISHING PACKAGE"; // try again
  if (Four.includes(Hasil[0])) SelectedItem = "FREE WHITE GOODS PACKAGE";//6 DONE
  if (Five.includes(Hasil[0])) SelectedItem = "FREE MODULAR KITCHEN PACKAGE ";// DONE
  if (Six.includes(Hasil[0])) SelectedItem = "TRY AGAIN";//4 DONE
  if (Seven.includes(Hasil[0])) SelectedItem = "GET TANISHQ GOLD VOUCHER WORTH ₹1 LAKH";//2 DONE


  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
   // applause.play();

    /*
    swal(
      "Congratulations",
      "You Won The " + SelectedItem + ".",
      "success"
    );
    alert(SelectedItem);
*/
   
pop_up(SelectedItem);

  }, 5500);


  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
  
}
