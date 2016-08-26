
import {DataExamples} from '../../services/exampleData';

export class CustomerListing {


    constructor() {
        let newData = new DataExamples();

        this.customers = newData.customers;
    }

    activate(params, routeConfig) {

        this.path = params;

    }


}

