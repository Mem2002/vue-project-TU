<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List Account</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete Account</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listuser"
            :value="item._id"
            :key="index"
            placeholder="Password"
          >
            <th scope="row">{{ item.username }}</th>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick(item._id)"
              >
                Edit name
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteItem(item._id)"
              >
                Delete
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
      user: {
        username: "",
        email: "",
        role: "",
      },
      listuser: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    // openEdit() {
    //   console.log("aaaaa");
    //   router.replace("/edit");
    // },
    handleClick(name) {
      router.push({
        name: "adminuseredit",
        query: { id: name },
      });
    },

    getlistrole() {
      axios
        .get("http://localhost:8081/v1/user/read", this.user)
        .then((data) => {
          console.log(data.data.DT);
          this.listuser = data.data.DT;
        });
    },

    deleteItem(id) {
        console.log(id);
      axios
        .delete(`http://localhost:8081/v1/user/delete/${id}`)
        .then((response) => {
          console.log(response);
          console.log("user deleted successfully");
          // Sau khi xóa thành công, bạn có thể cập nhật danh sách hoặc thực hiện các hành động khác
          // Ví dụ:
        //   this.getlistrole(); // Cập nhật lại danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
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