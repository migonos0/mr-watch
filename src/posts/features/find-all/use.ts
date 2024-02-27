import {makeKeystonePostsRepository} from '../../shared/keystone.repository';
import {makeFindAllPostsUseCase} from './use-case';

export const usePosts = async () => {
    const repo = makeKeystonePostsRepository();
    const useCase = makeFindAllPostsUseCase(repo);
    return await useCase();
};
