let search = document.querySelector(".search");
let btn = document.querySelector(".check");


btn.addEventListener('click', function(evt){
  evt.preventDefault();

  if(btn.checked = false){
    search.style.display = "none";
  }
  else if(btn.checked = true){
    search.classList = "inp"
  }
})