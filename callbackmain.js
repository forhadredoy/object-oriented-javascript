function myFunction (result){

    console.log (result);
}
function plus (num1,num2,callback){

    sum = num1 + num2;
    callback(sum)

}
var ans = plus(5, 5, myFunction);

