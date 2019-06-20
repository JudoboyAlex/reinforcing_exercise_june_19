// Given an array of strings and an integer k, your task is to return the longest string consisting of k consecutive strings from the array concatenated together.

// longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3); // -> 'marblesmittensbye'

// If there is a tie, return the first one.

// longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2); // --> "abigailtheta"

// Return "" if the array is empty or if k is negative or larger than the length of the array.


// function longestConsecutive(arr){
//     let longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
//     return longest;
// }

//----------------Below is solution for three longest words combined. Misunderstood question at first-----------------------//
// function longestConsecutive(arr, k) {
//     let longest =[]
//     if (k <= 0 || k > arr.length){
//         return ""
//     } else {
//         let longToshort = arr.sort((a,b) => b.length-a.length);
//         for (let i=0; i < k; i++) {
//             longest.push(longToshort[i]);    
//         } return longest.join('')    
        
//     }}

function longestConsecutive(arr, k) {
    // concatenate first k strings
    if (arr.length === 0 || k > arr.length || k <= 0) {
      return '';
    }
    let longest = arr.slice(0, k).join('');
    let compare = '';
    for (let i = 1; i < arr.length; i++) {
        compare = arr.slice(i, i + k).join('');
        // console.log('compare: ', compare);
        if (compare.length > longest.length) {
            longest = compare;
        }
    }
    return longest;
}

console.log(longestConsecutive(
  [
    "hi",
    "marbles",
    "mittens",
    "bye",
    "lorem",
    "ipsum",
    "to",
    "a",
    "hippocampus"
  ],3
))
