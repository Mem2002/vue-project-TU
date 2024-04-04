<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List Topic</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Assignment Name</th>
            <th scope="col">Deadline StartDate</th>
            <th scope="col">Deadline EndDate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listtopic"
            :value="item._id"
            :key="index"
            placeholder="Password"
          >
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }} AM</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick(item._id)"
              >
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
        
        <script>
import router from "../../router/index";
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      student: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
      },
      listtopic: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
  },
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    handleClick(name) {
      router.push({
        name: "studentmyassignmentsubmit",
        query: { id: name },
      });
    },
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/topic/read", this.student)
        .then((data) => {
          console.log(data.data.DT, "data");
          this.listtopic = data.data.DT;
        });
    },
    // saveData() {
    //   if (this.student.password != this.student.confirmPassword) {
    //     alert("chưa trùng mk");
    //     return;
    //   }
    //   axios
    //     .post("http://localhost:8081/v1/register", this.student)
    //     .then(({ data }) => {
    //       alert("aaaa Em nhận được rồi a zai");
    //       this.$router.push("/login");
    //     });
    // },
  },
  created() {
    console.log(this.$route.params.id); // In ra giá trị của id từ URL
  },
};
</script>
        
        <style>
</style>