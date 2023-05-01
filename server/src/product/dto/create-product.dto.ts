import { IsNotEmpty, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsOptional()
  SellerName: string;

  @IsOptional()
  @ApiProperty({
    type: String,
  })
  Seller: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  Images: [];

  @ApiProperty()
  @IsNotEmpty()
  Name: string;

  @ApiProperty()
  @IsNumber()
  Price: number;
}
