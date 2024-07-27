let village ="mkpt";
console.log(village)
const build = true;
console.log(build);
let score=9;
if (score>50 && score<90){
    console.log("you have passed")
}else if (score>=90){
  console.log("you have passed with A+")
}else if (score<=50 && score>=10){
  console.log("try more")
}else{
    console.log("better luck next time")
};
console.log("hello");
function inHerited (){
  console.log("techy industries")
  console.log ("phani the owner")
}
inHerited();
let age=15;
let talent=90;
let techyIndustryEmploye=age>=18 || talent>50;
if (techyIndustryEmploye){
  console.log("you are an employee")
}else{
  console.log("try again")
}




function first(){
  document.getElementById("firstone").innerHTML="welcome first time"
}
function second(){
 document.getElementById("secondone").innerHTML="welcome second time"
}
function third(){
document.getElementById("thirdone").innerHTML="welcome third time"
}
function fourth(){
  document.getElementById("fourthone").innerHTML="welcome fourth time"
}
function fifth(){
  document.getElementById("fifthone").innerHTML="welcome fifth time"
}
function sixth(){
  document.getElementById("sixthone").innerHTML="welcome sixth time"
}
function seventh(){
 const el =document.getElementById("seventhone").value;
 const p =document.querySelector(".another");
 p.innerHTML= el;
}  
function changeDate(){
  const el =document.querySelector(".onto").type="color"
}
function hw(){
  document.getElementById("hello").innerHTML="maker the future"
}
function changefont(){
  const el=document.querySelector("link")
  el.href="one.css"
  a=new SpeechSynthesisUtterance('changing font' + 'you are now viewing index page with changed font')
  speechSynthesis.speak(a)
}
function onto1(){
  const el=document.querySelector("link")
  el.href="on1.css"
  c=new SpeechSynthesisUtterance('changing font' + 'you are now viewing index page with changed font')
  speechSynthesis.speak(c)
}
function onto2(){
  const el=document.querySelector("link")
  el.href="on2.css"
  b=new SpeechSynthesisUtterance('changing font' + 'you are now viewing index page with changed font')
  speechSynthesis.speak(b)
}
