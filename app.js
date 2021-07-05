


alert('welcome to Robert Greene website');
var input = prompt('which Book Do You like 1- power 2-strategy by entering the number');

function robertGreene(){



while(input != '1' && input!='2' ){
  input = prompt('please answer with 1 or 2 ONLY!!!!')
  console.log(input);
  document.write('you like' + input)
}
 

 var numof =prompt(' how many times '+ input +' do you want to see ');
 
  for (var i=0 ; i< numof ; i++){

    if(input == '1')
{  

     document.write( '<img src="https://images-na.ssl-images-amazon.com/images/I/71951W96oWL.jpg" alt="Power">')
 }
   
      else if(input == '2'){




        document.write( '<img src="https://images-na.ssl-images-amazon.com/images/I/61A2egVtR1L.jpg"  alt="The art">')
 
  }



}

 

if(input == '1')
{  alert('join the club')
 }
else if(input == '2'){
  alert('good')

}
else{
alert('only 1 or 2')}

}

robertGreene();
var stars =prompt('how many stars do u rate our website')

starsfunction(stars);
function starsfunction(num){





 for (var i=0 ; i< num; i++){

      

     document.write( '<img src="https://image.shutterstock.com/image-vector/five-pointed-yellow-star-icon-260nw-543076969.jpg">')
 
 }
}
