<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {

  computed:{
products(){
return this.$store.state.products
},
...mapGetters([
    'saleProducts'
])
  },
  methods: {
     ...mapActions([
         'reducePrice'
     ])
  }

}
</script>

<style>
 #product-list-one{
    background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  }
  #product-list-one ul{
    padding: 0;
    list-style-type: none;
  }
  #product-list-one li{
    margin-right: 10px;
    display: inline-block;
    margin-top:10px;
    padding: 20px;
    background:rgba(255,255,255,0.7)
  }
  .price{
    font-weight: bold;
color: #e88006;
display: block;
  }
</style>
