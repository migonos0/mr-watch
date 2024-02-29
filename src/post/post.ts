import {parse} from 'valibot';
import {postSchema} from './domain/schema';
import {findAllPostsUseCase} from './features/find-all-posts/use-case';
import {postFactory} from './domain/factory';
import {keystoneFindAllPostsRepository as repository} from './features/find-all-posts/repository';

export const post = (() => {
    const parsePost = (post: unknown) => parse(postSchema, post);
    const makePost = postFactory.make({parse: parsePost});

    const findAllUseCase = findAllPostsUseCase.make({
        repository,
    });

    return {
        make: makePost,
        findAll: findAllUseCase.execute,
    };
})();
