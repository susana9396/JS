// Obtén del 1 al 255 - Escribe una función que devuelve un array con todos los número del 1 al 255.

function array (){
    var arr=[];
    for(var i=1; i<256; i++){
        arr.push(i);

    }
    return arr;
}
console.log(array());

//Consigue pares hasta 1000 - Escribe una función que entregue la suma de todos los número pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function sum_event(){
    var sum=0;
    for(i=1; i<1001; i++){
        if(i%2===0){
          sum+=i;
        }
    }
    return sum;
}
console.log(sum_event());

//Suma impares hasta 5000 - Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sum_5000(){
    var sum=0;
    for(i=1;i<5001;i++){
        if(i%2!==0){
            sum+=i
        }
    }
    return sum;
}

console.log(sum_5000());

//Itera un arrayEscribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] returns 8. [-5,2,5,12] returns 14). 

function iter(arr){
    var sum=0;
    for(i=0; i<arr.length;i++){
        sum=sum+arr[i];

    }
    return sum;
}
console.log(iter([1,2,3,4]));

// Encuentra el mayor (max) Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function max(arr){
    var max=arr[0];
    for(i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];

        }
    }
    return max;
}
console.log(max([1,2,3]));

//Encuentra el promedio (avg) Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function avg(arr){
    var avg=0;
    for(i=0; i<arr.length;i++){
        avg+=arr[i];

    }
    avg=avg/arr.length;
    return avg;
}
console.log(avg([1,2,3]));

// Array de impares Escribe una funci[on que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function impar(){
    var arr=[];
    for(i=1; i<51; i++){
        if (i%2!==0){
            arr.push(i);

        }
    }
    return arr;
}
console.log(impar([1,2,3]));

//Mayor que Y - Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mmayor(arr,y){
    var count=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}
console.log(mmayor([1,9,3],2));

//Cuadrados Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadrado(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i]+arr[i];
      
    }
    return arr
}
console.log(cuadrado([1,2,3]));

// Negativos - Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function neg(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(neg([1,5,10,-2]));

// Max/Min/Avg - Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function maxminavg(arr){
    var arrnew=[];
    var sum=0;
    var max=arr[0];
    var min=arr[0];
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
        if(max<arr[i]){
            max=arr[i];
        }else{
            min=arr[i];
        }
        
    }
    sum=sum/arr.length;
    arrnew[0]=max;
    arrnew[1]=min;
    arrnew[2]=sum;
    return arrnew;

}
console.log(maxminavg( [1,5,10,-2]));

//Intercambia Valores -Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function cambio(arr){
    var arrnew=arr;
    var first=arr[0];
    var last=arr[0];
    for(i=0;i<arr.length;i++){
        if(i===arr.length-1){
            last=arr[i];

        }
    }
    arrnew[0]=last;
    arrnew[arr.length-1]=first;
    return arrnew;
}
console.log(cambio([1,2,3]));

//De Número a String Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function string(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;
}

console.log(string([-1,-3,2]));