<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Craete Topic</h5>
      <from action="/login" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Coordinator Name</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Faculty Name</label
          >

          <select
            v-model="faculty.group_id"
            class="form-select"
            aria-label="Default select example"
          >
            <option disabled value="">Choose role</option>
            <option
              v-for="(item, index) in listfaculty"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              {{ item.faculty_name }}
            </option>
          </select>

          <p class="card-text custom-right-align ml-10">
            <button type="button" class="btn btn-primary">Create</button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
            
<script >
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      faculty: {
        username: "",
        password: "",
        email: "",
        group_id: "",
        confirmPassword: "",
      },
      entered: {
        confirmPassword: false,
      },
      listfaculty: [],
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
        .get("http://localhost:8081/v1/faculty", this.faculty)
        .then((data) => {
          console.log(data);
          this.listfaculty = data.data;
        });
    },
    saveData() {
      if (this.faculty.password != this.faculty.confirmPassword) {
        alert("chưa trùng mk");
        return;
      }
      axios
        .post("http://localhost:8081/v1/register", this.faculty)
        .then(({ data }) => {
          alert("aaaa Em nhận được rồi a zai");
          this.$router.push("/login");
        });
    },
  },
};
</script>
            
  <style>
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>