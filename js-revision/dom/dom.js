const button = document.getElementById('btn')
const input = document.getElementById('textElement')

console.log(button)
console.log(input)


button.addEventListener('click',()=>{
    console.log(input.value)
})

