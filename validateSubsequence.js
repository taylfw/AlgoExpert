function isValidSubsequence(array, sequence) {
    newArr = [];
    for (let i =0; i < array.length; i++){
        for (let j = 0; j < sequence.length; j++){
            if(newArr.length === sequence.length){
                break;
            }
            if(array[i] === sequence[j]){
                newArr.push(sequence[j])
                break;
            }
            
        }
    }
    console.log(newArr.length, newArr, "new array length");
    console.log(sequence.length, sequence, "sequence array length");
    
    if(newArr.length === sequence.length){
        for (let i = 0; i < newArr.length; i++){
            if( newArr[i] !== sequence[i]){
                console.log(false);
                return false;
            }
        }
        console.log(true);
        return true;
    } else{
        console.log(false)
        return false;
    }
  }

  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
  isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]) //should be true.
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]) //should be false

  isValidSubsequence([6, 1, 1, 1], [1, 1, 1, 6]) //Should be false;