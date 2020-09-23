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

  },

  data() {
    return {
      denuncia: {
        codigo : '',
        tipo : '',
        bairro : '',
        resumo : ''
      },
      alert: false,
      msgSucesso: null,
      tipos: ["Rua", "Iluminação", "Praça"]
    }
  },


  methods: {
    ...mapGetters('denuncia', ['getDenunciaEmEdicao']),
    ...mapActions('denuncia', ["addDenuncia", "updateDenuncia"]),
    ...mapMutations('menu', ["updateSelectedMenu"]),
    ...mapMutations('denuncia', ['setDenunciaEmEdicao']),

    onSubmit () {
      if (this.denuncia.codigo === '') {
        this.addDenuncia(this.denuncia)
      } else {
        this.updateDenuncia(this.denuncia)
      }
      this.msgSucesso = "Operação executada com sucesso"
      this.alert = true
    },

    onReset () {
      this.voltarListagem()
    },

    voltarListagem() {
      this.updateSelectedMenu('menu1')
      this.setDenunciaEmEdicao(null)
    }
  },

  async created() {
    let denunciaEmEdicao = this.getDenunciaEmEdicao()
    if (denunciaEmEdicao !== null) {
      this.denuncia.codigo = denunciaEmEdicao.codigo
      this.denuncia.tipo = denunciaEmEdicao.tipo
      this.denuncia.bairro = denunciaEmEdicao.bairro
      this.denuncia.resumo = denunciaEmEdicao.resumo
    }
  }

}
</script>

<style scoped>

</style>