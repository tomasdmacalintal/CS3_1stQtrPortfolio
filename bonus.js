let result = "";
for (let i = 1; i <= 5; i++){
    for (let j = 5-i; j > 0; j--){
        result += " ";
    }
    for (let k = i; k > 0; k--){
        result += "*";
    }
    result += "\n";
}
console.log(result);