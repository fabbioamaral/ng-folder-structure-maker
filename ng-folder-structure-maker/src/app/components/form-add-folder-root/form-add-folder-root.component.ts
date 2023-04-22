import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-folder-root',
  templateUrl: './form-add-folder-root.component.html',
  styleUrls: ['./form-add-folder-root.component.scss'],
})
export class FormAddFolderRootComponent implements OnInit {
  @Output() submitClick = new EventEmitter<string>();
  @Output() cancelClick = new EventEmitter();
  newFolderRootForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.newFolderRootForm = new FormGroup({
      newFolderName: new FormControl('', Validators.required),
    });
  }

  triggerSubmitEvent() {
    const folderName = this.newFolderRootForm.value.newFolderName;
    this.submitClick.emit(folderName);
  }

  triggerCancelEvent() {
    this.cancelClick.emit();
  }
}
