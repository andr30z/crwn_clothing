import { call, put, takeLatest } from 'redux-saga/effects';

import shopActionTypes from './shop.types';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess
} from './shop.actions'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';





export function* fetchCollectionsAsync() {

  yield console.log("fui disparado");

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    //assim não precisa usar o formato de promise pra pegar o snapshot

    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    //é a mesma coisa de yield convertCollectionsSnapshotToMap(snapshot) só que é
    //chamado com o call para se ter um controle melhor, além de habilitar o cancelamento
    //caso algo ocorra   

    yield put(fetchCollectionsSuccess(collectionsMap));



    // collectionRef
    //   .get()
    //   .then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}