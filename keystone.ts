import {config} from '@keystone-6/core';
import {lists} from './src/keystone/schema';

export default config({
    db: {provider: 'sqlite', url: 'file:./database.db'},
    lists,
});
