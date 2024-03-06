<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="bg-secondary col-auto col-md-2 min-vh-100">
        <div class="bg-secondary">
          <a
            class="d-flex text-decoration-none mt-1 align-items-center text-white"
          >
            <span class="fs-4 d-none d-sm-inline">SideMenu</span>
          </a>
          <ul class="nav nav-bills flex-column mt-4">
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <el-icon
                  ><House style="width: 25px; margin-bottom: 4%"
                /></el-icon>
                <span class="fs-4 d-none d-sm-inline"></span>Home Page
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white"
                ><el-icon
                  ><List style="width: 25px; margin-bottom: 4%" /></el-icon
                ><span class="fs-4 d-none d-sm-inline"></span>List Accounts</a
              >
            </li>
            <li class="nav-item disabled">
              <a href="#" class="nav-link text-white"
                ><el-icon
                  ><Management
                    style="width: 25px; margin-bottom: 4%" /></el-icon
                ><span class="fs-4 d-none d-sm-inline"></span>Manager List</a
              >
            </li>
            <li class="nav-item disabled">
              <a href="#" class="nav-link text-white"
                ><el-icon
                  ><PieChart style="width: 25px; margin-bottom: 4%" /></el-icon
                ><span class="fs-4 d-none d-sm-inline"></span>Chart Marketing</a
              >
            </li>
            <li class="nav-item disabled">
              <a href="#" class="nav-link text-white"
                ><el-icon
                  ><Download style="width: 25px; margin-bottom: 4%" /></el-icon
                ><span class="fs-4 d-none d-sm-inline"></span>Download File</a
              >
            </li>
            <li class="nav-item disabled">
              <a href="#" class="nav-link text-white"
                ><i class="fs-5 fa fa-g"></i
                ><span class="fs-4 d-none d-sm-inline"></span>Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
