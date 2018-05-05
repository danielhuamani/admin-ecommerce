import Vue from 'vue'

export function decimal () {
    Vue.filter('decimal', function (value) {
        if (value) {
            return parseFloat(value).toFixed(2)
        }
        return 0
    })
}
