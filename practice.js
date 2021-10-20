// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use 
// the underscore functions within them. 

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function (fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function (number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  // sort through fruits array w/ filter
  var results = _.filter(fruits, function (fruit, index, collection) {
    // IF element is targetFruit
    if (fruit === targetFruit) {
      // return the found friut
      return fruit;
    }
  });
  return results;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var results = _.filter(fruits, function (fruit, index, collection) {
    // IF the first letter of the element is 'P"
    if (fruit.substr(0, 1) === letter) {
      // return that element
      return fruit;
    }
  });
  return results;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var results = _.filter(desserts, function (dessert, index, collection) {
    if (dessert[index] === 'cookie') {
      return dessert;
    }
  });
  return results;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  // IP: an Array of objs, each obj is a single product
  // ip: the price is located in the key = price
  // OP: a #, the sum of the price of all the products
  // .reduce(list, iteratee, memo)
  // iteratee => func(memo, the value, index/key) -> accumulator & memo are the same thing
  var priceTotal = _.reduce(products, function (memo, value, key) {
    // access the string price number
    var strPrice = value.price;
    // remove $ sign from each price-value
    var strNumPrice = strPrice.substr(1);
    // change the new price-value (no $ sign) to a number
    var numPrice = Number(strNumPrice);
    // return price number + memo
    return numPrice + memo;
  }, 0);
  return priceTotal;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  // IP: an array of objs - desserts
  // OP: an obj, with all the dessert types and their count
  // op: ANS {pie: 3, cake: 2, cookie: 2, drink: 1}
  // ! return _.reduce(dessert, func.(acc....)...) would work too. 
  var resultObj = _.reduce(desserts, function (accum, current) {
    // set var type to the current elements value, i.e. 'cookie', or 'pie'
    var type = current.type;

    // IF the dessert type does NOT exist in accum
    if (!accum[type]) {
      // add the type-of-dessert and 1 as its value
      accum[type] = 1;
    } else {
      // OTHERWISE, add 1 to the type-of-dessert
      accum[type] = accum[type] + 1;
    }
    // update the accum, so on the next iteration it will have types and their count stored
    return accum;
  }, {});
  return resultObj;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  // IP: an Array of Obj
  // OP: an Array of movie titles
  var results = _.reduce(movies, function (memo, current) {
    // set var year to the release year
    var year = current.releaseYear;
    var title = current.title;
    // IF the year falls in between 1990 & 2000
    if (year >= 1990 && year <= 2000) {
      // add the title of the current element to memo
      memo.push(title);
    }
    return memo;
  }, []);
  return results;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  // IP: an Array of Obj - movies, a # - that a movie must be shorter than
  // OP: Boolean - if a movie is shorter than timeLimit
  var result = _.reduce(movies, function (accum, current) {
    var length = current.runtime;
    // If the length of the current element is < timeLimit
    if (length < timeLimit) {
      // accum is true
      accum = true;
    } // else {
    //   // Otherwise, accum is false
    //   accum = false;
    // }
    return accum;
  }, false);
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
// 
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1', 
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {

};
