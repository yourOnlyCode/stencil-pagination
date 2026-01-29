import { Component, h } from '@stencil/core';

@Component({
  tag: 'success-page',
  shadow: false
})
export class SuccessPage {
  goBack = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  render() {
    return (
      <div class="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-3">Success!</h2>
        <p class="text-slate-600 mb-8">Your form has been submitted successfully.</p>
        <button 
          onClick={this.goBack}
          class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
        >
          Submit Another Form
        </button>
      </div>
    );
  }
}
