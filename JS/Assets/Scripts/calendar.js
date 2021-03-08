//to get date from web timezone
const date = new Date();
console.log(date);


//function untuk menyimpan seluruh fungsi, agar dapat dipangil
//jika menggunakan next dan prev button
const renderCalendar = () => {
  //membuat tanggal menjadi 1(default mengikuti tanggal pada web)
  date.setDate(1);
  console.log(date.getDay());

  //to find index number of month
  const month = date.getMonth();
  console.log(month);

  const monthDays = document.querySelector('.days');
  console.log(monthDays);

  //to get last day from the current month (+1 mean that the last day from december))
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log(lastDay);

  //to get last day from prev month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(prevLastDay);

  //to get index number of the first day of month
  const firstDayIndex = date.getDay();
  console.log(firstDayIndex);

  //to get last day of month
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log(lastDayIndex);

  //6 karena di array dimulai dari 0
  const nextDays = 6 - lastDayIndex;
  console.log(nextDays);

  //array for month
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //change value from month in h1
  document.querySelector('.date h1').innerHTML = months[date.getMonth()];

  //change value from month in p
  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  //to get previous month dates
  for (let j = firstDayIndex; j > 0; j--) {
    // console.log(j);
    days += `<div class="prev-date">${prevLastDay - j + 1}</div>`;
  }

  //j = firstDayIndex  = 2, 30-2+1 = 29
  //j = 2 --, 30-1+1 = 30

  //add date dynamicly

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  //add next month date
  for (let x = 1; x <= nextDays; x++) {
    days += `<div class="next-date">${x}</div>`;
  }
  monthDays.innerHTML = days;

  /////////////////////////////
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

let hari = '';




// log >> tanggalnya gak ke update
var events = {};

function add() {
  tanggal = hari.innerHTML;
  //console.log(tanggal)
  // input = 'makan sore'
  let input = document.getElementById('inputValue').value;

  eventName = input;

  // events[tanggal] = events[tanggal] ? [...events[tanggal],eventName]:[eventName];

  if (events[tanggal]) {
    //console.log(events[tanggal]) // ['Makan siang', 'foo']
    events[tanggal] = [...events[tanggal], eventName];
    // console.log([events[tanggal], input]);
  } else {
    events[tanggal] = [eventName];
  }

  console.log(events);
  document.getElementById('inputValue').value = '';
  baru();
}

function ganti(Event) {
  console.log('ganti');
  modal.style.display = 'block';

  hari = Event.currentTarget;
  baru();
}

function iterateDiv(day) {
  console.log('iterateDiv');
  day.addEventListener('click', ganti);
}
document.querySelectorAll('.days div').forEach(iterateDiv);

function birthday() {
  hari.style.color = 'blue';
}
function meeting() {
  hari.style.color = 'aqua';
}
function holiday() {
  hari.style.color = 'red';
}

function baru() {
  document.querySelector('ul').innerHTML = '';
  dateList = hari.innerHTML;
  console.log(events[dateList]);

  for (even in events[dateList]) {
    console.log(even);
    let li = document.createElement('LI');
    let text = document.createTextNode(events[dateList][even]);
    li.appendChild(text);
    document.querySelector('ul').appendChild(li);
  
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
