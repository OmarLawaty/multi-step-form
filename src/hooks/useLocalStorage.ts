import { useState, useEffect } from 'react';

const useLocalStorage = <DefaultValueType>(
  key: string,
  defaultValue: DefaultValueType
): [DefaultValueType, React.Dispatch<DefaultValueType>] => {
  const [value, setValue] = useState<DefaultValueType>(() => {
    let currentValue: DefaultValueType;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || '') || defaultValue;
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
