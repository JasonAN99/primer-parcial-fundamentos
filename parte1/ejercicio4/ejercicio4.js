// Imprime tablas de multiplicar 

for (let i = 0; i <= 10 ; i++) {
    for (let j = 0; j <= 10 ; j++) {
        let resultado = i * j;
        //alert (i + " * " + j + " = " + resultado)
        document.write (i + " * " + j + " = " + resultado)
        document.write ('<br>')
    }
    
}

/* 

salida: 

0 * 1 = 0
0 * 2 = 0

1*1 = 1
1*2 = 2 

2*1 = 2
2*2 = 4

*/ 