import Vue from 'vue'
import Vuex from 'vuex'

import menu from "./modules/menu";
import denuncia from "./modules/denuncia";

Vue.use(Vuex)

const AtualizadorStory = {
    atualizarMenu(state, story) {
        state.menu.selectedMenu = story.selectedMenu
        state.menu.menus = story.menuDataSource
    },

    atualizarListagem(state, story) {
        state.denuncia.denuncias = story.listDataSource.list
        state.denuncia.pagination = story.listDataSource.pagination
    },

    atualizarFormulario(state, story) {

    }
}

export default new Vuex.Store({

    modules: {menu, denuncia},

    mutations: {
        updateStory(state, story) {
            AtualizadorStory.atualizarMenu(state, story)
            AtualizadorStory.atualizarListagem(state, story)
            AtualizadorStory.atualizarFormulario(state, story)
        }
    }

})