import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13a78dc8 = () => interopDefault(import('..\\pages\\debug\\index.vue' /* webpackChunkName: "pages/debug/index" */))
const _67a856df = () => interopDefault(import('..\\pages\\debug\\businessAccount\\index.vue' /* webpackChunkName: "pages/debug/businessAccount/index" */))
const _9567aa36 = () => interopDefault(import('..\\pages\\debug\\checkoutSessions\\index.vue' /* webpackChunkName: "pages/debug/checkoutSessions/index" */))
const _2c7d5492 = () => interopDefault(import('..\\pages\\debug\\digitalDollarAccounts\\index.vue' /* webpackChunkName: "pages/debug/digitalDollarAccounts/index" */))
const _5b512537 = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\index.vue' /* webpackChunkName: "pages/debug/paymentIntents/index" */))
const _4c5438c2 = () => interopDefault(import('..\\pages\\debug\\payouts\\index.vue' /* webpackChunkName: "pages/debug/payouts/index" */))
const _cc08151c = () => interopDefault(import('..\\pages\\debug\\wallets\\index.vue' /* webpackChunkName: "pages/debug/wallets/index" */))
const _49151017 = () => interopDefault(import('..\\pages\\flow\\charge\\index.vue' /* webpackChunkName: "pages/flow/charge/index" */))
const _015ded78 = () => interopDefault(import('..\\pages\\debug\\ach\\create.vue' /* webpackChunkName: "pages/debug/ach/create" */))
const _5d758f14 = () => interopDefault(import('..\\pages\\debug\\ach\\details.vue' /* webpackChunkName: "pages/debug/ach/details" */))
const _7a1d3955 = () => interopDefault(import('..\\pages\\debug\\cards\\create.vue' /* webpackChunkName: "pages/debug/cards/create" */))
const _706f6839 = () => interopDefault(import('..\\pages\\debug\\cards\\details.vue' /* webpackChunkName: "pages/debug/cards/details" */))
const _54640c71 = () => interopDefault(import('..\\pages\\debug\\cards\\fetch.vue' /* webpackChunkName: "pages/debug/cards/fetch" */))
const _16dd22a2 = () => interopDefault(import('..\\pages\\debug\\cards\\update.vue' /* webpackChunkName: "pages/debug/cards/update" */))
const _a2860bf8 = () => interopDefault(import('..\\pages\\debug\\chargebacks\\details.vue' /* webpackChunkName: "pages/debug/chargebacks/details" */))
const _3ff194fc = () => interopDefault(import('..\\pages\\debug\\chargebacks\\fetch.vue' /* webpackChunkName: "pages/debug/chargebacks/fetch" */))
const _1bed7c79 = () => interopDefault(import('..\\pages\\debug\\checkoutSessions\\create.vue' /* webpackChunkName: "pages/debug/checkoutSessions/create" */))
const _08a78995 = () => interopDefault(import('..\\pages\\debug\\checkoutSessions\\details.vue' /* webpackChunkName: "pages/debug/checkoutSessions/details" */))
const _5d9a5b97 = () => interopDefault(import('..\\pages\\debug\\checkoutSessions\\extend.vue' /* webpackChunkName: "pages/debug/checkoutSessions/extend" */))
const _c8a65666 = () => interopDefault(import('..\\pages\\debug\\checkoutSessions\\fetch.vue' /* webpackChunkName: "pages/debug/checkoutSessions/fetch" */))
const _3687cc67 = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\create.vue' /* webpackChunkName: "pages/debug/paymentIntents/create" */))
const _00fbc520 = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\createCryptoRefund.vue' /* webpackChunkName: "pages/debug/paymentIntents/createCryptoRefund" */))
const _41573767 = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\details.vue' /* webpackChunkName: "pages/debug/paymentIntents/details" */))
const _99ab41ec = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\expire.vue' /* webpackChunkName: "pages/debug/paymentIntents/expire" */))
const _41b1cf1f = () => interopDefault(import('..\\pages\\debug\\paymentIntents\\fetch.vue' /* webpackChunkName: "pages/debug/paymentIntents/fetch" */))
const _179be121 = () => interopDefault(import('..\\pages\\debug\\payments\\cancel.vue' /* webpackChunkName: "pages/debug/payments/cancel" */))
const _45e43baf = () => interopDefault(import('..\\pages\\debug\\payments\\capture.vue' /* webpackChunkName: "pages/debug/payments/capture" */))
const _0eb37aba = () => interopDefault(import('..\\pages\\debug\\payments\\create.vue' /* webpackChunkName: "pages/debug/payments/create" */))
const _79f0eeaa = () => interopDefault(import('..\\pages\\debug\\payments\\details.vue' /* webpackChunkName: "pages/debug/payments/details" */))
const _a9e4bd3a = () => interopDefault(import('..\\pages\\debug\\payments\\fetch.vue' /* webpackChunkName: "pages/debug/payments/fetch" */))
const _410ce31f = () => interopDefault(import('..\\pages\\debug\\payments\\refund.vue' /* webpackChunkName: "pages/debug/payments/refund" */))
const _eeca4a02 = () => interopDefault(import('..\\pages\\debug\\payouts\\create.vue' /* webpackChunkName: "pages/debug/payouts/create" */))
const _31a5fbcf = () => interopDefault(import('..\\pages\\debug\\payouts\\details.vue' /* webpackChunkName: "pages/debug/payouts/details" */))
const _7f92e4f2 = () => interopDefault(import('..\\pages\\debug\\payouts\\fetch.vue' /* webpackChunkName: "pages/debug/payouts/fetch" */))
const _02a16e11 = () => interopDefault(import('..\\pages\\debug\\returns\\fetch.vue' /* webpackChunkName: "pages/debug/returns/fetch" */))
const _0f9c26a2 = () => interopDefault(import('..\\pages\\debug\\reversals\\fetch.vue' /* webpackChunkName: "pages/debug/reversals/fetch" */))
const _65ae1339 = () => interopDefault(import('..\\pages\\debug\\sepa\\create.vue' /* webpackChunkName: "pages/debug/sepa/create" */))
const _120c6a56 = () => interopDefault(import('..\\pages\\debug\\sepa\\details.vue' /* webpackChunkName: "pages/debug/sepa/details" */))
const _56d30ba2 = () => interopDefault(import('..\\pages\\debug\\sepa\\instructions.vue' /* webpackChunkName: "pages/debug/sepa/instructions" */))
const _8b1ef5dc = () => interopDefault(import('..\\pages\\debug\\settlements\\details.vue' /* webpackChunkName: "pages/debug/settlements/details" */))
const _55888b8a = () => interopDefault(import('..\\pages\\debug\\settlements\\fetch.vue' /* webpackChunkName: "pages/debug/settlements/fetch" */))
const _94616c00 = () => interopDefault(import('..\\pages\\debug\\wires\\create.vue' /* webpackChunkName: "pages/debug/wires/create" */))
const _aa012624 = () => interopDefault(import('..\\pages\\debug\\wires\\details.vue' /* webpackChunkName: "pages/debug/wires/details" */))
const _0ca85dae = () => interopDefault(import('..\\pages\\debug\\wires\\instructions.vue' /* webpackChunkName: "pages/debug/wires/instructions" */))
const _b9699102 = () => interopDefault(import('..\\pages\\flow\\card\\create\\index.vue' /* webpackChunkName: "pages/flow/card/create/index" */))
const _03b3b76a = () => interopDefault(import('..\\pages\\flow\\charge\\existing-card\\index.vue' /* webpackChunkName: "pages/flow/charge/existing-card/index" */))
const _7ae4c359 = () => interopDefault(import('..\\pages\\debug\\ach\\mocks\\create.vue' /* webpackChunkName: "pages/debug/ach/mocks/create" */))
const _9e536902 = () => interopDefault(import('..\\pages\\debug\\beta\\addressBook\\create.vue' /* webpackChunkName: "pages/debug/beta/addressBook/create" */))
const _6f317ea4 = () => interopDefault(import('..\\pages\\debug\\beta\\addressBook\\delete.vue' /* webpackChunkName: "pages/debug/beta/addressBook/delete" */))
const _10d89b4f = () => interopDefault(import('..\\pages\\debug\\beta\\addressBook\\details.vue' /* webpackChunkName: "pages/debug/beta/addressBook/details" */))
const _3ae9e5f2 = () => interopDefault(import('..\\pages\\debug\\beta\\addressBook\\fetch.vue' /* webpackChunkName: "pages/debug/beta/addressBook/fetch" */))
const _0db2af95 = () => interopDefault(import('..\\pages\\debug\\beta\\addressBook\\patch.vue' /* webpackChunkName: "pages/debug/beta/addressBook/patch" */))
const _7face590 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\balances\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/balances/fetch" */))
const _5392a97e = () => interopDefault(import('..\\pages\\debug\\businessAccount\\bankAccounts\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/bankAccounts/create" */))
const _d0f79866 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\bankAccounts\\details.vue' /* webpackChunkName: "pages/debug/businessAccount/bankAccounts/details" */))
const _5f9ead05 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\bankAccounts\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/bankAccounts/fetch" */))
const _c88904ac = () => interopDefault(import('..\\pages\\debug\\businessAccount\\bankAccounts\\instructions.vue' /* webpackChunkName: "pages/debug/businessAccount/bankAccounts/instructions" */))
const _67d80b5c = () => interopDefault(import('..\\pages\\debug\\businessAccount\\deposits\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/deposits/fetch" */))
const _64ff1954 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\payouts\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/payouts/create" */))
const _ed192350 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\payouts\\details.vue' /* webpackChunkName: "pages/debug/businessAccount/payouts/details" */))
const _eebde360 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\payouts\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/payouts/fetch" */))
const _5fadbbaa = () => interopDefault(import('..\\pages\\debug\\businessAccount\\senAccounts\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/senAccounts/create" */))
const _483ecbba = () => interopDefault(import('..\\pages\\debug\\businessAccount\\senAccounts\\details.vue' /* webpackChunkName: "pages/debug/businessAccount/senAccounts/details" */))
const _5f6cb0db = () => interopDefault(import('..\\pages\\debug\\businessAccount\\senAccounts\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/senAccounts/fetch" */))
const _51ef9d14 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\senAccounts\\instructions.vue' /* webpackChunkName: "pages/debug/businessAccount/senAccounts/instructions" */))
const _675ef7f1 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\transfers\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/transfers/create" */))
const _2b657d1d = () => interopDefault(import('..\\pages\\debug\\businessAccount\\transfers\\details.vue' /* webpackChunkName: "pages/debug/businessAccount/transfers/details" */))
const _923beb56 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\transfers\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/transfers/fetch" */))
const _0d7ca267 = () => interopDefault(import('..\\pages\\debug\\chargebacks\\mocks\\create.vue' /* webpackChunkName: "pages/debug/chargebacks/mocks/create" */))
const _130a4530 = () => interopDefault(import('..\\pages\\debug\\marketplace\\merchants\\fetch.vue' /* webpackChunkName: "pages/debug/marketplace/merchants/fetch" */))
const _be053fb0 = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\cancel.vue' /* webpackChunkName: "pages/debug/marketplace/payments/cancel" */))
const _2e9ac4f0 = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\capture.vue' /* webpackChunkName: "pages/debug/marketplace/payments/capture" */))
const _fbf07cac = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\create.vue' /* webpackChunkName: "pages/debug/marketplace/payments/create" */))
const _65d5ea84 = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\details.vue' /* webpackChunkName: "pages/debug/marketplace/payments/details" */))
const _1ce6b508 = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\fetch.vue' /* webpackChunkName: "pages/debug/marketplace/payments/fetch" */))
const _6b233bb4 = () => interopDefault(import('..\\pages\\debug\\marketplace\\payments\\refund.vue' /* webpackChunkName: "pages/debug/marketplace/payments/refund" */))
const _12c6732c = () => interopDefault(import('..\\pages\\debug\\payments\\balances\\fetch.vue' /* webpackChunkName: "pages/debug/payments/balances/fetch" */))
const _ba3b7338 = () => interopDefault(import('..\\pages\\debug\\payments\\crypto\\create.vue' /* webpackChunkName: "pages/debug/payments/crypto/create" */))
const _57c312a8 = () => interopDefault(import('..\\pages\\debug\\payments\\crypto\\presign.vue' /* webpackChunkName: "pages/debug/payments/crypto/presign" */))
const _4242cab2 = () => interopDefault(import('..\\pages\\debug\\payments\\digitalWallets\\paymenttokens.vue' /* webpackChunkName: "pages/debug/payments/digitalWallets/paymenttokens" */))
const _6fb4b8fa = () => interopDefault(import('..\\pages\\debug\\payments\\mocks\\sen.vue' /* webpackChunkName: "pages/debug/payments/mocks/sen" */))
const _e60bdcd6 = () => interopDefault(import('..\\pages\\debug\\payments\\mocks\\sepa.vue' /* webpackChunkName: "pages/debug/payments/mocks/sepa" */))
const _03b9c157 = () => interopDefault(import('..\\pages\\debug\\payments\\mocks\\wire.vue' /* webpackChunkName: "pages/debug/payments/mocks/wire" */))
const _33407e84 = () => interopDefault(import('..\\pages\\debug\\wallets\\addresses\\create.vue' /* webpackChunkName: "pages/debug/wallets/addresses/create" */))
const _ed231830 = () => interopDefault(import('..\\pages\\debug\\wallets\\addresses\\fetch.vue' /* webpackChunkName: "pages/debug/wallets/addresses/fetch" */))
const _ef1b5bf8 = () => interopDefault(import('..\\pages\\debug\\wallets\\transfers\\create.vue' /* webpackChunkName: "pages/debug/wallets/transfers/create" */))
const _2cbd656a = () => interopDefault(import('..\\pages\\debug\\wallets\\transfers\\details.vue' /* webpackChunkName: "pages/debug/wallets/transfers/details" */))
const _1c7cbc3c = () => interopDefault(import('..\\pages\\debug\\wallets\\transfers\\fetch.vue' /* webpackChunkName: "pages/debug/wallets/transfers/fetch" */))
const _5e555eb6 = () => interopDefault(import('..\\pages\\debug\\wallets\\wallets\\create.vue' /* webpackChunkName: "pages/debug/wallets/wallets/create" */))
const _133beef8 = () => interopDefault(import('..\\pages\\debug\\wallets\\wallets\\details.vue' /* webpackChunkName: "pages/debug/wallets/wallets/details" */))
const _c45d9220 = () => interopDefault(import('..\\pages\\debug\\wallets\\wallets\\fetch.vue' /* webpackChunkName: "pages/debug/wallets/wallets/fetch" */))
const _f902d90a = () => interopDefault(import('..\\pages\\debug\\businessAccount\\addresses\\deposit\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/addresses/deposit/create" */))
const _7dfbd58b = () => interopDefault(import('..\\pages\\debug\\businessAccount\\addresses\\deposit\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/addresses/deposit/fetch" */))
const _76ecff94 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\addresses\\recipient\\create.vue' /* webpackChunkName: "pages/debug/businessAccount/addresses/recipient/create" */))
const _77d2e570 = () => interopDefault(import('..\\pages\\debug\\businessAccount\\addresses\\recipient\\fetch.vue' /* webpackChunkName: "pages/debug/businessAccount/addresses/recipient/fetch" */))
const _db05770e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/debug",
    component: _13a78dc8,
    name: "debug"
  }, {
    path: "/debug/businessAccount",
    component: _67a856df,
    name: "debug-businessAccount"
  }, {
    path: "/debug/checkoutSessions",
    component: _9567aa36,
    name: "debug-checkoutSessions"
  }, {
    path: "/debug/digitalDollarAccounts",
    component: _2c7d5492,
    name: "debug-digitalDollarAccounts"
  }, {
    path: "/debug/paymentIntents",
    component: _5b512537,
    name: "debug-paymentIntents"
  }, {
    path: "/debug/payouts",
    component: _4c5438c2,
    name: "debug-payouts"
  }, {
    path: "/debug/wallets",
    component: _cc08151c,
    name: "debug-wallets"
  }, {
    path: "/flow/charge",
    component: _49151017,
    name: "flow-charge"
  }, {
    path: "/debug/ach/create",
    component: _015ded78,
    name: "debug-ach-create"
  }, {
    path: "/debug/ach/details",
    component: _5d758f14,
    name: "debug-ach-details"
  }, {
    path: "/debug/cards/create",
    component: _7a1d3955,
    name: "debug-cards-create"
  }, {
    path: "/debug/cards/details",
    component: _706f6839,
    name: "debug-cards-details"
  }, {
    path: "/debug/cards/fetch",
    component: _54640c71,
    name: "debug-cards-fetch"
  }, {
    path: "/debug/cards/update",
    component: _16dd22a2,
    name: "debug-cards-update"
  }, {
    path: "/debug/chargebacks/details",
    component: _a2860bf8,
    name: "debug-chargebacks-details"
  }, {
    path: "/debug/chargebacks/fetch",
    component: _3ff194fc,
    name: "debug-chargebacks-fetch"
  }, {
    path: "/debug/checkoutSessions/create",
    component: _1bed7c79,
    name: "debug-checkoutSessions-create"
  }, {
    path: "/debug/checkoutSessions/details",
    component: _08a78995,
    name: "debug-checkoutSessions-details"
  }, {
    path: "/debug/checkoutSessions/extend",
    component: _5d9a5b97,
    name: "debug-checkoutSessions-extend"
  }, {
    path: "/debug/checkoutSessions/fetch",
    component: _c8a65666,
    name: "debug-checkoutSessions-fetch"
  }, {
    path: "/debug/paymentIntents/create",
    component: _3687cc67,
    name: "debug-paymentIntents-create"
  }, {
    path: "/debug/paymentIntents/createCryptoRefund",
    component: _00fbc520,
    name: "debug-paymentIntents-createCryptoRefund"
  }, {
    path: "/debug/paymentIntents/details",
    component: _41573767,
    name: "debug-paymentIntents-details"
  }, {
    path: "/debug/paymentIntents/expire",
    component: _99ab41ec,
    name: "debug-paymentIntents-expire"
  }, {
    path: "/debug/paymentIntents/fetch",
    component: _41b1cf1f,
    name: "debug-paymentIntents-fetch"
  }, {
    path: "/debug/payments/cancel",
    component: _179be121,
    name: "debug-payments-cancel"
  }, {
    path: "/debug/payments/capture",
    component: _45e43baf,
    name: "debug-payments-capture"
  }, {
    path: "/debug/payments/create",
    component: _0eb37aba,
    name: "debug-payments-create"
  }, {
    path: "/debug/payments/details",
    component: _79f0eeaa,
    name: "debug-payments-details"
  }, {
    path: "/debug/payments/fetch",
    component: _a9e4bd3a,
    name: "debug-payments-fetch"
  }, {
    path: "/debug/payments/refund",
    component: _410ce31f,
    name: "debug-payments-refund"
  }, {
    path: "/debug/payouts/create",
    component: _eeca4a02,
    name: "debug-payouts-create"
  }, {
    path: "/debug/payouts/details",
    component: _31a5fbcf,
    name: "debug-payouts-details"
  }, {
    path: "/debug/payouts/fetch",
    component: _7f92e4f2,
    name: "debug-payouts-fetch"
  }, {
    path: "/debug/returns/fetch",
    component: _02a16e11,
    name: "debug-returns-fetch"
  }, {
    path: "/debug/reversals/fetch",
    component: _0f9c26a2,
    name: "debug-reversals-fetch"
  }, {
    path: "/debug/sepa/create",
    component: _65ae1339,
    name: "debug-sepa-create"
  }, {
    path: "/debug/sepa/details",
    component: _120c6a56,
    name: "debug-sepa-details"
  }, {
    path: "/debug/sepa/instructions",
    component: _56d30ba2,
    name: "debug-sepa-instructions"
  }, {
    path: "/debug/settlements/details",
    component: _8b1ef5dc,
    name: "debug-settlements-details"
  }, {
    path: "/debug/settlements/fetch",
    component: _55888b8a,
    name: "debug-settlements-fetch"
  }, {
    path: "/debug/wires/create",
    component: _94616c00,
    name: "debug-wires-create"
  }, {
    path: "/debug/wires/details",
    component: _aa012624,
    name: "debug-wires-details"
  }, {
    path: "/debug/wires/instructions",
    component: _0ca85dae,
    name: "debug-wires-instructions"
  }, {
    path: "/flow/card/create",
    component: _b9699102,
    name: "flow-card-create"
  }, {
    path: "/flow/charge/existing-card",
    component: _03b3b76a,
    name: "flow-charge-existing-card"
  }, {
    path: "/debug/ach/mocks/create",
    component: _7ae4c359,
    name: "debug-ach-mocks-create"
  }, {
    path: "/debug/beta/addressBook/create",
    component: _9e536902,
    name: "debug-beta-addressBook-create"
  }, {
    path: "/debug/beta/addressBook/delete",
    component: _6f317ea4,
    name: "debug-beta-addressBook-delete"
  }, {
    path: "/debug/beta/addressBook/details",
    component: _10d89b4f,
    name: "debug-beta-addressBook-details"
  }, {
    path: "/debug/beta/addressBook/fetch",
    component: _3ae9e5f2,
    name: "debug-beta-addressBook-fetch"
  }, {
    path: "/debug/beta/addressBook/patch",
    component: _0db2af95,
    name: "debug-beta-addressBook-patch"
  }, {
    path: "/debug/businessAccount/balances/fetch",
    component: _7face590,
    name: "debug-businessAccount-balances-fetch"
  }, {
    path: "/debug/businessAccount/bankAccounts/create",
    component: _5392a97e,
    name: "debug-businessAccount-bankAccounts-create"
  }, {
    path: "/debug/businessAccount/bankAccounts/details",
    component: _d0f79866,
    name: "debug-businessAccount-bankAccounts-details"
  }, {
    path: "/debug/businessAccount/bankAccounts/fetch",
    component: _5f9ead05,
    name: "debug-businessAccount-bankAccounts-fetch"
  }, {
    path: "/debug/businessAccount/bankAccounts/instructions",
    component: _c88904ac,
    name: "debug-businessAccount-bankAccounts-instructions"
  }, {
    path: "/debug/businessAccount/deposits/fetch",
    component: _67d80b5c,
    name: "debug-businessAccount-deposits-fetch"
  }, {
    path: "/debug/businessAccount/payouts/create",
    component: _64ff1954,
    name: "debug-businessAccount-payouts-create"
  }, {
    path: "/debug/businessAccount/payouts/details",
    component: _ed192350,
    name: "debug-businessAccount-payouts-details"
  }, {
    path: "/debug/businessAccount/payouts/fetch",
    component: _eebde360,
    name: "debug-businessAccount-payouts-fetch"
  }, {
    path: "/debug/businessAccount/senAccounts/create",
    component: _5fadbbaa,
    name: "debug-businessAccount-senAccounts-create"
  }, {
    path: "/debug/businessAccount/senAccounts/details",
    component: _483ecbba,
    name: "debug-businessAccount-senAccounts-details"
  }, {
    path: "/debug/businessAccount/senAccounts/fetch",
    component: _5f6cb0db,
    name: "debug-businessAccount-senAccounts-fetch"
  }, {
    path: "/debug/businessAccount/senAccounts/instructions",
    component: _51ef9d14,
    name: "debug-businessAccount-senAccounts-instructions"
  }, {
    path: "/debug/businessAccount/transfers/create",
    component: _675ef7f1,
    name: "debug-businessAccount-transfers-create"
  }, {
    path: "/debug/businessAccount/transfers/details",
    component: _2b657d1d,
    name: "debug-businessAccount-transfers-details"
  }, {
    path: "/debug/businessAccount/transfers/fetch",
    component: _923beb56,
    name: "debug-businessAccount-transfers-fetch"
  }, {
    path: "/debug/chargebacks/mocks/create",
    component: _0d7ca267,
    name: "debug-chargebacks-mocks-create"
  }, {
    path: "/debug/marketplace/merchants/fetch",
    component: _130a4530,
    name: "debug-marketplace-merchants-fetch"
  }, {
    path: "/debug/marketplace/payments/cancel",
    component: _be053fb0,
    name: "debug-marketplace-payments-cancel"
  }, {
    path: "/debug/marketplace/payments/capture",
    component: _2e9ac4f0,
    name: "debug-marketplace-payments-capture"
  }, {
    path: "/debug/marketplace/payments/create",
    component: _fbf07cac,
    name: "debug-marketplace-payments-create"
  }, {
    path: "/debug/marketplace/payments/details",
    component: _65d5ea84,
    name: "debug-marketplace-payments-details"
  }, {
    path: "/debug/marketplace/payments/fetch",
    component: _1ce6b508,
    name: "debug-marketplace-payments-fetch"
  }, {
    path: "/debug/marketplace/payments/refund",
    component: _6b233bb4,
    name: "debug-marketplace-payments-refund"
  }, {
    path: "/debug/payments/balances/fetch",
    component: _12c6732c,
    name: "debug-payments-balances-fetch"
  }, {
    path: "/debug/payments/crypto/create",
    component: _ba3b7338,
    name: "debug-payments-crypto-create"
  }, {
    path: "/debug/payments/crypto/presign",
    component: _57c312a8,
    name: "debug-payments-crypto-presign"
  }, {
    path: "/debug/payments/digitalWallets/paymenttokens",
    component: _4242cab2,
    name: "debug-payments-digitalWallets-paymenttokens"
  }, {
    path: "/debug/payments/mocks/sen",
    component: _6fb4b8fa,
    name: "debug-payments-mocks-sen"
  }, {
    path: "/debug/payments/mocks/sepa",
    component: _e60bdcd6,
    name: "debug-payments-mocks-sepa"
  }, {
    path: "/debug/payments/mocks/wire",
    component: _03b9c157,
    name: "debug-payments-mocks-wire"
  }, {
    path: "/debug/wallets/addresses/create",
    component: _33407e84,
    name: "debug-wallets-addresses-create"
  }, {
    path: "/debug/wallets/addresses/fetch",
    component: _ed231830,
    name: "debug-wallets-addresses-fetch"
  }, {
    path: "/debug/wallets/transfers/create",
    component: _ef1b5bf8,
    name: "debug-wallets-transfers-create"
  }, {
    path: "/debug/wallets/transfers/details",
    component: _2cbd656a,
    name: "debug-wallets-transfers-details"
  }, {
    path: "/debug/wallets/transfers/fetch",
    component: _1c7cbc3c,
    name: "debug-wallets-transfers-fetch"
  }, {
    path: "/debug/wallets/wallets/create",
    component: _5e555eb6,
    name: "debug-wallets-wallets-create"
  }, {
    path: "/debug/wallets/wallets/details",
    component: _133beef8,
    name: "debug-wallets-wallets-details"
  }, {
    path: "/debug/wallets/wallets/fetch",
    component: _c45d9220,
    name: "debug-wallets-wallets-fetch"
  }, {
    path: "/debug/businessAccount/addresses/deposit/create",
    component: _f902d90a,
    name: "debug-businessAccount-addresses-deposit-create"
  }, {
    path: "/debug/businessAccount/addresses/deposit/fetch",
    component: _7dfbd58b,
    name: "debug-businessAccount-addresses-deposit-fetch"
  }, {
    path: "/debug/businessAccount/addresses/recipient/create",
    component: _76ecff94,
    name: "debug-businessAccount-addresses-recipient-create"
  }, {
    path: "/debug/businessAccount/addresses/recipient/fetch",
    component: _77d2e570,
    name: "debug-businessAccount-addresses-recipient-fetch"
  }, {
    path: "/",
    component: _db05770e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
