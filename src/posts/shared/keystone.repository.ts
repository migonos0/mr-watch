import {keystoneContext} from '../../keystone/context';
import {makePost} from './factory';
import type {PostsRepository} from './repository';

export const makeKeystonePostsRepository = (): PostsRepository => ({
    async findAll() {
        return (
            await keystoneContext.query.Post.findMany({
                query: 'id title',
            })
        ).map((post) => makePost({id: post.id, title: post.title}));
    },
});
