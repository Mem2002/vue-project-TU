<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Create Topic</h5>
      <from action="/login" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name Topic</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />

          <div class="datepicker">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              start-placeholder="Start date"
              end-placeholder="End date"
              format="YYYY-MM-DD HH:mm:ss"
              date-format="YYYY/MM/DD ddd"
              time-format="A hh:mm:ss"
            />
          </div>

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

          <p class="card-text custom-right-align ml-10 position">
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
  },
};
</script>
            
  <style>
.datepicker {
  position: fixed;
  bottom: 390px;
  left: 700px;
}
.position {
  position: fixed;
  bottom: 340px;
  left: 860px;
}
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>