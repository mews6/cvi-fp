const obj2gltf = require("obj2gltf");
const fs = require("fs");
const options = {
  binary: true,
};
obj2gltf("005_Foliage_OBJ/005_Foliage_OBJ.obj", options).then(function (glb) {
  fs.writeFileSync("../assets/models/005_Foliage_OBJ/model.glb", glb);
});