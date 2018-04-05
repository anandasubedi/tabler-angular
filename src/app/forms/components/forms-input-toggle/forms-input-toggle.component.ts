import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-input-toggle',
  template: `
    <div class="form-group">
      <div class="form-label">Toggle switches</div>
      <div class="custom-switches-stacked">
        <label class="custom-switch">
          <input type="radio" name="option" value="1" class="custom-switch-input" checked>
          <span class="custom-switch-indicator"></span>
          <span class="custom-switch-description">Option 1</span>
        </label>
        <label class="custom-switch">
          <input type="radio" name="option" value="2" class="custom-switch-input">
          <span class="custom-switch-indicator"></span>
          <span class="custom-switch-description">Option 2</span>
        </label>

        <label class="custom-switch">
          <input type="radio" name="option" value="3" class="custom-switch-input">
          <span class="custom-switch-indicator"></span>
          <span class="custom-switch-description">Option 3</span>
        </label>
      </div>
    </div>
  `,
  styles: []
})
export class FormsInputToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
