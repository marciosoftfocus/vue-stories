<template>
  <div class="q-pa-md">
    <q-form
        title="Denúncia"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">

      <q-field label="Código" stack-label filled>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{denuncia.codigo}}</div>
        </template>
      </q-field>

      <q-select v-model="denuncia.tipo"
                :options="tipos"
                label="Tipo"
                filled/>

      <q-input
          filled
          v-model="denuncia.bairro"
          label="Bairro"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"/>

      <q-input
          filled
          v-model="denuncia.resumo"
          label="Resumo"
         :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"/>

      <div>
        <q-btn label="Salvar" type="submit" color="primary"></q-btn>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Sucesso</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ msgSucesso }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup @click="voltarListagem"/>
          </q-card-actions>
        </q-card>
      </q-dialog>

    </q-form>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Cadastro",
  // props:{
  //   register : {
  //     type: Object
  //   }
  // },
  computed: {

    ...mapGetters('denuncia', {
      denunciaEmEdicao: 'getDenunciaEmEdicao'
    }),

    denuncia : {
      get() {
        let valor = this.$store.getters["denuncia/getDenunciaEmEdicao"]
        if (valor === null) {
          valor = {}
          valor.codigo = ''
          valor.tipo = ''
          valor.bairro = ''
          valor.resumo = ''
          this.$store.commit('denuncia/setDenunciaEmEdicao', valor)
        }
        return valor
      },

      set(newValue) {
        this.$store.commit('denuncia/setDenunciaEmEdicao', newValue)
      }
    }

  },

  data() {
    return {
      alert: false,
      msgSucesso: null,
      tipos: ["Rua", "Iluminação", "Praça"]
    }
  },


  methods: {
    ...mapActions('denuncia', ["addDenuncia", "updateDenuncia"]),
    ...mapMutations('denuncia', ["setDenunciaEmEdicao"]),
    ...mapMutations('menu', ["updateSelectedMenu"]),

    onSubmit () {
      const valor = this.denuncia

      if (valor.codigo === '') {
        this.addDenuncia(valor)
      } else {
        this.updateDenuncia(valor)
      }
      this.msgSucesso = "Operação executada com sucesso"
      this.alert = true
    },

    onReset () {

    },

    voltarListagem() {
      this.updateSelectedMenu('menu1')
      this.setDenunciaEmEdicao(null)
    }
  }

}
</script>

<style scoped>

</style>