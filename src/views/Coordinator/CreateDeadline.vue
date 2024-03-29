<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Create Deadline</h5>
      <from action="/login" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <div class="demo-date-picker">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                type="daterange"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                :default-value="[new Date(2024, 9, 1), new Date(2024, 10, 1)]"
              />
            </div>
          </div>
        </div>
        <p class="card-text custom-right-align ml-10">
          <button type="button" class="btn btn-primary">Create</button>
        </p>
      </from>
    </div>
  </div>
</template>
            
  <script lang="ts" setup>
import { ref } from "vue";

const value1 = ref("");
const value2 = ref("");
</script>
            
  <style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>