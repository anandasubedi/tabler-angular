import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LayoutComponent } from '@tabler/angular-ui'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'docs', pathMatch: 'full' },
      { path: 'docs', loadChildren: './docs/docs.module#DocsModule' }
    ]
  },
  { path: '**', redirectTo: '/404' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
)
