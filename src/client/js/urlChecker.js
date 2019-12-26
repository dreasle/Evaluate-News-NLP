function verifyUrl(inputText) {
    console.log("::: Running verifyUrl :::", inputText)

    // Regex from: https://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript/1701911
    var regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regex.test(inputText)
 }

export { verifyUrl }
