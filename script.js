// welcome
alert('Welcome to PH-S1S3 website');

const secretWebLink = 'https://ph-s1s3.github.io/secret_web.html';
let thisYear = 2023;
const ageClassS1S3 = thisYear - 2007;
const textOfAge = '今年我们';
const textAge = '岁';

console.log(secretWebLink);
console.log(textOfAge + ageClassS1S3 + textAge);

var password = "ph-s1s3";
(function passcodeprotect() {
    var passcode = prompt("Enter PassCode to Enter the website");
    while (passcode !== password) {
        alert("Incorrect PassCode");
        return passcodeprotect();
    }
}());
alert('Correct Password');






/*
var password = "ph-s1s3";
if (once_per_session == 0)
    passcodeprotect();
else
    loadornot();
*/



/*
//var password = "ph-s1s3";
function passcodeprotect() {
var passcode = prompt("Enter PassCode to Enter the website");
while (passcode !== password) {
    alert("Incorrect PassCode");
    return passcodeprotect();
}
alert('Correct Password');
};
*/




/*
// Password
var password = "ph-s1s3";
(function passcodeprotect() {
    var passcode = prompt("Enter PassCode to Enter the website");
    while (passcode !== password) {
        alert("Incorrect PassCode");
        return passcodeprotect();
    }
    alert('Correct Password');
}());
*/


