<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
          <h5>Mis Ventas</h5>
      </div>
      <div class="card-body">
        <LineDashboard :dashboard='dashboard' v-if='load'></LineDashboard>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import LineDashboard from '@/components/LineDashboard'
export default {
  name: 'Dashboard',
  components: {
    LineDashboard
  },
  created () {
    this.getDashboard()
  },
  data () {
    return {
      dashboard: {},
      load: false
    }
  },
  methods: {

    getDashboard () {
      const self = this
      this.axios({
        method: 'get',
        url: '/dashboard/'
      }).then(response => {
        self.dashboard = response.data
        self.load = true
      })
    }
  }
}
</script>
