<template>
  <div class="card" style="width: 100%">
    <div class="card-body" style="width: 100%">
      <h5 class="card-title">Admin Chart mới</h5>
      <table class="table">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #d0acff"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">Sum Faculty</div>
                  <div
                    class="p-2"
                  >
                    Number : {{ listdashboardsum }}
                  </div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #51258a; color: black"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">IT POSTS</div>
                  <div class="p-2" v-if="listdashboard.length > 0">
                    Number : {{ listdashboard[0].contribution_count }}
                  </div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #ffe0e0; color: black"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">BUSINESS POSTS</div>
                  <div class="p-2" v-if="listdashboard.length > 0">
                    Number : {{ listdashboard[1].contribution_count }}
                  </div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #fffce0; color: black; font-size: 16px"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">DESIGNER POSTS</div>
                  <div class="p-2" v-if="listdashboard.length > 0">
                    Number : {{ listdashboard[2].contribution_count }}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <br />
          <!-- <div
            class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded"
            style="height: 10%"
            v-if="listdashboard.length > 0"
          >
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: listdashboard[0].percent, background: '#51258a' }"
            ></div>
          </div> -->
          <br />
          <div
            class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded datepicker1"
            style="height: 2%"
            v-if="listdashboard.length > 0"
          >
            <div
              class="rounded h-8px datepicker1"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{
                width: listdashboard[0].percent,
                background: '#51258a',
              }"
            ></div>
          </div>
          <br />
          <div
            class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded"
            v-if="listdashboard.length > 0"
          >
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{
                width: listdashboard[1].percent,
                background: '#ffe0e0',
              }"
            ></div>
          </div>
          <br />
          <div
            class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded"
            v-if="listdashboard.length > 0"
          >
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{
                width: listdashboard[2].percent,
                background: '#fffce0',
              }"
            ></div>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      post: {
        Sum_of_Contribution: "",
        contribution_count: "",
        percent: "",
        Sum_of_Faculty: "",
      },
      listdashboard: [],
      listdashboardsum: [],
      // userId: null,
    };
  },
  created() {},
  mounted() {
    this.getlistdashboard();
    this.userId = this.$route.query._id;
  },
  methods: {
    getlistdashboard() {
      axios
        .get(
          "https://backend-final-zk84.onrender.com/v1/dashboardAdmin",
          this.post
        )
        .then((data) => {
          console.log(data);
          this.listdashboard = data.data.DT[0].percentFaculty;
          console.log(data.data.DT[0].percentFaculty);
          this.listdashboardsum = data.data.DT[0].sumOfContribution;

          console.log(this.listdashboardsum);
        });
    },
  },
};
</script>
    
    <style>
.datepicker1 {
  position: fixed;
  bottom: 200px;
  left: 200px;
  left: 50%; 
  transform: translateX(-50%); 
  height: 100%; 
}
</style>