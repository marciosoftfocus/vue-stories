<template>
  <q-layout view="lhr Lpr ffr">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"/>

        <q-toolbar-title>
          Dedo Duro - Sistema de Denúncias
        </q-toolbar-title>

        <div>Softfocus</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2">
      <menu-app :menu-data-source="selectedStore.menuDataSource" :selected-menu="selectedStore.selectedMenu"/>
    </q-drawer>

    <q-footer>
      Teste
    </q-footer>

    <q-page-container>
      <component :is=""/>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuApp from './components/Menu.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld, MenuApp
  },

  data () {
    return {
      leftDrawerOpen: false,
      story1 : {
        selectedMenu: 'menu2',
        menuDataSource : [
          {
            key: 'menu1',
            icon: 'list',
            title: 'Denúncias',
            description: 'Lista de Denúncias'
          },
          {
            key: 'menu2',
            icon: 'editor',
            title: 'Nova Denúncia',
            description: 'Cadastro de novas denúncias'
          }
        ],
        listDataSource : {
          list: [
            {
              codigo: 1,
              tipo: 'Rua',
              bairro: 'Jardim das Américas',
              resumo: 'Tem um burraco no asfalto'
            },
            {
              codigo: 2,
              tipo: 'Praça',
              bairro: 'Centro',
              resumo: 'Banco quebrado'
            },
            {
              codigo: 3,
              tipo: 'Rua',
              bairro: 'Vila Madalena',
              resumo: 'Bueiro entupido'
            },
            {
              codigo: 4,
              tipo: 'Iluminação',
              bairro: 'Ibirama',
              resumo: 'Lâmpada queimada'
            }
          ],
          pagination : {
            sortBy: 'codigo',
            descending: false,
            page: 2,
            rowsPerPage: 10
          }
        }
      },
      story2 : {
        selectedMenu: 'menu1',
        menuDataSource : [
          {
            key: 'menu1',
            icon: 'list',
            title: 'Teste menu 1',
            description: 'Teste menu 1'
          },
          {
            key: 'menu2',
            icon: 'editor',
            title: 'Teste menu 2',
            description: 'Teste menu 2'
          }
        ]
      },
      selectedStore : this.story1
    }
  },

  methods: {
    render(obj) {
      alert(obj)
    }
  },

  mounted() {
    this.selectedStore = this.story1

    window.addEventListener("keypress", (e) => {
      console.log(e.shiftKey)
      console.log(e.key);
      if (e.shiftKey && e.key === 'L') {
        this.selectedStore = this.selectedStore == this.story1 ? this.story2 : this.story1
      }
    });
  }

}
</script>

<style>
</style>
