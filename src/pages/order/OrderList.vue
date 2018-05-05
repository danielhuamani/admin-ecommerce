<template>
  <div class="row">
    <div class="col-12">
      <form action='' method='' class="card">
        <div class="card-body d-flex">
          <div class="btn-group">
            <a href="" class="btn btn-dark card-body__btn" @click.prevent='showFilter=!showFilter'>Filtros</a>
            <div class="card-body__filters">

            </div>
          </div>
          <div class="card-body--search">
            <i class='fa fa-search card-body__icon-search'></i>
            <input type="text" class='form-control card-body__input-search' v-model='query.search' @keyup='search($event.target.value)'>
          </div>
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
                  <div class="col-3 card-table__header__col">
                    <h6 class='card-table__header__title'>Cliente</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("full_name", "asc")' :class='isActiveOrderBy("full_name", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("full_name", "desc")' @click='orderBy("full_name", "desc")'></i>
                    </div>
                  </div>
                 <!--  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Apellidos</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("order_order_customer__last_name", "asc")' :class='isActiveOrderBy("order_order_customer__last_name", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("order_order_customer__last_name", "desc")' @click='orderBy("order_order_customer__last_name", "desc")'></i>
                    </div>
                  </div> -->
                  <div class="col-3 card-table__header__col">
                    <h6 class='card-table__header__title'>Email</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("order_order_customer__email", "asc")' :class='isActiveOrderBy("order_order_customer__email", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("order_order_customer__email", "desc")' @click='orderBy("order_order_customer__email", "desc")'></i>
                    </div>
                  </div>
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Total</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("influencer_total", "asc")' :class='isActiveOrderBy("influencer_total", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("influencer_total", "desc")' @click='orderBy("influencer_total", "desc")'></i>
                    </div>
                  </div>
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Fecha</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("created", "asc")' :class='isActiveOrderBy("created", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("created", "desc")' @click='orderBy("created", "desc")'></i>
                    </div>
                  </div>
                  <div class="col-2 card-table__header__col">
                    <h6 class='card-table__header__title'>Estado</h6>
                    <div class="card-table__header__orderBy">
                      <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("created", "asc")' :class='isActiveOrderBy("created", "asc")'></i>
                      <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='isActiveOrderBy("created", "desc")' @click='orderBy("created", "desc")'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-table__content-body content-body">
              <div class="d-flex card-table__row" v-for='order in orderList.results'>
                <router-link :to="{ name: 'order_detail', params: { code: order.code } }" class="col-12 card-table__body__field">
                  <div class="row card-table__body">
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{order.full_name}} </p>
                    </div>
                  <!--   <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>{{order.order_order_customer.last_name}}</p>
                    </div> -->
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{order.order_order_customer.email}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>S/ {{order.influencer_extra.total.toFixed(2)}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>{{order.fecha}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <p class='card-table__body__field'>{{order.status}}</p>
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
import orderBy from '@/mixins/orderBy'
import { mapMutations } from 'vuex'
export default {
  name: 'OrderList',
  mixins: [orderBy],
  data () {
    return {
      orderList: {},
      showFilter: false,
      status: [
        {
          name: 'En Almacén',
          value: 'AL'
        },
        {
          name: 'En Despacho',
          value: 'DS'
        },
        {
          name: 'Entregado',
          value: 'EG'
        }
      ]
    }
  },
  created () {
    this.getDataList()
    this.setNameMenu('Pedido')
    this.fields = 'order_order_customer,fecha,influencer_extra,code,status'
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
    search (value) {
      console.log(value, 'value')
      if (value.length > 2) {
        this.getDataList()
      } else {
        if (value.length === 0) {
          this.getDataList()
        }
      }
    },
    getDataList () {
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
