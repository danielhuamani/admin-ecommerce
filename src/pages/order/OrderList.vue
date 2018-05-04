<template>
  <div class="row">
    <div class="col-12">
      <form action='' method='' class="card">
        <div class="card-body d-flex">
          <div class="card-body--search">
            <i class='fa fa-search card-body__icon-search'></i>
            <input type="text" class='form-control card-body__input-search'>
          </div>
          <a href="" class="btn btn-dark card-body__btn">Filtros</a>
        </div>
      </form>
    </div>
    <div class="col-12 content-table">
      <div class="card ">
        <div class="d-flex">
          <div class="card-body col-12 card-table">
            <div class="d-flex card-table__header"  >
              <div class="col-12">
                <div class="row">
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Nombres</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                    </div>
                  </div>
                  <div class="col-3 card-table__header__col">
                    <h6 class='card-table__header__title'>Apellidos</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                    </div>
                  </div>
                  <div class="col-3 card-table__header__col">
                    <h6 class='card-table__header__title'>Email</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                    </div>
                  </div>
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Total</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                    </div>
                  </div>
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Fecha</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-table__content-body content-body">
              <div class="d-flex card-table__row" v-for='order in orderList.results'>
                <router-link :to="{ name: 'order_detail', params: { code: order.code } }" class="col-12 card-table__body__field">
                  <div class="row card-table__body">
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>{{order.order_order_customer.first_name}}</p>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{order.order_order_customer.last_name}}</p>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{order.order_order_customer.email}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>S/ {{order.influencer_extra.total.toFixed(2)}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>{{order.fecha}}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'OrderList',
  data () {
    return {
      orderList: {},
      query: {
        search: '',
        fields: 'order_order_customer,fecha,influencer_extra,code'
      }
    }
  },
  created () {
    this.getOrder()
    this.setNameMenu('Pedido')
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
    getOrder () {
      const self = this
      this.axios.get('/order/', {
        params: self.query
      }).then(response => {
        self.orderList = response.data
      })
    }
  }
}
</script>
<style lang='scss'>
</style>
