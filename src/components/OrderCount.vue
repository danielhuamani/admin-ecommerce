<template>
  <div class="col-12">
    <div class="card card--margin">
      <div class="card-header">
          <h5>Cantidad de Pedidos</h5>
      </div>
      <div class="card-body">
        <BarDashboard :dashboard='reporte' v-if='load'></BarDashboard>
      </div>
    </div>
  </div>
</template>
<script>
import BarDashboard from '@/components/BarDashboard'
import Chart from 'chart.js'
export default {
  name: 'OrderCountDashboard',
  data () {
    return {
      reporte: '',
      load: false
    }
  },
  components: {
    BarDashboard
  },
  created () {
    this.getDashboard()
  },
  methods: {
    getDashboard () {
      const self = this
      this.axios({
        method: 'get',
        url: '/dashboard-order/'
      }).then(response => {
        self.reporte = response.data
        self.load = true
      })
    }
  }

}
</script>