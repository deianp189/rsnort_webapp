import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgentService } from '../../services/agent.service';
import { GrafanaFrameComponent } from '../grafana-frame/grafana-frame.component';
import { map, Observable } from 'rxjs';
import { Agent } from '../../models/agent.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    GrafanaFrameComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  private agentSrv = inject(AgentService);
  central$!: Observable<Agent | null>;

  ngOnInit() {
    this.central$ = this.agentSrv.current$.pipe(map((agent) => agent ?? null));
  }
}