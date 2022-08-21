console.log((20 + 25) / 2); // 22.5

console.log((100 + 113) / 2); // 106.5

let calculateAverage = function() {
    console.log('i am a function'); // i am a function
    console.log('ending function'); // ending function 
};

calculateAverage(); 

let calculateAverages = function(num1, num2){
    let sum = num1 + num2; 
    let finalAvg = sum / 2;
    console.log(finalAvg); // 12.5
};

calculateAverages(10, 15);