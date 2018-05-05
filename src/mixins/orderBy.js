const orderBy = {
  data () {
    return {
      query: {
        search: '',
        fields: ''
      }
    }
  },
  methods: {
    orderBy (field, orderBy) {
      this.query['field'] = field
      this.query['orderBy'] = orderBy
      this.getDataList()
    },
    isActiveOrderBy (fieldName, order) {
      if (this.query.field === fieldName && this.query.orderBy === order) {
        return 'card-table__header__orderBy__active'
      } else {
        return ''
      }
    }
  }
}
export default orderBy