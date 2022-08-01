import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
selector: 'data-component',
templateUrl: './data.component.html',
styleUrls: ['./data.component.css']
})

export class DataComponent
{
Content: string;
CityList: string[];
TableContent: Array<TableData>;  
temp: string;

  constructor()
  {
    this.Content = '';
    this.CityList=['Bangalore','Chennai','Mumbai','Kolkata','Delhi','Hyderabad'];
    this.TableContent=[];
    this.temp='';
  }

 onSubmit()
 {
    
    let rowdata = new TableData();
    rowdata.City = (<HTMLInputElement>document.getElementById("selecttext")).value;
    rowdata.Content = (<HTMLInputElement>document.getElementById("textdata")).value;
    rowdata.id=this.TableContent.length;
    this.TableContent.push(rowdata);
 } 

 onRemove(event: Event)
 {

    this.temp = (event.target as Element).id;
    let val = +this.temp;
    this.TableContent.splice(val, 1);
 
    for (let i=val; i<this.TableContent.length; i++)
    {
      this.TableContent[i].id = i;
    }
 }

  
 } 

 class TableData
 {
    public Content: string;
    public City: string;
    public id: number;

    constructor()
    {
        this.Content='';
        this.City='';
        this.id=0;

    }
 }