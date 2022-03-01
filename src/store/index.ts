import { createStore } from 'vuex'

export default createStore({
  state: {
     products: [
        {name: "Jara Bread", price: 20},
        {name: "Teddy Bear", price: 40},
        {name: "Egg Shells", price: 60},
        {name: "Red shells", price: 80},
      ]
  },
  getters: {
    saleProducts(state) {
    var saleProducts = state.products.map(product=>{
    return {
        name:'**' +product.name + '**',
        price: product.price/2
    }
})
return saleProducts

    }
  },
  mutations: {
    reducePrice(state, payload) {
    state.products.forEach(product => {
            product.price-=payload
          });
    }
  },
  actions: {
    reducePrice(context, payload) {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000);
    }
  },
  modules: {
  }
})
