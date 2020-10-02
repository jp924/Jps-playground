const halfTriangle = (chart, lines) => {
    let sum = "";
    for (let i = 1; i <= lines; i++) {
        sum = sum + chart;
        console.log(sum);
    }
}
halfTriangle("Z", 8);
halfTriangle("A", 8);
halfTriangle("B", 8);
halfTriangle("*", 8);
let char = "="
let lines = 9;
halfTriangle(char, lines);
halfTriangle("=", 9);

const exerciseOne = (array) => {
    console.log(array)
}

for (let i = 0; i < 4; i++) {
    console.log("**lazo externo**" + i)
    for (let j = 0; j < 10; j++) {
        console.log("lazo interno" + j)
    }

}

exerciseOne([1]);

const addArrays = (firstArray) => {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        sum = sum + firstArray[i];
    }
    console.log(sum)
    return sum
}
let firstArray = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let secondArray = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = addArrays(firstArray);
console.log(sum1)
console.log(addArrays(secondArray))
console.log(addArrays(firstArray) + addArrays(secondArray));


const even = (n) => {
    for (let i = 1; i <= n; i++)
        if (i % 2 === 0) {
            console.log(i)
        }
}
even(22)

const odd = (m) => {
    for (let i = 0; i <= m; i++)
        if (i % 2 === 1) {
            console.log(i)
        }
}
odd(22)

const idk = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        console.log(arr[i])
    }
}
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true]
idk(arr)


const eachArr = (arr3) => {
    for (let i = 0; i < arr3.length; i++)
        console.log(arr3[i] + arr_4[i])
}
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
eachArr(arr_3)

const javaStr = (str) => {
    for (let i = 0; i < str.length; i++)
        if ((i + 1) % 2 === 0) { str2 = str2 + "Z" }
        else { str2 = str2 + str.charAt(i) }
    console.log(str2)
}
let str = "ja_va_scr_ipt";
let str2 = "";
javaStr(str)