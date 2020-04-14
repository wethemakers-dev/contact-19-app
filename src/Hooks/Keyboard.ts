import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

export const useKeyboard = (): [number] => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: KeyboardEvent): void {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide(): void {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);

    return (): void => {
      Keyboard.removeListener('keyboardWillShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardWillHide', onKeyboardDidHide);
    };
  }, []);

  return [keyboardHeight];
};
