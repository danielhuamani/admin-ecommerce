<template>
  <div class="row">
    <div class="col-12">
      <form action='' method='' class="card">
        <div class="card-body d-flex">
          <div class="card-body--search">
            <i class='fa fa-search card-body__icon-search'></i>
            <input type="text" class='form-control card-body__input-search' v-model='query.search' @keyup='search($event.target.value)'>
          </div>
          <a href="" class="btn btn-dark card-body__btn">Filtros</a>
        </div>
      </form>
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
                <!--   <div class="row align-items-center card-table__body" v-if='product.product_class_products.length > 1'>
                    <div class="col-4 card-table__body__col card-table__body__col--image">
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
                  </div> -->
                  <div class="row align-items-center card-table__body">
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
               <!--  <div class="col-12"  v-if='product.product_class_products.length > 1'>
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
                </div> -->
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
  name: 'ProductList',
  data () {
    return {
      productList: {
        results: [],
        previous: '',
        next: '',
        count: ''
      },
      query: {
        search: '',
        fields: 'product_class_products,is_published,name,slug'
      }
    }
  },
  created () {
    this.getProducts()
    this.setNameMenu('Producto')
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
    getProducts () {
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
        this.getProducts()
      } else {
        if (value.length === 0) {
          this.getProducts()
        }
      }
    },
    orderBy (field, orderBy) {
      this.query['field'] = field
      this.query['orderBy'] = orderBy
      this.getProducts()
    },
    isActiveOrderBy (fieldName, order) {
      console.log(fieldName, order, 'fieldName, order')
      if (this.query.field === fieldName && this.query.orderBy === order) {
        return true
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang='scss'>
</style>
