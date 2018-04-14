import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
    declarations: [
        AppHeaderComponent
    ],
    imports: [
        CoreModule
    ],
    exports: [
        AppHeaderComponent
    ]
})
export class AppHeaderModule {

}
