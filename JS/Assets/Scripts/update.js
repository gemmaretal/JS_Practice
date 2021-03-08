let barang = [];


let barang1 = {
  
  nama: 'Skyward Pride',
  price: 3000,
  daerah: 'tangerang',
};
let barang2 = {
  
  nama: 'The Flute',
  price: 2000,
  daerah: 'tangerang',
};
let barang3 = {
  
  nama: 'Lions Roar',
  price: 4000,
  daerah: 'jakarta',
};







barang = [barang1, barang2, barang3];
var barangFil=barang;
let tas = [];



function listPolos() {
  document.getElementById('list').innerHTML = '';
  for (let prop in barangFil) {
    currentBarang = barangFil[prop]
    console.log(prop);
    document.getElementById("list").innerHTML += '</br>'+`<li> ${currentBarang.nama}</li>`+
    `<button onclick="wishList(${prop})"> tambah </button>`+'</br>' 
    
    for (let isi in currentBarang) {
      //console.log('' + prop[isi] + '\n');
      document.getElementById('list').innerHTML +=
      isi + ":  " + currentBarang[isi] + '</br>';
    }
  }
}

listPolos();


var sum = 0;
function wishList(id) {
  currentBarang1 = barang[id];
  tas =[...tas, currentBarang1]
  sum += currentBarang1.price
  console.log(sum);
}



function filter() {
  let text = document.getElementById('input').value;
  let saring = barang.filter(kota => kota.daerah === text);
  console.log(saring);
  document.getElementById('list').innerHTML = '';
  barangFil = saring;
  
  listPolos();


}



function sorting() {
  barangFil.sort(function (a, b) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  });
  listPolos();
}

function keranjang(){
  modal.style.display = 'block';
 // console.log(sum)


  document.getElementById("harga").innerHTML = "Total Belanjaan" + "   : " + sum;

  for (let prop in tas) {
    currentBarang = tas[prop]
    console.log(prop);
    document.getElementById("daftar").innerHTML += '</br>'+`<li> ${currentBarang.nama}</li>`+
    '</br>' 
    
    for (let isi in currentBarang) {
      //console.log('' + prop[isi] + '\n');
      document.getElementById('daftar').innerHTML +=
      isi + ":  " + currentBarang[isi] + '</br>';
    }
  }
}


//modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};