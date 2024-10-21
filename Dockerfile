# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM imbios/bun-node:latest-hydrogen-alpine AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
COPY packages /temp/dev/packages
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
COPY packages /temp/prod/packages
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
ARG BACKEND_BASE_PATH
ENV BASE_PATH=$BACKEND_BASE_PATH
RUN bun run --filter dark build
RUN bun run --filter dark postinstall
RUN bun run --filter light build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/packages packages
COPY --from=prerelease /usr/src/app/package.json .

FROM release AS backend
# exposing the default port
EXPOSE 3000
CMD ["bun", "run", "--filter", "dark", "start"]

FROM release AS frontend
ENV HOST=0.0.0.0
# setting and exposing the default port
ENV PORT=4321
EXPOSE 4321
CMD [ "bun", "packages/light/dist/server/entry.mjs" ]