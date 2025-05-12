import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatbotReducer from "@store/chatbotSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["chatbot"],
};

const persistedReducer = persistReducer(persistConfig, chatbotReducer);

const store = configureStore({
  reducer: {
    chatbot: persistedReducer,
  },
  middleware: (getDefaultMiddleware: (arg0: { serializableCheck: { ignoredActions: any[]; }; }) => any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
