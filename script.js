const display = document.getElementById('output')
const btns = document.querySelectorAll('.btn div')
const memory = document.getElementById('memory')

let valorInput1 = '';
let valorInput2 = '';

let operator = '';

let x = 0;
let y = 0;

let resultado = 0;
let contarVoltas = 1;
let contarClick = 0;


const somar = (x, y) =>{
    return x + y
}

const subtrair = (x, y) =>{
    return x - y
}
const multiplicar = (x, y) =>{
    return x * y
}
const dividir = (x, y) =>{
    return x / y
}


const resetar = () =>{
    x = 0;
    y = 0;
    operator = '';
    valorInput1 = '';
    valorInput2 = '';
    display.value = 0;
    memory.innerHTML = '';
    contarVoltas = 1;
    contarClick = 0;
    resultado = 0;
}





btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        switch (e.innerHTML) {
            case '+':
                contarClick += 1;
                if(contarClick == 1){
                    operator = '+'
                    if(x){
                        memory.innerHTML = `${x} ${operator}`
                        display.value = 0;
                        contarVoltas = 2;
                        
                    }
                }
                if(contarClick > 1){
                    if(contarVoltas == 2){
                        resultado = somar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){

                }
                
                break;
            case '-':
                contarClick += 1;
                if(contarClick == 1){
                    operator = '-'
                    if(x){
                        memory.innerHTML = `${x} ${operator}`
                        display.value = 0;
                        contarVoltas = 2;
                        
                    }
                }
                if(contarClick > 1){
                    if(contarVoltas == 2){
                        resultado = subtrair(x, y);
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){

                }
                
                break;
            case '*':
                contarClick += 1;
                if(contarClick == 1){
                    operator = '*'
                    if(x){
                        memory.innerHTML = `${x} ${operator}`
                        display.value = 0;
                        contarVoltas = 2;
                        
                    }
                }
                if(contarClick > 1){
                    if(contarVoltas == 2){
                        resultado = multiplicar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){

                }
                
                break;
            case '/':
                contarClick += 1;
                if(contarClick == 1){
                    operator = '/'
                    if(x){
                        memory.innerHTML = `${x} ${operator}`
                        display.value = 0;
                        contarVoltas = 2;
                        
                    }
                }
                if(contarClick > 1){
                    if(contarVoltas == 2){
                        resultado = dividir(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){

                }
                
                break;
            case '=':
                if(operator == '+' && contarVoltas == 2){
                    display.value = somar(x, y);
                    memory.innerHTML = '';
                    x = 0;
                    contarVoltas = 3;
                    contarClick = 0;
                    //console.log(contarVoltas)
                }else if(operator == '-' && contarVoltas == 2){
                    display.value = subtrair(x, y);
                    memory.innerHTML = '';
                    contarVoltas = 3;
                    contarClick = 0;
                }else if(operator == '*' && contarVoltas == 2){
                    display.value = multiplicar(x, y);
                    memory.innerHTML = '';
                    contarVoltas = 3;
                    contarClick = 0;
                }else if(operator == '/' && contarVoltas == 2){
                    display.value = dividir(x, y);
                    memory.innerHTML = '';
                    contarVoltas = 3;
                    contarClick = 0;
                }
                
                break;
            case 'reset':
                resetar()
                break;
            case 'del':
                if(display.value == '' || display.value != 0){
                    if(contarVoltas == 1){

                        valorInput1 = parseFloat(display.value.slice(0, -1));
                        x = valorInput1

                        display.value = parseFloat(x);
                    }else if(contarVoltas == 2){
                        valorInput2 = parseFloat(display.value.slice(0, -1));
                        y = parseFloat(display.value.slice(0, -1));
                        display.value = parseFloat(y);
                    }
                }
                break;
            case ',':
                    //countDot = 1
                    if(contarVoltas == 1){
                        x += e.innerHTML
                        display.value = x;
                    }else if(contarVoltas == 2){
                        valorInput2 += e.innerHTML;
                        y = parseFloat(valorInput2)
                        display.value = y;
                    }
                break;
            default:
                if(contarVoltas == 1){
                    valorInput1 += e.innerHTML;
                    x = parseFloat(valorInput1)
                    display.value = x;
                }else if(contarVoltas == 2){
                    valorInput2 += e.innerHTML;
                    y = parseFloat(valorInput2)
                    display.value = y;
                }else if(contarVoltas == 3){
                    valorInput1 = e.innerHTML;
                    display.value = parseFloat(valorInput1);
                    
                    valorInput2 = '';
                    x = 0;
                    y = 0;
                    contarVoltas = 1;
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

