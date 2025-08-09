'use strict'

/*
 * @Author - Adam I. Gerard
 */

const { MAKE_NUM_S_KEY, MAKE_NUM_N_KEY, MAKE_NUM_JSON, RESULT_LOG } = require('../helpers')
const { FULL_LOGGING } = require('../config')

module.exports = {
    OBJ_JSON: () => {
        const TESTS = MAKE_NUM_JSON()
        
        const BEGIN = new Date()
        for (let i = 0; i < TESTS.length; i++) {
            const OBJ = TESTS[i]
        }
        const END = new Date()
        return RESULT_LOG(`OBJ_JSON`, END, BEGIN)
    },

    OBJ_SET_N_KEYS: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const BEGIN = new Date()
        const OBJ = {}
        for (let i = 0; i < TESTS.length; i++) {
            OBJ[TESTS[i]] = TESTS[i]
        }
        const END = new Date()
        return RESULT_LOG(`OBJ_SET_N_KEYS`, END, BEGIN)
    },

    OBJ_READ_N_KEYS: () => {
        const TESTS = MAKE_NUM_N_KEY()

        const OBJ = {}
        for (let i = 0; i < TESTS.length; i++) {
            OBJ[TESTS[i]] = TESTS[i]
        }

        const BEGIN = new Date()
        const OK_OBJ = Object.keys(OBJ)
        for (let i = 0; i < OK_OBJ.length; i++) {
            const K = OK_OBJ[i]
            const V = OBJ[K]
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        }
        const END = new Date()
        return RESULT_LOG(`OBJ_READ_N_KEYS`, END, BEGIN)
    },

    OBJ_SET_S_KEYS: () => {
        const TESTS = MAKE_NUM_S_KEY()

        const BEGIN = new Date()
        const OBJ = {}
        for (let i = 0; i < TESTS.length; i++) {
            OBJ[TESTS[i]] = TESTS[i]
        }
        const END = new Date()
        return RESULT_LOG(`OBJ_SET_S_KEYS`, END, BEGIN)
    },

    OBJ_READ_S_KEYS: () => {
        const TESTS = MAKE_NUM_S_KEY()

        const OBJ = {}
        for (let i = 0; i < TESTS.length; i++) {
            OBJ[TESTS[i]] = TESTS[i]
        }

        const BEGIN = new Date()
        const OK_OBJ = Object.keys(OBJ)
        for (let i = 0; i < OK_OBJ.length; i++) {
            const K = OK_OBJ[i]
            const V = OBJ[K]
            if (FULL_LOGGING) console.log(`${K}, ${V}`)
        }
        const END = new Date()
        return RESULT_LOG(`OBJ_READ_S_KEYS`, END, BEGIN)
    }
}