import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from './comments.create.dto';

@Injectable()
export class CommentsService {
  getAllComments() {
    throw new Error('Method not implemented.');
  }
  createComment(id: string, comments: CommentsCreateDto) {
    throw new Error('Method not implemented.');
  }
  plusLike(id: string) {
    throw new Error('Method not implemented.');
  }
}
