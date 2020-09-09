<template>
  <div>


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
      <Listagem v-if="selectedStore.selectedMenu === 'menu1'" :table-data-source="selectedStore.listDataSource"/>
      <Cadastro v-if="selectedStore.selectedMenu === 'menu2'" :register="selectedStore.formDataSource"/>
    </q-page-container>



  </q-layout>

  </div>

</template>

<script>
import MenuApp from './components/Menu'
import Listagem from './components/Listagem'
import Cadastro from './components/Cadastro'

export default {
  name: 'LayoutDefault',

  components: {
    MenuApp, Listagem, Cadastro
  },

  data () {
    return {
      leftDrawerOpen: false,
      story1 : {
        selectedMenu: 'menu1',
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
            },
            {
              codigo: 5,
              tipo: 'Rua',
              bairro: 'Jardim das Américas',
              resumo: 'Tem um burraco no asfalto'
            },
            {
              codigo: 6,
              tipo: 'Praça',
              bairro: 'Centro',
              resumo: 'Banco quebrado'
            },
            {
              codigo: 7,
              tipo: 'Rua',
              bairro: 'Vila Madalena',
              resumo: 'Bueiro entupido'
            },
            {
              codigo: 8,
              tipo: 'Iluminação',
              bairro: 'Ibirama',
              resumo: 'Lâmpada queimada'
            }
          ],
          pagination : {
            sortBy: 'codigo',
            descending: true,
            page: 1,
            rowsPerPage: 10
          }
        }
      },
      story2 : {
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
        formDataSource : {
          codigo : 1,
          tipo: 'Praça',
          bairro: 'Centro',
          resumo: 'Vandalismo de placas'
        }
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
