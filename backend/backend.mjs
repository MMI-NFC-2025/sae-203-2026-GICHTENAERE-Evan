import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

//celui du bas foncitonne bien
export async function allArtistesSortedByDate() {
  const records = await pb.collection('artiste').getFullList({
    sort: 'date_representation',
  });
  return records;
}

export async function allArtistesSortedByDateWithScene() {
  const records = await pb.collection('artiste').getFullList({
    sort: 'date_representation',
    expand: 'scene',
  });
  return records;
}
// au dessus c'est la liste des artistes triés par date, on peut les afficher dans le frontend en utilisant cette fonction.
//fonctionne en bas 
export async function allScenesSorted() {
  const records = await pb.collection('scene').getFullList({
    sort: 'nom_scene'
  });
  return records;
}

//fonctionne en bas
export async function allArtistes() {

  const records = await pb.collection('artiste').getFullList({
    sort: 'nom_artiste',
  });
    return records;
}
//fonction aussi en bas
export async function getArtisteById(id) {
  const record = await pb.collection('artiste').getOne(id);
  return record;
}

export async function getArtisteByIdWithScene(id) {
  const record = await pb.collection('artiste').getOne(id, {
    expand: 'scene',
  });
  return record;
}
//fonctionne aussi en bas
export async function getSceneById(id) {
  const record = await pb.collection('scene').getOne(id);
  return record;
}


//juste fonctionne
export async function artistesBySceneId(Id) {
  const records = await pb.collection('artiste').getFullList({
    filter: `scene.id="${Id}"`,
    sort: 'date_representation',
  });
  return records;
}

//juste fonctionne 
export async function artistesBySceneName(nom_scene) {
  const records = await pb.collection('artiste').getFullList({
    filter: `scene.nom_scene="${nom_scene}"`,
    sort: 'date_representation'
  });
  return records;
}

// fonction ajouter un artiste

export async function addArtiste(newArtiste) {
    try {
        const result = await pb.collection('artiste').create(newArtiste);
        return result;
    } catch (error) {
        console.error("Erreur lors de la création de l'artiste :", error);
        throw error;
    }
}
 //fonctionne ajout d'une scène 
export async function addScene(newScene) {
    try {
        const result = await pb.collection('scene').create(newScene);
        return result;
    } catch (error) {
        console.error("Erreur lors de la création de la scène :", error);
        throw error;
    }
}
//ca fonctionne egalement 
export async function updateArtiste(id, data) {
    try {
        const result = await pb.collection('artiste').update(id, data);
        return result;
    } catch (error) {
        console.error("Erreur lors de la modification de l'artiste :", error);
        throw error;
    }
}

export async function updateScene(id, data) {
    try {
        const result = await pb.collection('scene').update(id, data);
        return result;
    } catch (error) {
        console.error("Erreur lors de la modification de la scène :", error);
        throw error;
    }
}