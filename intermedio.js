//Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos 
//(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
function sigma (num){
    sum=0;
      for(i=1; i<=num;i++){
           sum=sum+i;    
      }
     return sum;
  }
  
  console.log(sigma(3));


//Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos
// los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
function factorial (num){
    mult=num
      for(i=num-1; i>0;i--){
           mult=mult*i;    
      }
     return mult;
  }
  
  console.log(factorial(5));

//Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la
// suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la
// secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
//Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 
//2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 
//13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a 
//introducir este concepto en la Parte 2 de esta actividad. 
function Fib(n){
    if (n==0 || n==1){
        return n;
    
    }
    else{
        return Fib(n-1) + Fib(n-2);
    }
}

console.log(Fib(3));


//Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es 
//muy pequeño, devuelve null.  
function penultimo (arr){
    ult=0
      for(i=0; i<arr.length-1;i++){
           ult=arr[i];     
    
      }
      if(ult===0){
         ult=null
      }
     return ult;
  }
  console.log(penultimo([42,true,4,'Liam',7]));
//Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño, devuelve null. 
function devuelve (arr,x){
    n=0
      for(i=0; i<arr.length;i++){
         if(i===x){
           n=arr[i+1]; 
          }
         else if(n===0){
           n=null
         }
  }     
      
     return n;
  }
  
  console.log(devuelve([5,2,3,6,4,9,7],3));

//Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
function segundo (arr){
    max=0
    max2=0
      for(i=0; i<arr.length;i++){
          if (max<arr[i]){
             max=arr[i];
      }
      }
       for(i=0; i<arr.length;i++){
          if (max2<arr[i] && max!==arr[i]){
             max2=arr[i];
      }
       }
     return max2;
  }
  console.log(segundo([42,1,4,3.14,7]));
//Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original.
// Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].

function dup(arr){
    array1 = [];
      
      for (i=0; i<arr.length; i=i+1){
      if (i%2===0){
        array1.push(arr[i]);
        concat = array1.concat(arr);
        arr1=concat
        
      }
      }
      x=0;
    for(i=0; i<arr.length; i=i+2){
      if (i%2===0){
        arr[i]=array1[x]
        x=x+1
        }
      }
    
      y=0
    for(i=1; i<arr.length; i=i+2){
        arr[i]=array1[y]
        y=y+1
      }  
    
      y=0
    
      
      return arr1;
    }
    console.log(dup([4,'Ulysses', 42, false]));
    console.log(dup([4,'Ulysses', 42, false,'shj',true]));