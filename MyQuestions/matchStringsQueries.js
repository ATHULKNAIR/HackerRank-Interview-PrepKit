let strings = ["ab", "ab", "ab", "bc"];
let queries = ["ab", "abc", "bc"];

// [2,1,0]

const matchStrings = (strings, queries) => {
  let obj = {};
  for (let i = 0; i < strings.length; i++) {
    if (obj[strings[i]]) {
      obj[strings[i]]++;
    } else {
      obj[strings[i]] = 1;
    }
  }
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    if (obj[queries[i]]) {
      result.push(obj[queries[i]]);
    } else {
      result.push(0);
    }
  }
  return result;
};

console.log(matchStrings(strings, queries));
