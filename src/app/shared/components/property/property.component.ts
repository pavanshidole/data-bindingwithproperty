import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  msg:string="the product_Name is samsung and with product_id is 100";

  info:string="<strong> hello i'm pavan shidole from Her</strong>";

  databindingdef:string="data-binding means data transfer html file into typescript file in same component"

  userName:string="pavan shidole";

  Angulardef:string="it is javascript framework which is build on top of the typescript and create single page application (spa) is called angular";

  jsdef:string="javascript is scripting or programming language that allows us to add functionality to web pages is called javascript";

  constructor() { }

  ngOnInit(): void {
  }

}
