module.exports = function toReadable (number) {
  let result = '';
  let toTwenty = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    'eighty', 'ninety'
  ];

  if (number == 0) return 'zero';

  if (number < 20) {
    result = toTwenty[number - 1];
  }

  let str = number.toString();
  if (str.length == 2 && number >= 20) {
    if (number%10 == 0) {
      result = tens[str[0]];
    }
    else {
      result = `${tens[str[0]]} ${toTwenty[str[1] - 1]}`;
    }
  }

  if (str.length == 3) {
    if (number%100 == 0) {
      result = toTwenty[str[0] - 1] + ' hundred';
    }
    else if (str.slice(1)%10 == 0) {
      result = toTwenty[str[0] - 1] + ' hundred';
      result += ' ';
      result += (str[1] == 1) ? toTwenty[str.slice(1) - 1] : tens[str[1]];
    }
    else {
      result = `${toTwenty[str[0] - 1]} hundred `;
      if (str[1] == 0) {
        result += toTwenty[str[2] - 1];
      }
      else {
        result += (str.slice(1) < 20 ) ? toTwenty[str.slice(1) - 1] : `${tens[str[1]]} ${toTwenty[str[2] - 1]}`;
      }
    }
  }

  return result;
}
