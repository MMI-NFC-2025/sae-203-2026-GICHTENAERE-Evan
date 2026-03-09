/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "geoPoint2816611703",
    "name": "Localisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // remove field
  collection.fields.removeById("geoPoint2816611703")

  return app.save(collection)
})
