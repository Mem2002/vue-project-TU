<template>
  <div class="card" style="width: 100%">
    <div v-if="loading" class="loading-screen">
      <span class="loading-text">Loading...</span>
    </div>
    <div class="card-body" style="width: 100%">
      <h5 class="card-title">Admin Chart</h5>
      <!-- <div class="filter-container">
        <select v-model="selectedYear">
          <option disabled value="">Select year</option>
          <option v-for="(year, index) in years" :key="index">{{ year }}</option>
        </select>
        <select v-model="selectedMonth" :disabled="!selectedYear">
          <option disabled value="">Select month</option>
          <option v-for="(month, index) in months" :key="index">{{ month }}</option>
        </select>
        <button @click="fetchData">Filter</button>
      </div> -->
      <div class="summary-container">
        <h2>Total Contributions: {{ chartData.sumOfContribution }}</h2>
      </div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
      <div>
        <canvas id="pieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from 'chart.js/auto';
export default {
  data() {
    return {

      loading: false,
      selectedMonth: '',
      selectedYear: '',
      chart: null,
      pieChart: null,
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      years: this.generateYears(new Date().getFullYear(), 2000),
      chartData: {},
    };
  },
  created() { },
  mounted() {
    this.fetchData();
  },
  methods: {

    generateYears(startYear, endYear) {
      let years = [];
      for (let year = startYear; year >= endYear; year--) {
        years.push(year);
      }
      return years;
    },
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
    async fetchData() {
      try {
        this.loading = true;
        // Include selected month and year in the request
        const response = await axios.get('https://backend-final-zk84.onrender.com/v1/dashboardAdmin', {
          params: {
            month: this.selectedMonth,
            year: this.selectedYear
          }
        });
        console.log(response.data);

        const data = response.data;

        // Check if data is not empty
        if (data && data.DT && data.DT.length > 0) {
          this.chartData = data.DT[0]; // Update chartData with the fetched data
          this.createChart(); // Call createChart after fetching data
        } else {
          console.log('No data received');
          this.chartData = {};
          this.chartData.sumOfContribution = 0
          if (this.chart) {
            this.chart.destroy();
            this.chart = null;
          }
          if (this.pieChart) {
            this.pieChart.destroy();
            this.pieChart = null;
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false; // stop loading regardless of success or failure
      }
    },
    // Function to create the chart
    createChart() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
      if (this.pieChart) {
        this.pieChart.destroy();
        this.pieChart = null;
      }
      const ctx = document.getElementById('myChart');
      const pieCtx = document.getElementById('pieChart');

      // Create bar chart
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartData.details.map(entry => entry.faculty_name), // Use faculty names as labels
          datasets: [{
            label: 'Contribution Count',
            data: this.chartData.details.map(entry => entry.contribution_count), // Use contribution counts as data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Unique Contributors',
            data: this.chartData.details.map(entry => entry.unique_contributors),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Contributions (No Comments)',
            data: this.chartData.details.map(entry => entry.contributionsNoComments),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Contributions (No Comments After 14 days)',
            data: this.chartData.details.map(entry => entry.contributionsNoRecentComments),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Create pie chart
      this.pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: this.chartData.percentFaculty.map(entry => entry.faculty_name),
          datasets: [{
            label: 'Faculty Percentage',
            data: this.chartData.percentFaculty.map(entry => parseFloat(entry.percent)),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
              // Add more colors as needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
              // Add more colors as needed
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.parsed + '%';
                }
              }
            },
            legend: {
              position: 'right'
            }
          }
        }
      });
    }

  },
};
</script>

<style>
.datepicker1 {
  position: fixed;
  bottom: 200px;
  left: 200px;
}

.loading-screen {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #51258a;
  z-index: 1000;
}

.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
}

.filter-select {
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

.filter-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.filter-button:hover {
  background-color: #45a049;
}

.loading-text {
  animation: loading 2s linear infinite;
}

@keyframes loading {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>