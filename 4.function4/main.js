function countWords(message){
  var words = message.split(' ');
  console.log(words.length);
  return words.length;
}
countWords('Good morning, I love JavaScript.');
