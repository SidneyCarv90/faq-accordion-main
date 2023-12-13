/*
1 - Identificar os botões Minus e os parágrafos
2 - Esconder o Botão Minus e o conteúdo do parágrafo
3 - Identificar os botões Plus
4 - Identificar o clique nos botões Plus
5 - Esconder o botão Plus e exibir o Botão Minus e o conteúdo do parágrafo quando clicar em um deles
*/

const menuAtivado = document.querySelectorAll(".plus")
const menuDesativado = document.querySelectorAll(".minus")
const conteudoParagrafo = document.querySelectorAll("p")

for (let i = 0; i < menuAtivado.length; i++){
    menuAtivado[i].addEventListener("click", function(){
        menuDesativado[i].classList.remove("desativado")
        menuAtivado[i].classList.add("desativado")
        conteudoParagrafo[i].classList.remove("desativado")      
    })
    menuDesativado[i].addEventListener("click", function(){
        menuDesativado[i].classList.add("desativado") 
        menuAtivado[i].classList.remove("desativado")
        conteudoParagrafo[i].classList.add("desativado")
    })
}

