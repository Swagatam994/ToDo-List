

const title=document.querySelector("#first");
const des=document.querySelector("#second");
const submit=document.querySelector("#submit");
const list=document.querySelector("#tasks");


submit.addEventListener("click",()=>{
  if(title.value==""){
    alert("You must enter title")
  }
  else{
 let li=document.createElement('li');
 let d=document.createElement('p');
 d.innerText=des.value;
     li.innerText=title.value;
     list.append(li);
     li.append(d);
     let span=document.createElement('span');
     span.innerHTML='\u00d7';
     li.append(span);
     title.value='';
     des.value='';
  }
  saveData();
             
            
});
list.addEventListener('click',(evt)=>{
  if(evt.target.tagName=='LI'){
    evt.target.classList.toggle("checked");
    saveData();
  }
  else if(evt.target.tagName=="SPAN"){
    evt.target.parentElement.remove();
    saveData();
  }
});

function saveData(){
  localStorage.setItem("info",list.innerHTML);
}
function showList(){
  list.innerHTML=localStorage.getItem('info');
}

showList();


