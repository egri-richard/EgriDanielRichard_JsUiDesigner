function txtCheck() {
    let retBool = true

    if(document.getElementById("textIn").value == "") {
        retBool = false
        document.getElementById("txtErrorMsg").classList.replace("hide", "show")
        console.log(false)
    } else {
        document.getElementById("txtErrorMsg").classList.replace("show", "hide")
        console.log(true)
    }

    return retBool
}

function Change() {
    let check = txtCheck

    if (check) {
        let outDiv = document.getElementById("outDiv")
        outDiv.innerHTML = ""
        
        let output = document.createElement("div");
        
        let text = document.getElementById("textIn").value
        let nodeParent = document.createElement("p")
        let node = document.createTextNode(text)
        nodeParent.appendChild(node)

        let txtSize = document.getElementById("sizeIn").value

        let txtColor = document.getElementById("textColorIn").value

        let bgColor = document.getElementById("bgColorIn").value

        outDiv.style = `color: ${txtColor}; background-color: ${bgColor}; font-size: ${txtSize}pt`

        output.appendChild(nodeParent)
        outDiv.appendChild(output)
    }
}

function reset() {
    document.getElementById("outDiv").innerHTML = ""
}

function init() {
    document.getElementById("textIn").addEventListener("input", Change)
    document.getElementById("textIn").addEventListener("input", txtCheck)
    document.getElementById("sizeIn").addEventListener("input", Change)
    document.getElementById("textColorIn").addEventListener("input", Change)
    document.getElementById("bgColorIn").addEventListener("input", Change)
    document.getElementById("submitBtn").addEventListener("click", reset)
}

document.addEventListener("DOMContentLoaded", init)