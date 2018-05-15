<template>
  <canvas id="myChartOrderCount" height="400"></canvas>
</template>
<script>
import Chart from 'chart.js'

export default {
  name: 'BarDashboard',
  data () {
    return {

    }
  },
  props: ['dashboard'],
  methods: {
    renderChart: function(data_chart, options){
      var ctx = document.getElementById('myChartOrderCount').getContext('2d');
      this._chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: data_chart,

          // Configuration options go here
          options: options
      });
    }
  },
  mounted () {
    const self = this
    var data;
    var color = ['#699000', '#FB5660', '#65799B', '#545561', '#333538','#699000']
    var data_set =  Object.keys(self.dashboard.reporte).map(function(value, index) {
      console.log(value, index)
      data = {
              label: self.dashboard.reporte[value]['name'],
              backgroundColor: color[index],
              data: [self.dashboard.reporte[value]['total']]
      }
      return data;
    })
    console.log(data_set)
    this.renderChart({
          labels: [self.dashboard.mes_anio],
          datasets: data_set

      }, {responsive: true, maintainAspectRatio: false, scales: {
            xAxes: [{ barPercentage: 0.2 }]
        }})
  },
  beforeDestroy () {
    if (this._chart) {
      // this._chart.destroy()
      this._chart.destroy();
    }
  }
}
</script>