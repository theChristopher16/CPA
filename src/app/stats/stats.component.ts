import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
import { NavigateRoutes } from '../sidebar/sidebar.component';
import { MapComponent } from '../map/map.component';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  //LineChart=[];
  BarChart=[];
  PieChart=[];

  nameList=[];
  scoreList=[];
  achList=[];
  tupleArray = [];

  // auto scrolling variable
  TabScroller$:boolean;

  scores$: object;

  autoTabBool: boolean;

  constructor(private score: UserInfoService,
    private router: Router, private tabscroller: TabScrollerService) { }

  ngOnInit() {

    NavigateRoutes.getInstance().setCurrentRoute('stats'); //used to tell sidebar the current route

    // auto scrolling functionality
    this.TabScroller$ = this.tabscroller.getScrollBool();
    setTimeout(() => {
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute()=='stats') {
        this.router.navigate(['info']);
      }
    }, 45000); // 2s

    //Subscribe to service to get scores from database
    this.score.getUserInfo().subscribe(
      score => {
        this.scores$ = score;

        // Sort scores by score
        this.scores$ = score;
        console.log(this.scores$);

        // Find size of score list
        let findingSize = true;
        let size = 0;
        while (findingSize) {

          console.log(this.scores$[size]);
          size++;
          if (this.scores$[size] === undefined) {
            findingSize = false;
          }
        }

        // Sort the scores by score
        const sortedScore = [];
        const alreadySorted = [];

        // Find absolute smallest value
        let smallest = this.scores$[0].Score * 1;
        for (let i = 0; i < size; i++) {
          if (smallest > this.scores$[i].Score * 1) {
            smallest = i;
          }
        }

        for (let h = 0; h < size; h++) {

          let biggest = smallest;
          for (let i = 0; i < size; i++) {
            // Check if already sorted
            let as = false;
            for (let a = 0; a < alreadySorted.length; a++) {
              if (alreadySorted[a] === i) {
                as = true;
              }
            }
            if (this.scores$[i].Score * 1 > this.scores$[biggest].Score * 1 && !as) {
              biggest = i;
            }
          }
          sortedScore.push(this.scores$[biggest]);
          alreadySorted.push(biggest);
        }
        this.scores$ = sortedScore;

        //iterates through scores$ object and puts names/scores into array
        //(could maybe be improved by using keys)
        for(var i in this.scores$){
          this.tupleArray.push(Object.values(this.scores$[i]));
          this.nameList.push(this.tupleArray[i][1]);
          this.scoreList.push(parseInt(this.tupleArray[i][2],10));
          // Find # achievements of each player
          let numAch = 0;
          if(this.tupleArray[i][4].length > 0){
            numAch++;
          }
          for(let j = 0; j < this.tupleArray[i][4].length; j++){
            if(this.tupleArray[i][4].charAt(j) == ","){
              numAch++;
            }
          }
          this.achList.push(numAch);
        }

        //charts should be declared here because of async reasons...(I think)
        this.createChart(this.nameList,this.achList);
        this.createBarGraph(this.nameList,this.scoreList, this.genColors(size), this.genColors(size));
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
    });*/
    // Bar chart:
    
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

  genColors(num){
    let colors = [];
    for(let i = 0; i < num; i++){
      // Calculate random number rgb 0-255
      let r = Math.floor(Math.random() * 255); 
      let g = Math.floor(Math.random() * 255); 
      let b = Math.floor(Math.random() * 255); 
      colors.push("rgba(" + String(r) + ", " + String(g) + ", " + String(b) + ", 0.5)");
    }
    return colors;
  }

  createBarGraph(labelArray, valueArray, bg_colors, bd_colors){
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labelArray,
        datasets: [{
          label: 'Score',
          data: valueArray,
          backgroundColor: bg_colors,
          borderColor: bd_colors,
          borderWidth: 5
        }]
      },
      options: {
        title:{
          text:"Leaderboards",
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
          text:"Number of Achievements Completed",
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
