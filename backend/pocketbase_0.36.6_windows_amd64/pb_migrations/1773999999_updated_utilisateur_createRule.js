/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("utilisateur");
  collection.createRule = "";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("utilisateur");
  collection.createRule = null;
  return app.save(collection);
});
