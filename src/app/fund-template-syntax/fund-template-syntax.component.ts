import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../helper-classes/person';

@Component({
  selector: 'fund-template-syntax',
  templateUrl: './fund-template-syntax.component.html',
  styleUrls: ['./fund-template-syntax.component.css']
})
export class FundTemplateSyntaxComponent implements OnInit {

  private attrVsProp: string;
  private people: Person[];
  private id = 10;
  private title = 'Template Syntax';

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
      .getPeople()
      .then(people => this.people = people);
  }

  delete (p): void {
    const index: number = this.people.findIndex((elem) => elem === p);
    this.people.splice(index, 1);
  }

  save (name: string, $event): void {
    console.log(name);
    this.people.push({ id: this.id, name: name, age: 20 });
    this.id += 1;
  }

}
