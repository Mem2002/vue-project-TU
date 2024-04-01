<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Coordinator!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="demo-datetime-picker">
            <div>
              <div class="block">
                <span class="demonstration fix1" style="margin-top: 11%"
                  >Start date</span
                >
                <span class="demonstration fix2" style="margin-top: 11%"
                  >End date</span
                >
                <el-date-picker
                  v-model="value2"
                  type="datetimerange"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  format="YYYY-MM-DD HH:mm:ss"
                  date-format="YYYY/MM/DD ddd"
                  time-format="A hh:mm:ss"
                />
              </div>
            </div>
          </div>
          <p class="card-text custom-right-align ml-10">
            <button type="button" class="btn btn-primary">Create</button>
          </p>
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
      results: {},
      student: {
        name: "",
        description: ""
      },
      entered: {
        confirmPassword: false,
      },
      listgroup: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
  },
  methods: {
    getlistrole() {
      axios
        .get(" http://localhost:8081/v1/group", this.student)
        .then((data) => {
          console.log(data.data);
          this.listgroup = data.data;
        });
    },
    saveData() {
      if (this.student.password != this.student.confirmPassword) {
        alert("chưa trùng mk");
        return;
      }
      axios
        .post("http://localhost:8081/v1/register", this.student)
        .then(({ data }) => {
          alert("aaaa Em nhận được rồi a zai");
          this.$router.push("/login");
        });
    },
  },
};
</script>
            

<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
}
.line {
  width: 1px;
  background-color: var(--el-border-color);
}
.fix1 {
  position: fixed;
  width: 82.5%;
  top: 0;
  left: 10%;
}
.fix2 {
  position: fixed;
  width: 109%;
  top: 0;
  bottom: 10px;
  left: 10%;
}
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>