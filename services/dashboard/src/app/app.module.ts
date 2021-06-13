import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { ErrorService } from './services/error.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @param http Http Client
 * @return Translate Http Loader for the i18n files.
 * @constructor
 */
const HttpLoaderFactory = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

/**
 * Central app module.
 */
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavContentComponent,
        ErrorDialogComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MaterialModule,
        FontAwesomeModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
