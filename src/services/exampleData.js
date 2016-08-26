
export class DataExamples {

    constructor(section, viewmodel, id) {
        this.customers = [];


        this.customers.push({ id: 1, name: "Joe Smith", route:"#/shell/customers/edit/1" });
        this.customers.push({ id: 2, name: "Jane Doe", route:"#/shell/customers/edit/2"});
        this.customers.push({ id: 3, name: "Mark Jones" , route:"#/shell/customers/edit/3"});
        this.customers.push({ id: 4, name: "Erik White", route:"#/shell/customers/edit/4" });
        this.customers.push({ id: 5, name: "Bob Jones", route:"#/shell/customers/edit/5" });

    }


}
