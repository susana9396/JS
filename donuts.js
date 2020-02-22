var donuts = [
    {
      frosting: 'glazed',
      style: 'cake',
      type: 'old fashioned',
      age: '45',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'regular',
      age: '5',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'jelly filled',
      age: '1',
      time: 'seconds'
    }
  ];
  
  for (let i=0; i< donuts.length; i++ ){
    console.log("DONUTS:" + donuts[i].type,"Dura viva"+ donuts[i].age, donuts[i].type)
   
  }
  
  for (var i in donuts){
    console.log(donuts[i].type)
  }
  
  function printType(d){
    console.log(d.type);
  } 
    donuts.forEach(printType);