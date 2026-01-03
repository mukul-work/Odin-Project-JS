let func1 = function(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

let func2 = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

function func3(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(func1("mUKUL"));
console.log(func2("mUKUL"));
console.log(func3("mUKUL"));