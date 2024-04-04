<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">View Comment</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <!-- <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            disabled
            v-model="viewcomment"
            v-on:click="handleClick(name)"
          />
        </div>-->
        <table class="table">
          <thead></thead>
          <tbody>
            <tr
              v-for="(item, index) in listcomment"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              <th scope="row">{{ item.comment }}</th>
              <td>
                <button type="button" class="btn btn-info">
                  <!-- v-on:click="handleClick(item._id)" -->
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
      
      <script>
import axios from "axios";

export default {
  data() {
    return {
      // view: { viewcomment: " " },
      view: {
        viewcomment: " ",
      },
      listcomment: [],
      userId: null,
    };
  },
  created() {},
  mounted() {
    // nếu muốn sử dụng jQuery -> chỉ truy xuất Dom dduojc trong mounted -> có thể sử dụng jQuery
    this.getlistcomment(this.$route.params.id);
  },
  methods: {
    handleClick(name) {
      router.push({
        name: "studentmanagemypostviewcomment",
      });
    },
    getlistcomment(id) {
      //cái này cần xem lại
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const params = new URLSearchParams();
      params.append("contribution_id", "660cbef74882b9dcbd8f9997");
      axios
        .get(
          `http://localhost:8081/v1/commentforS/read`,
          params.toString(),
          config
        )
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>
  