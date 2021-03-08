let barang = [];
let tas = {};

let barang1 = {
  id: 1,
  nama: 'Skyward Pride',
  price: 3000,
  daerah: 'tangerang',
};
let barang2 = {
  id: 2,
  nama: 'The Flute',
  price: 2000,
  daerah: 'tangerang',
};
let barang3 = {
  id: 3,
  nama: 'Lions Roar',
  price: 4000,
  daerah: 'jakarta',
};






barangFil = '';
barang = [barang1, barang2, barang3];
tas = {}

//barang = [barang1, barang2, barang3]
for (i of barang) {
    tas[i.id] = i;
}


function listPolos() {
  document.getElementById('list').innerHTML = '';
  for (let prop of barang) {
    console.log(prop);
    document.getElementById("list").innerHTML += '</br>'+`<li> ${prop.nama}</li>`+ '</br>'
    for (let isi in prop) {
      //console.log('' + prop[isi] + '\n');
      document.getElementById('list').innerHTML +=
         prop[isi] + '</br>';
    }
  }
}
listPolos();

function filter() {
  let text = document.getElementById('input').value;
  let saring = barang.filter(kota => kota.daerah === text);
  console.log(saring);
  document.getElementById('list').innerHTML = '';
  barang = saring;
  
  listPolos();
}




function sorting() {
  barang.sort(function (a, b) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  });
  listPolos();
}
