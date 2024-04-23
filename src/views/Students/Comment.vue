<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">View Comment</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <table class="table">
          <tbody>
            <tr
              v-for="(item, index) in listcomment"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              <th scope="row">{{ item.comment }}</th>
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
      view: {
        comment: " ",
      },
      listcomment: [],
      userId: null,
    };
  },
  created() {},
  mounted() {
    this.getlistrole();
  },

  methods: {
    getlistrole() {
      axios
        .get("https://backend-final-zk84.onrender.com/v1/comment/readAll", this.view)
        .then((data) => {
          console.log(data, "data");
          this.listcomment = data.data;
        });
    },
  },
};
</script>
  