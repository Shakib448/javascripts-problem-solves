// Feet Counter 

function feetToMile(feet){
    return (feet / 5280).toFixed(6);
};

var feetToMile = feetToMile(10);

console.log(feetToMile);

// Wood Counter 

function woodCalculator(chair,table,bed){
    return  chair * table * bed;
};

var woodCalculator = woodCalculator(5,2,2);
console.log(woodCalculator);

// Brick counter 

function brickCalculator(buildingFloor){
    if(buildingFloor <= 10){
        let FirstTenFloorFeetBrick = 15000;
            for (let i = 1; i <= buildingFloor; i++) {
                let result = buildingFloor * FirstTenFloorFeetBrick;
                return result;
            };
        }else if (buildingFloor <= 20){
            let SecondTenFloorFeetBrick = 12000;
            for (let i = 1; i <= buildingFloor; i++) {
                let RmTenFloor = buildingFloor - 10;
                let SecondFloor = RmTenFloor * SecondTenFloorFeetBrick;
                let TotalTwentyFloor = SecondFloor + 150000;
                return TotalTwentyFloor;
            }
        }else{
            let AboveTwentyFloor = 10000;
            for (let i = 1; i <= buildingFloor; i++) {
                let RmTenFloor = buildingFloor - 20;
                let TwentyUpResult = RmTenFloor * AboveTwentyFloor;
                let TotalTwentyFloor = TwentyUpResult + 270000;
                return TotalTwentyFloor;
            }
        }
    };


var brickCalculator = brickCalculator(21);
console.log(brickCalculator);

// Tiny Friends 

// Use only for numbers 

// function tinyFriends(input) {
//     if (toString.call(input) !== "[object Array]")  
//       return false;
//  return Math.min.apply(null, input);
//    }

// console.log(tinyFriends([12,34,56,1]));
// console.log(tinyFriends([-12,-34,0,-56,-1]));


function tinyFriends(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output = tinyFriends(["shakib", "ibrahim", "abir"]);
console.log(output); // --> 'two'