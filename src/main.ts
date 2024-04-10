import { AppModule} from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch(error => {console.error(error)});
