export type FactoryMakeDependencies<Type> = {
    parse: (input: unknown) => Type;
};
