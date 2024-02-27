import type {PostsRepository} from '../../shared/repository';

export const makeFindAllPostsUseCase = (repository: PostsRepository) => () =>
    repository.findAll();
