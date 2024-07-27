console.log('hello world')
function change(){
    el=document.querySelector("link")
    el.href="one.css"
    h1=document.querySelector('h1')
    h1.innerHTML='welcome to techy group of industries'
    a=new SpeechSynthesisUtterance('changing font')
    speechSynthesis.speak(a)
}
function change1(){
    b=new SpeechSynthesisUtterance('changing font' + 'you are now viewing index page')
    speechSynthesis.speak(b)
}
function submit(){
    c=new SpeechSynthesisUtterance('submited sccessfully')
    speechSynthesis.speak(c)
}