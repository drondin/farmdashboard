import {IChartApi} from 'lightweight-charts';
import {HostListener, Component, ElementRef} from '@angular/core';
@Component({
    selector: 'app-general-methods',
    template: ``
  })
export abstract class ChartGeneralMethodsComponent {
    chart: IChartApi;
    chartEl: ElementRef;

    @HostListener('window:resize', ['$event'])
    handleScreenResize($event: any): void {
        this.chart.resize(this.chartEl.nativeElement.clientWidth, this.chartEl.nativeElement.clientHeight);
    }
}
