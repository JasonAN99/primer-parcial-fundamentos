let nota1 = prompt ("Digite la nota del primer trimestre");
let nota2 = prompt ("Digite la nota del segundo trimestre");
let nota3 = prompt ("Digite la nota del tercer trimestre");

if (nota1 <= 100 && nota2 <= 100 && nota3 <= 100 && nota1 >= 0 && nota2 >= 0 && nota3 >= 0){
    let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    if (promedio == 100){
        alert ("Su promedio es: " + promedio + ". Excelente! te ganaste un abrazo")
    }else if (promedio > 85 && promedio <= 99){
        alert ("Su promedio es: " + promedio + ". Muy bien!")
    }else if (promedio > 70 && promedio <= 85){
        alert ("Su promedio es: " + promedio + ". No esta mal!")
    }else if (promedio >= 65 && promedio < 70){
        alert ("Su promedio es: " + promedio + ". Pasó raspando!")
    }
    else
    {
        alert ("Su promedio es: " + promedio + ". Está quedado :(")
    }          
}
else
{
    alert ("Por favor digite una nota válida entre 0 y 100.");
}