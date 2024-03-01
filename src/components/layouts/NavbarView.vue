
<template>
  <div class="app">
    <nav
      class="navbar bg-dark border-bottom border-body"
      style="height: 80px"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            id="logo"
            class="cursor-pointer duration-500"
            src="../../assets/team1.jpg"
            width="50"
            alt="logo-header"
          />
        </a>

        <div class="d-flex flex-row-reverse text-body-tertiary">
          <div class="p-2 bt">
            <button
              width="100"
              type="button"
              class="nav-link py-2 px-0 px-lg-2"
              @click="redirectToPage"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="body-site">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirectToPage() {
      window.location.href = "http://localhost:5173/login";
    },
  },
};
</script>
<style scoped>
.text1 {
  position: fixed;
  left: 250px;
  bottom: 350px;
}
.app {
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.body-site {
  height: 100% -80px;
}

.container {
  position: fixed;
  left: 10%;
  bottom: 650px;
  /* Dịch chuyển để giữa chính xác */
}
</style>