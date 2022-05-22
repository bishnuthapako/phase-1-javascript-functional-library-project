// Your code here

function isArray(col){
  let newArr;
  if(Array.isArray(col)){
    newArr = col;
  } else{
    newArr = Object.values(col)
  }
  return newArr;

}


function myEach(collection, callback){
  let newArr = isArray(collection);
  for(let i = 0; i < newArr.length; i++){
    callback(newArr[i])
  }
  return collection;
}


function myMap(col, cb){
  let newArr = isArray(col)
  const emtArr = [];
  for(let i = 0; i < newArr.length; i++){
    let result = cb(newArr[i])
    emtArr.push(result)
  }
  return emtArr
}

function myReduce(collection, callback, acc) {
  let newArray = collection
  if (typeof(newArray)=== 'object'){
      newArray = Object.values(collection);
  }
  let accumulator = (acc === undefined) ? undefined : acc;
  for (var i = 0; i < newArray.length; i++) {
      if (accumulator !== undefined)
          accumulator = callback.call(undefined, accumulator, newArray[i], i, newArray);
      else
          accumulator = newArray[i];
  }
  return accumulator;
};


function myFind(coll, pred){
  if(Array.isArray){
    return coll.find(pred)
  } else{
    let newArr = Object.values(coll)
    return newArr.find(pred)
  }
}


function myFilter(coll, predicate){
    let newArray = [];

	for (let i = 0; i < coll.length; i++) {
    let find1 = predicate(coll[i], i, coll);

		if (find1) {
			newArray.push(coll[i]);
		}

    }
    return newArray;
}

function mySize(coll){
  let total =0
  for (let i in coll){
      total++;
  }
  return total;

}

function myFirst(arr, n){
  let newArray = [];
  if(n !== undefined){
      for (let i = 0; i <  n; i ++){
          newArray.push(arr[i])
      }
      return newArray

  }
  else{
      return arr[0]
  }

}

function myLast(arr, n){
  let newArray = [];
  let length = arr.length;
  let firstLast = length -n
  if(n !== undefined){
      for (let i = 0; i <  n; i ++){
          newArray.push(arr[firstLast])
          firstLast++;
      }
      return newArray

  }
  else{
      return arr[length-1]
  }

}

function myKeys(obj){
  let newArray = Object.keys(obj);
  return newArray;
}

function myValues(obj){
  let newArr = Object.values(obj);
  return newArr;
}

