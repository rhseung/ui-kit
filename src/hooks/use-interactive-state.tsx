import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';

export interface InteractiveState {
  hover: boolean;
  active: 'mouseActive' | 'touchActive' | 'keyActive' | false;
  focus: 'focusFromMouse' | 'focusFromTouch' | 'focusFromKey' | false;
}

type InputSource = 'mouse' | 'touch' | 'key' | null;

export function useInteractiveState(disabled?: boolean) {
  const [state, setState] = useState<InteractiveState>({
    hover: false,
    active: false,
    focus: false,
  });

  const lastInputRef = useRef<InputSource>(null);

  useEffect(() => {
    if (disabled) {
      setState({ hover: false, active: false, focus: false });
    }
  }, [disabled]);

  const setHover = useCallback((value: boolean) => {
    setState((s) => (s.hover === value ? s : { ...s, hover: value }));
  }, []);

  const setActive = useCallback((value: InteractiveState['active']) => {
    setState((s) => (s.active === value ? s : { ...s, active: value }));
  }, []);

  const setFocus = useCallback((value: InteractiveState['focus']) => {
    setState((s) => (s.focus === value ? s : { ...s, focus: value }));
  }, []);

  const onMouseEnter: MouseEventHandler<HTMLElement> = () => {
    if (disabled) return;
    lastInputRef.current = 'mouse';
    setHover(true);
  };

  const onMouseLeave: MouseEventHandler<HTMLElement> = () => {
    if (disabled) return;
    setHover(false);
    if (state.active === 'mouseActive') setActive(false);
  };

  const onMouseDown: MouseEventHandler<HTMLElement> = () => {
    if (disabled) return;
    lastInputRef.current = 'mouse';
    setActive('mouseActive');
  };

  const onMouseUp: MouseEventHandler<HTMLElement> = () => {
    if (disabled) return;
    if (state.active === 'mouseActive') setActive(false);
  };

  const onTouchStart: TouchEventHandler<HTMLElement> = () => {
    if (disabled) return;
    lastInputRef.current = 'touch';
    setHover(false); // 모바일 :hover sticky 방지
    setActive('touchActive');
  };

  const onTouchEnd: TouchEventHandler<HTMLElement> = () => {
    if (disabled) return;
    setActive(false);
  };

  const onTouchCancel: TouchEventHandler<HTMLElement> = () => {
    if (disabled) return;
    setActive(false);
  };

  const onKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    lastInputRef.current = 'key';
    if (e.key === 'Enter' || e.key === ' ') {
      setActive('keyActive');
    }
  };

  const onKeyUp: KeyboardEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    if (state.active === 'keyActive' && (e.key === 'Enter' || e.key === ' ')) {
      setActive(false);
    }
  };

  const onFocus: FocusEventHandler<HTMLElement> = () => {
    if (disabled) return;
    const source = lastInputRef.current;
    if (source === 'mouse') setFocus('focusFromMouse');
    else if (source === 'touch') setFocus('focusFromTouch');
    else setFocus('focusFromKey');
  };

  const onBlur: FocusEventHandler<HTMLElement> = () => {
    if (disabled) return;
    setFocus(false);
    if (state.active === 'keyActive') setActive(false);
  };

  const eventHandlers = {
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
  } satisfies Partial<React.HTMLAttributes<HTMLElement>>;

  return { state, eventHandlers } as const;
}
