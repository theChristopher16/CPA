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

        //iterates through scores$ object and puts names/scores into array
        //(could maybe be improved by using keys)
        for(var i in this.scores$){
          this.tupleArray.push(Object.values(this.scores$[i]));
          this.nameList.push(this.tupleArray[i][1]);
          this.scoreList.push(parseInt(this.tupleArray[i][2],10));
          // Find # achievements of each player
          let numAch = 0;
          
          if(this.tupleArray[i][4] != null){
            if(this.tupleArray[i][4].length > 0){
              numAch++;
            }
            for(let j = 0; j < this.tupleArray[i][4].length; j++){
              if(this.tupleArray[i][4].charAt(j) == ","){
                numAch++;
              }
            }
          }
          if(numAch > 0){
            numAch--;
          }
          this.achList.push(numAch);
        }
        //charts should be declared here because of async reasons...(I think)
        // Create random color scheme for each user and make pie chart and bar graph
        let bgc = this.genColors(size);
        let bdc = this.genColors(size);
        this.createChart(this.nameList,this.achList, bgc, bdc);
        this.createBarGraph(this.nameList,this.scoreList, bgc, bdc);
      }
    );
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
        responsive: true,
        title:{
          text : 'Leaderboards',
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
  createChart(labelArray, valueArray, bg_colors, bd_colors){
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: labelArray,
        datasets: [{
          label: '# of Votes', //should probably change this?
          data: valueArray,
          backgroundColor: bg_colors,
          borderColor: bd_colors,
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
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
