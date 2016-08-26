import _  from "lodash";
import {Router} from "aurelia-router";

export class Workspace {

    constructor(section, viewmodel, id,controller) {
        this.controller = controller;
        this.section = section;
        this.viewModel = viewmodel;
        this.id = id;
        this.isActive = true;
        this.href = "#/shell/" + section + "/" + viewmodel + "/" + id;
        this.key = "KEY-" + section + "-" + viewmodel + "-" + id;

    }


}

export class Workspaces {

    constructor() {
        this.workSpaces = [];

        this.workSpacesHistory = [];


    }


    closeWorkspace(workspace) {

        // Check if it exists
        let existingWorkspace = _.find(this.workSpaces, function (x) { return x.key == workspace.key; });


        if (existingWorkspace) {
             _.remove(this.workSpaces, function (currentObject) {
                return currentObject.key === existingWorkspace.key;
            });

            _.remove(this.workSpacesHistory, function(n) {
            return n == existingWorkspace.key;
            });
            
            // to last history item.
            let lastkey = this.workSpacesHistory[this.workSpacesHistory.length-1];

            if (lastkey){
               let failback = _.find(this.workSpaces, function (x) { return x.key ==lastkey; });
               if (failback) return failback;
            }


        } else {
           
            // Failure,  workspace does not exist.
        }

    }


    addWorkspace(section, viewmodel, id) {

        // Inactivate all workspaces
        for (let item of this.workSpaces) {
            item.isActive = false;
        }

        // create a new one
        let tempWorkspace = new Workspace(section, viewmodel, id, this);

        // Check it it already exists
        let existingWorkspace = _.find(this.workSpaces, function (x) { return x.key == tempWorkspace.key; });


        if (existingWorkspace) {
            existingWorkspace.isActive = true;
        } else {
            this.workSpaces.push(tempWorkspace);
            this.workSpacesHistory.push(tempWorkspace.key);
        }

    }

}

