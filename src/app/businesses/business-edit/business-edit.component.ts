import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  businessForm: FormGroup;

  constructor(private route: ActivatedRoute, private businessService: BusinessService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  get controls() { // a getter!
    return (<FormArray>this.businessForm.get('links')).controls;
  }

  private initForm() {
    let businessName = '';
    let businessImagePath = '';
    let businessDescription = '';
    let businessLinks = new FormArray([]);

    if (this.editMode) {
      const business = this.businessService.getBusiness(this.id);
      console.log(`business: `, business)
      businessName = business.name;
      businessImagePath = business.imagePath;
      businessDescription = business.description;

      if (business['links']) {
        for (let link of business.links) {
          businessLinks.push(new FormGroup({
            'name': new FormControl(link.name),
            'url': new FormControl(link.url)
          }))
        }
      }
    }

    this.businessForm = new FormGroup({
      'name': new FormControl(businessName),
      'imagePath': new FormControl(businessImagePath),
      'description': new FormControl(businessDescription),
      'links': businessLinks
    })
    console.log(`businessForm: `, this.businessForm)
  }

  onSubmit() {
    console.log(this.businessForm);
  }

}
