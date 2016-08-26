import {Workspaces,Workspace} from './services/workspaces/workspace';
import { inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(Router)
export class shell {
  
  constructor( router) {
       this.router = router;
        this.test = 'Welcome to the Prime V5!';
        this.controller = new Workspaces();
       
      }

  activate(params, routeConfig) {



      if (!params.section){
           const url = this.router.generate("shell", { section: 'customers' ,viewmodel: 'listing',id: 'default' });
           this.router.navigate(url, undefined);
      }
      else{
        console.log(routeConfig);
        this.AddWorkspace(params);}
          
  }

  closeWorkspace(workspace){
      let failbackworkspace = this.controller.closeWorkspace(workspace);

     if (failbackworkspace)
     {
        const url = this.router.generate("shell", { section: failbackworkspace.section ,viewmodel:failbackworkspace.viewModel,id: failbackworkspace.id });
        this.router.navigate(url, undefined);
     } 

        
  }
  AddWorkspace(params){

     this.controller.addWorkspace(params.section,params.viewmodel, params.id);


  }
}

