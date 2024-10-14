<template>
  <div>
    <NavBar />
    <div class="container-product">
      <div class="backHome" @click="$router.push('/home')">
        <svg width="26" height="26">
          <image xlink:href="../assets/back.svg" width="26" height="26" />
        </svg>
        <span>Back to Home</span>
      </div>
      <div class="grid-layout">
        <div>
          <h1 class="title">{{ product.title }}</h1>
          <div class="c-image">
            <img :src="product.imgPath" alt="fantasia" />
          </div>
          <p class="description">
            <span>Descrição:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea
            aspernatur earum aut ducimus incidunt mollitia! Earum necessitatibus
            suscipit soluta illum cum repudiandae rem minus. Dolores suscipit
            quod obcaecati veniam.
          </p>
        </div>
        <div>
          <h3 class="title-details">Veja mais detalhes</h3>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            nobis.
          </p>
          <div class="c-price">
            <p class="price">{{ product.price }}</p>
            <div class="c-available">
              <div class="circle"></div>
              <span>10 items disponível</span>
            </div>
          </div>
          <div class="size">
            <p>Tamanho:</p>
            <p>P, M, G, GG</p>
          </div>
          <div>
            <p>Quantidade:</p>
            <div class="c-input">
              <input type="text" v-model="qtd" />
              <div class="more" @click="qtd++">+</div>
              <div class="less" @click="qtd--">-</div>
            </div>
          </div>
          <button @click="$router.push('/home')">Comprar mais</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "ProductView",
  components: {
    NavBar,
  },
  data() {
    return {
      idProduct: "",
      product: {},
      qtd: 2,
    };
  },
  mounted() {
    this.idProduct = this.$route.fullPath.split("/")[2];
    this.getProductById();
  },
  methods: {
    async getProductById() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${this.idProduct}`,
        );
        this.product = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.container-product {
  padding: 50px;
  max-width: 1260px;
  margin: 20px auto;
}
.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}
.backHome {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
}
.backHome span {
  font-size: 17px;
  color: #666666;
}
.title {
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 20px;
}
.description {
  max-width: 600px;
  color: #595959;
  margin-bottom: 40px;
}
.description span {
  display: block;
  color: #5b5b5b;
  font-weight: 600;
}
.title-details {
  margin-bottom: 20px;
  font-size: 16px;
}
.c-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-price .price {
  font-size: 30px;
  font-weight: bold;
}
.c-available {
  display: flex;
  align-items: center;
  gap: 10px;
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9c27b0;
}
.size {
  margin-top: 20px;
  margin-bottom: 20px;
}
.c-image {
  margin-bottom: 20px;
  max-width: 300px;
  background: #43104c;
  padding: 4px;
  border-radius: 10px;
  display: flex;
}
.c-image img {
  width: 100%;
  border-radius: 10px;
}
.c-input {
  display: flex;
  align-items: center;
  gap: 10px;
}
.more,
.less {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}
input {
  padding: 5px;
  border-radius: 30px;
  width: 72px;
  border: none;
  border: 1px solid #ccc;
  outline: none;
  margin-top: 2px;

  text-align: center;
}
button {
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  background: #9c27b0;
  font-size: 16px;
  font-weight: 500;
}
</style>
