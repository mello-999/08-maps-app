import {
  Component,
  viewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import * as mapboxgl from 'mapbox-gl/esm';

import { environments } from '../../../environments/environment.development';

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [],
  templateUrl: './fullscreen-map-page.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `,
})
export class FullscreenMapPage implements AfterViewInit {

  divElement = viewChild.required<ElementRef<HTMLDivElement>>('map');

  ngAfterViewInit(): void {

    const map = new mapboxgl.Map({
      accessToken: environments.mapboxKey,
      container: this.divElement().nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.6483, -33.4569],
      zoom: 12
    });

  }

}