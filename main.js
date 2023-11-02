import colors from "./palette.json"

const makeCard = (obj) => {
    return `<div>${obj["palettetitle"]}</div>`
    }
    

const handleEvent = (e) => {
    e.preventDefault()
    const form = document.getElementById("palette-form")
    const formData = new FormData(form)
    const obj = Object.fromEntries(formData)
    console.log(obj)
    console.log(obj.color)

    console.log(colors)

    const li = document.createElement("li")
    li.innerHTML = makeCard(obj)
    
    const ul = document.getElementById("palette-list")
    
    ul.appendChild(li)
    
    
    
}

const button = document.getElementById("button")


button.addEventListener("click", handleEvent)