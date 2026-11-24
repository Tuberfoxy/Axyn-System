function loginDemo(event){
event.preventDefault();
window.location.href="dashboard.html";
}

document.querySelectorAll(".btn").forEach(button=>{
button.addEventListener("click",()=>{
if(button.tagName==="BUTTON" && button.type!=="submit"){
button.style.transform="scale(.98)";
setTimeout(()=>button.style.transform="",120);
}
});
});