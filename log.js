let golog=document.getElementById('golog')
let gosign=document.getElementById('gosign')
let loginOverlay=document.getElementsByClassName('login-overlay')[0]
let registerOverlay=document.getElementsByClassName('register-overlay')[0]
let con=document.getElementsByClassName('container')[0]

gosign.addEventListener("click",()=>{
loginOverlay.classList.toggle('active')
registerOverlay.classList.toggle('active')
con.classList.toggle('active')
})
golog.addEventListener("click",()=>{
  loginOverlay.classList.toggle('active')
registerOverlay.classList.toggle('active')
con.classList.toggle('active')
})