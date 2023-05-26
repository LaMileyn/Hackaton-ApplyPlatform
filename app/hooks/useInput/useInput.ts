import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue ?? '');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return { value, onChange };
};

export default useInput;
