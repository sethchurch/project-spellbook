type DeepPartialBoolean<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartialBoolean<T[P]> : boolean;
};

export const getFormDirty = <T extends object>(formValue: T, filterValue: DeepPartialBoolean<T> | nd) =>  {
  const formKeys = Object.keys(formValue) as (keyof T)[];

  return formKeys.reduce((result, formKey) => {
    if (!filterValue[formKey]) return result;

    let value = formValue[formKey];
    if (typeof value === 'object') {
      value = getFormDirty(formValue[formKey], filterValue[formKey]!) as T[keyof T];
    }

    return { ...result, [formKey]: value };
  }, {} as Partial<T>);
};
