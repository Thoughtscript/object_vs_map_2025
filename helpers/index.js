'use strict'

/*
 * @Author - Adam I. Gerard
 */

const { NUMBER_OF_TESTS, KEY_LEN, FULL_LOGGING } = require('../config')

const MAKE_S_KEY = () => {
    let temp = ''

    for (let i = 0; i < KEY_LEN; i++) {
        const P = Math.floor(Math.random() * 3)
        if (P === 0) {
            const R = 57 - 48
            const N = Math.floor(Math.random() * R) + 48
            temp += String.fromCharCode(N)
        }

        if (P === 1) {
            const R = 90 - 65
            const N = Math.floor(Math.random() * R) + 65
            temp += String.fromCharCode(N)
        }

        if (P === 2) {
            const R = 122 - 97
            const N = Math.floor(Math.random() * R) + 97
            temp += String.fromCharCode(N)
        }
    }

    return temp
}

const MAKE_N_KEY = () => {
    let temp = ''

    for (let i = 0; i < KEY_LEN; i++) {
        temp += `${Math.floor(Math.random() * 9)}`
    }

    return temp
}

const MAKE_JSON = () => {
    const JSON = {}
    JSON[MAKE_S_KEY()] = MAKE_N_KEY()
    JSON[MAKE_N_KEY()] = MAKE_S_KEY()
    return JSON
}

module.exports = {
    MAKE_NUM_S_KEY: () => {
        let tests = []

        for (let i = 0; i < NUMBER_OF_TESTS; i++) {
            tests.push(MAKE_S_KEY())
        }

        if (FULL_LOGGING) {
            console.log(`${NUMBER_OF_TESTS} alphanumeric String tests of key length ${KEY_LEN} created!`)
            console.log(tests)
        }
        return tests
    },

    MAKE_NUM_N_KEY: () => {
        let tests = []

        for (let i = 0; i < NUMBER_OF_TESTS; i++) {
            tests.push(MAKE_N_KEY())
        }

        if (FULL_LOGGING) {
            console.log(`${NUMBER_OF_TESTS} numeric String tests of key length ${KEY_LEN} created!`)
            console.log(tests)
        }
        return tests
    },

    MAKE_NUM_JSON: () => {
        let tests = []

        for (let i = 0; i < NUMBER_OF_TESTS; i++) {
            tests.push(MAKE_JSON())
        }

        if (FULL_LOGGING) {
            console.log(`${NUMBER_OF_TESTS} JSON tests of key length ${KEY_LEN} created!`)
            console.log(tests)
        }
        return tests
    },

    RESULT_LOG: (TEST_NAME, END, BEGIN) => {
        return `${TEST_NAME} ${NUMBER_OF_TESTS} tests of key length ${KEY_LEN} completed in ${END - BEGIN}`
    }
}