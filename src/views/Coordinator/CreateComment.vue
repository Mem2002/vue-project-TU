<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Create Comment</h5>
      <from method="post" class="form-group" @submit="uploadComment">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Description</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.comment"
          />
          <p class="card-text custom-right-align">
            <button
              type="button"
              class="btn btn-primary"
              @click="uploadComment()"
            >
              Create
            </button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
            
  <script>
import axios from "axios";
export default {
  data() {
    return {
      upload: {
        comment: "",
        contribution_id: "",
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
      },
      listremainingTime: [],
    };
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getdatetime();
    this.uploadComment();
    const myCookieValue = Cookies.get('jwt');
    console.log("Cookie value:", myCookieValue);

  },
  methods: {
    uploadComment() {
      let formData = new FormData();
      formData.append("comment", this.upload.comment);
      formData.append("contribution_id", this.userId);

      console.log(this.upload.comment);
      axios
        .post("https://backend-final-zk84.onrender.com/v1/comment/create", formData, {
          withCredentials: true,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
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