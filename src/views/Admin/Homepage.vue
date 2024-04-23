<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Adminvbv3344444</h5>
    <div class="d-flex justify-content-evenly">
      <div style="">Today is {{ dayOfWeek }}</div>
      <div>Date: {{ formattedDate }}</div>
      <div>Time: {{ formattedTime }}</div>
    </div>

    <div class="card-body" style="margin: 110px">
      <div class="container">

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/whitehathacker.jpg" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">White Hat Hackers</h5>
                <p class="card-text">
                  Also known as "ethical hackers", they are people who use
                  hacking skills to find and fix security drives to protect
                  systems and data.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/blackhat.png" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Black Hat Hackers</h5>
                <p class="card-text">
                  These are cyberattackers with malicious intent, usually to
                  obtain personal information, money or harm organizations and
                  individuals.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/Greyhat.png" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Grey Hat Hackers</h5>
                <p class="card-text">
                  Gray hat hackers are a combination of both types above. They
                  may perform actions without permission but not with the
                  intention of causing harm or personal gain.
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
import Chart from 'chart.js/auto'; // Import Chart.js library

export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    handleClick() {
      window.location.href =
        "https://vue-project-tu.vercel.app/student/myassignment/submit";
    },
    getDayOfWeek(date) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[date.getDay()];
    },
    getFormattedDate(date) {
      return date.toLocaleDateString();
    },
    getFormattedTime(date) {
      return date.toLocaleTimeString();
    },
    async fetchData() {
      try {
        const response = await fetch('https://backend-final-zk84.onrender.com/v1/dashboardAdmin');
        const data = await response.json();
        this.chartData = data.DT[0]; // Update chartData with the fetched data
        this.createChart(); // Call createChart after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    // Function to create the chart
    createChart() {
      const ctx = document.getElementById('myChart');
      const pieCtx = document.getElementById('pieChart');

      // Create bar chart
      new Chart(ctx, {
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
            label: 'Contributions (No Recent Comments)',
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

      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: this.chartData.percentFaculty.map(entry => entry.faculty_name),
          datasets: [{
            label: 'Faculty Percentage',
            data: this.chartData.percentFaculty.map(entry => parseFloat(entry.percent)),
            backgroundColor: [
              'rgba(255, 99, 132, 1)', // Red
              'rgba(54, 162, 235, 1)', // Blue
              // Add more colors as needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)', // Red
              'rgba(54, 162, 235, 1)', // Blue
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
  computed: {
    dayOfWeek() {
      return this.getDayOfWeek(this.currentDate);
    },
    formattedDate() {
      return this.getFormattedDate(this.currentDate);
    },
    formattedTime() {
      return this.getFormattedTime(this.currentDate);
    },
  },
  mounted() {
    // Call createChart method when the component is mounted
    this.fetchData();
  }
};
</script>

<style></style>
