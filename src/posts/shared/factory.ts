import {is} from 'valibot';
import {PostSchema} from '../shared/schema';
import {buildMakePost} from '../domain/factory-builder';

const isValid = (post: unknown) => is(PostSchema, post);

export const makePost = buildMakePost({isValid});
