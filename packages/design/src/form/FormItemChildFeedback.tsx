import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type FormItemChildFeedback = {
  help?: ReactNode;
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
} | null;

type FormItemChildFeedbackContextValue = {
  setFeedback: (feedback: FormItemChildFeedback) => void;
};

const FormItemChildFeedbackContext = createContext<FormItemChildFeedbackContextValue | null>(null);

/** Internal: used by built-in field components inside Form.Item (e.g. Password). */
export function useFormItemChildFeedback() {
  return useContext(FormItemChildFeedbackContext);
}

export function FormItemChildFeedbackProvider({
  children,
  contextValue,
}: {
  children: ReactNode;
  contextValue: FormItemChildFeedbackContextValue;
}) {
  return (
    <FormItemChildFeedbackContext.Provider value={contextValue}>
      {children}
    </FormItemChildFeedbackContext.Provider>
  );
}

export function useFormItemChildFeedbackState() {
  const [childFeedback, setChildFeedbackState] = useState<FormItemChildFeedback>(null);

  const setFeedback = useCallback((feedback: FormItemChildFeedback) => {
    setChildFeedbackState(feedback);
  }, []);

  const contextValue = useMemo(() => ({ setFeedback }), [setFeedback]);

  return { childFeedback, contextValue };
}
