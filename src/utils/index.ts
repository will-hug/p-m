export const deepClone = function (obj: any) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone: any = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
};
