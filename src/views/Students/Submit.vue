<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Submit My Post</h5>
      <from
        action="/login"
        method="post"
        class="form-group"
        @submit.prevent="UploadData"
      >
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.name"
          />
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Description</label
          >
          <input
            type="description"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.description"
          />

          <form id="fileUploadForm" enctype="multipart/form-data">
            <label
              for="exampleFormControlInput1"
              class="form-label mt-4 fw-semibold"
              >File</label
            >
            <div class="input-group mb-3 mt-3">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile01"
                name="file"
                @change="addFile"
              />
            </div>
            <div class="ml-3 mt-10">
              <input
                class="form-check-input mt-1"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                v-model="agreeTerms"
              />
              <a href="" class="text-decoration-none"
                >I agree with Terms & Conditions</a
              >
            </div>
            <button
              type="button"
              class="btn btn-primary mt-5"
              :disabled="!agreeTerms"
            >
              <!-- onclick="uploadFile(e)" -->
              Upload
            </button>
          </form>
        </div>
      </from>
    </div>
  </div>
</template>
        
<script >
import axios from "axios";

import { Collection } from "mongoose";
// import { response } from "express";
export default {
  data() {
    return {
      results: {},
      upload: {
        name: "",
        description: "",
        file: null,
      },
      agreeTerms: false,
      userId: null,
    };
  },
  created() {
    //gọiApi, call Ajax(gọi từ server) \
  },
  mounted() {
    // nếu muốn sử dụng jQuery -> chỉ truy xuất Dom dduojc trong mounted -> có thể sử dụng jQuery
    console.log("mounted() called..........");
    this.userId = this.$route.query.id;
    console.log(this.userId);
  },
  methods: {
    //method là function tự tạo
    uploadData() {
      let formData = new FormData();
      formData.append("name", this.upload.name);
      formData.append("description", this.upload.description);
      formData.append("file", this.upload.file);
      // formData.append("topic_id", this.dataAddTournament.imageNews);
      axios
        .post("http://localhost:8081/v1/contribution/create", this.upload)
        .then(
          // res.cookie("access_token", data?.data?.DT?.access_token, {httpOnly: true})
          (data) => {
            console.log(data);
            // localStorage.setItem("jwt", data?.data?.DT?.access_token); //get cookeis
            // document.cookie = `jwt=${data?.data?.DT?.access_token}`; // xét phía người dùng không đọc đc cookies ở phía FE
            //  document.cookie("access_token", data?.data?.DT?.access_token, {httpOnly: false})
            // axios.get(BASE_URL + '/todos', { withCredentials: true });
            // document.cookie = `jwt=${data?.data?.DT?.access_token}; HttpOnly=true`;

            const userRoles = data;
            console.log(userRoles);

            // // Kiểm tra quyền truy cập của người dùng
            // if (userRoles.includes("Manager Coordinator ")) {
            //   alert("upload Successfully");
            //   // Chuyển hướng người dùng đến trang quản trị viên nếu có quyền admin
            //   this.$router.push({ name: "Manager Coordinator " });
            //   // await Collection.updateOne({_id:id}, {$set:{access_token: access_token}})
            // } else if (userRoles.includes("Admin")) {
            //   alert("upload Successfully");
            //   // Chuyển hướng người dùng đến trang quản lý nếu có quyền manager
            //   this.$router.push({ name: "Admin" });
            // } else {
            //   // Nếu không có quyền truy cập, hiển thị thông báo và không chuyển hướng
            //   alert("You do not have permission to access this page");
            // }
            console.log(data);
          }
        );
    },
    addFile(e) {
      if (e.target.files.length) {
        this.upload.file = e.target.files[0];
      }
    },
  },
};
</script>
        
        <style>
</style>