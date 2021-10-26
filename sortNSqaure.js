function sortedSquaredArray(array) {
    const sqArr = [];
    
   console.log('###############################')
    sqArr.push(array[0] * array[0]);
    console.log(sqArr);
   
    for(let i = 1; i < array.length; i++){
        let n = array[i] *array[i];
        sqArr.push(n)
    }
    
    console.log(array, "original array.");
    console.log(sqArr.sort((a, b) => a - b), "Squared array.");
    return 
  }

  
  sortedSquaredArray([1, 2, 3, 4])
  sortedSquaredArray([-4, -1])
  sortedSquaredArray([-7, -3, 1, 9, 22, 30])
  sortedSquaredArray([-10, -2, -5, 0, 5, 10])
  sortedSquaredArray([6, 0, 6])