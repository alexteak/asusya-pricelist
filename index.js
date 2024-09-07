const button1 = document.getElementById('main');
const button2 = document.getElementById('pricelist');
const button3 = document.getElementById('tos');
let active = "main"
button1.addEventListener('click', ()=>{
    active = main
    document.getElementById("mainpage").click()
})
button2.addEventListener('click', ()=>{
    active = pricelist
    document.getElementById("pricelistpage").click()
})
button3.addEventListener('click', ()=>{
    active = tos
    document.getElementById("tospage").click()
})

