import { Pressable } from 'react-native';
import { ReactNode } from 'react';

interface IDoublePress {
  onDoublePressable?: () => void;
  children: ReactNode;
}

const DoublePress = ({ onDoublePressable = () => { }, children, }: IDoublePress) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); //TIMESTAMP
    if (now - lastTap < 300) {
      onDoublePressable();
    }

    lastTap = now;
  };

  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  );
};

export default DoublePress;