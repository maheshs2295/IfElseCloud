import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-grid-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './grid-table.component.html',
  styleUrl: './grid-table.component.scss'
})
export class GridTableComponent {
@Input() gridData:any;
columns:any = [];
rows:any = [];
showModal:boolean = false;
editableRow:any;
totalTeamMembers:any;
selectedRowIds = new Set<string>();
ngOnInit(): void{
  this.totalTeamMembers = this.gridData.grid_data.length
if(this.gridData){
  this.columns = this.gridData.grid_columns;
  this.rows = this.gridData.grid_data
}


}
editRow(row:any){
  this.showModal = true;
  this.editableRow = row;
}

deleteRow(row:any){
  this.rows = this.gridData.grid_data.filter((ele:any)=> ele.id !== row);
}
saveEdit() {
  const index = this.gridData.grid_data.findIndex((r:any) => r.id === this.editableRow.id);
  if (index > -1) {
    this.gridData.grid_data[index] = { ...this.editableRow };
  }
  this.showModal = false;
}

cancelEdit() {
  this.showModal = false;
  this.editableRow = null;
}

toggleRowSelection(id: string) {
  this.selectedRowIds.has(id)
    ? this.selectedRowIds.delete(id)
    : this.selectedRowIds.add(id);
}

isSelected(id: string): boolean {
  return this.selectedRowIds.has(id);
}

get allSelected(): boolean {
  return this.gridData.grid_data.length > 0 && 
  this.gridData.grid_data.every((row:any) => this.selectedRowIds.has(row.id));
}

toggleSelectAll() {
  if (this.allSelected) {
    this.selectedRowIds.clear();
  } else {
    this.gridData.grid_data.forEach((row:any)=> this.selectedRowIds.add(row.id));
  }
}
}
