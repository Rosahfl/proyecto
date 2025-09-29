
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/servicios"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/contacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 886, hash: '44a4576944658fbffd9cdd8462230909faca359503174ddd137a2e8f1a286597', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1194, hash: '79c9dae1ddbe11111e0c93f4638f5623b51e64c763f346055dfa74c19c3c7e5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 1320, hash: '55b06cb3fa9634f9543c9ca7794970b31319efb41088edbb91612705282ad787', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 1406, hash: 'e30c2397ecb0c26ef50ea2f011d86c78a2034fb92b455ad074afeec4a159431d', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 1273, hash: 'c5ce9bf23cbb8ac3aa9fbb99a96fdbe4c0b07797c46d378a400ff7f51be62c48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AOQDVPMI.css': {size: 376, hash: 'CZDJq9VVhr0', text: () => import('./assets-chunks/styles-AOQDVPMI_css.mjs').then(m => m.default)}
  },
};
