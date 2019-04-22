import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class OperationDBService implements InMemoryDbService{
    createDb() {
        const operations = [
            'apply' ,
            'add' ,
            'multiply'
        ];
        return {operations};
    }
}
