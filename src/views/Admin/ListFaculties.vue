<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">List faculties</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(topic, index) in listtopic"
            :key="index"
          >
            <div class="card">
              <img
                src="../../assets/realistic-neon-lights.png"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ topic.faculty_name }}</h5>
                <p class="card-text custom-right-align ml-10">
                  <button
                    type="button"
                    class="btn btn-info"
                    v-on:click="handleClick"
                    style="margin: 5px"
                    href="javascript:"
                    @click="deleteItem(topic._id)"
                  >
                    Delete
                  </button>
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
import axios from "axios";
export default {
  data() {
    return {
      listtopic: [],
    };
  },
  mounted() {
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    getlistrole() {
      axios
        .get("https://backend-final-zk84.onrender.com/v1/faculty/readAll", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          this.listtopic = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    deleteItem(id) {
      axios
        .delete(
          `https://backend-final-zk84.onrender.com/v1/faculty/delete/${id}`
        )
        .then((response) => {
          console.log(response);
          console.log(id);
          alert("Delete Successfully!");
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
.custom-right-align {
  text-align: center;
}
</style>