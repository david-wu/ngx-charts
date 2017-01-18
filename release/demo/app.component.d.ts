import { OnInit } from '@angular/core';
import '../src/ngx-charts.scss';
import './demo.scss';
export declare class AppComponent implements OnInit {
    theme: string;
    chartType: string;
    chartGroups: any[];
    chart: any;
    realTimeData: boolean;
    countries: any[];
    single: any[];
    multi: any[];
    dateData: any[];
    graph: {
        links: any[];
        nodes: any[];
    };
    linearScale: boolean;
    view: any[];
    width: number;
    height: number;
    fitContainer: boolean;
    showXAxis: boolean;
    showYAxis: boolean;
    gradient: boolean;
    showLegend: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    showYAxisLabel: boolean;
    yAxisLabel: string;
    showGridLines: boolean;
    curveType: string;
    curve: any;
    interpolationTypes: string[];
    colorSets: any;
    colorScheme: any;
    schemeType: string;
    selectedColorScheme: string;
    showLabels: boolean;
    explodeSlices: boolean;
    doughnut: boolean;
    autoScale: boolean;
    timeline: boolean;
    gaugeMin: number;
    gaugeMax: number;
    gaugeLargeSegments: number;
    gaugeSmallSegments: number;
    gaugeUnits: string;
    gaugeAngleSpan: number;
    gaugeStartAngle: number;
    gaugeShowAxis: boolean;
    gaugeValue: number;
    gaugePreviousValue: number;
    constructor();
    ngOnInit(): void;
    updateData(): void;
    applyDimensions(): void;
    toggleFitContainer(event: any): void;
    selectChart(chartSelector: any): void;
    select(data: any): void;
    setInterpolationType(curveType: any): void;
    setColorScheme(name: any): void;
    onLegendLabelClick(entry: any): void;
}