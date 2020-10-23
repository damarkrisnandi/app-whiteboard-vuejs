function state() {
    return {
        color: 'rgba(255, 0, 0, 1)',
        size: 5
    }
}

const mutations = {
    setPaint(state, { color, size }) {
        state.color = color;
        state.size = size;
    },

    resetPaint(state) {
        state.color = 'rgba(255, 0, 0, 1)';
        state.size = 5; 
    }
}

const actions = {
    setColor({ commit }, { color }) {
        commit('setPaint', { color, size: state.size });
    },

    setSize({ commit }, { size }) {
        commit('setPaint', { size, color: state.color });
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