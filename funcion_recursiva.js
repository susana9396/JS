function Fib(n){
    if (n==0 || n==1){
        return n;
    
    }
    else{
        return Fib(n-1) + Fib(n-2);
    }
}

console.log(Fib(3));
console.log(Fib(10));
//serie 1,2,3,5,8,13,21,34,55

//Output=2

//Fib(3)=Fib(n-1)= Fib(3-1)= 2 = Fib(2)=Fib(2-1)=Fib(1)=1    Suma =1
//                                =Fib(2-2)=Fib(0)=0
//                                                                               Resultado=2
//                        
//      =Fib(n-2)= Fib(3-2)= 1 = Fib(1)=1                    Resultado=1
//                  return 1

//Ouput=

//Ejemplo fib(5)
//