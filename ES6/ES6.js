// Arrow function
const sum = (a,b,c) => ({a: a, b: b, c:c*2, });

console.log(sum(1,2,3))



// Enhanced Object literals

const aaa = 'Tài đẹp trai';
const bbb = 'Tài xấu bỏ mej';
const coursea = {
    [aaa]: 'Xứng đáng có người yêu',
    [bbb]: 'Không xứng đáng có người yêu'
}
console.log(coursea);




const legends = {
    getLegends (value) {
        console.log(value);
    }
}
legends.getLegends(123)



// Destructuring 

var array =['Tai','Ngoc','Di'];
var [a,b,c] = array ;
console.log(a,b,c)

// Rest parameters

var [a, ...rest] = array ;
console.log(rest);
// ------------- 
function logger([a,b,...rest]){
    console.log(a,b);
    console.log(rest);
}
logger([1,3,7,9,10]);
// Spread

var a1 = ['Tú','Ngọc','Hải'];
var a2 = ['Thanh','Thảo','Quang'];
var a3 = a1.concat(a2);
console.log(a3);

// -----------

var Khóa_học = ['Javascript','PHP','Ruby'];
function log1(...rest){
    for(var i=0;i<rest.length;i++){
        console.log(rest[i]);
    }
}
log1(...Khóa_học)

// Tagged template literals
function highligt([first,...strings],...value){
    return value.reduce((a,b)=>[
        ...a,`${b}`,strings.shift()
    ],[first]).join(" ");
}




var brand = 'F8';
var course = 'Javascript';
var html = highligt `Học lập trình ${course} tại  ${brand} !`;
console.log(html);


// Modules : imports / export
/* import logger1,{
     TYPE_LOG,
     TYPE_WARN,
     TYPE_ERROR
 } from "./logger.js";

 logger1("Error Messenger",TYPE_WARN);

// Optional chaining
const obj = {
    school:'Tôn Thất Tùng',
    class: 12/3,
    name:{
        name:'Tài',
       name1:{
            name:'Ngọc',
      }
    }
};
if(obj?.name?.name1){
console.log(obj.name.name1.name);
}
*/
