<template>
  <q-list>
    <q-item-label header>Dedo Duro</q-item-label>
    <q-item clickable v-for="menu in menuDataSource"
            :key="menu.key"
            :active="menu.key === selectedMenu"
            @click="updateSelectedMenu(menu.key)">
      <q-item-section avatar>
        <q-icon :name="menu.icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{menu.title}}</q-item-label>
        <q-item-label caption>{{menu.description}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Menu",

  // Forma anterior recebi os dados por parâmetro
  // props: {
  //   menuDataSource : {
  //     type: Array,
  //     required: false,
  //     default: new Array(),
  //   },
  //   selectedMenu: String
  // },

  computed: {
    ...mapGetters('menu',
        {
          menuDataSource: 'listAll',
          selectedMenu: 'getSelectedMenu'
        }
    )
  },

  methods: {
    ...mapMutations('menu', ['updateSelectedMenu']),
  }
}
</script>

<style scoped>

</style>