import checkIP from "./ip.js";
import checkMac from "./mac.js";
import checkVisa from "./visa.js";

let checker = {
    rules : {
        'ip':checkIP
        ,'mac':checkMac
        ,'visa':checkVisa
    },
    validate : function (text,type) {return this.rules[type](text)}
}

console.log(checker);
console.log(typeof(checker.validate));
console.log(checker.validate('4234567890123456', 'visa'));

export default checker;