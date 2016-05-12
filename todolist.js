var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  console.log(text);
  evt.preventDefault();
  //form.innerHTML += '';
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  ///document.getElementById("todolist").style.textDecoration = "line-through";
  tar.style.textDecoration = "line-through";
  if (tar.style.textDecoration === "line-through") {
  tar.parentNode.removeChild(tar);
  }
  evt.preventDefault();
}, false);