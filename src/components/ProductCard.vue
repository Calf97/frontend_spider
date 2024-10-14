<template>
  <div class="card" @click="$router.push(`/product/${id}`)">
    <div class="img">
      <img :src="imgPath" alt="fantasia" />
    </div>
    <div class="description">
      <h3>{{ title }}</h3>
      <span>{{ price }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProduct",
  props: ["title", "price", "imgPath", "id"],
};
</script>
<style scoped>
.card {
  border: 1px solid black;
  width: 300px;
  background: #3a3a3a;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  transition: all 300ms;
}
.card:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.card .img {
  width: 100%;
}
.card .img img {
  width: 100%;
}
.card .description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px 10px;
}
.card .description span {
  border-left: 5px solid #8749cd;
  padding: 0px 4px;
  font-weight: bold;
  font-size: 17px;
}
</style>
