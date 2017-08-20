import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'trueBirthday'})
export class birthdayPipe implements  PipeTransform {
  transform(value: string): string{
    const end = value.indexOf('T');
    const truebirthday = value.substring(0,end);
    return truebirthday;
  }
}
