// // A base class is defined using the new reserved 'class' keyword
// class Polygon {
//     // ..and an (optional) custom class constructor. If one is
//     // not supplied, a default constructor is used instead:
//     // constructor() { }
//     constructor(height, width) {
//       this.name = 'Polygon';
//       this.height = height;
//       this.width = width;
//     }
  
//     // Simple class instance methods using short-hand method
//     // declaration
//     sayName() {
//       console.log('Hi, I am a ', this.name + '.');
//     }
  
//     sayHistory() {
//       console.log('"Polygon" is derived from the Greek polus (many) ' +
//         'and gonia (angle).');
//     }
  
//     // We will look at static and subclassed methods shortly
//   }

// let polygon = new Polygon(10,10);
// polygon.sayHistory();
// polygon.sayName();

// console.log("Javascript works")

//-------------------------------------------------------------------
// Transpiled by Babel into ES5

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// A base class is defined using the new reserved 'class' keyword
var Polygon = /*#__PURE__*/function () {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  function Polygon(height, width) {
    _classCallCheck(this, Polygon);

    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  } // Simple class instance methods using short-hand method
  // declaration


  _createClass(Polygon, [{
    key: "sayName",
    value: function sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
  }, {
    key: "sayHistory",
    value: function sayHistory() {
      console.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
    } // We will look at static and subclassed methods shortly

  }]);

  return Polygon;
}();

var polygon = new Polygon(10, 10);
polygon.sayHistory();
polygon.sayName();
console.log("Javascript works");