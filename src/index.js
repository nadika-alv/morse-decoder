const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr;  
    let result = '';
    let arr = [];
    let arr2 = [];
        for (let i = 0; i < str.length; i++) {
            if (result.length < 11) {
                result += str[i];
            }
            if (result.length === 10) {
                arr.push(result);
                result = '';
            }
    }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "**********"){
                arr2.push(" ");
                //  console.log(arr[i]);
            } else {
                for (let j = 0; j < arr[i].length; j++){
                    // console.log(arr[i][j]);
                    if ((arr[i][j] ==='1')&&(arr[i][j+1]==='0')) {
                        result += "."
                        j += 1;
                    }
                    if ((arr[i][j] ==='1')&&(arr[i][j+1]==='1')) {
                        result += "-";
                        j += 1;
                    }  
                }
                arr2.push(result);
                result = "";
            }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] != " ") {
            if (MORSE_TABLE.hasOwnProperty(arr2[i])) {
                result += MORSE_TABLE[arr2[i]];
            }
        } else result += " ";
    }
   return result;  
}


module.exports = {
    decode
}