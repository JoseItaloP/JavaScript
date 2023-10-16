const ptemp=document.getElementById("p_temp")
const pnivel=document.getElementById("p_nivel")
const ppress=document.getElementById("p_press")
const endpoint="https://treino01.joseitalo3.repl.co"
fetch(endpoint).then(res=>res.json()).then(dados=>{
    console.log(dados)
    ptemp.innerHTML.dados.temp
    pnivel.innerHTML.dados.nivel
    ppress.innerHTML.dados.press
})
