console.log(1 * "1");   // 1 (string "1" is converted to number)
console.log(2 - "1");   // 1 (string "1" is converted to number)
console.log("2" * "3"); // 6 (both strings converted to numbers)
console.log("10" / "2"); // 5 (strings converted to numbers)
console.log("5" % 2);    // 1 (string converted to number)

console.log(2 + "3");   // "23" (number 2 is converted to string)
console.log("5" + 5);   // "55" (number is converted to string)
console.log(true + 1);  // 2 (true is 1)
console.log(false + 1); // 1 (false is 0)
console.log(null + 1);  // 1 (null is 0)
console.log(undefined + 1); // NaN (undefined can't be converted)
console.log("5" - true);  // 4 (true is 1)
console.log("5" - false); // 5 (false is 0)
console.log("10" * null); // 0 (null is 0)
console.log("10" * undefined); // NaN (undefined is not a number)
console.log(1 == "1");  // true (type coercion happens)
console.log(1 === "1"); // false (strict comparison, no coercion)
console.log(null == undefined); // true (special rule in JavaScript)
console.log(null === undefined); // false (different types)
console.log(0 == false); // true (false is treated as 0)
console.log(0 === false); // false (strict comparison)
console.log("" == 0);   // true (empty string is treated as 0)
console.log("" === 0);  // false (different types)
console.log("5" > 2);   // true (string converted to number)
console.log("5" < "12"); // false (string comparison, not number)
console.log("apple" > "banana"); // false (lexicographical comparison)
console.log(true && "hello");  // "hello" (truthy value returned)
console.log(false && "hello"); // false (false is falsy)
console.log("text" && 0);  // 0 (0 is falsy, so it's returned)
console.log(null && "world"); // null (null is falsy)
console.log(undefined || "default"); // "default" (undefined is falsy)
console.log(0 || 42);  // 42 (0 is falsy, so 42 is returned)
console.log("" || "fallback"); // "fallback" ("" is falsy)
console.log(!"hello");  // false (non-empty strings are truthy)
console.log(!0); // true (0 is falsy)
console.log(!undefined); // true (undefined is falsy)
console.log(Number("10"));  // 10
console.log(Number("10px")); // NaN (invalid number)
console.log(Number(" ")); // 0 (empty string becomes 0)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(String(100)); // "100"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true)); // "true"

console.log(Boolean(0)); // false (0 is falsy)
console.log(Boolean(1)); // true
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log([] == 0);   // true (empty array converts to empty string, which is 0)
console.log([] == false); // true (empty array is falsy)
console.log([] + []);   // "" (empty string)
console.log([] + {});   // "[object Object]" (array converted to empty string)
console.log({} + []);   // "[object Object]" (empty object treated as block)
console.log([] - 1);   // -1 (empty array is treated as 0)
console.log([1,2,3] + [4,5,6]); // "1,2,34,5,6" (arrays converted to strings)
console.log(9999999999999999); // 10000000000000000 (JavaScript precision issue)
console.log(typeof NaN); // "number"
console.log(NaN == NaN); // false (NaN is never equal to itself)
