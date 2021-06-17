function toggleSidebar () {
  var element = document.getElementById("sidebar");
  element.classList.toggle("minimize");

  var element = document.getElementById("profilpic");
  element.classList.toggle("minimize");

  var element = document.getElementById("menu1");
  element.classList.toggle("minimize");

  var element = document.getElementById("menu2");
  element.classList.toggle("minimize");
}

function queryize(url) {
  var tokens = url.split('?')[1].split('&');
  var result = {};

  for(var i=0; i<tokens.length; i++){
      result[tokens[i].split('=')[0]] = tokens[i].split('=')[1];
  }

  return result;
}

var data = queryize(window.location.search);

if (data.role === "admin") {
  console.log("admin")
} else {
  console.log("bukan admin")
  var addbook = document.getElementById("addbook");
  addbook.remove()
}