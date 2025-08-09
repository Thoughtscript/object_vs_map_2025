'use strict'

/*
 * @Author - Adam I. Gerard
 */

const { MAKE_NUM_S_KEY, MAKE_NUM_N_KEY, RESULT_LOG, MAKE_NUM_JSON } = require('../helpers')
const { FULL_LOGGING, NUMBER_OF_TESTS } = require('../config')

module.exports = {
    MAP_JSON: () => {
        const TESTS = MAKE_NUM_JSON()

        const BEGIN = new Date()
        for (let i = 0; i < TESTS.length; i++) {
            const JSON = TESTS[i]
            const M = new Map()
            const OK_J = Object.keys(JSON)
            for (let j = 0; j < OK_J.length; j++) {
                M.set(OK_J[j],JSON[OK_J[j]])
            }
        }
        const END = new Date()
        return RESULT_LOG(`MAP_JSON`, END, BEGIN)
    },

    MAP_SET_N_KEYS: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const BEGIN = new Date()
        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }
        const END = new Date()
        return RESULT_LOG(`MAP_SET_N_KEYS`, END, BEGIN)
    },

    MAP_READ_N_KEYS: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }

        const BEGIN = new Date()
        M.forEach((value, key) => {
            const K = key
            const V = value
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        })
        const END = new Date()
        return RESULT_LOG(`MAP_READ_N_KEYS`, END, BEGIN)
    },

    MAP_READ_N_KEYS_ITER: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }

        const BEGIN = new Date()
        const iterator = M[Symbol.iterator]()
        for (const item of iterator) {
            const K = item[0]
            const V = item[1]
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        }
        const END = new Date()
        return RESULT_LOG(`MAP_READ_N_KEYS_ITER`, END, BEGIN)
    },

    MAP_SET_S_KEYS: () => {
        const TESTS = MAKE_NUM_S_KEY()

        const BEGIN = new Date()
        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }
        const END = new Date()
        return RESULT_LOG(`MAP_SET_S_KEYS`, END, BEGIN)
    },

    MAP_READ_S_KEYS: () => {
        const TESTS = MAKE_NUM_S_KEY()

        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }

        const BEGIN = new Date()
        M.forEach((value, key) => {
            const K = key
            const V = value
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        })
        const END = new Date()
        return RESULT_LOG(`MAP_READ_S_KEYS`, END, BEGIN)
    },

    MAP_READ_S_KEYS_ITER: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const M = new Map()
        for (let i = 0; i < TESTS.length; i++) {
            M.set(TESTS[i], TESTS[i])
        }

        const BEGIN = new Date()
        const iterator = M[Symbol.iterator]()
        for (const item of iterator) {
            const K = item[0]
            const V = item[1]
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        }
        const END = new Date()
        return RESULT_LOG(`MAP_READ_S_KEYS_ITER`, END, BEGIN)
    }
}