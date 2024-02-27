import type {Post} from './post';

type factoryBuildDependencies = {
    isValid: (post: Post) => boolean;
};

export const buildMakePost =
    ({isValid}: factoryBuildDependencies) =>
    (post: Post): Post => {
        if (!isValid(post)) {
            throw new Error('The given parameters are invalid.');
        }
        return {...post};
    };
