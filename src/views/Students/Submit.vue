<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Submit My Post</h5>
      <from action="/login" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Gmail"
          />
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <div class="input-group mb-3 mt-3">
            <input type="file" class="form-control" id="inputGroupFile01" />
          </div>
          <!--  -->
          <div class="ml-3 mt-10">
            <input
              class="form-check-input mt-1"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            <a href="" class="text-decoration-none"
              >I agree with Terms & Conditions</a
            >
          </div>
          <button type="button" class="btn btn-primary mt-5">Primary</button>
        </div>
      </from>
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
  },
};
</script>
        
        <style>
</style>