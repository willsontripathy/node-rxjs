import {Router} from 'express';
import {map, tap} from 'rxjs/operators';

import { employees, getEmployeeByID } from '../controller/employee.controller';
import {IEmployee} from '../models/employee.model';

const router = Router();

router.get('/',(req, res, next) => {
    employees().pipe(
        tap(emp => console.log(emp)),
        map((emp: IEmployee[]) => emp.filter(e => e.Gender === 'Male'))
    ).subscribe((data: IEmployee[]) => {
        res.send(data);
    })
})

router.get('/:id', (req,res,next) => {
    const id = +req.params.id;
    getEmployeeByID(id).subscribe(data => {
        res.send(data);
    });
})
export default router;