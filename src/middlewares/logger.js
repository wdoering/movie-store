/**
 * Logs all actions and states after they are dispatched.
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

// const genreLogger = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd();
//   if (action.type === "genre/setGenreList") {
//     console.log("deu bom!");
//     return true;
//   }
//   console.log("deu ruim!");
//   return false;
//   //   return result;
// };

export default logger;
