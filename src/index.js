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
    const countOfSub = str.length/10;
    const subs = [];
    for (let i = 0; i < countOfSub; i++) {
        subs.push(str.substring(0,10));
        str = str.substring(10); 
    }
    for (let index = 0; index < subs.length; index++) {
        let element = subs[index];
        element = element.replace(/00/g,'');
        element = element.replace(/10/g,'.');
        element = element.replace(/11/g,'-');
        if (element === "**********") {
            subs[index] = element.replace('**********',' ');
        } else {
            subs[index] = MORSE_TABLE[element];      
        }  
        
    }
    const resultStr = subs.join('');
    return resultStr;

}


module.exports = {
    decode
}