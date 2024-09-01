function mascaraCpf(){
    let inputCpf = document.getElementById("mandarCpf");
    let cpf = inputCpf.value;
    cpf=cpf.replace(/\D/g,"");                  
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");      
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");       
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); 
    inputCpf.value = cpf;
}

function mascaraTelefone(){
    let inputTelefone = document.getElementById("mandarTelefone");
    let telefone = inputTelefone.value;
    telefone = telefone.replace(/\D/g,'')
    telefone = telefone.replace(/(\d{2})(\d)/,"($1) $2")
    telefone = telefone.replace(/(\d)(\d{4})$/,"$1-$2")
    inputTelefone.value = telefone;
}