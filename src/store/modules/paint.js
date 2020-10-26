function state() {
    return {
        color: 'rgba(255, 0, 0, 1)',
        size: 5
    }
}

const mutations = {
    setPaintColor(state, { color }) {
        state.color = color;
    },

    setPaintSize(state, { size }) {
        state.size = size;
    },
    resetPaint(state) {
        state.color = 'rgba(255, 0, 0, 1)';
        state.size = 5; 
    }
}

const actions = {
    setColor({ commit }, { color }) {
        commit('setPaintColor', { color });
    },

    setSize({ commit }, { size }) {
        commit('setPaintSize', { size });
    },

    refresh({ commit }) {
        commit('resetPaint', null);
    }
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }