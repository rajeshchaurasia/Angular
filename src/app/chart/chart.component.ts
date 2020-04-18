import { Component, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

 private chartxy: am4charts.XYChart;
 private chart: am4charts.XYChart;
 private gau_chart: am4charts.GaugeChart;
 private pi_chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {


    this.zone.runOutsideAngular(() => {


      let chartxy = am4core.create("xy_chart1", am4charts.XYChart);
      

      chartxy.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chartxy.data = data;

      let dateAxis1 = chartxy.xAxes.push(new am4charts.DateAxis());
      dateAxis1.renderer.grid.template.location = 0;

      let valueAxis1 = chartxy.yAxes.push(new am4charts.ValueAxis());
      valueAxis1.tooltip.disabled = true;
      valueAxis1.renderer.minWidth = 35;

      let series1 = chartxy.series.push(new am4charts.LineSeries());
      series1.dataFields.dateX = "date";
      series1.dataFields.valueY = "value";

      series1.tooltipText = "{valueY.value}";
      chartxy.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series1);
      chartxy.scrollbarX = scrollbarX;

      this.chartxy = chartxy;


var chart = am4core.create("xy_chart", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "USA",
    visits: 23725
  },
  {
    country: "China",
    visits: 1882
  },
  {
    country: "Japan",
    visits: 1809
  },
  {
    country: "Germany",
    visits: 1322
  },
  {
    country: "UK",
    visits: 1122
  },
  {
    country: "France",
    visits: 1114
  },
  {
    country: "India",
    visits: 984
  },
  {
    country: "Spain",
    visits: 711
  },
  {
    country: "Netherlands",
    visits: 665
  },
  {
    country: "Russia",
    visits: 580
  },
  {
    country: "South Korea",
    visits: 443
  },
  {
    country: "Canada",
    visits: 441
  }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 11;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 24000;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 30;
// axis break
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 2100;
axisBreak.endValue = 22900;
//axisBreak.breakSize = 0.005;

// fixed axis break
var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.columns.template.tooltipText = "{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});



let gau_chart = am4core.create("gauge_chart", am4charts.GaugeChart);
gau_chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

gau_chart.innerRadius = -25;

var axis = gau_chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
axis.min = 0;
axis.max = 100;
axis.strictMinMax = true;
axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
axis.renderer.grid.template.strokeOpacity = 0.3;

var colorSet = new am4core.ColorSet();

var range0 = axis.axisRanges.create();
range0.value = 0;
range0.endValue = 50;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);
range0.axisFill.zIndex = - 1;

var range1 = axis.axisRanges.create();
range1.value = 50;
range1.endValue = 80;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(2);
range1.axisFill.zIndex = -1;

var range2 = axis.axisRanges.create();
range2.value = 80;
range2.endValue = 100;
range2.axisFill.fillOpacity = 1;
range2.axisFill.fill = colorSet.getIndex(4);
range2.axisFill.zIndex = -1;

let hand = gau_chart.hands.push(new am4charts.ClockHand());

hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);

// ------------- ser chart ------------------



var pi_chart = am4core.create("pie_chart", am4charts.PieChart);

// Add data
pi_chart.data = [ {
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czechia",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
} ];

// Add and configure Series
var pieSeries = pi_chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;


    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartxy) {
        this.chartxy.dispose();
      }
            if (this.chart) {
        this.chart.dispose();
      }
      if (this.gau_chart) {
        this.chart.dispose();
      }
      if (this.pi_chart) {
        this.chart.dispose();
      }

      
    });
  }
}
