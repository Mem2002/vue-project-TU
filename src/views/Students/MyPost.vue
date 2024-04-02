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
                style="margin: 5px"
                v-on:click="deleteItem(name)"
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
      userId: null,
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    // this.getlistrole();
    this.userId = this.$route.query.id;
    console.log(this.userId);
  },
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    // handleClick(name) {
    //   router.push({
    //     query: { id: name },
    //   });
    // },

    // handleClick() {
    //   window.location.href =
    //     "http://localhost:5173/student/myassignment/submit";
    // },
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/contribution/read", this.student)
        .then((data) => {
          console.log(data.data, "data");
          this.listpost = data.data;
        });
    },
    deleteItem(name) {
      axios
        .delete(`http://localhost:8081/v1/contribution/read`)
        .then((response) => {
          console.log("Item deleted successfully");
          // Sau khi xóa thành công, bạn có thể cập nhật danh sách hoặc thực hiện các hành động khác
          // Ví dụ:
          this.getListRole(); // Cập nhật lại danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    },
    downloadFile() {
  // Gửi yêu cầu GET đến API để tải xuống file
  axios
    .get("http://localhost:8081/v1/download/file", {
      responseType: 'blob' // Đặt responseType thành 'blob' để nhận dữ liệu dạng blob
    })
    .then(response => {
      // Tạo một URL cho dữ liệu blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // Tạo một link tạm thời
      const link = document.createElement('a');
      link.href = url;
      // Đặt thuộc tính download để tự động tải xuống file khi được nhấp
      link.setAttribute('download', 'filename.txt');
      // Thêm link vào DOM và kích hoạt sự kiện click để tải xuống
      document.body.appendChild(link);
      link.click();
      // Xóa link sau khi đã tải xuống
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error("Error downloading file:", error);
    });
}
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