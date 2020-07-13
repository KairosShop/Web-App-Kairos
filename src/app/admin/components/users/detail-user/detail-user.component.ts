import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ValidationsService } from '@core/authentication/validations.service';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';
import { User } from '@core/user/user.modele';
import { UserService } from '@core/user/user.service';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  id: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  picture: any;
  public user: User;
  public userForm: FormGroup;
  public desactive: boolean = true;
  public rol: string = 'SUPER'
  public roles = ['ADMIN', 'SUPER MARKET', 'CUSTOMER']





  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public _validations: ValidationsService,
    public apiRequestsService: ApiRequestsService,
    private userService: UserService,
    public _validationsService: ValidationsService
  ) {
    this.activatedRoute.queryParams.subscribe((query) => {
      if (query.action == 'edit') {
        this.desactive = false;
      }
    })

    this.createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getId(this.id)
    })
  }

  getId(id: any) {
    if (id !== 'new') {
      this.fetchUser(this.id);
    } else if (id == undefined) {
      this.createForm();
    } else {
      this.createForm();
    }
  }

  fetchUser(id: number) {
    this.userService.getUser(id).subscribe((user: User) => {
      this.createForm(user);
    })
  }


  createForm(user?: any) {
    if (!user) {
      user = {
        status: true,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        urlImage: '',
        url: '',
        rol: '',
        verified: true,
      };
    }

    this.userForm =
      this.formBuilder.group({
        firstName: [{
          value: user.firstName,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(3)]],
        lastName: [{
          value: user.lastName,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(3)]],
        email: [{
          value: user.email,
          disabled: this.desactive,
        }, [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: [{
          value: '',
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
        password2: [{
          value: '',
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
        rol: [{
          value: user.rol,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(3)]],
        urlImage: [{
          value: user.urlImage || '',
          disabled: this.desactive,
        }],
        active: [{
          value: user.active,
          disabled: this.desactive,
        }, Validators.required],
        verified: [{
          value: user.verified,
          disabled: this.desactive,
        }, Validators.required],
      }, {
        validators: this._validationsService.samePassword('password', 'password2')
      })
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }


  saveSettings() {

    const formValue = this.userForm.value;
    if (this.userForm.invalid) {
      Object.values(this.userForm.controls).map(control => {
        if (control.status === "INVALID") {
          control.markAsTouched();
        }
      });
      return;
    }

     delete formValue.urlImage;
    delete formValue.password2;
    delete formValue.active;
    delete formValue.verified;
    console.log(formValue)
    this.apiRequestsService.getQuery('users', 'post', formValue)
      .subscribe((response: any) => {
        console.log(response);
      });

    this.userForm.reset();
    this.router.navigateByUrl('/admin/users');

  }

}
