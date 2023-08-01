
const headerBar = document.getElementById('toggle_my_header'); 
const searchBar = document.querySelector('.search_bar_input');
const body = document.body;
let homeContainer = document.querySelector('.center_container');

const seeMoreBtn = document.getElementById('see_more_center_responsive');
const favoriteContainer = document.getElementById('responsive_favoris');
const shawProfileBtn = document.querySelector('.me');
const btnMessageArea = document.querySelector('#btn_toggle_message_box');
const messageArea = document.querySelector('.sms_container');
let blurEl = document.createElement('span');




try {
  seeMoreBtn.addEventListener('click', ()=>{
    console.log("clicked")
    favoriteContainer.classList.toggle('shaw_favorite_container')
    seeMoreBtn.classList.toggle('shaw_favorite_container')
  })

} catch (error) {
  
}
   

body.appendChild(blurEl);

searchBar.addEventListener('focus', ()=>{
   blurEl.classList.add('blur_element');
   searchBar.classList.add('input_on_focus');

})
searchBar.addEventListener('blur', ()=>{

   blurEl.classList.remove('blur_element');
   searchBar.classList.remove('input_on_focus');
})

window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

   if ( (scrollHeight - (scrollTop + clientHeight) ) <= 20 ){
    

    addProfiles(2);

   }
   try{
      if ( scrollTop > 400){
      headerBar.classList.add('toggle_menu_come');
    }
    else{
     
      headerBar.classList.remove('toggle_menu_come');
    }
   }
   catch (error) {
    
    }
    
});

const addProfiles = idx =>{
    for(let i = 0; i < idx; i++){
    
        displayProfiles()
    }
}




  
function getRandomNumber() {
    return Math.floor(Math.random() * 12);
  }

const dynamicSearch = () => {

    const valueSearch = document.getElementById("search_message").value.toUpperCase();
    const boxItems = document.querySelectorAll(".message_profil_item");
  
    const title = document.getElementsByClassName("name_pro");
  
    for (let i = 0; i < title.length; i++) {
      let match = boxItems[i].getElementsByClassName("name_pro")[0];
  
      if (match) {
        let textValue = match.textContent;
        if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
          boxItems[i].style.display = "";
        } else {
          boxItems[i].style.display = "none";
        }
      }
    }
  };
  shawProfileBtn.addEventListener('click', ()=>{
    //console.log("clicked")
    shawProfileBtn.classList.toggle('shaw_profile')
    
  })
  btnMessageArea.addEventListener('click', ()=>{
    console.log("clicked")
    btnMessageArea.classList.toggle('switch_btn_icon')
    messageArea.classList.toggle('shaw_message_container')
  })










