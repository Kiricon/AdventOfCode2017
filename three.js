const input = 347991;


let i = 1;
let x = 0;
let y = 0;

let maxX = x;
let maxY = y;

let arr = [];
arr[x] = [];
arr[x][y] = i;

while(i < input) {
    i++;
    if(x === 0 && y === 0) {
        x += 1;
        maxX = x;
    }else if()  {

    }

    if(!arr[x][y]) {
        arr[x] = [];
    }
    

    arr[x][y] = i;

}

console.log(arr);
