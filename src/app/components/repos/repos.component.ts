import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from './../../services/github.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = [];
  constructor(
    private githubservice: GithubService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    console.log(this.repoUrl);
  }

  ngOnChanges(){
    if(this.repoUrl){
      this.githubservice.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

}
