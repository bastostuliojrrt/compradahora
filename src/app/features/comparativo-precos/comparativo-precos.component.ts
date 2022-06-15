import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';


@Component({
  selector: 'app-comparativo-precos',
  providers: [MessageService, ConfirmationService],
  templateUrl: './comparativo-precos.component.html',
  styleUrls: ['./comparativo-precos.component.css']
})
export class ComparativoPrecosComponent implements OnInit {

  ngOnInit(): void {
  }

  activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService) {}

  onTabClose(event: any) {
      this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  }
  
  onTabOpen(event: any) {
      this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }

  

}
