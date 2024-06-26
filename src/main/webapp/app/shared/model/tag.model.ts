import { type IPost } from '@/shared/model/post.model';

export interface ITag {
  id?: number;
  name?: string;
  posts?: IPost[] | null;
}

export class Tag implements ITag {
  constructor(
    public id?: number,
    public name?: string,
    public posts?: IPost[] | null,
  ) {}
}
