let main=document.querySelector('.main')
let ques=document.querySelector(".ques");
let ans=document.querySelector(".ans")
let save=document.querySelector(".save");
let cancel=document.querySelector(".cancel");
let newcard=document.querySelector(".newcard");
let discard=document.querySelector(".discard");
let flash=document.querySelector(".flash");
let add=document.querySelector('.add')
let para=document.querySelector('.para');
let container=document.querySelector('.container')
function can(){
 main.style.display="none"
}
function sav(){
    let que=ques.value;
    let an=ans.value;
    add.innerHTML=que
    para.innerHTML=an
   
}
function show(){
    para.style.display="inline"
}
function news(){
    let que=ques.value;
    let an=ans.value;
  let div=document.createElement("div");
  div.setAttribute("class","flash");
  div.innerHTML=`<h2>${que}</h2>
  <p>${an}</p>`
  
container.append(div);
div.querySelector(".discard").addEventListener("click", function () {
    div.remove();
});

}
discard.addEventListener('click', function() {
    flash.style.display = 'none';
});