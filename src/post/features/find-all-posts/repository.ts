import {keystoneContext} from '../../../keystone/context';
import type {Post} from '../../domain/factory';
import {post} from '../../post';

export const keystoneFindAllPostsRepository = (() => ({
    findAll: async () =>
        (
            await keystoneContext.query.Post.findMany({
                query: 'id title',
            })
        ).map((post2) => post.make(post2 as Post)),
}))();
