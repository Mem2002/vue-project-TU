<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List My Post</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Post Name</th>
            <th scope="col">Topic Name</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Remaining Timeto Submit</th>
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
              {{ listpost[index].contribution.name }}
            </th>
            <th>
              <p></p>
              {{ listpost[index].contribution.topic_name }}
            </th>
            <td>
              <p></p>
              {{ listpost[index].timeSubmit}}
            </td>
            <td>
              <p></p>
              {{ listpost[index].remainingTimetoSubmit}}
            </td>
            <td>
              <p></p>
              {{ listpost[index].contribution.description}}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                style="margin: 5px"
                v-on:click="deleteItem(listpost[index].contribution._id)"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
                style="margin: 5px"
                href="javascript:"
                @click="getdownload(listpost[index].contribution._id)"
              >
                Download File
              </button>
              <button
                type="button"
                class="btn btn-info"
                style="margin: 5px"
                @click="viewComment(listpost[index].contribution._id)"
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
    };
  },
  created() {},
  mounted() {
    this.getlistrole();
    this.userId = this.$route.query._id;
  },
  methods: {
    getlistrole() {
      axios
        .get(
          "https://backend-final-zk84.onrender.com/v1/contribution/readforStudent",
          this.post
        )
        .then((data) => {
          console.log(data);
          this.listpost = data.data.DT.contributionsWithRemainingTime;
          console.log(this.listpost[0].contribution.name);
        });
    },
    getdownload(id) {
      axios
        .get(
          `https://backend-final-zk84.onrender.com/v1/contribution/download/${id}`,
          {
            responseType: "blob",
          }
        )
        .then((res) => {
          const blob = new Blob([res.data], {
            type: "application/octet-stream",
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${id}.zip`;
          link.click();
        });
    },
    viewComment(id) {
      this.$router.push({
        name: "studentmanagemypostviewcomment",
        params: { id },
      });
    },

    deleteItem(id) {
      axios
        .delete(
          `https://backend-final-zk84.onrender.com/v1/contribution/delete/${id}`
        )
        .then((response) => {
          console.log(response);
          console.log("Item deleted successfully");
          this.getListRole();
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    },
  },
};
</script>
          
          <style>
</style>