<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Guest!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/imagebrain.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">IT</h5>
                <p class="card-text custom-right-align ml-10">
                  <button type="button" class="btn btn-info">Dowload</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      listtopic: [],
    };
  },
  created() {},
  mounted() {
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/contribution/readforGuest", {
          withCredentials: true,
        })
        .then((data) => {
          console.log(data);
          // this.listtopic = data.data.DT;
        });
    },
  },
};
</script>
            
  <style>
.custom-right-align {
  text-align: center;
}
</style>