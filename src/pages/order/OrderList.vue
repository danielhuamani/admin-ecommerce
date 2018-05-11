<template>
  <div class="row" >
    <div class="overlay" @click='hideFilter()'>

    </div>
    <div class="col-12">
      <form action='' method='' class="card">
        <div class="card-body d-flex">
          <div class="btn-group ">
            <a href="" class="btn btn-dark card-body__btn" @click.prevent='showFilter=!showFilter'>Filtros</a>
          </div>
          <div class="card-body--search">
            <i class='fa fa-search card-body__icon-search'></i>
            <input type="text" class='form-control card-body__input-search' v-model='query.search' @keyup='search($event.target.value)'>
          </div>
        </div>

      </form>
      <div class="card card--margin_filter" v-show='showFilter'>
        <div class="card-header">
          <h5 class="card-header__title">Filtros</h5>
        </div>
        <div class="card-body ">
          <div class="row">
            <div class="col-2">
              <div class="form-group">
                <label for="">Desde</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.total_from'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group">
                <label for="">Hasta</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.total_to'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group">
                <label for="">Desde</label>
                <date-picker v-model="date_from" id='fecha1'  @change='changeDateFrom' lang='es' format='dd/MM/yyyy'></date-picker>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group">
                <label for="">Hasta</label>
                <date-picker v-model="date_to" id='fecha2' lang='es' @change='changeDateTo' format='dd/MM/yyyy'> </date-picker>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label for="">Estado</label>
                <select name=""  id="" @change='changeStatus($event)' v-model='filter.status' class='form-control'>
                  <option value="">Todos</option>
                  <option :value="st.value" v-for='st in status'>
                    {{st.label}}
                  </option>
                </select>
          <!--       <v-select v-model="filter.status" :options="status" @change='changeStatus($event)' multiple ></v-select> -->
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <a href="" class='btn btn-dark' @click.prevent='showFilter=false'>Cerrar</a>
        </div>
      </div>

      <div class="card card--margin_filter" v-if='existFilter() && !showFilter'>
        <div class="card-body card-body--filters">
          <div class="row card-body__filters" >
            <div class="col-2" v-if='filter.total_from'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Desde <strong>S/ {{filter.total_from}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("total_from")'></i>
              </div>
            </div>
            <div class="col-2" v-if='filter.total_to'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Hasta <strong>S/ {{filter.total_to}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("total_to")'>
                </i>
              </div>
            </div>
            <div class="col-2" v-if='filter.create_from'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Desde <strong>{{filter.create_from}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("create_from")'></i>
              </div>
            </div>
            <div class="col-2" v-if='filter.create_to'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Hasta <strong>{{filter.create_to}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("create_to")'></i>
              </div>
            </div>
            <div class="col-2" v-if='filter.status'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'><strong>{{getStatus(filter.status).label}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("status")'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 content-table">
      <div class="card ">
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
</template>
<script>
import vSelect from 'vue-select'
import orderBy from '@/mixins/orderBy'
import DatePicker from 'vue2-datepicker'
import {en, es} from 'vuejs-datepicker/dist/locale'
import { mapMutations } from 'vuex'
export default {
  name: 'OrderList',
  mixins: [orderBy],
  components: {
    DatePicker,
    vSelect
  },
  data () {
    return {
      orderList: {},
      showFilter: false,
      date_to: '',
      date_from: '',
      filter: {
        total_to: '',
        total_from: '',
        create_to: '',
        create_from: '',
        status: ''
      },
      status: [
        {
          label: 'En Almacén',
          value: 'AL'
        },
        {
          label: 'En Despacho',
          value: 'DS'
        },
        {
          label: 'Entregado',
          value: 'EG'
        }
      ]
    }
  },
  created () {
    console.log(es)
    this.getDataList()
    this.setNameMenu('Pedido')
    this.query.fields = 'order_order_customer,fecha,influencer_extra,code,status,full_name'
    this.query['filter'] = {
      total_to: '',
      total_from: '',
      create_to: '',
      create_from: '',
      status: []
    }
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
    existFilter () {
      const self = this
      var exist = false
      // for (var i = 0; i < Object.values(self.filter); i++) {
      //   console.log(Object.values(self.filter)[i], '----')
      //   if (Object.values(self.filter)[i]) {
      //     exist = true
      //   }
      // }
      for(let val in self.filter) {
        if (self.filter[val].length > 0) {
          exist = true
        }
      }

      return exist
      // if (this.query.filter.total_to || this.query.filter.total_from || this.query.filter.create_from || this.query.filter.create_to) {
      //   self.showFilterText =  true
      // } else {
      //   self.showFilterText =  false
      // }
    },
    search (value) {
      if (value.length > 2) {
        this.getDataList()
      } else {
        if (value.length === 0) {
          this.getDataList()
        }
      }
    },
    setFilter () {
      this.setQuery()
      this.getDataList()
    },
    getDataList () {
      const self = this
      this.axios.get('/order/', {
        params: self.query
      }).then(response => {
        self.orderList = response.data
      })
    },
    setQuery () {
      const self = this
      this.query['filter'] = {
        total_to: self.filter.total_to,
        total_from: self.filter.total_from,
        create_to: self.filter.create_to,
        create_from: self.filter.create_from,
        status: self.filter.status
      }
    },
    cleanFilter (field) {
      // this.filter[field] = ''
      this.$set(this.filter, field, '')
      this.setQuery()
      this.getDataList()
      // this.existFilter()
    },
    changeDateTo (value) {
      console.log(value, 'value')
      if (value) {
        this.filter.create_to = this.formatDate(value)
      } else {
        this.filter.create_to = ''
      }
      this.setFilter()
    },
    changeDateFrom (value) {
      console.log(value, 'value')
      if (value) {
        this.filter.create_from = this.formatDate(value)
      } else {
        this.filter.create_from = ''
      }
      this.setFilter()
    },
    changeStatus (e) {
      console.log(e, e.target.value, '----')
      this.setFilter()
    },
    formatDate (date) {
      console.log(date, 'date')
      var year = date.getFullYear().toString();
      console.log(year, '---', (date.getMonth() + 101), (date.getDate() + 100))
      var month = (date.getMonth() + 101).toString().substring(1);
      var day = (date.getDate() + 100).toString().substring(1);
      console.log(day, year)
      return day + '/' + month + '/' + year
    },
    hideFilter() {
      this.showFilter = false
      this.show.total = false
      this.show.date = false
      this.show.status = false
    },
    getStatus (st) {
      let result = this.status.filter(x => x.value === st )
      return result[0]
    }
  }
}
</script>
<style lang='scss'>
  .mx-datepicker{
    width: 100% !important;
  }
  .overlay{
    width: 100%;
    height: 100%;
    position: fixed;

  }
</style>
