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

  /**
   * Initialize form group responsible for retrieving the new folder's name
   * which may be added to root
   */
  initializeForm(): void {
    this.newFolderRootForm = new FormGroup({
      newFolderName: new FormControl('', Validators.required),
    });
  }

  /**
   * Triggers event responsible for letting parent component know that
   * user has clicked on the 'Add' button
   */
  triggerSubmitEvent(): void {
    console.log('adasd');
    const folderName = this.newFolderRootForm.value.newFolderName;
    this.submitClick.emit(folderName);
  }

  /**
   * Triggers event responsible for letting parent component know that
   * user has clicked on the 'Cancel' button
   */
  triggerCancelEvent(): void {
    this.cancelClick.emit();
  }
}
