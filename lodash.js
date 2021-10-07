const _ = {
  clamp (num, lower, upper) {
    const lowerClampedValue = Math.max(num, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue
    },
  inRange (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    };
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    };
    const isInRange = (start <= number && number < end);
    return isInRange
    },
  words (string) {
    const words = string.split(" ");
    return words
  },
  pad (string, length) {
    if (length <= string.length) {
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString
  },
  has (obj, key) {
    if (obj[key] === undefined) {
      return false
    } else {
      return true
    };
  },
  invert (obj) {
    let inverted = {};
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
      inverted[entries[i][1]] = entries[i][0];
    }
    return inverted;
  },
  findKey (obj, predicate) {
    for (let key in obj) {
      let predicateValue = predicate(obj.key);
      if (predicate(obj.key) === true) {
        return key
      }
    }
    return undefined
  },
  drop (array, num) {
    if (num === undefined) {
      num = 1;
    }
    return array.slice(num);
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {return !predicate(element, index, array)});
    const droppedArray = this.drop(array, dropNumber)
    return droppedArray
  },
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
    const chunkedArray = [];
    for (i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, (i + size)))
    }
    return chunkedArray
  }
}




// Do not write or modify code below this line.
module.exports = _;
