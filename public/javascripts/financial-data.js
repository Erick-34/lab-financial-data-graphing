const apiUrl = `http://api.coindesk.com/v1/bpi/historical/close.json`;

axios
  .get(apiUrl)
  .then((response) => {
    const bitcoinData = response.data.bpi;
    console.log(bitcoinData)
    let keys = Object.keys(bitcoinData)
    let values = Object.values(bitcoinData)

//Graficos 
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [keys[0], keys[1], keys[2], keys[3], keys[4], keys[5], keys[6], keys[7], keys[8], 
        keys[9], keys[10], keys[11], keys[12], keys[13], keys[14], keys[15], keys[16], 
        keys[17], keys[18], keys[19], keys[20], keys[21], keys[22], keys[23], keys[24], 
        keys[25], keys[26], keys[27], keys[28], keys[29], keys[30]],
        datasets: [{
            label: '# Bitcoin',
            data: [values[0],values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], 
            values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], 
            values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], 
            values[25], values[26], values[27], values[28], values[29], values[30]],

            backgroundColor: [
                'rgba(255, 99, 133, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  })
  .catch((err) => {
    console.log("Error while getting the values", err);
  });