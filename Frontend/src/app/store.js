import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sessionsReducer from "../features/sessions/sessionSlice";
import payoutsReducer from "../features/payouts/payoutsSlice";
import receiptsReducer from "../features/receipts/receiptsSlice";
import chatReducer from "../features/chat/chatSlice";
import auditReducer from "../features/audit/auditSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sessions: sessionsReducer,
    payouts: payoutsReducer,
    receipts: receiptsReducer,
    chat: chatReducer,
    audit: auditReducer,
  },
});

