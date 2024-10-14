<template>
  <div>
    <NavBar />
    <div class="home">
      <section>
        <h1>A Magia do Halloween</h1>
        <p>
          De doces a travessuras, encontre tudo o que você precisa para celebrar
          em grande estilo
        </p>
      </section>
      <section class="ofers">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :imgPath="product.imgPath"
          :price="product.price"
          :title="product.title"
          :id="product.id"
        />
      </section>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    NavBar,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log("===> API <===");
        console.log(response);
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5px;
}
p {
  text-align: center;
  color: #919191;
  font-weight: 500;
}
.home {
  max-width: 1000px;
  margin: 50px auto;
}
.ofers {
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
