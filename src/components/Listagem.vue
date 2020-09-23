<template>
  <div class="q-pa-md">

    <q-toolbar>
      <q-btn
          flat
          dense
          round
          @click="adicionar"
          icon="add"/>
      <q-btn
          flat
          dense
          round
          @click="excluir"
          icon="remove"/>
      <q-btn
          flat
          dense
          round
          @click="editar"
          icon="edit"/>
    </q-toolbar>

    <q-table
        title="Denúncias"

        :data="menuDataSource"
        :columns="columns"
        :pagination="pagination"
        selection="multiple"
        :selected.sync="selectedItens"
        row-key="codigo"/>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="primary" text-color="white" />
          <span class="q-ml-sm">{{ mensagemConfirmAlert }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Confirmar" color="primary" v-close-popup @click="confirmar"/>
          <q-btn flat label="Cancelar"  color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Erro</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ mensagemConfirmAlert }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Listagem",
  // props:{
  //   tableDataSource : {
  //     type: Object
  //   }
  // },
  computed: {
    ...mapGetters(
        {
          menuDataSource: 'denuncia/listAllDenuncias',
          pagination: 'denuncia/getPaginationDenuncias'
        }
    )
  },

  methods: {
    ...mapActions('denuncia',['removeDenuncias']),
    ...mapMutations('menu', ['updateSelectedMenu']),
    ...mapMutations('denuncia', ['setDenunciaEmEdicao']),
    confirmar() {
      if (this.operacao === 'excluir') {
        this.removeDenuncias(this.selectedItens)
        this.selectedItens = []
      }
    },

    adicionar() {
      this.setDenunciaEmEdicao(null)
      this.updateSelectedMenu('menu2')
    },

    excluir() {
      if (this.selectedItens.length === 0) {
        this.mensagemConfirmAlert = 'Nenhum valor selecionado para exclusão'
        this.alert = true
      } else {
        this.operacao = 'excluir'
        this.mensagemConfirmAlert = 'Confirma a exclusão do(s) iten(s) selecionado(s) ?'
        this.confirm = true
      }
    },

    editar() {
      if (this.selectedItens.length === 0) {
        this.mensagemConfirmAlert = 'Nenhum valor selecionado para edição'
        this.alert = true
      } else if (this.selectedItens.length > 1) {
        this.mensagemConfirmAlert = 'Selecione apenas um item para edição'
        this.alert = true
      } else {
        this.setDenunciaEmEdicao(this.selectedItens[0])
        this.updateSelectedMenu('menu2')
      }
    }
  },

  data () {
    return {
      operacao: '',
      confirm: false,
      alert: false,
      mensagemConfirmAlert: '',
      selectedItens: [],
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