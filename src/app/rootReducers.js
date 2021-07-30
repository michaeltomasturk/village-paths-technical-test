import authentication from 'features/OnBoarding/authenticationSlice';
import main from 'features/Main/mainSlice';

//Include all the reducer to combine and provide to configure store.

const rootReducer =  {
  authentication,
  main,
}

export default rootReducer;
