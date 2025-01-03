const screenWidth = window.innerWidth;
function toggleMenu() { 
  const menu = document.querySelector('.menu'); 
  menu.classList.toggle('active'); 
}
function toggleMode()
{
  var ele=document.body;
 ele.classList.toggle('dark-mode');
}
function openMenu(){
  window.location.href='menu.html';
}
function openVeg() {
  const items = document.getElementsByClassName('veg_item');
  for (let i = 0; i < items.length; i++) {
    if(screenWidth<=720){
      items[i].style.display='inline';
    }
    else{
      items[i].style.display = 'grid';
    }
  }
}
function offVeg() {
  const items = document.getElementsByClassName('veg_item');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}
function openNonveg(){
  const items = document.getElementsByClassName('nveg_items');
  for (let i = 0; i < items.length; i++) {
    if(screenWidth<=720){
      items[i].style.display='inline';
    }
    else{
      items[i].style.display = 'grid';
    }
  }
}
function offNonveg(){
  const items = document.getElementsByClassName('nveg_items');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}
function openSnack(){
  const items = document.getElementsByClassName('snak_items');
  for (let i = 0; i < items.length; i++) {
    if(screenWidth<=720){
      items[i].style.display='inline';
    }
    else{
      items[i].style.display = 'grid';
    }
  }
}
function offSnack(){
  const items = document.getElementsByClassName('snak_items');
  for (let i = 0; i < items.length; i++) {
    if(screenWidth<=720){
      items[i].style.display='none';
    }
    else{
      items[i].style.display='none';
    }
  }
}
function openDrink(){
  const items = document.getElementsByClassName('drink_item');
  for (let i = 0; i < items.length; i++) {
    if(screenWidth<=720){
      items[i].style.display='inline';
     /* updateBackgroundColor();
      window.addEventListener('resize', display);*/
    }
    else{
      items[i].style.display = 'grid';
      /*updateBackgroundColor();
      window.addEventListener('resize', display);*/
    }
  }
}
function offDrink(){
  const items = document.getElementsByClassName('drink_item');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}


window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  const items = document.getElementsByClassName('drink_item');
  /*const val=items.style.display='none';*/
  if (screenWidth <= 720 ) { 
  for (let i = 0; i < items.length; i++) {
    items[i].style.display='inline';
  }
  } else {
      for (let i = 0; i < items.length; i++) {
    items[i].style.display='grid';
  }
  }
});
/*
function updateBackgroundColor() {
  const items = document.getElementsByClassName('drink_item');
  const screenWidth = window.innerWidth;

   if (screenWidth <= 720 ) { 
  for (let i = 0; i < items.length; i++) {
    items[i].style.display='inline';
  }
  } else {
      for (let i = 0; i < items.length; i++) {
    items[i].style.display='grid';
  }
  }
}

// Call the function immediately when the page loads to set the initial state


// Add the event listener for the resize event

*/
