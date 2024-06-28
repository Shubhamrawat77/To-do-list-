let textBox= document.querySelector(".text-box");
let addBtn= document.querySelector("#Add");
let list= document.querySelector(".list-items");
 
addBtn.addEventListener("click",function(){
    if(textBox.value.trim()===''){
        alert('you should type something');
    }
    else{
      let li= document.createElement("li");
      li.textContent=textBox.value;
      list.appendChild(li);
      let icon= document.createElement("i");
      icon.innerHTML= '<i class="ri-delete-bin-6-line"></i>';
      li.appendChild(icon);
  
    }
   textBox.value=''

},false)

list.addEventListener("click",function(e){
  if(e.target.tagName=='LI'){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName=="I"){
    e.target.parentElement.parentElement.remove();
  
  }

},false)