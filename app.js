



alert('welcome to Robert Greene website');
var input = prompt('which Book Do You like 1- power 2-strategy by entering the number');


while(input != '1' && input!='2' ){
  input = prompt('please answer with 1 or 2 ONLY!!!!')
  console.log(input);
  document.write('you like' + input)
}
 
 

if(input == '1')
{  alert('join the club')
 }
else if(input == '2'){
  alert('good')

}
else{
alert('only 1 or 2')}