<script setup>
</script>
<template>
  <div>
    <div class="background-image">
      <div class="container container-xxl bd-gutter">
        <from class="form-group">
          <div class="mb-3 bg p-5 rounded">
            <h2 class="text-center">Login</h2>
            <label
              for="exampleFormControlInput1"
              class="form-label mt-4 fw-semibold"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Gmail"
            />

            <label
              for="exampleFormControlInput1"
              class="form-label mt-3 fw-semibold"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />

            <button
              type="submit"
              class="form-control btn-color mt-3"
              id="exampleFormControlInput1"
              placeholder="Password"
            >
              Submit
            </button>
          </div>
        </from>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  left: 39%;
}
.background-image {
  background-image: url("../assets/school.jpg");
  height: calc(111vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  width: 24%;
  margin-top: 150px;
}
.bg {
  background-color: #fbf6ee;
}
.btn-color {
  background-color: #ff6666;
  border: none;
}
</style>