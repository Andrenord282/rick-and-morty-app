import { useEffect, useRef } from 'react';

const useEventKey = ( keyCode = '27', eventName = 'keydown', handleActivate) => {
    const handleActivateRef = useRef(handleActivate);

    useEffect(() => {
        handleActivateRef.current = handleActivate;
    }, [handleActivate]);

    useEffect(() => {
        const handleKeyAction = (e) => {
            if (e.keyCode === keyCode) {
                handleActivateRef.current();
            }
        };

        document.addEventListener(eventName, handleKeyAction);

        return () => {
            document.removeEventListener(eventName, handleKeyAction);
        };
    }, [ keyCode, eventName]);
};

export { useEventKey };
