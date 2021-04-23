let encryptBox = document.getElementsByClassName("encrypt")[0];
let decryptBox = document.getElementsByClassName("decrypt")[0];
let key = 7;

encryptBox.oninput = enfun;
decryptBox.oninput = defun;

function enfun(e) {
    let plainText = e.target.value;
    console.log(plainText);
    let cipherText = encrypt(plainText, key);
    decryptBox.value = cipherText;
}

function defun(e) {
    let cipherText = e.target.value;
    console.log(cipherText);
    let plainText = decrypt(cipherText, key);
    encryptBox.value = plainText;
}

function encrypt(str, x) {
    let Ans = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] <= 'z' && str[i] >= 'a') {

            let val = str.charCodeAt(i);
            val -= "a".charCodeAt(0);
            val += x;
            val %= 26;
            val += 65;

            let ans = String.fromCharCode(val)
            Ans += ans;
            //console.log(ans)
        }
        else if (str[i] <= 'Z' && str[i] >= 'A') {

            let val = str.charCodeAt(i);
            val -= "A".charCodeAt(0);
            val += x;
            val %= 26;
            val += 97;

            let ans = String.fromCharCode(val)
            Ans += ans;
            //console.log(ans)
        }
        else {
            console.log(' ');
            Ans += ' ';
        }
    }
    return (Ans);
}


function decrypt(str, x) {
    x = 26 - x;
    let ss = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] <= 'z' && str[i] >= 'a') {

            let val = str.charCodeAt(i);
            val -= "a".charCodeAt(0);
            val += x;
            val %= 26;
            val += 65;

            let ans = String.fromCharCode(val)
            ss += ans;
        }
        else if (str[i] <= 'Z' && str[i] >= 'A') {

            let val = str.charCodeAt(i);
            val -= "A".charCodeAt(0);
            val += x;
            val %= 26;
            val += 97;

            let ans = String.fromCharCode(val)
            ss += ans;
        }
        else {
            ss += " ";
        }
    }
    return (ss);
}