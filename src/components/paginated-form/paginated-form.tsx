import { Component, State, h } from '@stencil/core';
import { apiService } from '../../services/api-service';

@Component({
  tag: 'paginated-form',
  shadow: false
})
export class PaginatedForm {
  @State() currentPage: number = 1;
  @State() formData: any = {};
  @State() loading: boolean = false;
  @State() error: string = '';

  totalPages = 3;

  handleInputChange(field: string, value: string) {
    this.formData = { ...this.formData, [field]: value };
  }

  nextPage = () => {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  };

  prevPage = () => {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  };

  handleSubmit = async (e: Event) => {
    e.preventDefault();
    this.loading = true;
    this.error = '';

    try {
      await apiService.submitForm(this.formData);
      window.history.pushState({}, '', '/success');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (err) {
      this.error = 'Submission failed. Please try again.';
    } finally {
      this.loading = false;
    }
  };

  renderPage() {
    switch (this.currentPage) {
      case 1:
        return (
          <div class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-slate-900 mb-2">Basic Information</h2>
              <p class="text-sm text-slate-600">Let's start with your basic details</p>
            </div>
            <div class="space-y-4">
              <form-field
                label="Name"
                value={this.formData.name || ''}
                onFieldChange={(e) => this.handleInputChange('name', e.detail)}
              />
              <form-field
                label="Email"
                type="email"
                value={this.formData.email || ''}
                onFieldChange={(e) => this.handleInputChange('email', e.detail)}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-slate-900 mb-2">Additional Details</h2>
              <p class="text-sm text-slate-600">Help us know more about you</p>
            </div>
            <div class="space-y-4">
              <form-field
                label="Phone"
                type="tel"
                value={this.formData.phone || ''}
                onFieldChange={(e) => this.handleInputChange('phone', e.detail)}
              />
              <form-field
                label="Address"
                value={this.formData.address || ''}
                onFieldChange={(e) => this.handleInputChange('address', e.detail)}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-slate-900 mb-2">Review & Submit</h2>
              <p class="text-sm text-slate-600">Please review your information</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-6 space-y-3 border border-slate-200">
              <div class="flex justify-between py-2 border-b border-slate-200">
                <span class="font-medium text-slate-700">Name</span>
                <span class="text-slate-900">{this.formData.name}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-200">
                <span class="font-medium text-slate-700">Email</span>
                <span class="text-slate-900">{this.formData.email}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-200">
                <span class="font-medium text-slate-700">Phone</span>
                <span class="text-slate-900">{this.formData.phone}</span>
              </div>
              <div class="flex justify-between py-2">
                <span class="font-medium text-slate-700">Address</span>
                <span class="text-slate-900">{this.formData.address}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div class="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        <div class="mb-8">
          <div class="flex gap-2 mb-6">
            {[1, 2, 3].map(step => (
              <div class={`flex-1 h-2 rounded-full transition-all ${
                step <= this.currentPage ? 'bg-blue-500' : 'bg-slate-200'
              }`} />
            ))}
          </div>
        </div>

        {this.renderPage()}
        
        {this.error && (
          <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {this.error}
          </div>
        )}
        
        <div class="mt-6 text-center text-sm text-slate-500">
          Step {this.currentPage} of {this.totalPages}
        </div>

        <div class="flex gap-3 mt-8">
          <button 
            onClick={this.prevPage} 
            disabled={this.currentPage === 1}
            class="flex-1 px-6 py-3 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>
          
          {this.currentPage < this.totalPages ? (
            <button 
              onClick={this.nextPage}
              class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={this.handleSubmit} 
              disabled={this.loading}
              class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {this.loading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
    );
  }
}
