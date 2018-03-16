const functions = require('../supporting/functions')
const data = require('../supporting/data')
const selectors = require('../supporting/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },
    'Even and Odds Test': browser => functions.evenandOdd(browser, data.evenOddInput, selectors),
    'Filter Object Test': browser => functions.filterObject(browser, data.filterObject, selectors),
    'Fitler Name Test': browser => functions.filterName(browser, data.filterName, selectors),
    'Palindrome Test': browser => functions.palindrome(browser, data.palindrome, selectors),
    'Sum Test': browser => functions.sum(browser, data.sum, selectors)
}