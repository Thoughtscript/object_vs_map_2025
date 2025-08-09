'use strict'

/*
 * @Author - Adam I. Gerard
 */

const { MAP_SET_N_KEYS, MAP_READ_N_KEYS, MAP_SET_S_KEYS, MAP_READ_S_KEYS, MAP_JSON, MAP_READ_N_KEYS_ITER, MAP_READ_S_KEYS_ITER } = require('./map')
const { OBJ_SET_N_KEYS, OBJ_READ_N_KEYS, OBJ_SET_S_KEYS, OBJ_READ_S_KEYS, OBJ_JSON } = require('./obj')

try {
    let results = []

    results.push(MAP_SET_N_KEYS())
    results.push(MAP_READ_N_KEYS())
    results.push(MAP_SET_S_KEYS())
    results.push(MAP_READ_S_KEYS())
    results.push(MAP_READ_S_KEYS_ITER())
    results.push(MAP_READ_N_KEYS_ITER())
    results.push(MAP_JSON())
    results.push(`==========================================================`)
    results.push(OBJ_SET_N_KEYS())
    results.push(OBJ_READ_N_KEYS())
    results.push(OBJ_SET_S_KEYS())
    results.push(OBJ_READ_S_KEYS())
    results.push(OBJ_JSON())

    for (let i = 0; i < results.length; i++) {
        console.log(results[i])
    }

} catch (ex) {
    console.error(`Exception encountered: ${ex}!`)

}
