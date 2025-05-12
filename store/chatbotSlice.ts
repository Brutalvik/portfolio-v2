import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "../types";

interface ChatbotState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ChatbotState = {
  messages: [],
  isLoading: false,
  error: null,
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addMessage, clearMessages, setLoading, setError } =
  chatbotSlice.actions;
export default chatbotSlice.reducer;
