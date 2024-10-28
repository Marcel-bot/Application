import {
  createContext,
  MutableRefObject,
  ReactNode,
  RefObject,
  useContext,
  useRef
} from 'react';
import { Point } from '@/lib/types';

interface EyesContextInterface {
  dragging: MutableRefObject<boolean>;
  pos: MutableRefObject<Point>;
  joystick: RefObject<SVGRectElement>;
  svg: RefObject<SVGSVGElement>;
}

const eyesContext = createContext<EyesContextInterface | null>(null);

export function useEyes() {
  return useContext(eyesContext)!;
}

export function EyesProvider({ children }: { children: ReactNode }) {
  const dragging = useRef<boolean>(false);
  const pos = useRef<Point>({ x: 120, y: 120 });

  const joystick = useRef<SVGRectElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  return (
    <eyesContext.Provider
      value={{
        dragging,
        pos,
        joystick,
        svg
      }}
    >
      {children}
    </eyesContext.Provider>
  );
}
