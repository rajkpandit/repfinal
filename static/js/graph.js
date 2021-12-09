var ctx = document.getElementById('myChart').getContext('2d');
var count = document.getElementById('value').textContent;
console.log(count);
console.log(typeof(String.toString(count)));


console.log("Hello");
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Mar 2021", "Jun 2021", "Jul 2021", "Aug 2021", "Sept 2021", "Oct 2021", "Nov 2021", "Dec 2021"],
	
		
		
		// Information about the data


    datasets: [{
			label: "Players in Millions",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [0, 100, 200, 250, 190, 210, 350, parseInt(count)],
			fill: {
                target: 'origin',
                above: 'lightblue',   // Area will be red above the origin
                below: 'rgb(0, 0, 255)'    // And blue below the origin
              }

		}]
	},

	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Active Players for Age of Empires'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Player Count in Millions'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});
