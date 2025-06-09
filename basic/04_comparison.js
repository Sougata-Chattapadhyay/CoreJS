console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //true

/**
 reason behind that an equality check == and comparison > < >= < work differently

 Comparison convert null to number, treat it as 0.
 That is why (3) null >= 0 is true and (1) null > 0 false
 
 */