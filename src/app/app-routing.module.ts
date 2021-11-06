import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coins',
    loadChildren: () => import('./pages/coin-list/coin-list.module').then(m => m.CoinListPageModule)
  },
  {
    path: 'coins/:id',
    loadChildren: () => import('./pages/coin-detail/coin-detail.module').then(m => m.CoinDetailPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/post-list/post-list.module').then(m => m.PostListPageModule)
  },
  {
    path: '',
    redirectTo: 'dex',
    pathMatch: 'full'
  },
  {
    path: 'dex',
    loadChildren: () => import('./pages/dex/dex.module').then( m => m.DexPageModule)
  },  {
    path: 'exchange',
    loadChildren: () => import('./pages/exchange/exchange.module').then( m => m.ExchangePageModule)
  },
  {
    path: 'polygon',
    loadChildren: () => import('./pages/polygon/polygon.module').then( m => m.PolygonPageModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./pages/utilities/utilities.module').then( m => m.UtilitiesPageModule)
  },
  {
    path: 'xdai',
    loadChildren: () => import('./pages/xdai/xdai.module').then( m => m.XdaiPageModule)
  },
  {
    path: 'crypto',
    loadChildren: () => import('./pages/crypto/crypto.module').then( m => m.CryptoPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
