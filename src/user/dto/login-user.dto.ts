import { IsNotEmpty } from 'class-validator';
import {ApiModelProperty} from "@nestjs/swagger";

export class LoginUserDto {

  @IsNotEmpty()
  readonly email: string;
  
  @IsNotEmpty()
  readonly password: string;
}
