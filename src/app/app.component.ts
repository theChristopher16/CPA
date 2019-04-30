import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPA';

  constructor(private toastr: ToastrService) { }

  showToaster(topic: any, payload: any) {
    this.toastr.success(topic, payload);
  }
}
