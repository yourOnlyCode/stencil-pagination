import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <main class="max-w-4xl mx-auto px-6 py-8">
          <app-router />
        </main>
      </div>
    );
  }
}
