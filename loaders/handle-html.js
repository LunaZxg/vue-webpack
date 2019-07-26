module.exports = function(str) {
    // console.log(str)
    // let result = str;
    let result = `document.write(${JSON.stringify(str)})`;
    console.log(result)

    return result;
};