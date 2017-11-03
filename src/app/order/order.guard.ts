import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {OrderComponent} from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  // O CanDeactivate fornece uma chance de interceptar a navegação do usuario.
  // antes que o componente atual seja desativado, ou seja, o usuário saia da página
  // Aqui, uma vez o usuário estando na página do pedido (OrderCOmponent)
  // e clica em outro link, peguntamos se ele quer de fato deixar esta página
  // e menos que o pedido já tenha sido feito

  // Esta classe deve ser associada na rota onde o componete é chamado
  // já que um dos parâmetros do método canDeactivate é exatamente o
  // componente em si. No caso da página de pedidos, esta configuração está em order.module.ts
  canDeactivate(
    orderComponent: OrderComponent,
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): boolean {
    if(!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja sair da compra?');
    }else{
      return true;
    }
  }
}

