<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 mb-20">
          <div class="card">
            <div class="card-body d-flex justify-content-end">
              <div class="button-group">
                <router-link :to="{ name: 'product_list'}" class='btn btn-dark'>
                <i class='fa fa-long-arrow-alt-left'></i> Regresar</router-link>
                <a :href="'http://fanntop.com/producto/' + product.slug" target='_blank' class='btn btn-primary'>Ver en tienda</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="card">
            <div class="card-header">
              <h5 class="card-header__title">Información Basica</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Nombre</label>
                    <div class='form-group__text' >{{product.name}}</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Descripción:</label>
                    <div class='form-group__text' v-html='product.description'></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Caracteristicas:</label>
                    <div class='form-group__text' v-html='product.characteristics'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--margin">
            <div class="card-header">
              <h5 class="card-header__title">Productos Variantes</h5>
            </div>
            <div class="card-body">
              <div class="row product_variant" >
                <div class="col-1">
                  <span class='product_variant__text'>Activo</span>
                </div>

                <div class="col-3">
                  <span class='product_variant__text'>Variante</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>SKU</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>Precio</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>Stock</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>Favorito</span>
                </div>

              </div>
              <div class="row product_variant" v-for='product_variant in product.product_class_products'>
                <div class="col-1">
                  <span class="product_variant__bol" :class="{'product_variant__bol--active': product_variant.is_active}"></span>
                </div>
                <div class="col-3">
                    <div class="" v-for='attr_option in product_variant.attribute_option'>
                      <span class='product_variant__text'>{{attr_option.name_attr}}: {{attr_option.option}}</span>
                    </div>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>{{product_variant.sku}}</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>S/. {{product_variant.price}}</span>
                </div>
                <div class="col-2">
                  <span class='product_variant__text'>{{product_variant.stock}}</span>
                </div>
                <div class="col-2">
                  <span class="product_variant__bol" :class="{'product_variant__bol--active': product_variant.is_featured}"></span>
                </div>

              </div>
            </div>
          </div>
          <div class="card card--margin">
            <div class="card-header">
              <h5 class="card-header__title">Especificaciones</h5>
            </div>
            <div class="card-body">
              <div class="row card-body--inline align-items-center" v-for='attr_value in product.data_sheet.ficha'>
                <div class="col-3">
                   <div class="form-group">
                     <label for="">{{attr_value.name}}</label>
                   </div>
                </div>
                <div class="col-9">
                  <div class="form-group">
                    <div class='form-group__text' >{{attr_value.value}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--margin">
            <div class="card-header">
              <h5 class="card-header__title">Seo</h5>
            </div>
            <div class="card-body">
              <div class="col-12">
                <div class="form-group">
                  <label for="">Title</label>
                  <div class='form-group__text' >{{product.title}}</div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="">Meta Description</label>
                  <div class='form-group__text' >{{product.meta_description}}</div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="">Url</label>
                  <div class='form-group__text' ><span>http://fanntop.com/producto/</span>{{product.slug}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h5 class="card-header__title">Detalle</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="form-group form-group--inline">
                    <label for="">Publicado</label>
                    <div class='form-group__text' v-if='product.is_published'>Si</div>
                    <div class='form-group__text' v-else>Si</div>
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
  import { mapMutations } from 'vuex'
  export default {
    name: 'ProductDetail',
    data () {
      return {
        product: {
          data_sheet: {
            ficha: []
          }
        }
      }
    },
    created () {
      this.getProduct()
      this.setNameMenu('Producto')
    },
    methods: {
      ...mapMutations([
        'setNameMenu'
      ]),
      getProduct () {
        var self = this
        this.axios({
          method: 'get',
          url: '/product/' + self.$route.params.slug + '/'
        }).then(response => {
          self.product = response.data
        })
      }
    }
  }
</script>
<style lang='scss'>
   @import "~styles/abstract/variables";
  .product_variant{
    margin-top: 10px;
    justify-content: space-between;
    [class*="col-"]{
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }
    &__bol{
      width: 15px;
      height: 15px;
      background: $color_table;
      display: block;
      border-radius: 50%;
      &--active{
        background: $color_success;
      }
    }
    &__text{
      font-size: 14px;
      color: $color_text_black;
    }
  }
</style>