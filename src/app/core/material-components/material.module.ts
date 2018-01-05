import { NgModule } from "@angular/core/src/metadata/ng_module";
import {MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule
    ],
    exports: [
        MatButtonModule
    ]
})
export class MaterialModule {

}