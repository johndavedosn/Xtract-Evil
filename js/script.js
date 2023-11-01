function openCity(evt, tab) {

    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";

  }
  document.addEventListener("DOMContentLoaded", function () {
      
    document.querySelector(".tablinks.active").click();
  })
  var data = [35, 30, 25, 20, 15, 10, 5]; 

  Highcharts.chart('usrs', {
      chart: {
          type: 'column' 
      },
      title: {
          text: 'User records for this week'
      },
      xAxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Days of the week as labels
          
      },
      
      series: [{
          data: data
      }]
  });

   var data = [2, 20]; 

  Highcharts.chart('plns', {
      chart: {
          type: 'column' 
      },
      title: {
          text: 'User plans'
      },
      xAxis: {
          categories: ["Premium", "Free"], // Days of the week as labels
          
      },
      
      series: [{
          data: data
      }]
  });
  
const chartOptions = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Revenue'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your data
    title: {
      text: 'Months'
    }
  },
  yAxis: {
    title: {
      text: 'Values'
    }
  },
  series: [{
    data: [5, 10, 20, 30, 40, 50] 
  }]
};
const MAUchrt = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'MAUs (Monthly active users)'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your data
    title: {
      text: 'Months'
    }
  },
  yAxis: {
    title: {
      text: 'Values'
    }
  },
  series: [{
    data: [5, 10, 20, 30, 40, 50] 
  }]
};
Highcharts.chart('rvn', chartOptions);

 
Highcharts.chart("mau", MAUchrt)