import { IsString, IsInt } from "class-validator";

export class CreatMovieDto {

    @IsString()
    title: string;

    @IsInt()
    year: number;
}