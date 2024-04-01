<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List My Post</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Post Name</th>
            <th scope="col">Topic Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listpost"
            :value="item._id"
            :key="index"
            placeholder="Password"
          >
            <th>
              <p></p>
              {{ item.name }}
            </th>
            <th>
              <p></p>
              {{ item.topic_name }}
            </th>
            <td>
              <p></p>
              {{ item.submit_date }}
            </td>
            <td>
              <p></p>
              {{ item.updatedAt }}
            </td>
            <td>
              <p></p>
              {{ item.description }}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
                style="margin: 5px"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
                style="margin: 5px"
              >
                Download File
              </button>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
                style="margin: 5px"
              >
                View Comment
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
      listpost: [],
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
    handleClick() {
      window.location.href =
        "http://localhost:5173/student/myassignment/submit";
    },
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/contribution/read", this.student)
        .then((data) => {
          console.log(data.data, "data");
          this.listpost = data.data;
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
};
</script>
          
          <style>
</style>