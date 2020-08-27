function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2*Math.PI;
    var newArr = [];
    var getOrbitalPeriod = function(obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c /GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    }
    for (var elem in arr){
        newArr.push(getOrbitalPeriod(arr[elem]));
    }
    return newArr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

//   Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
// T = 2*pi*sqrt(r^3/GM) where r = earthRadius+avgAlt, which is the distance from midpoint of the earth to the object, and T = Orbital Period