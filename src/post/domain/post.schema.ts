import {object, string} from 'valibot';

export const postSchema = object({
    id: string(),
    title: string(),
});
