const solution = (string) => {
  let output  = "";
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      console.log(charCode);
      output += ` ${string[i]}`;
    } else {
      output += string[i];
    }
  }
  return output;
};

console.log(solution('cammelCase'));