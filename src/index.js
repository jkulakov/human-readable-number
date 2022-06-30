module.exports = function toReadable (number) {
  const simpleNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let tensNum = 0,
      hundNum = 0,
      lastNum = 0,
      resultNum = '';

  if(number < 20) { resultNum = simpleNum[number]; }

  if(number > 19 && number < 100) {
    tensNum = Math.trunc((number / 10));
    lastNum = number % 10;
    if(lastNum == 0) { resultNum = tens[tensNum]; } 
    else { resultNum = tens[tensNum] + ' ' + simpleNum[lastNum]; }
  }

  if(number > 99) {
    hundNum = Math.trunc((number / 100));
    let strNum = Number(String(number).split('').splice(1, 2).join(''));
    resultNum = simpleNum[hundNum] + ' hundred';

    if(strNum != 0) {
      if(strNum < 20) { resultNum += ' ' + simpleNum[strNum]; }

      if(strNum > 19 && strNum < 100) {
          tensNum = Math.trunc((strNum / 10));
          lastNum = strNum % 10;
          if(lastNum == 0) { resultNum += ' ' + tens[tensNum]; }
          else { resultNum += ' ' + tens[tensNum] + ' ' + simpleNum[lastNum]; }
        }
    }
  }
  
  return resultNum;
};