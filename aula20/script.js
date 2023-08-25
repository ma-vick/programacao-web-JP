function minhaFunc1(){
    let pai = document.querySelector('main');
    pai.innerHTML += '<p>esse é um parágrafo inserido pela minha função.</p>';
}

minhaFunc1();

function trocaConteudoNoId(id, conteudo){
    let element = document.getElementById(id);
    element.innerHTML = conteudo;
}