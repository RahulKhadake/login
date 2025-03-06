import { Component, ElementRef, signal, Signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  cityList = signal<string[]>(["Solapur","Hyderabad"]);
  courseName = signal<string>("Angular");
cityName : string="";

constructor(){
  this.cityName='';
}

  @ViewChild('textValue') inputValue!: ElementRef
  checkValue(){
    if(this.inputValue){
      const CheckinginputValuevalue = this.inputValue.nativeElement.value;
      console.log('value', CheckinginputValuevalue);
      this.inputValue.nativeElement.focus();
      alert(CheckinginputValuevalue);
    console.log('checkValue');
  }
}
  AccessSignalValue(){
    this.courseName.set("React");
  }

  AddCity(){
 this.cityList.update(oldValu=>[...oldValu,this.cityName]);
  }
}
