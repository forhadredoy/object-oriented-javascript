function Person (first,mid,last,age){
    this.first = first
    this.second = mid
    this.third = last
    this.age = age
}
Person.prototype.nationality="bangladeshi"
var hridoy= new Person ("forhad", "hossain", "redoy",99)
console.dir(hridoy)
console.log("my nationality is"+" "+hridoy.nationality);