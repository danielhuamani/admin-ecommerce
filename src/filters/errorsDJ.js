import Vue from 'vue'

export function hasError () {
    Vue.filter('hasError', function (dataError, field, nested, index) {
        if (nested) {
            return Boolean(dataError[index][field])
        } else {
            return Boolean(dataError[field])
        }
    })
}

export function getError () {
    Vue.filter('getError', function (dataError, field, nested, index) {
        if (nested) {
            return dataError[index][field]
        } else {
            return dataError[field]
        }
    })
}