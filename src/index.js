module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let leftChecked, rightChecked;

  for (let i = 0; i < str.length; ) {
    let state = false;

    leftChecked = str[i];
    rightChecked = str[i+1];

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (leftChecked !== bracketsConfig[j][0]) continue;
      if (rightChecked !== bracketsConfig[j][1]) {
        state = false;
      } else {
        state = true;
        str = str.slice(0, i).concat(str.slice(i+2));
      }
    }
    if (state) {
      i = (i === 0) ? i = 0 : i -= 1;
    } else {
      i++; 
    }
  }
  if (str.length === 0) {
    return true;
  } else {
    return false; 
  }
}
