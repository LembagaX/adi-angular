import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Material } from 'src/app/response/material';
import { MatDialog } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-material-edit-card',
  templateUrl: './material-edit-card.component.html',
  styleUrls: ['./material-edit-card.component.scss']
})
export class MaterialEditCardComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() material: Material;
  @Output() updated = new EventEmitter<Material>();

  constructor(
    private server: ServerService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  public submit() {
    const dialogRef = this.dialog.open(LoadingPopupComponent, { data: 'Updating Material, please wait ...' });
    this.server.materialUpdate(this.material.slug, this.form).subscribe((response) => {
      this.updated.emit(response);
      dialogRef.close();
    });
  }

}
