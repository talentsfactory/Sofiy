var mClose = document.getElementById('myClose')

var button = document.getElementById('myButton')

var modal = document.getElementById('myModal')

button.onclick = function() {
    modal.style.display = "block";
   setTimeout(opacity1, 100);
}

mClose.onclick = function() {
    content.style.opacity = "0"
    setTimeout(none, 1000);
}

var content = document.getElementById('myContent')

function opacity1() {
    content.style.opacity = "1";
}
function none () {
    modal.style.display = "none";
}
  


