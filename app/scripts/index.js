/**
 * Object.create
 */

var dog ={
  color: 'red'
};

var objectCreate = function (o) {
  function F(){}
  F.prototype = o;
  return new F();
};

// var watson = dog;
// watson.color = 'black & tan';
// console.log(watson);
//
// var kepler = dog;
// console.log(kepler);

var kepler = Object.create(dog); // objectCreate(dog);
var watson = Object.create(dog); // objectCreate(dog);
watson.color = 'black & tan';
console.log(watson);
console.log(kepler);

/**
 * Constuctor Config Objects
 */
var $ = require('jquery');

function CuteAnimal(config){
  config = config || {};
  console.log(config.name);
  var defaultConfig = {
    floppyEars: (config.name == 'kepler' ? true : false)
  };
  $.extend(this, defaultConfig, config);

  this.pur = function(){
    console.log(this.name, 'purrrrrrr');
  };
}

var kitten = new CuteAnimal({name: 'pointy', floppyEars: false});


function Dog(config){

  var defaults = {
    hungry: true,
    height: 'tall'
  };
  var cuteAnimal = CuteAnimal.call(this, config);
  $.extend(this, cuteAnimal, defaults);
}

Dog.prototype = new CuteAnimal();

var kepler = new Dog({
  name: 'kepler',
  height: 'short',
  hungry: false
});

/**
 * Closures
 */
function showName(firstName){

  function buildName(lastName){
    return firstName + lastName;
  }

  return buildName;
}

var nameBuilder = showName('Dan');
console.log(nameBuilder(' D.'));

function addNumbers(num1, num2){
  return num1 + num2;
}
console.log(addNumbers(2, 3));

/**
 * Currying / Partial Applications
 */

function add(num1){
  function addSecondNumber(num2){
    return num1 + num2;
  }

  return addSecondNumber;
}

var addNine = add(9);
console.log(addNine(10));
console.log(addNine(20));

var addFive = add(5);
console.log(addFive(5));
console.log(addFive(15));
