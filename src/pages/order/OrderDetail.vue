<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 mb-20">
          <div class="card">
            <div class="card-body d-flex justify-content-end">
              <router-link :to="{ name: 'order_list'}" class='btn btn-dark'>
              <i class='fa fa-long-arrow-alt-left'></i> Regresar</router-link>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-header__title">Información Basica</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Estado</label>
                        <div class='form-group__text' >{{order.status}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Fecha</label>
                        <div class='form-group__text' >{{order.fecha}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Codigo de orden</label>
                        <div class='form-group__text' >{{order.code}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card--margin">
                <div class="card-header">
                  <h5 class="card-header__title">Información Cliente</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Nombres</label>
                        <div class='form-group__text' >{{order.order_order_customer.first_name}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Apellidos</label>
                        <div class='form-group__text' >{{order.order_order_customer.last_name}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Email</label>
                        <div class='form-group__text' >{{order.order_order_customer.email}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Celular</label>
                        <div class='form-group__text' >{{order.order_order_customer.phone}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Tipo documento</label>
                        <div class='form-group__text' >{{order.order_order_customer.type_document}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Documento</label>
                        <div class='form-group__text' >{{order.order_order_customer.document}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card--margin">
                <div class="card-header">
                  <h5 class="card-header__title">Información Envio</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Nombres</label>
                        <div class='form-group__text' >{{order.order_ordershipping.first_name}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Apellidos</label>
                        <div class='form-group__text' >{{order.order_ordershipping.last_name}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Celular</label>
                        <div class='form-group__text' >{{order.order_ordershipping.phone}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Tipo Documento</label>
                        <div class='form-group__text' >{{order.order_ordershipping.type_document}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Documento</label>
                        <div class='form-group__text' >{{order.order_ordershipping.document}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Dirección</label>
                        <div class='form-group__text' >{{order.order_ordershipping.address}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Referencia</label>
                        <div class='form-group__text' >{{order.order_ordershipping.reference}}</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Lugar</label>
                        <div class='form-group__text' >{{order.order_ordershipping.ubigeo_full}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-header__title">Mis Productos</h5>
                </div>
                <div class="card-body">
                  <div class="d-flex card-table__header card-table__header--white"  >
                    <div class="col-12">
                      <div class="row">
                        <div class="col-2 card-table__header__col">
                          <h6 class='card-table__header__title'>Imagen</h6>

                        </div>
                        <div class="col-3 card-table__header__col">
                          <h6 class='card-table__header__title'>Nombre</h6>

                        </div>
                        <div class="col-3 card-table__header__col">
                          <h6 class='card-table__header__title'>Cantidad</h6>

                        </div>
                        <div class="col-2 card-table__header__col">
                          <h6 class='card-table__header__title'>Precio</h6>

                        </div>
                        <div class="col-2 card-table__header__col">
                          <h6 class='card-table__header__title'>Sub total</h6>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-table__content-body content-body">
                    <div class="d-flex card-table__row" v-for='detail in order.details'>
                      <div  class="col-12 card-table__body__field">
                        <div class="row card-table__body">
                          <div class="col-2 card-table__body__col">
                            <img :src="detail.productdetail.product_image" alt="">
                          </div>
                          <div class="col-3 card-table__body__col">
                            <p class='card-table__body__field'> {{detail.productdetail.product_name}}
                            </p>
                            <p class='card-table__body__field' v-for='attr in detail.productdetail.attrs'>{{attr.attribute__name}}: {{attr.option}}
                            </p>
                          </div>
                          <div class="col-3 card-table__body__col">
                            <p class='card-table__body__field'>{{detail.quantity}}</p>
                          </div>
                          <div class="col-2 card-table__body__col">
                            <p class='card-table__body__field'>S/ {{ detail.price }}</p>
                          </div>
                          <div class="col-2 card-table__body__col">
                            <p class='card-table__body__field'>S/ {{detail.sub_total}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">

                    </div>
                    <div class="col-2">
                      Sub Total:
                    </div>
                    <div class="col-2">
                      S/ {{order.influencer_extra.total_influencer|decimal}}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">

                    </div>
                    <div class="col-2">
                      Descuento:
                    </div>
                    <div class="col-2">
                      S/ {{order.influencer_extra.total_discount|decimal}}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">

                    </div>
                    <div class="col-2">
                      Total:
                    </div>
                    <div class="col-2">
                      S/ {{order.influencer_extra.total|decimal}}
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
  import { mapMutations } from 'vuex'
  export default {
    name: 'orderDetail',
    data () {
      return {
        order: {
          order_order_customer: {
            first_name: '',
            last_name: ''
          },
          order_ordershipping: {
            first_name: '',
            last_name: ''
          },
          influencer_extra: {
            total_influencer: 0,
            total_discount: 0,
            total: 0
          }
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
        var self = this
        this.axios({
          method: 'get',
          url: '/order/' + self.$route.params.code + '/'
        }).then(response => {
          self.order = response.data
        })
      }
    }
  }
</script>