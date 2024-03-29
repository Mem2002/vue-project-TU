<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Craete Faculties</h5>
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
          />
          <p class="card-text custom-right-align">
            <button type="button" class="btn btn-danger">Delete</button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
          
<script>
export default {};
</script>
          
<style>
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>