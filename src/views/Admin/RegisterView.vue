
<template>
  <div class="row col-12" style="height: 100vh">
    <div class="col-6">
      <div class="background-image"></div>
    </div>
    <div
      class="col-6 d-flex justify-content-center"
      style="align-items: center"
    >
      <from @submit.prevent="saveData">
        <div class="mb-3 bg p-5 rounded">
          <h2 class="text-center">Register a new account</h2>
          <div class="form-group" align="left">
            <label class="form-label mt-2 fw-semibold"> User Name</label>
            <input
              type="text"
              v-model="student.username"
              class="form-control"
              placeholder="Employee name"
            />
          </div>
          <div class="form-group" align="left">
            <label class="form-label mt-2 fw-semibold"> Email</label>
            <input
              type="text"
              v-model="student.email"
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="form-group" align="left">
            <label class="form-label mt-2 fw-semibold"> Password</label>
            <input
              type="password"
              v-model="student.password"
              class="form-control"
              placeholder="Enter Password"
            />
          </div>

          <label
            for="exampleFormControlInput1"
            class="form-label mt-2 fw-semibold"
            >Confirm password</label
          >
          <input
            @input="entered.confirmPassword = true"
            type="password"
            v-model="student.confirmPassword"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Confirm Password"
          />
          <div>
            <span
              style="color: red"
              v-if="
                student.password != student.confirmPassword &&
                entered.confirmPassword
              "
              >Nhập sai mật khẩu
            </span>
          </div>

          <label
            for="exampleFormControlInput1"
            class="form-label mt-2 fw-semibold"
            >Roles</label
          >
          <select
            v-model="student.group_id"
            class="form-select"
            aria-label="Default select example"
          >
            <option disabled value="">Choose role</option>
            <option
              v-for="(item, index) in listgroup"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              {{ item.group_name }}
            </option>
          </select>
          <button
            type="submit"
            class="form-control btn-color mt-3 text-white"
            @click="saveData()"
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
  background-image: url("../../assets/register3.png");
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
<script >
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      student: {
        username: "",
        password: "",
        email: "",
        group_id: "",
        confirmPassword: "",
      },
      entered: {
        confirmPassword: false,
      },
      listgroup: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
  },
  methods: {
    getlistrole() {
      axios
        .get(" http://localhost:8081/v1/group", this.student)
        .then((data) => {
          console.log(data.data);
          this.listgroup = data.data;
        });
    },
    saveData() {
      if (this.student.password != this.student.confirmPassword) {
        alert("chưa trùng mk");
        return;
      }
      axios
        .post("http://localhost:8081/v1/register", this.student)
        .then(({ data }) => {
          alert("Sign Up Success");
          this.$router.push("/login");
        });
    },
  },
};
</script>