const display = document.getElementById('output')
const btns = document.querySelectorAll('.btn .number')
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = somar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                        contarVoltas == 3;
                    }
                    
                }
                if(contarClick == 3){
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
                    contarVoltas = 1;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = subtrair(x, y);
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = multiplicar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = dividir(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
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
                        if(valorInput1 > 0){
                            x = valorInput1
                            display.value = parseFloat(x);
                        }else{
                            display.value = 0;
                        }

                        
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

/*document.addEventListener('keypress', (e)=>{
    switch (e.key) {
        case '1':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '2':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '3':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '4':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '5':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '6':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '7':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '8':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '9':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
            break;
        case '0':
            if(contarVoltas == 1){
                valorInput1 += e.key;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = dividir(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
                }
            break;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = somar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                        contarVoltas == 3;
                    }
                    
                }
                if(contarClick == 3){
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
                    contarVoltas = 1;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = subtrair(x, y);
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
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
                if(contarClick == 2){
                    if(contarVoltas == 2){
                        resultado = multiplicar(x, y)
                        display.value = resultado;
                        memory.innerHTML = ''
                        x = resultado
                    }
                    
                }
                if(contarClick == 3){
                    contarVoltas = 1;
                    memory.innerHTML = `${x} ${operator}`
                    display.value = resultado;
                }
            break;
    
        default:
            
            break;
    }
})
document.addEventListener('keyup', (e)=>{
    switch (e.key) {
        case '1':
            btns[0].classList.remove('pressionado')
            btns[0].classList.add('soltado')
            break;
        case '2':
            btns[1].classList.remove('pressionado')
            btns[1].classList.add('soltado')
            break;
        case '3':
            btns[2].classList.remove('pressionado')
            btns[2].classList.add('soltado')
            break;
        case '4':
            btns[3].classList.remove('pressionado')
            btns[3].classList.add('soltado')
            break;
        case '5':
            btns[4].classList.remove('pressionado')
            btns[4].classList.add('soltado')
            break;
        case '6':
            btns[5].classList.remove('pressionado')
            btns[5].classList.add('soltado')
            break;
        case '7':
            btns[6].classList.remove('pressionado')
            btns[6].classList.add('soltado')
            break;
        case '8':
            btns[7].classList.remove('pressionado')
            btns[7].classList.add('soltado')
            break;
        case '9':
            btns[8].classList.remove('pressionado')
            btns[8].classList.add('soltado')
            break;
        case '0':
            btns[9].classList.remove('pressionado')
            btns[9].classList.add('soltado')
            break;
        case '=':
            btns[14].classList.remove('pressionado')
            btns[14].classList.add('soltado')
            break;
        case '/':
            btns[13].classList.remove('pressionado')
            btns[13].classList.add('soltado')
            break;
        case '+':
            btns[10].classList.remove('pressionado')
            btns[10].classList.add('soltado')
            break;
        case '-':
            btns[11].classList.remove('pressionado')
            btns[11].classList.add('soltado')
            break;
        case '*':
            btns[12].classList.remove('pressionado')
            btns[12].classList.add('soltado')
            break;
    
        default:
            
            break;
    }
})
document.addEventListener('keydown', (e)=>{
    switch (e.key) {
        case '1':
            btns[0].classList.remove('soltado')
            btns[0].classList.add('pressionado')
            break;
        case '2':
            btns[1].classList.remove('soltado')
            btns[1].classList.add('pressionado')
            break;
        case '3':
            btns[2].classList.remove('soltado')
            btns[2].classList.add('pressionado')
            break;
        case '4':
            btns[3].classList.remove('soltado')
            btns[3].classList.add('pressionado')
            break;
        case '5':
            btns[4].classList.remove('soltado')
            btns[4].classList.add('pressionado')
            break;
        case '6':
            btns[5].classList.remove('soltado')
            btns[5].classList.add('pressionado')
            break;
        case '7':
            btns[6].classList.remove('soltado')
            btns[6].classList.add('pressionado')
            break;
        case '8':
            btns[7].classList.remove('soltado')
            btns[7].classList.add('pressionado')
            break;
        case '9':
            btns[8].classList.remove('soltado')
            btns[8].classList.add('pressionado')
            break;
        case '0':
            btns[9].classList.remove('soltado')
            btns[9].classList.add('pressionado')
            break;
        case '=':
            btns[14].classList.remove('soltado')
            btns[14].classList.add('pressionado')
            break;
        case '/':
            btns[13].classList.remove('soltado')
            btns[13].classList.add('pressionado')
            break;
        case '+':
            btns[10].classList.remove('soltado')
            btns[10].classList.add('pressionado')
            break;
        case '-':
            btns[11].classList.remove('soltado')
            btns[11].classList.add('pressionado')
            break;
        case '*':
            btns[12].classList.remove('soltado')
            btns[12].classList.add('pressionado')
            break;
    
        default:
            
            break;
    }
})*/