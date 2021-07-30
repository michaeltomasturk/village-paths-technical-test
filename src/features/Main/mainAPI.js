import {all, call, put, takeLatest} from 'redux-saga/effects'
import { getOrganization, getOrganizationSuccess, getOrganizationFailure } from './mainSlice';
import axios from 'axios'

function* getOrganizationAPI() {
  try {
    const response = yield call(() => axios.get('https://sprout-tech-assets.s3.amazonaws.com/village-paths-test-data/data.json'));
    yield put(getOrganizationSuccess(response.data));
  } catch (e) {
    yield put(getOrganizationFailure());
  }
}


export default function* rootSaga() {
  yield all([takeLatest(getOrganization, getOrganizationAPI)]);
}
