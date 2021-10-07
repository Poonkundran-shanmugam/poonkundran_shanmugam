/** Angular Modules */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./parent/child/child.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "parent", component: ParentComponent },
    { path: "child", component: ChildComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
