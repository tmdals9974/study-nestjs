import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Document, SchemaOptions, Types } from 'mongoose';
import { catOptions } from 'src/cats/cats.schema';

export const commentsOptions: SchemaOptions = {
  collection: 'comments',
  timestamps: true,
};

@Schema(commentsOptions)
export class Comments extends Document {
  @ApiProperty({
    description: '작성한 고양이 ID',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: catOptions.collection,
  })
  @IsNotEmpty()
  author: Types.ObjectId;

  @ApiProperty({
    description: '댓글 내용',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    description: '좋아요 수',
  })
  @Prop({
    default: 0,
  })
  @IsNotEmpty()
  @IsPositive()
  likeCount: number;

  @ApiProperty({
    description: '작성 대상',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: catOptions.collection,
  })
  @IsNotEmpty()
  info: Types.ObjectId;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
