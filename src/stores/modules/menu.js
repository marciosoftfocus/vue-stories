export default {
    namespaced: true,

    // Fonte de dados
    state: {
        menus: [
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

        selectedMenu: 'menu1'
    },

    // Acesso a informações, dá para colocar valores calculados por exemplo
    getters: {
        listAll(state) {
            return state.menus
        },

        getSelectedMenu(state) {
            return state.selectedMenu
        }
    },

    // Alteracao das informacoes
    mutations: {
        updateSelectedMenu(state, menu) {
            state.selectedMenu = menu
        }
    }

}