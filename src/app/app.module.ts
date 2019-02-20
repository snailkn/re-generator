import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { ReBuilderComponent } from './re-builder/re-builder/re-builder.component';
import { ReBoothComponent } from './re-builder/re-booth/re-booth.component';
import { ReFactoryComponent } from './re-builder/re-factory/re-factory.component';
import { ReCheckerComponent } from './re-builder/re-checker/re-checker.component';

/** 配置 angular i18n **/
@NgModule({
  declarations: [
    AppComponent,
    ReBuilderComponent,
    ReBoothComponent,
    ReFactoryComponent,
    ReCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
