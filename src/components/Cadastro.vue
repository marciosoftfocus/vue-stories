<template>
  <div class="q-pa-md">

    <q-form
        title="Denúncia"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">
      <q-field label="Código" stack-label filled>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{register.codigo}}</div>
        </template>
      </q-field>
      <q-select v-model="register.tipo"
                :options="tipos"
                label="Tipo"
                filled/>
      <q-input
          filled
          v-model="register.bairro"
          label="Bairro"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"/>
      <q-input
          filled
          v-model="register.resumo"
          label="Resumo"
         :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"/>

      <div>
        <q-btn label="Salvar" type="submit" color="primary"></q-btn>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  props:{
    register : {
      type: Object
    }
  },
  data () {
    return {
      tipos: ["Rua", "Iluminação", "Praça"]
    }
  },
  methods: {
    onSubmit () {

    },

    onReset () {

    }
  }
}
</script>

<style scoped>

</style>