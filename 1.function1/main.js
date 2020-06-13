function reverseString(message){
    var chars = message.split('');
    chars = chars.reverse();
    var result = chars.join('');
    console.log(result);
    return result;
}
reverseString('hello');
