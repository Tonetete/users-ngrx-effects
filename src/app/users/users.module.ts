import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [UserComponent, ListComponent],
  imports: [CommonModule],
  exports: [ListComponent, UserComponent],
})
export class UsersModule {}
