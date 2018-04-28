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
    this.renderChart({
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
          {
            label: 'Ventas',
            borderColor: '#007ce2',
            pointBackgroundColor: '#007ce2',
            borderWidth: 2,
            pointBorderColor: '#007ce2',

            data: [20, 15, 50, 80]
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