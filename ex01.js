let rnow= new Date() 
let h= rnow.getHours()

let p= document.getElementById("hournow")
let img= document.getElementById("img")
let d= document.getElementById("day")

function caregar(){
   var c= document.body
   if(h < 12){
      d.innerText= "Bom Dia"
      p.innerText= `Agora são ${h} horas`
      img.setAttribute("src", "manha.jpg")
   } else if (h <= 18){
      d.innerText= "Boa Tarde"
      p.innerText= `Agora são ${h} horas`
      c.style.background= "orange"
      img.setAttribute("src", "tarde.jpg")
   } else {
      d.innerText= "Boa Noite"
      p.innerText= `Agora são ${h} horas`
      c.style.background= "rgb(0 , 0, 0, 20%)"
      img.setAttribute("src", "noite.jpg")
   }
}