import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bx7KCepd.mjs';
import { manifest } from './manifest_BdVFwqXX.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page4 = () => import('./pages/codyroby/codyroby-gigante.astro.mjs');
const _page5 = () => import('./pages/codyroby/giochi/il-duello.astro.mjs');
const _page6 = () => import('./pages/codyroby/giochi/la-corsa.astro.mjs');
const _page7 = () => import('./pages/codyroby/giochi/la-turista.astro.mjs');
const _page8 = () => import('./pages/codyroby/giochi/seguimi.astro.mjs');
const _page9 = () => import('./pages/codyroby.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/dove-acquistare.astro.mjs');
const _page12 = () => import('./pages/giochi-unplugged/codycolor.astro.mjs');
const _page13 = () => import('./pages/giochi-unplugged/codyfeet.astro.mjs');
const _page14 = () => import('./pages/giochi-unplugged/codymaze.astro.mjs');
const _page15 = () => import('./pages/giochi-unplugged/codyway.astro.mjs');
const _page16 = () => import('./pages/home.astro.mjs');
const _page17 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page18 = () => import('./pages/homes/personal.astro.mjs');
const _page19 = () => import('./pages/homes/saas.astro.mjs');
const _page20 = () => import('./pages/homes/startup.astro.mjs');
const _page21 = () => import('./pages/landing/click-through.astro.mjs');
const _page22 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page23 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page24 = () => import('./pages/landing/product.astro.mjs');
const _page25 = () => import('./pages/landing/sales.astro.mjs');
const _page26 = () => import('./pages/landing/subscription.astro.mjs');
const _page27 = () => import('./pages/pricing.astro.mjs');
const _page28 = () => import('./pages/privacy.astro.mjs');
const _page29 = () => import('./pages/rss.xml.astro.mjs');
const _page30 = () => import('./pages/services.astro.mjs');
const _page31 = () => import('./pages/terms.astro.mjs');
const _page32 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page33 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page34 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page35 = () => import('./pages/index.astro.mjs');
const _page36 = () => import('./pages/_---blog_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/sendEmail.json.ts", _page3],
    ["src/pages/codyroby/codyroby-gigante.astro", _page4],
    ["src/pages/codyroby/giochi/il-duello.astro", _page5],
    ["src/pages/codyroby/giochi/la-corsa.astro", _page6],
    ["src/pages/codyroby/giochi/la-turista.astro", _page7],
    ["src/pages/codyroby/giochi/seguimi.astro", _page8],
    ["src/pages/codyroby/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/dove-acquistare.astro", _page11],
    ["src/pages/giochi-unplugged/codycolor.astro", _page12],
    ["src/pages/giochi-unplugged/codyfeet.astro", _page13],
    ["src/pages/giochi-unplugged/codymaze.astro", _page14],
    ["src/pages/giochi-unplugged/codyway.astro", _page15],
    ["src/pages/home.astro", _page16],
    ["src/pages/homes/mobile-app.astro", _page17],
    ["src/pages/homes/personal.astro", _page18],
    ["src/pages/homes/saas.astro", _page19],
    ["src/pages/homes/startup.astro", _page20],
    ["src/pages/landing/click-through.astro", _page21],
    ["src/pages/landing/lead-generation.astro", _page22],
    ["src/pages/landing/pre-launch.astro", _page23],
    ["src/pages/landing/product.astro", _page24],
    ["src/pages/landing/sales.astro", _page25],
    ["src/pages/landing/subscription.astro", _page26],
    ["src/pages/pricing.astro", _page27],
    ["src/pages/privacy.md", _page28],
    ["src/pages/rss.xml.ts", _page29],
    ["src/pages/services.astro", _page30],
    ["src/pages/terms.md", _page31],
    ["src/pages/[...blog]/[category]/[...page].astro", _page32],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page33],
    ["src/pages/[...blog]/[...page].astro", _page34],
    ["src/pages/index.astro", _page35],
    ["src/pages/[...blog]/index.astro", _page36]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/runner/work/CodyRoby-Website/CodyRoby-Website/dist/client/",
    "server": "file:///home/runner/work/CodyRoby-Website/CodyRoby-Website/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
