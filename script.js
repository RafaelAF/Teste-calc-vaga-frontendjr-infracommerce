const display = document.getElementById('output')
const btns = document.querySelectorAll('.btn div')

let valorInput1 = '';
let valorInput2 = '';

let x = 0;
let y = 0;

let resultado = 0;
let contarVoltas = 0;
let contarClick = 0;

let isOperating = false;
let countDot = 0;

const somar = (x, y) =>{
    if(contarVoltas == 0){
        let x1 = x;
        y = 0;
        valorInput2 = '';
        resultado = x1 + y;
        console.log(resultado)
    }else if(contarVoltas == 1){
        contarVoltas = 2
        let x1 = x;
        x = 0;
        valorInput2 = '';
        resultado = x1 + y;
        display.innerHTML = resultado;
        console.log(resultado)
        
    }else if(contarVoltas == 2){
        let x1 = resultado;
        valorInput2 = '';
        resultado = x1 + y;
        display.innerHTML = resultado;
        console.log(resultado)
    }
    return x + y
}

const subtrair = (x, y) =>{
    if(contarVoltas == 0){
        let x1 = x;
        y = 0;
        valorInput2 = '';
        resultado = x1 - y;
        console.log(resultado)
    }else if(contarVoltas == 1){
        contarVoltas = 2
        let x1 = x;
        x = 0;
        valorInput2 = '';
        resultado = x1 - y;
        display.innerHTML = resultado;
        console.log(resultado)
        
    }else if(contarVoltas == 2){
        let x1 = resultado;
        valorInput2 = '';
        resultado = x1 - y;
        display.innerHTML = resultado;
        console.log(resultado)
    }
    return x - y
}
const multiplicar = (x, y) =>{
    if(contarVoltas == 0){
        let x1 = x;
        y = 0;
        valorInput2 = '';
        resultado = x1 * y;
        console.log(resultado)
    }else if(contarVoltas == 1){
        contarVoltas = 2
        let x1 = x;
        x = 0;
        valorInput2 = '';
        resultado = x1 * y;
        display.innerHTML = resultado;
        console.log(resultado)
        
    }else if(contarVoltas == 2){
        let x1 = resultado;
        valorInput2 = '';
        resultado = x1 * y;
        display.innerHTML = resultado;
        console.log(resultado)
    }
    return x * y
}
const dividir = (x, y) =>{
    if(contarVoltas == 0){
        let x1 = x;
        y = 0;
        valorInput2 = '';
        resultado = x1 / y;
        console.log(resultado)
    }else if(contarVoltas == 1){
        contarVoltas = 2
        let x1 = x;
        x = 0;
        valorInput2 = '';
        resultado = x1 / y;
        display.innerHTML = resultado;
        console.log(resultado)
        
    }else if(contarVoltas == 2){
        let x1 = resultado;
        valorInput2 = '';
        resultado = x1 / y;
        display.innerHTML = resultado;
        console.log(resultado)
    }
    return x / y
}


const resetar = () =>{
    x = 0;
    y = 0;

    valorInput1 = '';
    valorInput2 = '';
    display.innerHTML = '0';
    contarVoltas = 0;
}





btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        switch (e.innerHTML) {
            case '+':
                if(contarVoltas == 0){
                    contarVoltas = 1
                    countDot = 0
                }else{
                    somar(x, y)
                    isOperating = true
                    countDot = 0
                }
                break;
            case '-':
                if(contarVoltas == 0){
                    contarVoltas = 1
                }else{
                    subtrair(x, y)
                    isOperating = true
                }
                
                break;
            case '*':
                if(contarVoltas == 0){
                    contarVoltas = 1
                }else{
                    multiplicar(x, y)
                    isOperating = true
                }
                
                break;
            case '/':
                if(contarVoltas == 0){
                    contarVoltas = 1
                }else{
                    dividir(x, y)
                    isOperating = true
                }
                
                break;
            case '=':
                x = 0;
                y = 0;
                if(resultado){
                    if(isOperating){
                        console.log(resultado)
                    }
                }
                break;
            case 'reset':
                resetar()
                break;
            case 'del':
                // usar o slice para remover o ultimo item
                console.log('deletar ultimo caractere digitado')
                break;
            case '.':
                if(countDot == 0){
                    valorInput1.innerHTML += e.innerHTML; 
                    //countDot = 1
                }
                break;
            default:
                if(contarVoltas == 0){
                    valorInput1 += e.innerHTML;
                    x = parseInt(valorInput1)
                    display.innerHTML = valorInput1;
                }else if(contarVoltas == 1){
                    valorInput2 += e.innerHTML;
                    y = parseInt(valorInput2)
                    display.innerHTML = valorInput2;
                }else{
                    valorInput2 += e.innerHTML;
                    y = parseInt(valorInput2)
                    display.innerHTML = valorInput2;
                }
                //console.log(x ,y);
                break;
        }

        //console.log(x)
    })

    // FUNÇÕES DE ANIMAÇÃO
    e.addEventListener('mousedown', ()=>{
        e.classList.remove('soltado')
        e.classList.add('pressionado')
    })
    e.addEventListener('mouseup', ()=>{
        e.classList.remove('pressionado')
        e.classList.add('soltado')
    })
    e.addEventListener('mouseleave', ()=>{
        e.classList.remove('pressionado')
        e.classList.add('soltado')
    })
})

