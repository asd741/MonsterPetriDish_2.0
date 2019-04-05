const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/404.js"))),
  "component---src-pages-download-js": hot(preferDefault(require("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/download.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/index.js"))),
  "component---src-pages-role-js": hot(preferDefault(require("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/role.js"))),
  "component---src-pages-story-js": hot(preferDefault(require("/Users/asd741/Documents/projects/MonsterPetriDish_2.0/src/pages/story.js")))
}

