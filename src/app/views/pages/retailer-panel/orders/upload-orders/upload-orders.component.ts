import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule, FileUploadValidators } from '@iplab/ngx-file-upload';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import * as XLSX from'xlsx';
declare var $:any;
interface Product {
  ProductName: string;
  Stock: number;
}

@Component({
  selector: 'app-upload-orders',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxDropzoneModule,
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './upload-orders.component.html',
  styleUrl: './upload-orders.component.scss'
})
export class UploadOrdersComponent {
  filePreviews: File[] = [];
  excelData: Product[] = [];

  onSelect(event: any) {
    console.log(event)
    this.filePreviews = event.addedFiles;
    this.readExcel();
  }

   modifyPropertyNames(data: any[]) {
    return data.map(item => {
      // Create a new object to hold modified property names
      const newItem: any = {};
  
      // Iterate over each property of the original item
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          // Modify the property name (e.g., "Product Name" to "ProductName")
          const newKey = key.replace(/\s+/g, ''); // Remove spaces from property name
          newItem[newKey] = item[key]; // Assign value to the new property name
        }
      }
  
      return newItem;
    });
  }

  readExcel() {
    if (this.filePreviews.length === 0) {
      return;
    }

    const file = this.filePreviews[0]; // Assuming only one file is selected
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.excelData = this.modifyPropertyNames(this.excelData);
      
      console.log('Excel Data:', JSON.stringify(this.excelData, null, 2));
    };
    fileReader.readAsArrayBuffer(file);
  }

  showTable:boolean=false;
  submitData(){
    this.showTable=true;
  }

  onRemove(file: File) {
    this.filePreviews = this.filePreviews.filter(f => f !== file);
    this.excelData = []; // Clear Excel data when file is removed
  }

  searchType=[
    {type:'By Product'},
    {type:'By Stock'},
    {type:'By MRP'}
  ]

}
