let dom = document

let h1 = document.getElementbyID("titulo");

function submeter() {
    let nome = document.getElementbyID("nome").value;
    let cpf = document.getElementbyID("cpf").value;
    let idade = documenet.getElementbyID("idade").value;
    
    console.log(cpf);
    console.log(validaCPF(cpf));

}

function validaCPF(cpf){
    if(cpf == ""){
        alert("Campo CPF não pode ser vazio");
        return false;
    }
    
    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)){
        alert("CPF não pode conter letras");
        return false;

    }
    
    if(/^[\d.-]+$/.test(cpf)){
        alert("CPF só pode conter números, '.' ou '-'");
        return false;
    }

    if(cpf.length != 11 && cpf.length != 14){
        alert("Formato inválido");
        return false;
    }
    
    
    // Continuar validação
    // Formatos CPFs = válidos
    // 123.456.789-10
    // 12345678910



    return true;
}