<template>
  <div class="row">
    <div class="col-12">
      <form action='' method='' class="card">
        <div class="card-body d-flex">
          <a href="" class="btn btn-dark card-body__btn" @click.prevent='showFilter=!showFilter'>Filtros</a>
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
              <div class="form-group form-group--nmargin">
                <label for="">Precio desde</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.price_from'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group form-group--nmargin">
                <label for="">Precio Hasta</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.price_to'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group form-group--nmargin">
                <label for="">Stock desde</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.stock_from'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group form-group--nmargin">
                <label for="">Stock Hasta</label>
                <input type="number" class='form-control' @keyup='setFilter()' v-model='filter.stock_to'>
              </div>
            </div>
            <div class="col-2">
              <div class="form-group form-group--nmargin">
                <label for="">Publicado</label>
                <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input"  @change='setFilter()' v-model='filter.is_published'>
                      <span class="custom-control-indicator"></span>
                  </label>
              </div>
            </div>



          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <a href="" class='btn btn-dark' @click.prevent='showFilter=false'>Cerrar</a>
        </div>
      </div>
      <div class="card card--margin_filter" v-if='!showFilter'>
        <div class="card-body card-body--filters">
          <div class="row card-body__filters" >
            <div class="col-2" v-if='filter.price_from'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Desde <strong>S/ {{filter.price_from}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("price_from")'></i>
              </div>
            </div>
            <div class="col-2" v-if='filter.price_to'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Hasta <strong>S/ {{filter.price_to}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("total_to")'>
                </i>
              </div>
            </div>
            <div class="col-2" v-if='filter.stock_from'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Desde <strong>{{filter.stock_from}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("stock_from")'></i>
              </div>
            </div>
            <div class="col-2" v-if='filter.stock_to'>
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Hasta <strong>{{filter.stock_to}}</strong></p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("stock_to")'></i>
              </div>
            </div>
            <div class="col-2" >
              <div class="card-body__filters__option" >
                <p class='card-body__filters__text'>Publicado
                  <strong v-if='filter.is_published'>Si</strong>
                  <strong v-else>No</strong>
                </p>
                <i class="fa fa-times card-body__filters__close"
                @click='cleanFilter("is_published")'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 content-table">
      <div class="card ">
        <div class="d-flex">
          <div class="card-body col-12 card-table">
            <div class="d-flex flex-wrap card-table__header"  >
              <div class="col-4 card-table__header__col">
                <h6 class='card-table__header__title'>Producto</h6>
                <div class="card-table__header__orderBy">
                  <i class="fa fa-angle-up card-table__header__orderBy__asc" @click='orderBy("name", "asc")' :class='{"card-table__header__orderBy__active": isActiveOrderBy("name", "asc")}'></i>
                  <i class="fa fa-angle-down card-table__header__orderBy__desc" :class='{"card-table__header__orderBy__active": isActiveOrderBy("name", "desc")}' @click='orderBy("name", "desc")'></i>
                </div>
              </div>
              <div class="col-3 card-table__header__col">
                <h6 class='card-table__header__title'>Precio</h6>
                <div class="card-table__header__orderBy">
                  <i class="fa fa-angle-up card-table__header__orderBy__asc card-table__header__orderBy__asc" @click='orderBy("product_class_products__price", "asc")'
                  :class='{"card-table__header__orderBy__active": isActiveOrderBy("product_class_products__price", "asc")}'>

                  </i>
                  <i class="fa fa-angle-down card-table__header__orderBy__asc card-table__header__orderBy__desc" @click='orderBy("product_class_products__price", "desc")' :class='{"card-table__header__orderBy__active": isActiveOrderBy("product_class_products__price", "desc")}'>

                  </i>
                </div>
              </div>
              <div class="col-3 card-table__header__col">
                <h6 class='card-table__header__title'>Stock</h6>
                <div class="card-table__header__orderBy">
                  <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                  <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                </div>
              </div>
              <div class="col-2 card-table__header__col">
                <h6 class='card-table__header__title'>Publicado</h6>
                <div class="card-table__header__orderBy">
                  <i class="fa fa-angle-up card-table__header__orderBy__asc"></i>
                  <i class="fa fa-angle-down card-table__header__orderBy__desc"></i>
                </div>
              </div>
            </div>
            <div class="card-table__content-body content-body">

              <div class="d-flex flex-wrap card-table__row" v-for='product in productList.results'>
                <div class="col-12">
                  <div class="row align-items-center card-table__body" v-if='product.product_class_products.length > 1'>
                    <div class="col-4 card-table__body__col card-table__body__col--image">
                      <i class="fa fa-arrow-up card-table__body__col__arrow_down"
                      v-if='openProduct==product.slug'
                      @click.prevent='openProduct=""'></i>
                      <i class="fa fa-arrow-down
                      card-table__body__col__arrow_down"
                      v-else
                      @click.prevent='openProduct=product.slug' ></i>
                      <img :src="product.product_class_products[0].image_crop" alt="">
                      <router-link :to="{ name: 'product_detail', params: { slug: product.slug } }" class='card-table__body__field'>{{product.name}}</router-link>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>-</p>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>-</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <div class='card-table__body__bol' :class="{'card-table__body__bol--active': product.is_published}"></div>
                    </div>
                  </div>
                  <div class="row align-items-center card-table__body" v-else>
                    <div class="col-4 card-table__body__col card-table__body__col--image">
                      <img :src="product.product_class_products[0].image_crop" alt="">
                      <router-link :to="{ name: 'product_detail', params: { slug: product.slug } }" class='card-table__body__field'>{{product.name}}</router-link>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>S/ {{product.product_class_products[0].price}}</p>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{product.product_class_products[0].stock}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">
                      <div class='card-table__body__bol' :class="{'card-table__body__bol--active': product.is_published}">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12"  v-if='product.product_class_products.length > 1 && openProduct==product.slug'>
                  <div class="row align-items-center card-table__body" v-for='product_variant in product.product_class_products'>
                    <div class="col-1 card-table__body__col">
                      <i class="fa fa-arrow-right card-table__body__col__arrow"></i>
                    </div>
                    <div class="col-3 card-table__body__col card-table__body__col--image">
                      <img :src="product_variant.image_crop" alt="">
                      <div class="card-table__body__field">
                        <span  v-for='(option, index) in product_variant.attribute_option'>
                          <span v-if='index != 0'>-</span>
                          {{option.option}}
                        </span>
                      </div>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>S/ {{product_variant.price}}</p>
                    </div>
                    <div class="col-3 card-table__body__col">
                      <p class='card-table__body__field'>{{product_variant.stock}}</p>
                    </div>
                    <div class="col-2 card-table__body__col">

                    </div>
                  </div>
                </div>
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
  name: 'ProductList',
  mixins: [orderBy],
  data () {
    return {
      openProduct: '',
      productList: {
        results: [],
        previous: '',
        next: '',
        count: ''
      },
      showFilter: false,
      filter: {
        price_to: '',
        price_from: '',
        stock_to: '',
        stock_from: '',
        is_published: true
      },
      query: {
        search: '',
        fields: 'product_class_products,is_published,name,slug'
      }
    }
  },
  created () {
    this.query['filter'] = {
      is_published: true
    }
    this.getDataList()
    this.setNameMenu('Producto')
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
    getDataList () {
      const self = this
      this.axios.get('/product/', {
        params: self.query
      }).then(response => {
        self.productList = response.data
      })
    },
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
    setQuery () {
      const self = this
      this.query['filter'] = {
        price_to: self.filter.price_to,
        price_from: self.filter.price_from,
        stock_to: self.filter.stock_to,
        stock_from: self.filter.stock_from,
        is_published: self.filter.is_published
      }
    },
    cleanFilter (field) {
      // this.filter[field] = ''
      this.$set(this.filter, field, '')
      this.setQuery()
      this.getDataList()
      // this.existFilter()
    },
    // orderBy (field, orderBy) {
    //   this.query['field'] = field
    //   this.query['orderBy'] = orderBy
    //   this.dataList()
    // },
    // isActiveOrderBy (fieldName, order) {
    //   console.log(fieldName, order, 'fieldName, order')
    //   if (this.query.field === fieldName && this.query.orderBy === order) {
    //     return true
    //   } else {
    //     return ''
    //   }
    // },
    setFilter () {
      this.setQuery()
      this.getDataList()
    },
  }
}
</script>
<style lang='scss'>
</style>
