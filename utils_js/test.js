const array = [1,1,1,1,2,2,2,2,3,3,3,3,4,5,5,5,5,5];

let lastNumber;
let equalsArray = [];
let numbers = [];
for(let i = 0; i<array.length; i++){
    let current = array[i];
    if(i === 0){
        lastNumber = current;
        equalsArray.push(current);
    }
    else{
        if(current === lastNumber){
            equalsArray.push(current);
        }
        else{
            numbers.push(equalsArray);
            lastNumber = current;
            equalsArray = [current];
        }
    }
}
if(equalsArray.length !== 0){
    numbers.push(equalsArray);
}
