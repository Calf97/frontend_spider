<template>
  <nav>
    <div @click="$router.push('/home')" class="logo" style="cursor: pointer">
      <img src="../assets/spider.png" alt="logo" />
    </div>
    <ul>
      <li :class="{ active: $route.path === '/home' }">
        <router-link to="/home">Home</router-link>
      </li>
      <li :class="{ active: $route.path === '/shop' }">
        <router-link to="/shop">Shop</router-link>
      </li>
      <li :class="{ active: $route.path === '/sale' }">
        <router-link to="/sale">Sale</router-link>
      </li>

      <li :class="{ active: $route.path === '/blog' }">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li :class="{ active: $route.path === '/showcase' }">
        <router-link to="/showcase">ShowCase</router-link>
      </li>
    </ul>
    <div class="logo" @click="logout" style="cursor: pointer">
      <img src="../assets/logout.png" alt="logo" />
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
nav {
  background: black;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 50px;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #1e2125;
  border-radius: 23px;
  padding: 2px 6px;
  gap: 4px;
  list-style: none;
}

li {
  color: black;
  background: #32353c;
  border-radius: 30px;
  background: rgb(53, 53, 53);
  padding: 7px 14px;
  font-weight: 400;
  transition: 100ms;
}
li:hover {
  transform: scale(1.1);
  background: rgb(228, 228, 228);
  color: black;
}
.logo {
  width: 40px;
}
.logo img {
  width: 100%;
}

.active {
  font-weight: 500;
  background: white;
  color: black;
}
</style>
