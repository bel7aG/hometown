const withTM = require('next-transpile-modules')(
  ['@react-three/drei', 'three', '@react-spring/three', '@react-spring/web', 'react-three-fiber'],
  { unstable_webpack5: true } // symlink-caused loops which cause memory to get bloated exponentially.
)

module.exports = withTM({
  webpack(config) {
    config.resolve.modules.push(`${__dirname}/src`)

    config.module.rules.push(
      { test: /react-spring/, sideEffects: true } // prevent vercel to crash when deploy
    )

    return { ...config }
  }
})
