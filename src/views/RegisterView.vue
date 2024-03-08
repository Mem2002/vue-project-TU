<script setup>
</script>
<template>
  <div class="row col-12" style="height: 100vh">
    <div class="col-6">
      <div class="background-image"></div>
    </div>
    <div
      class="col-6 d-flex justify-content-center"
      style="align-items: center"
    >
      <from class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <h2 class="text-center">Register a new account</h2>
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Email</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Email"
            style="color: white"
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
            placeholder="Enter Password"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-3 fw-semibold"
            >Confirm password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
          <label
            for="exampleFormControlInput1"
            class="form-label mt-3 fw-semibold"
            >Roles</label
          >

          <select class="form-select" aria-label="Default select example">
            <option selected>Choose Roles</option>
            <option value="1">Marketing Manager</option>
            <option value="2">Marketing Coordinator</option>
            <option value="3">Student</option>
            <option value="3">Guest</option>
          </select>

          <p>
            <a
              href="#"
              class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Forgot Password?</a
            >
          </p>
          <button
            type="submit"
            class="form-control btn-color mt-3 text-white"
            id="exampleFormControlInput1"
            placeholder="Password"
          >
            Create
          </button>
        </div>
      </from>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  width: 50%;
  bottom: 50%;
  left: 10%;
}
@media screen and (max-width: 1320px) {
  body {
    background-color: blue;
  }
}

.background-image {
  background-image: url("../assets/register3.png");
  height: calc(111vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
.container {
  width: 24%;
  margin-top: 150px;
}
.bg {
  background-color: #fff;
  width: 400px;
}
.btn-color {
  background-color: #000;
  border: none;
}
</style>