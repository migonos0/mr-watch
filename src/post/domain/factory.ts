import type {FactoryMakeDependencies} from '../../shared/types/factory-make-dependencies';

export type Post = {
    id: string;
    title: string;
};

export const postFactory = (() => ({
    make:
        ({parse}: FactoryMakeDependencies<Post>) =>
        (post: unknown) => {
            const parsedPost = parse(post);

            return {id: parsedPost.id, title: parsedPost.title};
        },
}))();
