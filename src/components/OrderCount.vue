<template>
  <div class="col-6">
    <div class="card card--margin">
      <div class="card-header">
          <h5>Cantidad de Pedidos</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <date-picker v-model="create" :confirm='true' :range='true' id='orderfecha' lang='es' @change='changeDate' format='dd/MM/yyyy' > </date-picker>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-12">
            <BarDashboard :dashboard='reporte' v-if='load'></BarDashboard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import {en, es} from 'vuejs-datepicker/dist/locale'
import BarDashboard from '@/components/BarDashboard'
import Chart from 'chart.js'
export default {
  name: 'OrderCountDashboard',
  data () {
    return {
      reporte: '',
      load: false,
      create: '',
      filter: {
        create_to: '',
        create_from: ''
      }
    }
  },
  components: {
    BarDashboard,
    DatePicker
  },
  created () {
    this.filter.create_to = this.formatDate(new Date())
    this.filter.create_from = this.formatDate(this.getInitialMonth())
    this.create = [this.getInitialMonth(), new Date()]
    this.getDashboard()
  },
  methods: {
    getInitialMonth () {
      var CurrentDate = new Date();
      CurrentDate.setMonth(CurrentDate.getMonth() - 4)
      CurrentDate.setDate(1)
      return CurrentDate
    },
    getDashboard () {
      const self = this
      self.load = false
      this.axios({
        method: 'get',
        url: '/dashboard-order/',
        params: self.filter
      }).then(response => {
        self.reporte = response.data
        self.load = true
      })
    },
    changeDate (value) {
      if (value) {
        this.filter.create_from = this.formatDate(value[0])
        this.filter.create_to = this.formatDate(value[1])
      } else {
        this.filter.create_to = ''
        this.filter.create_from = ''
      }
      this.getDashboard()
    },
    formatDate (date) {
      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 101).toString().substring(1);
      var day = (date.getDate() + 100).toString().substring(1);
      return day + '/' + month + '/' + year
    }
  }

}
</script>