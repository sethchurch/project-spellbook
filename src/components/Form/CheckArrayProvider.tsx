import type { Dispatch, Reducer } from 'react';
import { Children, createContext, useContext, useMemo, useReducer } from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckArrayProviderProps {
  children?: React.ReactNode;
  name: string;
}

const CheckArrayContext = createContext<[any[], Dispatch<any>]>([[], () => {}]);

const useCheckArray = () => {
  const context = useContext(CheckArrayContext);
  if (context === undefined) {
    throw new Error('useCheckArray must be used within a CheckArrayProvider');
  }
  return context;
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
  const { getValues } = useFormContext();
  const formValue: any[] = getValues(name);
  const [value, dispatch] = useReducer(checkArrayReducer, formValue);
  const providerValue: [any[], Dispatch<CheckArrayAction>] = useMemo(() => [value, dispatch], [value]);

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
