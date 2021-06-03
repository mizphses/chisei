import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Koudousuru } from '../../components/koudousuru.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyKoudousuru = import('../../components/koudousuru.vue' /* webpackChunkName: "components/koudousuru" */).then(c => wrapFunctional(c.default || c))
