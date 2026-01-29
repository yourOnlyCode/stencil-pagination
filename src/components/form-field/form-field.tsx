import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'form-field',
  shadow: false
})
export class FormField {
  @Prop() label: string;
  @Prop() value: string = '';
  @Prop() type: string = 'text';
  @Event() fieldChange: EventEmitter<string>;

  handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.fieldChange.emit(input.value);
  };

  render() {
    return (
      <div class="space-y-2">
        <label class="text-sm font-medium text-slate-700">{this.label}</label>
        <input 
          type={this.type}
          value={this.value}
          onInput={this.handleInput}
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    );
  }
}
