import { DemoSharedComponentsComponent } from './shared/components/demo-shared-components/demo-shared-components.component';
import { MyCoverageComponent } from './my-coverage/pages/my-coverage.component';
import { MyCoverageTaxDocumentsComponent } from './my-coverage/components/tax-documents/tax-documents.component';
import { MyCoverageHistoryComponent } from './my-coverage/components/history/history.component';
import { MyCoverageViewReceiptComponent } from './my-coverage/components/view-receipt/view-receipt.component';
import { MyCoverageIdCardComponent } from './my-coverage/components/id-card/id-card.component';
import { MyCoverageViewReceiptDetailsComponent } from './my-coverage/components/view-receipt-details/view-receipt-details.component';


type PathMatch = "full" | "prefix" | undefined;

export const routes = [
    {path: '', redirectTo: '/demo', pathMatch:'full' as PathMatch },
    {path: 'demo', component: DemoSharedComponentsComponent},    
    {path: 'mycoverage', children: [  
        {path: '', component: MyCoverageComponent },     
        {path: 'tax', component: MyCoverageTaxDocumentsComponent, pathMatch:'full' as PathMatch},
        {path: 'history', component: MyCoverageHistoryComponent},
        {path: 'receipt', component: MyCoverageViewReceiptComponent},
        {path: 'receipt-details', component: MyCoverageViewReceiptDetailsComponent},
        {path: 'idcard', component: MyCoverageIdCardComponent}
    
    ]},
];