let titulo = document.querySelector("#titulo");
let texto = document.querySelector("#texto");
let botao = document.querySelector("#cadastrar");
let container = document.querySelector(".container")
let secaoNoticias = document.querySelector(".conteudo");
let linkCadastrar = document.querySelector('a[href^="#"]')


function addNoticia(){
    let tituloValue = titulo.value;
    let textoValue = texto.value;
    if(tituloValue && textoValue !== ""){

        let novaNoticia = `<div class="noticia">
                <h2>${tituloValue}</h2>
                <div class="texto">
                    <p>${textoValue}</p>
                </div>
                <div class="centraliza-botao">
                    <button>Acessar</button>
                </div>
        </div>`

        secaoNoticias.innerHTML = novaNoticia + secaoNoticias.innerHTML
        titulo.value = ""
        texto.value = ""
    }
}



botao.addEventListener("click", addNoticia);



function scrollSuave(event){
    event.preventDefault();
    href = linkCadastrar.getAttribute("href");
    cadastro = document.querySelector(href)
    cadastro.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

linkCadastrar.addEventListener('click', scrollSuave);












