const state = {
  products: {},
  session: false
};
const mutations = {
  'SET_STORE' (state, products) {
    state.products = products;
  },
  'SET_SESSION' (state, session) {
    state.session = session;
  }
};
const actions = {
  initStore: ({commit}) => {
      axios.get('static/products.json')
      .then(response => {
        //this.products = response.data.products;
        console.log(response.data.products);
        commit('SET_STORE', response.data.products )
      });
  }
}
const getters = {
  products: state => state.products,
  session: state =>  state.session
};


export default {
  state,
  getters,
  actions,
  mutations,
}