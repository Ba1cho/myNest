import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class MyPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(metadata);
        console.log(value);
        return value;
    }
    
}