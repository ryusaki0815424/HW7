var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 
    ctx.moveTo(pos,0) 
    ctx.lineTo(pos,400) 
    ctx.fillText(pos,pos,10) 
    //
    ctx.moveTo(0,pos) 
    ctx.lineTo(400,pos) 
    ctx.fillText(pos,10,pos) 
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
 
    //廟的下半部
   ctx.fillStyle = "#ebad63"
  ctx.fillRect(75,220,250,130) //(x軸,y軸,寬,高)
  
    ctx.beginPath()
    ctx.moveTo(30,220)
    ctx.lineTo(370,220)
    ctx.lineTo(300,175)
    ctx.lineTo(100,175)
    ctx.closePath()
    ctx.fillStyle="#b64731"
    ctx.fill()
    ctx.strokeStyle="#bf2222"
    ctx.stroke()
  
   ctx.fillStyle = "#ebad63"
  ctx.fillRect(100,100,200,75) //(x軸,y軸,寬,高)
  ctx.fillStyle = "#e89d4c"
  ctx.fillRect(100,100,200,10) //(x軸,y軸,寬,高)
ctx.fillStyle = "#e89d4c"
  ctx.fillRect(75,220,15,10) //(x軸,y軸,寬,高)
  ctx.fillStyle = "#e89d4c"
  ctx.fillRect(140,220,145,10) //(x軸,y軸,寬,高)
  ctx.fillStyle = "#e89d4c"
  ctx.fillRect(305,220,20,10) //(x軸,y軸,寬,高)
  
  
    ctx.beginPath()
  let carx = time
    ctx.arc(100,50,20,Math.PI*3,Math.PI,true)
    ctx.closePath()
    ctx.fillStyle="#dae00b"
    ctx.fill()
    ctx.strokeStyle="#e5e222"
    ctx.stroke()
  
     ctx.beginPath()
    ctx.arc(100,50,15,Math.PI*3,Math.PI,true)
    ctx.closePath()
    ctx.fillStyle="#ffdd00"
    ctx.fill()
  
    ctx.beginPath()
    ctx.arc(300,50,20,Math.PI*3,Math.PI,true)
    ctx.closePath()
    ctx.fillStyle="#dae00b"
    ctx.fill()
    ctx.strokeStyle="#e5e222"
    ctx.stroke()
  


 
    ctx.beginPath()
    ctx.arc(300,50,15,Math.PI*3,Math.PI,true)
    ctx.closePath()
    ctx.fillStyle="#ffdd00"
    ctx.fill()

  
    ctx.beginPath()
    ctx.moveTo(100,50)
    ctx.lineTo(300,50)
    ctx.lineTo(325,100)
    ctx.lineTo(75,100)
    ctx.closePath()
    ctx.fillStyle="#b64731"
    ctx.fill()
    ctx.strokeStyle="#bf2222"
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(150,135,15,Math.PI*2,Math.PI,true)
    ctx.lineTo(135,160)
    ctx.lineTo(165,160)
    ctx.closePath()
    ctx.fillStyle="#e07047"
    ctx.fill()
    ctx.strokeStyle="#e07047"
    ctx.stroke()

        ctx.beginPath()
      ctx.arc(250,135,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(235,160)
      ctx.lineTo(265,160)
    ctx.closePath()
      ctx.fillStyle="#e07047"
      ctx.fill()
      ctx.strokeStyle="#e07047"
      ctx.stroke()

        ctx.beginPath()
      ctx.arc(200,300,50,Math.PI*2,Math.PI,true)
      ctx.lineTo(150,350)
      ctx.lineTo(250,350)
    ctx.closePath()
      ctx.fillStyle="#ba5315"
      ctx.fill()
  
  
          ctx.beginPath()
      ctx.arc(230,310,8,Math.PI*3,Math.PI,true)
       ctx.arc(170,310,8,Math.PI*3,Math.PI,true)
    ctx.closePath()
      ctx.fillStyle="#ffbf00"
      ctx.fill()
  
    ctx.beginPath()
    ctx.moveTo(90,220)
    ctx.lineTo(140,220)
    ctx.lineTo(140,300)
   ctx.lineTo(115,270 - (time))
   ctx.lineTo(90,300)
    ctx.closePath()
    ctx.fillStyle="#bf2222"
    ctx.fill()

      ctx.beginPath()
    ctx.moveTo(260,220)
    ctx.lineTo(310,220)
    ctx.lineTo(310,300)
   ctx.lineTo(285,270)
   ctx.lineTo(260,300)
    ctx.closePath()
    ctx.fillStyle="#bf2222"
    ctx.fill()
}
draw()

