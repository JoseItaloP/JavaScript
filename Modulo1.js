import {contatos} from './Modulo2.js'

let contato = {
    getTodosContatoa:function(){
        return contatos
    },
    getContato:function(i){
        return contatos[i]
    },
    addContato:function(novoContato,DestinoDOM){
        const div=document.createElement("div")
        div.setAttribute("class", "contato")
        const p_nome=document.createElement("p")
        p_nome.innerHTML=novoContato.nome
        const p_telefone=document.createElement("p")
        p_telefone.innerHTML=novoContato.telefone
        const p_email=document.createElement("p")
        p_email.innerHTML=novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        DestinoDOM.appendChild(div)
    }
}

export default contato