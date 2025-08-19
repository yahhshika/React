function generateArray(size){
    let arr = new Array(size);
    for(let i = 0; i<size; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

// function sum(arr){
//     return arr.reduce((sum,val)=>sum+val,0);
// }
function sum(arr){
    return arr.reduce((sum, val)=>sum+val, 0);
}

export {generateArray, sum};