import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:'actStatusPipe'
})
export class ActStatusPipe implements PipeTransform{
    transform(status:any):any{
        switch (status) {
            case 1:
                return "UN_PUBLISH";
            case 2:
                return "PUBLISH";
            default:
                return status
        }
    }
}