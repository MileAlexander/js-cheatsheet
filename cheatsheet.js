/* 
A const, let, var kulcsszavakkal hozunk létre változókat.

Az '=' bal oldalán szerepel a változó neve és jobb oldalán a tartozó értéke.

A primitívek a következők: string, number, boolean, undefined, null.
*/

let aString = "this is a string"; //Mindig idézőjelbe rakjuk a stringet, backtickkel `` több soros stringet tudunk létrehozni, '', "" csak 1-et.
let aNumber = 1; //Nem szabad idézőjelbe rakni a számot.
let aBoolean = false; //Nem szabad idézőjelbe rakni a boolean-t.
let anUndefined = undefined; //Nem szabad idézőjelbe rakni az undefined-ot.
let aNull = null; //Nem szabad idézőjelbe rakni a null-t.

let notANumber = NaN; //Nem szabad idézőjelbe rakni a NaN-t.

console.log(typeof aString); //string
console.log(typeof anUndefined); //undefined
console.log(typeof aNull); //object
console.log(typeof notANumber); //number

console.log(aFunction1());
function aFunction1() {
    //Ez a függvény belseje.
    
    //a függvény mindenképpen return-öl ha lefuttatjuk, ha nem adjunk meg mit, akkor undefined.
    return "This is a function"
};

const aFunction2 = function() {
    //Ez is egy függvény, ez majdnem ugyanúgy viselkedik mintha a függvénynek neve lenne.
    return "This is another function"
};
console.log(aFunction2()); //Minden válozóba mentett dolgunkhoz csak akkor férünk hozzá, ha utána jönnek.

//Defult Parameter:
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }
}

//Arguments Object:
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}


//Block Scope:
{
    let x = 2;
}
// x can NOT be used here 

{
    var x = 2;
}
// x CAN be used here 

//Local Scope:
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}
  
// code here can NOT use carName 

//Function Scope:
function myFunction() {
    var carName = "Volvo";   // Function Scope
}
  function myFunction() {
    let carName = "Volvo";   // Function Scope
}
  function myFunction() {
    const carName = "Volvo";   // Function Scope
}

//Global Scope:
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

function name(params) {  
    if(true) {
        //ide jön ha teljesül a feltétel.
    }else{
        //ide jön ha nem teljesül a feltétel.
    }
}

console.log("0" == 0);//Nem figyeli azérték típusát.
console.log("0" === 0);//Összehasonlítás.

const arr = [34, 15, 88, 2];//Ez egy tömb.

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
for (const item of arr) {
    console.log(item);
}