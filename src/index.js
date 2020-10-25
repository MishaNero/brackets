module.exports = function check(str, bracketsConfig) {
  let result;
  if (str.length % 2 !== 0) {
      result = false;
  }

  const map = new Map(bracketsConfig);
  let bracket = [];
  const array = str.split('');
  array.forEach((el, i) => {
      if (map.has(el) && !(el === bracket[bracket.length - 1] && el === map.get(el))) {bracket.push(el);} 
      else if (el === map.get(bracket[bracket.length - 1])) {bracket.pop();}
  });

  if (bracket.length === 0 && str.length % 2 === 0) {
      result = true;
  } else {
      result = false;
  }
  console.log(result, bracket);
  return result;
}
