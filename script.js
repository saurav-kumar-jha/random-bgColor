var btn1 = document.getElementById("btn")
var copy = document.getElementById("copybtn")
var body = document.body

btn1.addEventListener("click",()=>{
    location.reload()
})
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(linearColor)
    alert(`${linearColor} color copied`)
})
// var input = document.getElementById("input")
// input.addEventListener("change",()=>{
//     console.log(input.value);
//     body.style.backgroundColor = input.value
// })
var random = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
var random2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
var random3 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}) 
var degree = Math.floor(Math.random()*361)
console.log(random);
console.log(random2);
console.log(random3);
var linearColor = `linear-gradient(${degree}deg, ${random},${random2},${random3})`


// color change javascript

var r = Math.floor(Math.random()*256)
var g = Math.floor(Math.random()*256)
var b = Math.floor(Math.random()*256)
var color = `rgb(${r},${g},${b})`
body.style.background = linearColor
document.getElementById("output").innerHTML = "This color(in RGB) = "+ linearColor;