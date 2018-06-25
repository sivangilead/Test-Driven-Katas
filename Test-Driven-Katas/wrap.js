function wrap(str, num) {
  let array = str.split(" ");
  let str1 = "";
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i===0){
      str1 +=array[i];
      sum=sum+array[i].length
    }
    if (sum + array[i].length+1 > num) {
      str1 += "\n";
      sum = 0;
      str1 +=array[i] ;
      sum = array[i].length ;
    } else if (i!==0) {
      str1 +=" "+array[i];
      sum=sum+array[i].length+1
    }

    // else{
    //   str1 += array[i]
    // }
  }

  return str1;
}

module.exports = wrap;
