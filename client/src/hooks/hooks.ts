import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../ducks/store';
import { useCallback, useEffect, useRef } from "react";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useClickOutsideListenerRef = (
  onClose: any
) => {
  const ref = useRef(null);
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose(false)
    }
  }, [ref.current]);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (ref.current !== null) {
        if (!(ref.current! as any).contains(e.target)) {
          onClose?.(false);
        }
      }
    },
    [ref.current]
  );
  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  });
  return ref;
};