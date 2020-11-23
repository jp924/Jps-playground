//  *
// ***
//*****
/*const rows = 3
let esp = ' '
for (let i=rows; i>0; i--){
  console.log(' ')
}*/
const drawLine = (columns, asterisk) =>{
let sum = '';
for (let i=1; i<columns; i++){
  sum = sum + ' ';
}
sum = sum + asterisk
console.log(sum)
}
drawLine(3,'*')
drawLine(2,'***')
drawLine(1,'*****')


const drawPyramid = (rows) =>{
let numberOfAsterisks = 0;
for (let i=1; i <= rows ; i++){}
}