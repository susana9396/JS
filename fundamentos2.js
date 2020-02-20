/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string 
“big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

function grande (arr){
    for(i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i]='big';
        }
    }
   return arr
}

console.log(grande([-1,3,5,-5]));

/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función
debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */

function imprimir(arr){
    arr2=arr[0];
    arr3=arr[0];
    for(i=0; i<arr.length;i++){
        if(arr2>arr[i]){
            arr2=arr[i]
        }else if (arr3<arr[i]){
            arr3=arr[i];
        }
    }
   console.log(arr2)
   return arr3
}
console.log(imprimir([-1,12,5,-9]));

/*Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir
 (print) el penúltimo valor y devolver (return) el primer valor impar.*/
 function impar(arr){
    arr2=0
    for(i=0; i<arr.length;i++){
        if(arr[i]%2!==0){
            arr2=arr[i]
            i=arr.length;
        }
    }
   arr3=arr[arr.length-2];
   console.log(arr3)
   return arr2
}
console.log(impar([13,5,7,9,5,8,30]));

//o
function impar(arr){
    arr2=0
    arr3=[];
    x=0
    for(i=0; i<arr.length;i++){
        if(arr[i]%2!==0){
            arr2=arr[i]
            i=arr.length;
        }
    }
    for(i=0; i<arr.length;i++){
        if(arr[i]%2!==0){
            arr3[x]=arr[i]
            x++;      
        }
    }
   arr3=arr3[arr3.length-2]
   console.log(arr3)
   return arr2
}
console.log(impar([13,5,7,9,5,8,3,0,7]));




/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, 
doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */
function dup(arr){
    arr2=[];
    for(i=0; i<arr.length;i++){
            arr2[i]=arr[i]+arr[i];
        }
    
   return arr2
}
console.log(dup([1,2,3]));

/*Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de
valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/
function dup(arr){
    conta=0
    for(i=0; i<arr.length;i++){
         if(arr[i]>0){
             conta=conta+1
         }
     }
     arr.push(conta);
    
   return arr
}
console.log(dup([-1,1,1,1]));

/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/
function pi(arr){
  arr2=[];
  arr3=[];
  x=0;
  impar=0;
  par=0;
  for(i=0; i<arr.length;i++){
       if (arr[i]%2!==0){
          impar=impar+1;
          if(impar===3){
           arr2[i]='“¡Qué imparcial!”';
           impar=0;
             par=0;
          }
       }
       else if(arr[i]%2===0){
           par=par+1;
           if(par===3){
             arr2[i]='“¡Es para bien!”';
             par=0;
             impar=0;
           } 
       }
  } 
for(i=0; i<arr2.length;i++){
       if (arr2[i]!==undefined){
         arr3[x]=arr2[i];
         x++;
       }
}
return arr3;
}
console.log(pi([1,5,7,9,2,6,6,5,9,9,9,5,8,8,8,6,4,4,7]));

//o
function pi(arr){
    arr2=[];
   arr3=[];
    x=0;
    impar=0;
    par=0;
    for(i=0; i<arr.length;i++){
         if (arr[i]%2!==0){
            impar=impar+1;
            if(impar===3){
             arr2[i]='“¡Qué imparcial!”';
             impar=0;
               par=0;
            }
         }
         else if(arr[i]%2===0){
             par=par+1;
             if(par===3){
               arr2[i]='“¡Es para bien!”';
               par=0;
               impar=0;
             } 
         }
    } 
  for(i=0; i<arr2.length;i++){
         if (arr2[i]!==undefined){
           arr3[x]=arr2[i];
           x++;
         }
  }
  return arr3;
}
console.log(pi([1,5,7,9,2,6,6,5,9,9,9,5,8,8,8,6,4,4,7]));

/*Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a 
aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr.*/
function indice(arr){
 
    for(i=0; i<arr.length;i++){
         if (arr[i]%2!==0){
           arr[i]=1
         }
    }
  return arr;
}
console.log(indice([1,7,9,6,5,9,5,8,6,4,4,7]));

/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/
function long(arr){
    arr2=[];
    x=0
    y=0
       for(i=0; i<arr.length ;i++){
            for(j=0; j<arr[i].length ;j++){
              x=x+1; 
            }
         y=y+1
         arr2[y]=x;
         x=0;
       }
     for(i=1; i<arr.length ;i++){    
         arr[i]=arr2[i];
   
       }
     return arr;
   }
   console.log(long(['programar','dojo', 'genial']));

/*Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno.
 No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. */
 function siete(arr){
    arr2=[];
   
       for(i=0; i<arr.length ;i++){
           arr2[i]=arr[i]+7;
       }
    
     return arr2;
   }
   console.log(siete([1,2,3]));

/*Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) 
devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío.
(Pista: necesitarás intercambiar (swap) valores).*/

function inv(arr){
    x=0
    y=arr[arr.length-1]
      for(i=arr.length-1; i>arr.length/2 >>0 ;i--){
       arr[i]=arr[x];
       arr[x]=y
          x++;
          y--
       
      }
      
    return arr;
  }
  console.log(inv([1,2,3,4,5,6,7,8,9]));
/*Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/
function neg(arr){
    arr2=[];
        for(i=0; i<arr.length ;i++){
            arr2[i]=arr[i]-(arr[i]+arr[i]);
          
        }
        
      return arr2;
    }
    console.log(neg([1,2,3,4,5,6,7,8,9,10,12]));

/*Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores 
sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */

function comida(arr){
    
  for(i=0; i<arr.length ;i++){
    if(arr[i]==='comida' || arr[i]==='Comida'){
      
      console.log('Yummi')
      }else {
        console.log('tengo hambre')
      }
   
  }

 return;
}
console.log(comida(['comida', 3,'nada',56,'Comida']));



/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. cambiaHaciaElCentro([1,2,3,4,5,6])
cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. */

function centro(arr){
  x=0;
  y=arr.length-1;

    for(i=0; i<arr.length/2 ;i=i+2){
          t=arr[i];
          arr[i]=arr[y];
          arr[y]=t;
          console.log(i);
          console.log(y);
          console.log(arr.length);        
          y=y-2-i;
      
     
    
    }
    
  return arr;
}
console.log(centro([1,2,3,4,5,6]));
console.log(centro([true, 42, 'Ada', 2, 'pizza']));


/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número
num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].**/

  
function mult(arr){
  arr1=arr[0];
   y=arr[1];
   for(i=0; i<arr1.length ;i++){
    arr1[i]=arr1[i]*y;
    
   }
   
 return arr1;
}
console.log(mult([[1,2,3], 3]));
