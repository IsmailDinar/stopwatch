import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

const routes: Routes = [
  {path: '', component: StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
