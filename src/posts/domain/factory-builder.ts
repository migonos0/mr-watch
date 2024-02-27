import type {Post} from './post';

type Dependencies = {
    isValid: (post: Post) => boolean;
};

export const buildMakePost =
    ({isValid}: Dependencies) =>
    (post: Post) => {
        if (!isValid(post)) {
            throw new Error('The given parameters are invalid.');
        }
        return {...post};
    };
