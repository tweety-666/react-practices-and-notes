const logger = store => next => action => {
  console.log('dispatching type ---', action.type);
  console.log('dispatching payload ---', action.payload);
  console.log('dispatching payload error ---', action.payload.error);
  let result = next(action);
  console.log('next state ---', store.getState());
  return result;
};

const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.log('err ===> ', err);
    throw err;
  }
};

export { logger, crashReporter };
