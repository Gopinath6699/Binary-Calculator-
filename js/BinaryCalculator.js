function action(e){
    var btn = e.target || e.srcElement
    let val = document.getElementById(btn.id).innerHTML
    document.getElementById('res').append(val)
}

document.getElementById('btn0').onclick = action
document.getElementById('btn1').onclick = action
document.getElementById('btnSum').onclick = action
document.getElementById('btnSub').onclick = action
document.getElementById('btnMul').onclick = action
document.getElementById('btnDiv').onclick = action


document.getElementById('btnClr').onclick =  () => {
    document.getElementById('res').innerHTML = ''
}
document.getElementById('btnEql').onclick =  () => {
    let val = document.getElementById('res').innerHTML
    let x = val.split(/[+*-/]/)
    let symbol = val.split(/\d+/)
    let digit = []
    let string1,string2
    for(let i of x){
       digit.push(parseInt(i,2)) 
    }   
    string2 = digit.join(symbol)
    string1 = string2.split(",")
    let z = string1.join("")
    let y = eval(z)
    document.getElementById('res').innerHTML = (y >>> 0).toString(2)         
}

document.getElementById('btnCe').onclick = () => {
   let del =  document.getElementById('res').innerHTML
   document.getElementById('res').innerHTML = del.slice(0,del.length-1)

}