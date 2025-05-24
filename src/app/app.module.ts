import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from '@angular/material/button';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput} from "@angular/material/input";
import {FormsModule} from '@angular/forms';
import {MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCheckbox,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    FormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatIconButton,
    MatIcon,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
