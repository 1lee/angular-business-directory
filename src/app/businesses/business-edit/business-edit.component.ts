import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private businessService: BusinessService, private router: Router) {

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
            'name': new FormControl(link.name, Validators.required),
            'url': new FormControl(link.url, Validators.required)
          }))
        }
      }
    }

    this.businessForm = new FormGroup({
      'name': new FormControl(businessName, Validators.required),
      'imagePath': new FormControl(businessImagePath, Validators.required),
      'description': new FormControl(businessDescription, Validators.required),
      'links': businessLinks
    })
  }

  onAddLink() {
    (<FormArray>this.businessForm.get('links')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required)
    }))

  }

  onSubmit() {
    // const newBusiness = new Business(this.businessForm.value['name'], this.businessForm.value['description'], this.businessForm.value['imagePath'], this.businessForm.value['links'])

    if (this.editMode) {
      this.businessService.updateBusiness(this.id, this.businessForm.value)
    } else {
      this.businessService.addBusiness(this.businessForm.value);
    }
    this.onCancel()
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })

  }

  onDeleteLink(index: number) {
    (<FormArray>this.businessForm.get('links')).clear();
  }

}
