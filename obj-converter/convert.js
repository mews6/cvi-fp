const obj2gltf = require("obj2gltf");
const fs = require("fs");
obj2gltf("005_Foliage_OBJ/005_Foliage_OBJ.obj").then(function (gltf) {
  const data = Buffer.from(JSON.stringify(gltf));
  fs.writeFileSync("model.gltf", data);
});