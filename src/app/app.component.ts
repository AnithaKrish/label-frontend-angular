import { Component } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import {MatTreeNestedDataSource,MatTreeModule} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import { Label } from './core/model/Label';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  treeControl = new NestedTreeControl<Label>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Label>();

  constructor( private httpService: HttpserviceService) {
    this.httpService.getLabels().subscribe(value =>{
      this.dataSource.data = value;
      })
  }

  ngOnInit()
  {
  
  }

  hasChild = (_: number, node: Label) => !!node.children && node.children.length > 0;
}
