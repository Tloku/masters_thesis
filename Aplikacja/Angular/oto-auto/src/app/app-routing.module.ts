import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchEngineComponent } from 'src/components/main-search-engine/main-search-engine.component';

const routes: Routes = [{ path: '', component: MainSearchEngineComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
