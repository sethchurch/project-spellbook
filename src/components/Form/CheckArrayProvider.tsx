'use client';

import type { ChangeEvent, Dispatch, Reducer } from 'react';
import { Children, createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckArrayProviderProps {
  children?: React.ReactNode;
  name: string;
}

const CheckArrayContext = createContext<[any[], Dispatch<any>]>([[], () => {}]);

const useCheckArray = <T,>() => {
  const context = useContext(CheckArrayContext);
  if (context === undefined) {
    throw new Error('useCheckArray must be used within a CheckArrayProvider');
  }

  const [value, dispatch] = context as [T[], Dispatch<any>];
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch({ type: 'checked', payload: name });
    } else {
      dispatch({ type: 'unchecked', payload: name });
    }
  };

  return { value, onChange };
};

interface CheckArrayAction {
  type: 'checked' | 'unchecked';
  payload: string;
}

const checkArrayReducer: Reducer<any[], CheckArrayAction> = (state: any[], action: CheckArrayAction) => {
  switch (action.type) {
    case 'checked':
      return [...state, action.payload];
    case 'unchecked':
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const CheckArrayProvider = ({ children, name }: CheckArrayProviderProps) => {
  const { getValues, setValue } = useFormContext();
  const formValue: any[] = getValues(name);
  const [value, dispatch] = useReducer(checkArrayReducer, formValue);

  const updateFormBeforeDispatch = useCallback(
    (action: CheckArrayAction) => {
      const newValue = checkArrayReducer(value, action);
      setValue(name, newValue);
      return dispatch(action);
    },
    [name, setValue, value],
  );

  const providerValue: [any[], Dispatch<CheckArrayAction>] = useMemo(
    () => [value, updateFormBeforeDispatch],
    [updateFormBeforeDispatch, value],
  );

  return (
    <CheckArrayContext.Provider value={providerValue}>
      <ul>
        {Children.map(children, (child) => {
          return <li className="list-none p-0">{child}</li>;
        })}
      </ul>
    </CheckArrayContext.Provider>
  );
};

export { CheckArrayProvider, useCheckArray };
