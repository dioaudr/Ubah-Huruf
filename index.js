let kata = "i love javascript";
let result = '';
let vokal = "aiueo";

for(var i = 0; i < kata.length; i++){
for (var j =0; j <= vokal.length; j++){
  if(kata[i] === vokal[j]){
    result += '$'
  break
  } else if(!vokal[j]){
    result += kata[i]
  }
 }
}
console.log(result)