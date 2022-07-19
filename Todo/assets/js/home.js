// add event on task complete 
var checkBtn=document.getElementsByClassName("fa-check");
for(let i=0;i<checkBtn.length;i++){
   checkBtn[i].addEventListener('click',function(){
      var element = document.getElementsByClassName("listIcon");
      element[i].classList.toggle("checked");
   })
}
