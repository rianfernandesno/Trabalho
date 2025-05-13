//Esse script serve para ocultar os contéudos e exibir apenas o necessário

//Oculta todas as seções
function hideSections(){
    var section = document.querySelectorAll('section');
    section.forEach((section) => {
        section.style.display = 'none';
    })
}

//Mostra a seção através do id
function showSection(id){
    hideSections();
    document.getElementById(id).style.display = 'block';
}

//Carrega a pagina e recupera o id através do evento click
window.onload =  function(){
    var links = document.querySelectorAll('nav ul li a')
    links.forEach((link)=>{
        link.addEventListener('click', (event)=>{
            event.preventDefault();

            //substring serve para remover a # do atributo
            var targetId = link.getAttribute('href').substring(1)
            showSection(targetId);
        })
    })
}

//Chama a função base de exibição do site
showSection('sobre-mim');