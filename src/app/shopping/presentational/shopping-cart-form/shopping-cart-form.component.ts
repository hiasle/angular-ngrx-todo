import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.css']
})
export class ShoppingCartFormComponent {

  @Output() productAdded = new EventEmitter();

  form: FormGroup;

  constructor(formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      productValue: ['', Validators.required],
      done: [false],
    });

    // this.form = new FormGroup({
    //   todoValue: new FormControl('', Validators.required),
    //   done: new FormControl(false)
    // });
  }

  addProduct() {
    this.productAdded.emit(this.form.value.productValue);
    this.form.reset();
  }

}
