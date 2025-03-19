function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let num of arr) {
      if (num < min) min = num;
      if (num > max) max = num;
      sum += num;
  }
  
  let avg = Number((sum / arr.length).toFixed(2));
  
  return { min, max, avg };
}

"use strict";

function summElementsWorker(...arr) {
    return arr.length ? arr.reduce((sum, num) => sum + num, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
    let sumEven = 0, sumOdd = 0;
    for (let num of arr) {
        num % 2 === 0 ? sumEven += num : sumOdd += num;
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    let sumEven = 0, countEven = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }
    return countEven ? sumEven / countEven : 0;
}

"use strict";

function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    
    if (d < 0) {
        return [];
    } else if (d === 0) {
        return [-b / (2 * a)];
    } else {
        return [
            (-b + Math.sqrt(d)) / (2 * a),
            (-b - Math.sqrt(d)) / (2 * a)
        ];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyRate = (percent / 100) / 12;
    let loanBody = amount - contribution;
    
    if (loanBody <= 0) return 0;
    
    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
    let totalPayment = (monthlyPayment * countMonths).toFixed(2);
    
    return Number(totalPayment);
}

function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
        sum += num;
    }
    
    let avg = Number((sum / arr.length).toFixed(2));
    
    return { min, max, avg };
}

function summElementsWorker(...arr) {
    return arr.length ? arr.reduce((sum, num) => sum + num, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
    let sumEven = 0, sumOdd = 0;
    for (let num of arr) {
        num % 2 === 0 ? sumEven += num : sumOdd += num;
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    let sumEven = 0, countEven = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }
    return countEven ? sumEven / countEven : 0;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    
    for (let arr of arrOfArr) {
        let result = func(...arr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;
}