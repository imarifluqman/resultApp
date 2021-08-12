var a = {
    name:"Arif",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:0,
}
var b = {
    name:"Usama",
    contact:03232523466,
    school:"Al Habib Grammer School 2",
    result:1,
}
var c = {
    name:"Sajid",
    contact:03232523345,
    school:"Karachi Grammer School",
    result:1,
}
var d = {
    name:"basit",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:0,
}
var e = {
    name:"Arif",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:1,
}
var f = {
    name:"Arif",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:0,
}
var g = {
    name:"Arif",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:1,
}
var h = {
    name:"Arif",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:0,
}
var i = {
    name:"farooq",
    contact:03232523477,
    school:"Al Habib Grammer School",
    result:1,
}
var j = {
    name:"khalid",
    contact:03232523477,
    school:"Rakhshinda School",
    result:1,
}

var arr = [a,b,c,d,e,f,g,h,i,j]

for(var i = 0;i < arr.length; i++){
    arr[i].rollNo = i+1

}

// for(var i = 0;i <arr.length; i++){
//     if(arr[i].result == 1){
//         console.log("pass")
//     }else{
//         console.log("fail")
//     }
// }

var user = document.getElementById("user");
var dname = document.getElementById("dname")
var dresult = document.getElementById("dresult")

function searchres(){

    for(var i = 0;i < arr.length; i++){
        if(arr[i].rollNo == user.value){
            if(arr[i].result){
                dname.innerHTML = arr[i].name 
                dresult.innerHTML = "pass"
            }else{
                dname.innerHTML = arr[i].name 
                dresult.innerHTML = "fail"
            }
        }
        
    }
    
}