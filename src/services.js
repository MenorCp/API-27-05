export function corPrimaria(cor){
    if(cor == "verde"){
        return "Pode Passar"
    }
    else if(cor == "vermelho" || cor == "amarelo"){
        return "Aguarde"
    }
    else{
        return "invalido"
    }
}

export function diaSem(dia){
    if(dia == 0)
        return "Domingo";

    else if(dia == 1)
        return "Segunda";

    else if(dia == 2)
        return "Terça";

    else if(dia == 3)
        return "Quarta";

    else if(dia == 4)
        return "Quinta";

    else if(dia == 5)
        return "Sexta";
        
    else if(dia == 6)
        return "Sabado";
}

export function fatorial(numero){
    let a = 1;
    for(let i = numero; i > 1 ; i--){
        a = a * i;
    }
    return a;
}

