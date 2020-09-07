<template>
  <div class="q-pa-md">
    <q-table
        :data="tableDataSource"
        :columns="columns"
        rows-per-page-options=""
        row-key="name"
    />
  </div>
</template>

<script>
export default {
  name: "Listagem",
  props:{
    tableDataSource : {
      type: Array,
      required: false,
      default: new Array()
    }
  },
  data () {
    return {
      columns: [
        {
          name: 'codigo',
          required: true,
          label: 'Código',
          align: 'left',
          field: row => row.codigo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'tipo',
          required: true,
          label: 'Tipo',
          align: 'left',
          field: row => row.tipo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'bairro',
          required: true,
          label: 'Bairro',
          align: 'left',
          field: row => row.bairro,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'resumo',
          required: true,
          label: 'Resumo',
          align: 'left',
          field: row => row.resumo,
          format: val => `${val}`,
          sortable: true
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>