import { Physics2D } from "./fisics2d.js"
import { food } from "./food.js"
import { snake } from "./snake.js"

let canvas: HTMLCanvasElement = document.getElementsByClassName("lienzo")[0] as HTMLCanvasElement
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let manzanas: food = new food(ctx)
let serpiente: snake = new snake(ctx)

for (let i = 0; i <= 20; i++) {
    manzanas.spawn()
}

serpiente.draw()

let last = ""

document.addEventListener("keypress", function (e) {
    if (e.key == "d") {
        last = "d"
    }
    if (e.key == "a") {
        last = "a"
    }
    if (e.key == "w") {
        last = "w"
    }
    if (e.key == "s") {
        last = "s"
    }
    if (e.key == "e"){
        last = "e"
    }
})
let run: boolean = true

function update() {
    
    if (last == "d") {
        ctx.beginPath()
        ctx.clearRect(0, 0, 800, 800)
        ctx.closePath()
        serpiente.cords = ([serpiente.cords[0] + 21, serpiente.cords[1]])
        serpiente.draw()
        

    }
    if (last == "a") {
        ctx.beginPath()
        ctx.clearRect(0, 0, 800, 800)
        ctx.closePath()
        serpiente.cords = ([serpiente.cords[0] - 21, serpiente.cords[1]])
        serpiente.draw()
        
    }
    if (last == "w") {
        ctx.beginPath()
        ctx.clearRect(0, 0, 800, 800)
        ctx.closePath()
        serpiente.cords = ([serpiente.cords[0], serpiente.cords[1] - 21])
        serpiente.draw()
        
    }
    if (last == "s") {
        ctx.beginPath()
        ctx.clearRect(0, 0, 800, 800)
        ctx.closePath()
        serpiente.cords = ([serpiente.cords[0], serpiente.cords[1] + 21])
        serpiente.draw()
        
    }
    if (last=="e"){return}

    for (let j = 0; j < manzanas.listcords.length; j++) {
        if (Physics2D.Rectcolision2D(serpiente.cords[0], serpiente.cords[1], manzanas.listcords[j][0], manzanas.listcords[j][1], 20, 20)) {
            manzanas.listcords.splice(j, 1)
            serpiente.children += 1
            manzanas.spawn()
            break
        }
    }
    for (let j = 0; j < serpiente.lastcords.length; j++) {
        if (Physics2D.Rectcolision2D(serpiente.cords[0], serpiente.cords[1], serpiente.lastcords[j][0], serpiente.lastcords[j][1], 20, 20)) {
            serpiente.lastcords.splice(j, 1)
            serpiente.children -= 1
            break
        }
    }
    if (serpiente.lastcords.length>serpiente.children){
        while(serpiente.lastcords.length>serpiente.children){
            serpiente.lastcords.splice(serpiente.lastcords.length-1,1)
        }
        
        
    }
    serpiente.lastcords.unshift(serpiente.cords)
    let p: HTMLParagraphElement=document.getElementById("rel") as HTMLParagraphElement
    p.innerHTML=`tienes ${serpiente.children} puntos`
    manzanas.draw()
}

window.setInterval(update, 16.66)
