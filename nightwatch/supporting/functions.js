/**
 * Enters the numbers 1-10 into the input field and clicks on the Split Button
 * Also verifies that there are even numbers in the even results and odd numbers are in the odd results
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} data object passed in containing test data in the expected format {numbers [], evenResult (string), oddResult (string)}
 * @param {string} selectors See selectors.js for more information
 */

let evenandOdd = (browser, data, selectors) => {
    //input numbers into evenOddInput Selector Fields and click the Split Selector Button
    browser.setValue(
        selectors.evenOddInput, data.numbers
    )
    //Click the Split Button (Selector)
    browser.click(selectors['split'])
    //check the results to make sure even and odds went to the correct result fields
    browser.expect.element(selectors['evenResults']).text.to.contain(data.evenResult)
    browser.expect.element(selectors['oddResults']).text.to.contain(data.oddResult)
}

/**
 * Filter Object - Filter By Title
 * Also verifies that filtering by title works
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} data object passed in containing test data in the expected format {filter (string), filterResult (string) }
 * @param {string} selectors  See selectors.js for more information
*/

let filterObject = (browser, data, selectors) => {
    //input "title" into selector Filter Object Input field
    browser.setValue(
        selectors.filterInput, data.filter
    )
    //Click the Filter Button 
    browser.click(selectors['filterButton'])
    //check the results to make sure that I filtered out any objects with a title
    browser.expect.element(selectors['filterResults']).text.to.contain(data.filterResult)
}

/**
 * Filter String - Filter Names by a specific Letter. Appears to work with the first character only.
 * Verifies that any names with the letter "J" are being pulled
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} data object passed in containing test data in the expected format {filter (string), filterResult (string) }
 * @param {string} selectors See selectors.js for more information
*/

let filterName = (browser, data, selectors) => {
    //input "J" into selector Filter Object Input field
    browser.setValue(
        selectors.nameInput, data.nameFilter
    )
    //Click the Filter Button (Selector)
    browser.click(selectors['nameFilterButton'])
    //check the results to make sure that I filtered out any names with the letter "J"
    browser.expect.element(selectors['nameFilterResults']).text.to.contain(data.nameFilterResult)
}

/**
 * Palindrome Test - Entering a value verifies if a Palindrome is True or Fale
 * This test also verifies that the string used is actually a Palindrome. The result should either be True or False.
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} data object passed in containing test data in the expected format {palindromeFilter (string), palindromeResult (string) }
 * @param {string} selectors See selectors.js for more information
*/

let palindrome = (browser, data, selectors) => {
    //input palindrome" into selector into the palindrome Input Field
    browser.setValue(
        selectors.palindromeInput, data.palindromeFilter
    )
    //Click the Filter Button (Selector)
    browser.click(selectors['palindromeCheck'])
    //check the results to make sure that I have a palindrome
    browser.expect.element(selectors['palindromeResults']).text.to.contain(data.palindromeResult)
}

/**
 * Sum Test
 * This test also verifies that the sum of 2 numbers is accurate. In this example we are using 5 + 5 = 10
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} data object passed in containing test data in the expected format {palindromeFilter (string), palindromeResult (string) }
 * @param {string} selectors See selectors.js for more information
*/

let sum = (browser, data, selectors) => {
    //input 5 into the sumInput1 
    browser.setValue(
        selectors.sumInput1, data.sumInput1
    )
    //input 5 into the sumInput2
    browser.setValue(
        selectors.sumInput2, data.sumInput2
    )
    //Click the Add Button
    browser.click(selectors['sumAdd'])
    //check the results to make sure I have 10
    browser.expect.element(selectors['sumInputResult']).text.to.contain(data.sumResult)
}


module.exports = {
    evenandOdd: evenandOdd,
    filterObject: filterObject,
    filterName: filterName,
    palindrome: palindrome,
    sum:sum
}