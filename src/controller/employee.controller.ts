import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {IEmployee} from '../models/employee.model';

const employee: IEmployee[] = [
    {ID:1,Name:'Ramakanta',Gender:'Male'},
    {ID:2,Name:'Jayanti',Gender:'Female'},
    {ID:3,Name:'Nelson',Gender:'Male'},
    {ID:4,Name:'Manoja',Gender:'Female'},
    {ID:5,Name:'Willson',Gender:'Male'}
];

export const employees = (): Observable<IEmployee[]> =>{
    return of(employee);
}

export const getEmployeeByID = (ID: number): Observable<IEmployee[]> => {
    return of(employee).pipe(
        map((emp: IEmployee[]) => {
            return emp.filter(em => em.ID === ID);
        })
    )
}