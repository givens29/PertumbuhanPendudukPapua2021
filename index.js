var options = {
    chart: {
      type: 'area'
    },
    series: [{
      name: 'growth',
      data: [0.44,1.85,1.85,1.40,1.82,0.58,1.85,1.85,1.85,0.89,1.58,1.85,1.85,0.52,1.85,1.07,1.16,1.85,1.86,1.85,1.74,1.56,1.25,1.85,1.85,1.85,1.61]
    }],
    xaxis: {
      categories: ["Merauke", "Jayawijaya", "Jayapura", "Nabire", "Kepulauan Yapen", "Biak Numfor", "Paniai", "Puncak Jaya", "Mimika", "Boven Digoel", "Mappi", "Asmat",
         "Yahukimo", "Pegunungan Bintang", "Tolikara", "Sarmi", "Keerom", "Waropen", "Supiori", "Mamberamo Raya", "Nduga", "Lanny Jaya", "Mamberamo Tengah", "Yalimo", "Puncak", "Dogiyai", "Intan Jaya", "Deiyai", "Kota Jayapura", "Provinsi Papua"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();