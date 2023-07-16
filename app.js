//new Set([1, 1, 2, 2, 3, 4])// {(1, 2, 3, 4)};

[...new Set("referee")].join(""); // 'ref'

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

const vowelCount = (str) => {
  const strMap = new Map();
  str = str.toLowerCase();
  for (let char of str) {
    if ("aeiou".indexOf(char) !== -1) {
      if (!strMap.has(char)) {
        strMap.set(char, 1);
      } else {
        strMap.set(char, strMap.get(char) + 1);
      }
    }
  }
  return strMap;
};
