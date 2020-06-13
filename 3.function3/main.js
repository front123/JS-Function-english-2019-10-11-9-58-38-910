function alphabetSort(message){
  var chars = message.split('');
  chars = chars.sort();
  var result = chars.join('');
  console.log(result);
  return result;
}
alphabetSort('helloa');
