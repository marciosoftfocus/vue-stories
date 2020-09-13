export default {
    namespaced: true,

    // Fonte de dados
    state: {
        denuncias: [],
        denunciaEmEdicao: null,
        pagination: {
            sortBy: 'codigo',
            descending: true,
            page: 1,
            rowsPerPage: 10
        }
    },

    // Acesso de leitura aos dados
    getters: {
        listAllDenuncias(state) {
            return state.denuncias
        },

        getPaginationDenuncias(state) {
            return state.pagination
        },

        getDenunciaEmEdicao(state) {
            return state.denunciaEmEdicao
        }
    },

    // Metodos para atualizacao dos dados (Aconselhável só tratar acessos síncronos)
    mutations: {
        addDenuncia(state, denuncia) {
            let maiorCodigo = 0;
            for (let i=0; i < state.denuncias.length; i++){
                if (state.denuncias[i].codigo > maiorCodigo) {
                    maiorCodigo = state.denuncias[i].codigo
                }
            }

            maiorCodigo++

            denuncia.codigo = maiorCodigo

            state.denuncias.push(denuncia)
        },

        removeDenuncia(state, denuncia) {
            const elemento = state.denuncias.find(value => value.codigo === denuncia.codigo)
            if (elemento) {
                const index = state.denuncias.indexOf(elemento)
                state.denuncias.splice(index, 1)
            }
        },

        setDenunciaEmEdicao(state, denuncia) {
            state.denunciaEmEdicao = denuncia
        }
    },

    // Métodos para colocar lógica ou acesso remoto (Neste caso pode usar síncrono ou assíncrono)
    actions: {
        addDenuncia(context, denuncia) {
            setTimeout(() => {
                context.commit('addDenuncia', denuncia)
            }, 1000)
        },

        updateDenuncia(context, denuncia) {
            setTimeout(() => {
                context.commit('removeDenuncia', denuncia)
                context.commit('addDenuncia', denuncia)
            }, 1000)
        },

        removeDenuncias(context, denuncias) {
            setTimeout(() => {
                denuncias.forEach(denuncia => {
                    context.commit('removeDenuncia', denuncia)
                });
            }, 1000)
        }
    }

}