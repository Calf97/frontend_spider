<template>
  <div class="c-login">
    <div class="c-logo">
      <div class="logo">
        <img src="../assets/spider.png" alt="logo" />
      </div>
    </div>
    <div class="login-form">
      <h1>Spider</h1>
      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <Transition name="slide-fade">
          <div v-show="authWithEmail" class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>
        </Transition>
        <button @click.prevent="auth">Acessar</button>
        <a href="https://cogbughunt.auth.us-east-2.amazoncognito.com/oauth2/authorize?identity_provider=jumpcloud&redirect_uri=https://calf97.github.io/frontend_spider/home&response_type=token&client_id=538kqpoo5mtfgfe0cg0jlsr1vi&scope=email+openid+profile">Acessar</a>

        <p class="notUsingSSO">
          Log in with SSO?
          <span @click="authWithEmail = !authWithEmail"
            >log in with a email</span
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginView",
  components:{
   
  },
  data() {
    return {
      authWithEmail: true,
    };
  },
  methods: {
    auth() {
      // this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.c-login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #313131c4;
  /* background: #0e070e; */
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.c-logo {
  margin-bottom: 10px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1; /* Garante que o logo fique acima das partículas */
}

.logo {
  width: 70px;
}

.logo img {
  width: 100%;
}

.c-logo span {
  font-size: 25px;
  color: #ffffffb6;
}

.login-form {
  background: #1e2125;
  padding: 20px;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px #cccccc78;
  z-index: 1; /* Garante que o formulário fique acima das partículas */
}

.login-form h1 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.form-group label {
  color: #ffffffb6;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  border: none;
  border: 1px solid #ffffff49;
  border-radius: 6px;
  color: #fff;
  background: #32353c;
  outline: none;
  padding: 10px;
}

.form button {
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 10px;
  background: #0575cb;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  transition: transform 0.4s ease;
}
button:hover {
  background: #067eda;
}
.notUsingSSO {
  color: #ffffffb6;
  margin-top: 20px;
  text-align: center;
}

.notUsingSSO span {
  color: #0575cb;
  cursor: pointer;
}
</style>
