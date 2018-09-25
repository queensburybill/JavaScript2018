/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called add
  
  function add(a,b){
    return a+ b;
  }  
*/

/* 2 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }
*/

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

module.exports = {
  add,
  tripleAndFilter,
  doubleOddNumbers
};
