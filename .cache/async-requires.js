// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-download-js": () => import("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/download.js" /* webpackChunkName: "component---src-pages-download-js" */),
  "component---src-pages-index-js": () => import("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-role-js": () => import("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/role.js" /* webpackChunkName: "component---src-pages-role-js" */),
  "component---src-pages-story-js": () => import("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/story.js" /* webpackChunkName: "component---src-pages-story-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/asd741/Documents/projects/MonsterPetriDish_2.0/.cache/data.json")

