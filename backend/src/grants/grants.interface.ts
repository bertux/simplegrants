import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export enum GrantSortOptions {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  MOST_FUNDED = 'most_funded',
  MOST_BACKED = 'most_backed',
}

export class GetGrantQueryDto {
  @ApiProperty({
    enum: GrantSortOptions,
  })
  @IsEnum(GrantSortOptions)
  @IsOptional()
  sort?: string;

  // @ApiProperty({
  //   enum: GrantFilterOptions,
  // })
  // @IsEnum(GrantFilterOptions)
  @IsString()
  @IsOptional()
  filter?: string;
}

export class GetGrantDto {
  isVerified?: boolean;
  sort?: string;
  filter?: string;
}

export class UpdateGrantDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  location: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  twitter: string;

  @ApiProperty({
    type: String,
  })
  @IsUrl()
  website: string;

  @ApiProperty({
    type: String,
  })
  @IsUrl()
  image: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  description: string;
}

export class CreateGrantDto extends UpdateGrantDto {
  @ApiProperty({
    type: Number,
  })
  @IsPositive()
  fundingGoal: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  paymentAccount: string;
}

export class GetGrantResponse {
  @ApiResponseProperty({
    type: String,
  })
  id: string;

  @ApiResponseProperty({
    type: String,
  })
  name: string;

  @ApiResponseProperty({
    type: String,
  })
  description: string;

  @ApiResponseProperty({
    type: String,
  })
  image: string;

  @ApiResponseProperty({
    type: String,
  })
  twitter: string;

  @ApiResponseProperty({
    type: String,
  })
  website: string;

  @ApiResponseProperty({
    type: String,
  })
  location: string;

  @ApiResponseProperty({
    type: String,
  })
  paymentAccountId: string;

  @ApiResponseProperty({
    type: Number,
  })
  fundingGoal: number;

  @ApiResponseProperty({
    type: Boolean,
  })
  verified: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  createdAt: Date;

  @ApiResponseProperty({
    type: Date,
  })
  updatedAt: Date;
}
