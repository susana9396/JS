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
// suma de las dos anterqiores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la
// secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
//Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 
//2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 
//13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a 
//introducir este concepto en la Parte 2 de esta actividad. 
function fib(n){
  a = 1;
  b = 0; 
  temp=0;

  while (n > 0){
    temp = a;  
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

console.log(fib(20));

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
<<<<<<< HEAD
// Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].
=======
// Convierte [4, "Ulysses", 42, false]   a  ggd  [4,4, "Ulysses", 42, 42, false].
>>>>>>> 11f4eacb7c451a1ccb2024d2ae60b7bd8ef2848b

function dup(arr){
  array1 = [];
  y=0;
  for (i=0; i<arr.length; i=i+1){
      if (i%2===0){
        array1.push(arr[i]);
        concat = arr.concat(array1);
        arr1=concat
        
      }
  }
  x=0;
  console.log(arr1)
  console.log(array1)
  z=2;
  for(i=0; i<arr1.length; i++){
  if (i!==z){
    arr1[i]=array1[y]
    x=x+1;  
    }else {
      x=0;
      y=y+1;
      z=z+3;
      
    }
  }
  v=1
  console.log(arr1)
  for(i=2; i<arr1.length; i=i+3){
    
   arr1[i]=arr[v]
    v=v+2;
  }  

  return arr1;
}



<<<<<<< HEAD
console.log(dup([4,'Ulysses', 42, false]));
=======
console.log(dup([4,'Ulysses', 42, false]));
>>>>>>> 11f4eacb7c451a1ccb2024d2ae60b7bd8ef2848b
