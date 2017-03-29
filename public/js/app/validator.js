var validator = (function () {

  function validateString(str, min, max, chars) {
    if (typeof str !== 'string' || str.length < min || str.length > max) {
      return {
        message: `Length must be between ${min} and ${max} symbols!`
      };
    }
    if (chars) {
      str = str.split('');
      if (str.some(function (char) {
          return chars.indexOf(char) < 0;
        })) {
        return {
          message: `Chars can be only numbers, letters, dash and dot!`
        };
      }
    }
  }

  function validateUrl(url) {

    if (!url || url.length === 0) {
      return;
    }
    var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (!pattern.test(url)) {
      return {
        message: 'Invalid email format!'
      };
    }
  }

  return {
    validateString,
    validateUrl
  };
}());