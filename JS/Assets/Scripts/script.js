function addFunction() {
  let input_Value = document.toDo.inputValue.value;
  let li = document.createElement('LI');
  //li.className="test";
  //console.log(li);
  let textInput = document.createTextNode(input_Value);
  li.appendChild(textInput);
  document.querySelector('ul').appendChild(li);
  document.toDo.inputValue.value = "";
  closeButton(li);
  }

function closeButton(li) {
  let check = document.createElement("SPAN");
  let text = document.createTextNode ("x");
  //console.log(check);
  check.className = "close";
  //console.log(check);
  check.appendChild(text);
  li.appendChild(check);
  check.onclick = () => check.parentElement.style.display ="none";
}

document.querySelectorAll('li').forEach(closeButton);
document.querySelector('ul').addEventListener("click", (e) => {
  //console.log(e);
if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
});


  /*var x = document.getElementById("myText");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  
  if (defaultVal == currentVal) {
    document.getElementById("demo").innerHTML = ""
    + x.defaultValue + " and " + x.value
    + "<br>";//text and text <br>
  } else {
    document.getElementById("demo").innerHTML = currentVal +"<br>";
    //todo <br>
  }*/