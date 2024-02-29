import {list} from '@keystone-6/core';
import {allowAll} from '@keystone-6/core/access';
import {text} from '@keystone-6/core/fields';

export const lists = {
    Option: list({
        access: allowAll,
        fields: {
            name: text({validation: {isRequired: true}}),
            value: text({validation: {isRequired: true}}),
        },
    }),
    Post: list({
        access: allowAll,
        fields: {title: text({validation: {isRequired: true}})},
    }),
};
