// src/utils/orderByProps.js

function orderByProps(obj, sortKeys) {
  const result = [];
  const addedKeys = new Set();
  
  for (const key of sortKeys) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !addedKeys.has(key)) {
      result.push({ key, value: obj[key] });
      addedKeys.add(key);
    }
  }
  
  const remainingKeys = Object.keys(obj).filter(key => !addedKeys.has(key));
  remainingKeys.sort();
  
  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }
  
  return result;
}
module.exports = orderByProps;