let n = prompt ("Digite un número");
let m = n % 10;
let contador = 0;

for(let i = 0; i <= n; i++) {
    if(i % 10 == m)
        contador = contador + 1;
}

alert(contador);