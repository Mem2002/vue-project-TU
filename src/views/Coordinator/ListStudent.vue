<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List of student contributions</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Post Name</th>
            <th scope="col">Topic Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Description</th>
            <!-- <th scope="col">End Date</th> -->
            <th scope="col">Remaining Time</th>
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listpost" :value="item._id" :key="index" placeholder="Password">
            <th>
              <p></p>
              {{ item.contribution.name }}
            </th>
            <th>
              <p></p>
              {{ item.contribution.topic_name }}
            </th>
            <td>
              <p></p>
              {{ item.timeSubmit }}
            </td>
            <!-- <td>
              <p></p>
              {{ item.updatedAt }}
            </td> -->

            <td>
              <p></p>
              {{ item.contribution.description }}
            </td>
            <td>
              <p></p>
              {{ item.remainingTimetoComment }}
            </td>
            <td>
              <p></p>
              {{ getStatusText(item.contribution.status) }}
            </td>
            <td>
              <!-- <button type="button" class="btn btn-info" style="margin: 5px" v-on:click="deleteItem(item._id)">
                Delete
              </button> -->
              <button type="button" class="btn btn-info" style="margin: 5px" href="javascript:"
                @click="getdownload(item.contribution._id)">
                Download File
              </button>
              <!-- <a href="javascript:" @click="getdownload(item._id)">
                Download File
              </a> -->
              <button type="button" class="btn btn-info" style="margin: 5px"
                v-on:click="handleClick(item.contribution._id)">
                Comment
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
import axios from "../../config/axios";
export default {
  data() {
    return {
      results: {},
      post: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
      },
      listpost: [],
      // userId: null,
    };
  },
  created() { },
  mounted() {
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    // openEdit() {
    //   router.replace("/edit");
    // },
    getStatusText(status) {
      switch (status) {
        case -1:
          return "Hidden";
        case 0:
          return "Pending";
        case 1:
          return "Approved";
        default:
          return "Unknown";
      }
    },
    handleClick(name) {
      router.push({
        name: "studentmanagemypostcreatecomment",
        params: { id: name },
      });
    },

    // handleClick() {
    //   window.location.href =
    //     "https://vue-project-tu.vercel.app/student/myassignment/submit";
    // },
    getlistrole() {
      // Gửi yêu cầu GET đến API
      axios
        .get("https://backend-final-zk84.onrender.com/v1/contribution/readbyfaculty")
        .then((response) => {
          // Xử lý dữ liệu nhận được từ API
          const data = response.data;
          if (data && data.DT && data.DT.contributionsWithRemainingTime) {
            // Lấy danh sách các contributions từ dữ liệu nhận được
            this.listpost = data.DT.contributionsWithRemainingTime;
            console.log(data.DT.contributionsWithRemainingTime);
          } else {
            console.error("Invalid response data format");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getdownload(id) {
      axios
        .get(`https://backend-final-zk84.onrender.com/v1/contribution/download/${id}`, {
          responseType: "blob",
        })
        .then((res) => {
          const blob = new Blob([res.data], {
            type: "application/octet-stream", //dùng mở file zip
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${id}.zip`;
          link.click();
        });
    },
    // handleClick(name) {
    //   router.push({
    //     name: "studentmanagemypostcreatecomment",
    //     query: { id: name },
    //   });
    // },

    deleteItem(id) {
      axios
        .delete(`https://backend-final-zk84.onrender.com/v1/contribution/delete/${id}`)
        .then((response) => {
          // Sau khi xóa thành công, bạn có thể cập nhật danh sách hoặc thực hiện các hành động khác
          // Ví dụ:
          this.getListRole(); // Cập nhật lại danh sách sau khi xóa
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
    //     .post("https://backend-final-zk84.onrender.com/v1/register", this.student)
    //     .then(({ data }) => {
    //       alert("aaaa Em nhận được rồi a zai");
    //       this.$router.push("/login");
    //     });
    // },
  },
};
</script>

<style></style>