<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List class</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Assignment Name</th>
            <th scope="col">Deadline StartDate</th>
            <th scope="col">Deadline EndDate</th>
            <th scope="col">
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
              >
                Submit
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Assignment 1</th>
            <td>3/8/2024 12:00:00 AM</td>
            <td>3/8/2024 12:00:00 AM</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
              >
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">Assignment 2</th>
            <td>3/8/2024 12:00:00 PM</td>
            <td>3/8/2024 12:00:00 PM</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick"
              >
                Submit
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
export default {
  methods: {
    
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    handleClick() {
        window.location.href = 'http://localhost:5173/student/myassignment/submit';
    },
  },
};
</script>
        
        <style>
</style>