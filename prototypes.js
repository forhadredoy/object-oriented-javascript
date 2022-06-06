function Person (first,mid,last,age){
    this.first = first
    this.second = mid
    this.third = last
    this.age = age
    this.nationality="bangladeshi"
}
var hridoy = new Person("forhad",'hossain',"redoy")
var foysal = new Person ("md", "hasan", "foysal")
console.log ("me and my friend nationality is"+" " +hridoy.nationality);