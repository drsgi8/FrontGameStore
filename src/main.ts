import 'core-js';
import 'zone.js';
import 'reflect-metadata';
import 'jquery';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
