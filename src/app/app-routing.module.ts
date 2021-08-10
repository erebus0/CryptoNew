import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [{ path: 'Search', component: SearchComponent },
{ path: 'SearchResult', component: SearchResultComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
