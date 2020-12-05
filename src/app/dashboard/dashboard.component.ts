import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { StatisticsService } from '../statistics.service';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numOfTurns;
  numOfBusinesses;
  numOfCategories;
  numOfCustomers;
  avgWaitingPerDay: [[], [], []];
  servicesInformation;
  businessId = 1;
  services = ['אופטיקה', 'אופטרימטיסט'];
  optionsDailySalesChart: any = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
  }
//שליפת עסק ושליפת שירותים בעסק
  constructor(private statisticService: StatisticsService) {

    this.statisticService.getGeneralInformation().subscribe((information => {
      console.log('information',information);
      this.numOfTurns = information[0] + 1000;
      this.numOfBusinesses = information[1] + 20;
      this.numOfCategories = information[2] + 15;
      this.numOfCustomers = information[3] + 80;
    }))
this.statisticService.getServicesInformation(this.businessId).subscribe((services=>
  {
    this.servicesInformation=services;
    console.log(this.servicesInformation);
  }))
  }

  ngOnInit() {

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.statisticService.getAvgWaitingPerDay(this.businessId).subscribe((servicesWithAvg => {
      this.avgWaitingPerDay = servicesWithAvg;
      console.log('avgWaitingPerDay',this.avgWaitingPerDay);
      
    
      for (let i = 0; i < 2; i++) {

        const dataDailySalesChart: any = {
          labels: ['א', 'ב', 'ג', 'ד', 'ה', 'ו'],
          series: []
        };
        const arr = [];
        this.avgWaitingPerDay[i].forEach(a => arr.push(a));
        dataDailySalesChart.series.push(arr);
        var chartName = '#dailySalesChart' + i;
        
        var dailySalesChart = new Chartist.Line(chartName, dataDailySalesChart, this.optionsDailySalesChart);
       

       this.startAnimationForLineChart(dailySalesChart);
      
      }

    }))




    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };

}
