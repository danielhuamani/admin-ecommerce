<template>
  <canvas id="myChartVencer" height="400"></canvas>
</template>
<script>
import Chart from 'chart.js'

export default {
  data () {
    return {

    }
  },
  props: ['dashboard'],
  methods: {
    renderChart: function(data_chart, options){
      var ctx = document.getElementById('myChartVencer').getContext('2d');
      this._chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: data_chart,

          // Configuration options go here
          options: options
      });
    }
  },
  mounted () {
    const self = this
    this.renderChart({
        labels: self.dashboard.mes_anio,
        datasets: [
          {
            label: 'Ventas',
            borderColor: '#007ce2',
            pointBackgroundColor: '#007ce2',
            borderWidth: 2,
            pointBorderColor: '#007ce2',

            data: self.dashboard.sum_total
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
  },
  beforeDestroy () {
    if (this._chart) {
      // this._chart.destroy()
      this._chart.destroy();
    }
  }
}
</script>