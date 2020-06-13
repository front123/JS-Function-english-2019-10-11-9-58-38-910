function palindrome(message){
  if (message.length==0) return false;
  else if (message.length==1) return true;
  else{
    let i=0, j=message.length-1;
    let flag = true;
    while(i!=j&&i<j){
      if (message[i] == message[j]){
        i++; 
        j--;
        continue;
      }
      else{
        flag = false;
        break;
      }
    }
    console.log(flag);
    return flag;
  }
  
}
palindrome('hello'); 
palindrome('abcba');
