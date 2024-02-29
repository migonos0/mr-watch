import type {Post} from '../../domain/factory';

type MakeDependencies = {
    repository: {findAll: () => Promise<Post[]>};
};
export const findAllPostsUseCase = (() => ({
    make: ({repository}: MakeDependencies) => ({
        execute: () => repository.findAll(),
    }),
}))();
