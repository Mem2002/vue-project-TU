<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Submit My Post</h5>
      <from method="post" @submit="uploadData">
        <div class="mb-3 bg p-5 rounded">
          <label for="exampleFormControlInput1" class="form-label mt-4 fw-semibold">Name</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" v-model="upload.name" />
          <label for="exampleFormControlInput1" class="form-label mt-4 fw-semibold">Description</label>
          <input type="description" class="form-control" id="exampleFormControlInput1" v-model="upload.description" />
          <label for="exampleFormControlInput1" class="form-label mt-4 fw-semibold">File</label>
          <div class="input-group mb-3 mt-3">
            <input type="file" class="form-control" id="inputGroupFile01" name="file" @change="addFile"
              enctype="multipart/form-data" />
          </div>
          <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  I commit to comply with and fully accept the terms and
                  conditions of the service, by reading and understanding their
                  contents before continuing to use.
                </div>
                <div class="modal-footer">
                  <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                    @click="agree">
                    Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-3 mt-10">
            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input"
              v-model="agreeTerms" />
            <a href="" class="text-decoration-none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">I agree
              with Terms & Conditions</a>
          </div>
          <button type="submit" class="btn btn-primary mt-5" @click="uploadData()" :disabled="!agreeTerms">
            Upload
          </button>
        </div>
      </from>
    </div>
  </div>
</template>

<script>
import axios from "../../config/axios";
import Cookies from 'js-cookie';
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
    axios.defaults.withCredentials = true;
  },
  mounted() {
    this.userId = this.$route.query.id;
    const myCookieValue = Cookies.get('jwt');
    console.log("Cookie value:", myCookieValue);
  },
  methods: {
    agree() {
      this.agreeTerms = true;
    },
    uploadData() {
      let formData = new FormData();
      formData.append("name", this.upload.name);
      formData.append("description", this.upload.description);
      formData.append("file", this.upload.file);
      formData.append("topic_id", this.userId);
      axios
        .post("https://backend-final-zk84.onrender.com/v1/contribution/create", formData, {
          withCredentials: true,
        })
        .then((data) => {
          console.log(data);
          alert("Uploaded successfully");
          console.log(this.upload.name);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    addFile(e) {
      if (e.target.files.length) {
        this.upload.file = e.target.files[0];
      }
    },
  },
};
</script>

<style></style>