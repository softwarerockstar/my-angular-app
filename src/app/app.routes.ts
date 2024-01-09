import { DemoSharedComponentsComponent } from './shared/components/demo-shared-components/demo-shared-components.component';
import { MyCoverageComponent } from './my-coverage/pages/my-coverage.component';

type PathMatch = "full" | "prefix" | undefined;

export const routes = [
    {path: '', redirectTo: '/demo', pathMatch:'full' as PathMatch },
    {path: 'demo', component: DemoSharedComponentsComponent},
    {path: 'mycoverage', component: MyCoverageComponent},
];