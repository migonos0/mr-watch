import type {Post} from '../domain/post';

export type PostsRepository = {
    findAll: () => Promise<Post[]>;
};
