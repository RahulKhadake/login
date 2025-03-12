import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgFor],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  SelectedState:any;
  SelectedCity:any;
  Selecteddestrict:any;
  districtsList:any[]=[];
  StateList: any = [];
  cities:any

constructor(private https:DropdownService){}

ngOnInit(): void {

  this.getAllStatus();
}
getAllStatus(): void {
  this.districtsList = [];
  this.cities = [];
  this.https.getAllStatus().subscribe({
    next: (res: any) => {
      this.StateList = res;
      console.log('Response:', this.StateList); // ✅ Log data when received
    },
    error: (err:any) => {
      console.error('Error fetching states:', err); // ✅ Handle API error
    },
    complete: () => {
      console.log('API call completed.'); // ✅ Run when API call is done
    }
  });
}
   getAlldistrictbyStateId(){
    this.cities = [];
    this.https.getAlldistrictbyStateId(this.SelectedState).subscribe({
      next: (res: any) => {
        this.districtsList = res;
        console.log('Response:', this.districtsList); // ✅ Log data when received
      },
      error: (err:any) => {
        console.error('Error fetching states:', err); // ✅ Handle API error
      },
      complete: () => {
        console.log('API call completed.'); // ✅ Run when API call is done
      }
    });
   }
   onDistrictChange(){
        this.https.districtChange(this.Selecteddestrict).subscribe({
          next: (res: any) => {
            this.cities = res;
            console.log('Response:', this.cities); // ✅ Log data when received
          },
          error: (err:any) => {
            console.error('Error fetching states:', err); // ✅ Handle API error
          },
          complete: () => {
            console.log('API call completed.'); // ✅ Run when API call is done
          }
        });
   }
}
