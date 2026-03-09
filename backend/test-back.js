import { allArtistesSortedByDate , artistesBySceneId, allArtistes, getArtisteById, artistesBySceneName, getSceneById, allScenesSorted, addArtiste, addScene, updateArtiste, updateScene} from './backend.mjs';

/*
try {
  const artistes = await artistesBySceneId('atre9rwcc96fk9g');
  console.log(artistes);
}catch (error) {
  console.error(error);
}  

  /*try {
    const artistes = await artistesBySceneName('Scène Nord');
    console.log(artistes);
  }catch (error) {
    console.error(error);
  } 

try {
    const scene = await getSceneById('atre9rwcc96fk9g');
    console.log(scene);
  }catch (error) {
    console.error(error);
  } 

try {    
    const scene = await allScenesSorted();
    console.log(scene);
  }catch (error) {
    console.error(error);
  }

try {
    const artistes = await allArtistesSortedByDate();
    console.log(artistes);
  }catch (error) {
    console.error(error);
  }

try {
    const artistes = await allArtistes();
    console.log(artistes);
  }catch (error) {
    console.error(error);
  }

try {    
    const artistes = await getArtisteById('rj4eij9gcrlbaey');
    console.log(artistes);
  } catch (error) { 
    console.error(error);
  }


try {
    const newArtiste = {
        "nom_artiste": "Nouveau Artiste",
        "date_representation": "2024-07-01T20:00:00Z",
        "scene": "atre9rwcc96fk9g" ,// ID de la scène associée
        "description_artiste": "Description de l'artiste" // Description de l'artiste
    };
    const result = await addArtiste(newArtiste);
    console.log(result);
} catch (error) {
    console.error(error);
} 

try {    const newScene = {
        "nom_scene": "Nouvelle Scène",
        "description_scene": "Description de la nouvelle scène", // Description de la scène
        "capacite": 500 // Capacité de la scène
    };
    const result = await addScene(newScene);
    console.log(result);
} catch (error) {
    console.error(error);
}


try {
const data = {
    "nom_artiste" : "tenv nom",
    "description_artiste" : "tenv description",
    "date_representation" : "2024-07-01T20:00:00Z",
    "scene" : "atre9rwcc96fk9g"
};
await updateArtiste('povfw1uik3itnr0', data);
console.log('Artiste mis à jour avec succès.');
} catch (e) {
    console.error(e);
}  
*/ 
try {
const data = {
    "nom_scene" : "noveelle scene ",
    "description_scene" : "super scene",
    "capacite" : 800
};
await updateScene('t1l6yx1839jvlo8', data);
console.log('Scène mise à jour avec succès.');
} catch (e) {
    console.error(e);
}  
