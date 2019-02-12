import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  //LineChart=[];
  //BarChart=[];
  PieChart=[];

  nameList=[];
  scoreList=[];
  tupleArray = [];
 

  scores$: object;

  constructor(private score: ScoresService) { }

  ngOnInit() {

    //Subscribe to service to get scores from database
    this.score.getScores().subscribe(
      score => {
        this.scores$ = score;

        //iterates through scores$ object and puts names/scores into array
        //(could maybe be improved by using keys)
        for(var i in this.scores$){
          this.tupleArray.push(Object.values(this.scores$[i]));
          this.nameList.push(this.tupleArray[i][1]);
          this.scoreList.push(parseInt(this.tupleArray[i][2],10));
        }

        //charts should be declared here because of async reasons...(I think)
        this.createChart(this.nameList,this.scoreList);
      }
    );
    
    //OTHER CHARTS FOR FUTURE REFERENCE
    /*
    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [ {
          label: 'Number of Items Sold in Months',
          data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text:"Line Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange"
        ],
        datasets: [ {
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
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
        title:{
          text:"Bar Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    */
    /*
    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple"
        ],
        datasets: [{
          label: '# of Votes',
          data: [100,110,105,103,109],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
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
        title:{
          text:"Pie Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });*/
  }

  //Creates a pie chart
  //requires an array of labels: String and values: Number
  createChart(labelArray, valueArray){
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: labelArray,
        datasets: [{
          label: '# of Votes', //should probably change this?
          data: valueArray,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
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
        title:{
          text:"Score Pie Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
