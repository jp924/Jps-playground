//  *
// ***
//*****

const drawLine = (columns, character) =>{
let sum = '';
for (let i=0; i<columns; i++){
  sum = sum + character;
}
return sum
}

const drawPyramid = (rows) =>{
let numberOfAsterisks = 1;
for (let i=0; i < rows ; i++){
let rowWithChars = drawLine(rows - i,'&nbsp;') + drawLine (i + numberOfAsterisks, '*')

numberOfAsterisks ++;
document.write(rowWithChars + '<br>' ) 
}
}
drawPyramid(3)
drawPyramid(5)