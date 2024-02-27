import {object, string} from 'valibot';

export const PostSchema = object({
    id: string(),
    title: string(),
});
