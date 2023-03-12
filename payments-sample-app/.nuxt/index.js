import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_97e82fa0 from 'nuxt_plugin_plugin_97e82fa0' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_paymentsApi_65594677 from 'nuxt_plugin_paymentsApi_65594677' // Source: ..\\plugins\\paymentsApi (mode: 'all')
import nuxt_plugin_cardsApi_1ab1fda6 from 'nuxt_plugin_cardsApi_1ab1fda6' // Source: ..\\plugins\\cardsApi (mode: 'all')
import nuxt_plugin_marketplaceApi_af03b676 from 'nuxt_plugin_marketplaceApi_af03b676' // Source: ..\\plugins\\marketplaceApi (mode: 'all')
import nuxt_plugin_chargebacksApi_331a85b8 from 'nuxt_plugin_chargebacksApi_331a85b8' // Source: ..\\plugins\\chargebacksApi (mode: 'all')
import nuxt_plugin_settlementsApi_645fea46 from 'nuxt_plugin_settlementsApi_645fea46' // Source: ..\\plugins\\settlementsApi (mode: 'all')
import nuxt_plugin_walletsApi_1d7eb816 from 'nuxt_plugin_walletsApi_1d7eb816' // Source: ..\\plugins\\walletsApi (mode: 'all')
import nuxt_plugin_transfersApi_3a94a4f0 from 'nuxt_plugin_transfersApi_3a94a4f0' // Source: ..\\plugins\\transfersApi (mode: 'all')
import nuxt_plugin_addressesApi_727fe58e from 'nuxt_plugin_addressesApi_727fe58e' // Source: ..\\plugins\\addressesApi (mode: 'all')
import nuxt_plugin_payoutsApi_6fec2343 from 'nuxt_plugin_payoutsApi_6fec2343' // Source: ..\\plugins\\payoutsApi (mode: 'all')
import nuxt_plugin_paymentIntentsApi_54060f33 from 'nuxt_plugin_paymentIntentsApi_54060f33' // Source: ..\\plugins\\paymentIntentsApi (mode: 'all')
import nuxt_plugin_wiresApi_910317bc from 'nuxt_plugin_wiresApi_910317bc' // Source: ..\\plugins\\wiresApi (mode: 'all')
import nuxt_plugin_sepaApi_5cecab21 from 'nuxt_plugin_sepaApi_5cecab21' // Source: ..\\plugins\\sepaApi (mode: 'all')
import nuxt_plugin_achApi_79c0c2ac from 'nuxt_plugin_achApi_79c0c2ac' // Source: ..\\plugins\\achApi (mode: 'all')
import nuxt_plugin_mocksApi_66581ab2 from 'nuxt_plugin_mocksApi_66581ab2' // Source: ..\\plugins\\mocksApi (mode: 'all')
import nuxt_plugin_addressesApi_4927b3e0 from 'nuxt_plugin_addressesApi_4927b3e0' // Source: ..\\plugins\\businessAccount\\addressesApi (mode: 'all')
import nuxt_plugin_balancesApi_811060ea from 'nuxt_plugin_balancesApi_811060ea' // Source: ..\\plugins\\businessAccount\\balancesApi (mode: 'all')
import nuxt_plugin_bankAccountsApi_eb018b00 from 'nuxt_plugin_bankAccountsApi_eb018b00' // Source: ..\\plugins\\businessAccount\\bankAccountsApi (mode: 'all')
import nuxt_plugin_senAccountsApi_6ae66960 from 'nuxt_plugin_senAccountsApi_6ae66960' // Source: ..\\plugins\\businessAccount\\senAccountsApi (mode: 'all')
import nuxt_plugin_depositsApi_654e7366 from 'nuxt_plugin_depositsApi_654e7366' // Source: ..\\plugins\\businessAccount\\depositsApi (mode: 'all')
import nuxt_plugin_payoutsApi_68929c45 from 'nuxt_plugin_payoutsApi_68929c45' // Source: ..\\plugins\\businessAccount\\payoutsApi (mode: 'all')
import nuxt_plugin_transfersApi_4ba1ee0a from 'nuxt_plugin_transfersApi_4ba1ee0a' // Source: ..\\plugins\\businessAccount\\transfersApi (mode: 'all')
import nuxt_plugin_cryptoPaymentMetadataApi_d809dac8 from 'nuxt_plugin_cryptoPaymentMetadataApi_d809dac8' // Source: ..\\plugins\\cryptoPaymentMetadataApi (mode: 'all')
import nuxt_plugin_cryptoPaymentsApi_5b8feb76 from 'nuxt_plugin_cryptoPaymentsApi_5b8feb76' // Source: ..\\plugins\\cryptoPaymentsApi (mode: 'all')
import nuxt_plugin_addressBookApi_5fb176a6 from 'nuxt_plugin_addressBookApi_5fb176a6' // Source: ..\\plugins\\beta\\addressBookApi (mode: 'all')
import nuxt_plugin_checkoutSessionsApi_46f3d7e1 from 'nuxt_plugin_checkoutSessionsApi_46f3d7e1' // Source: ..\\plugins\\checkoutSessionsApi (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - payments-sample-app","title":"payments-sample-app","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Sample App for Payments API"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fpay.google.com\u002Fgp\u002Fp\u002Fjs\u002Fpay.js","async":true,"defer":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_97e82fa0 === 'function') {
    await nuxt_plugin_plugin_97e82fa0(app.context, inject)
  }

  if (typeof nuxt_plugin_paymentsApi_65594677 === 'function') {
    await nuxt_plugin_paymentsApi_65594677(app.context, inject)
  }

  if (typeof nuxt_plugin_cardsApi_1ab1fda6 === 'function') {
    await nuxt_plugin_cardsApi_1ab1fda6(app.context, inject)
  }

  if (typeof nuxt_plugin_marketplaceApi_af03b676 === 'function') {
    await nuxt_plugin_marketplaceApi_af03b676(app.context, inject)
  }

  if (typeof nuxt_plugin_chargebacksApi_331a85b8 === 'function') {
    await nuxt_plugin_chargebacksApi_331a85b8(app.context, inject)
  }

  if (typeof nuxt_plugin_settlementsApi_645fea46 === 'function') {
    await nuxt_plugin_settlementsApi_645fea46(app.context, inject)
  }

  if (typeof nuxt_plugin_walletsApi_1d7eb816 === 'function') {
    await nuxt_plugin_walletsApi_1d7eb816(app.context, inject)
  }

  if (typeof nuxt_plugin_transfersApi_3a94a4f0 === 'function') {
    await nuxt_plugin_transfersApi_3a94a4f0(app.context, inject)
  }

  if (typeof nuxt_plugin_addressesApi_727fe58e === 'function') {
    await nuxt_plugin_addressesApi_727fe58e(app.context, inject)
  }

  if (typeof nuxt_plugin_payoutsApi_6fec2343 === 'function') {
    await nuxt_plugin_payoutsApi_6fec2343(app.context, inject)
  }

  if (typeof nuxt_plugin_paymentIntentsApi_54060f33 === 'function') {
    await nuxt_plugin_paymentIntentsApi_54060f33(app.context, inject)
  }

  if (typeof nuxt_plugin_wiresApi_910317bc === 'function') {
    await nuxt_plugin_wiresApi_910317bc(app.context, inject)
  }

  if (typeof nuxt_plugin_sepaApi_5cecab21 === 'function') {
    await nuxt_plugin_sepaApi_5cecab21(app.context, inject)
  }

  if (typeof nuxt_plugin_achApi_79c0c2ac === 'function') {
    await nuxt_plugin_achApi_79c0c2ac(app.context, inject)
  }

  if (typeof nuxt_plugin_mocksApi_66581ab2 === 'function') {
    await nuxt_plugin_mocksApi_66581ab2(app.context, inject)
  }

  if (typeof nuxt_plugin_addressesApi_4927b3e0 === 'function') {
    await nuxt_plugin_addressesApi_4927b3e0(app.context, inject)
  }

  if (typeof nuxt_plugin_balancesApi_811060ea === 'function') {
    await nuxt_plugin_balancesApi_811060ea(app.context, inject)
  }

  if (typeof nuxt_plugin_bankAccountsApi_eb018b00 === 'function') {
    await nuxt_plugin_bankAccountsApi_eb018b00(app.context, inject)
  }

  if (typeof nuxt_plugin_senAccountsApi_6ae66960 === 'function') {
    await nuxt_plugin_senAccountsApi_6ae66960(app.context, inject)
  }

  if (typeof nuxt_plugin_depositsApi_654e7366 === 'function') {
    await nuxt_plugin_depositsApi_654e7366(app.context, inject)
  }

  if (typeof nuxt_plugin_payoutsApi_68929c45 === 'function') {
    await nuxt_plugin_payoutsApi_68929c45(app.context, inject)
  }

  if (typeof nuxt_plugin_transfersApi_4ba1ee0a === 'function') {
    await nuxt_plugin_transfersApi_4ba1ee0a(app.context, inject)
  }

  if (typeof nuxt_plugin_cryptoPaymentMetadataApi_d809dac8 === 'function') {
    await nuxt_plugin_cryptoPaymentMetadataApi_d809dac8(app.context, inject)
  }

  if (typeof nuxt_plugin_cryptoPaymentsApi_5b8feb76 === 'function') {
    await nuxt_plugin_cryptoPaymentsApi_5b8feb76(app.context, inject)
  }

  if (typeof nuxt_plugin_addressBookApi_5fb176a6 === 'function') {
    await nuxt_plugin_addressBookApi_5fb176a6(app.context, inject)
  }

  if (typeof nuxt_plugin_checkoutSessionsApi_46f3d7e1 === 'function') {
    await nuxt_plugin_checkoutSessionsApi_46f3d7e1(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
