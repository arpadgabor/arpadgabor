/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'arpadgabor',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    new sst.aws.Nuxt('Website', {
      buildCommand: 'pnpm build',
      path: 'www',
    })
  },
})
