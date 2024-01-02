let name;
let gradeOne, gradeTwo, gradeThree;
let prom;

name = prompt("Ingrese su nombre: ").toUpperCase();
gradeOne = parseInt(prompt("Ingrese la primera nota a promediar: "));
gradeTwo = parseInt(prompt("Ingrese la segunda nota a promediar: "));
gradeThree = parseInt(prompt("Ingrese la tercera nota a promediar: "));

if ((gradeOne >=0 && gradeOne <=10) && 
    (gradeTwo >=0 && gradeTwo <=10) && 
    (gradeThree >=0 && gradeThree <=10))
    {
        prom = (gradeOne + gradeTwo + gradeThree) / 3

        if (prom >= 7)
        {
            alert(name + ", ¡felicidades! Has aprobado con un promedio de " + prom);
        }
        else
        {
            alert(name + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + prom);
        }
    }
    else
    {
        alert("Ingreso de notas incorrecto, Estimado(a) " + name + " realice nuevamente el proceso.")
    }