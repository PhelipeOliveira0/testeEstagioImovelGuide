let visivel = 0;

function abrirModal(){
    let modal = document.querySelector(".corpo__modal");
    modal.classList.add("corpo__modal__visivel");
}

function fecharModal(){
    let modal = document.querySelector(".corpo__modal");
    modal.classList.remove("corpo__modal__visivel");
}

function menuVisivel(){
    let menu = document.querySelector(".header__mobile");
    if(visivel === 0){
        visivel = 1;
        menu.classList.add("header__mobile__visivel");
    }else{
        visivel = 0;
        menu.classList.remove("header__mobile__visivel");
    }
}