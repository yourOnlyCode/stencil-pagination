import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-router',
  shadow: true
})
export class AppRouter {
  @State() currentPage: string = 'form';

  componentWillLoad() {
    this.handleRouteChange();
    window.addEventListener('popstate', () => this.handleRouteChange());
  }

  handleRouteChange() {
    const path = window.location.pathname;
    this.currentPage = path === '/success' ? 'success' : 'form';
  }

  render() {
    return (
      <div>
        {this.currentPage === 'form' && <paginated-form />}
        {this.currentPage === 'success' && <success-page />}
      </div>
    );
  }
}
