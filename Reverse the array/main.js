// Reverse the array using temorary array
function reverseArray(arr) {
let n = arr.length;
let temp = new Array(n);
for (let i = 0; i < n; i++) {
    temp[i] = arr[n - 1 - i];
}
for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
}
}
const arr = [1, 6, 9, 4, 5];
reverseArray(arr);
console.log(arr.join(" ")  );
