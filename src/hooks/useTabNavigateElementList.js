import { useEffect, useRef } from 'react';

const useTabNavigateElementList = (
    delegateElementRef,
    handleActivate = null,
    handleDeactivate = null,
) => {
    const handleActivateRef = useRef(handleActivate);
    const handleDeactivateRef = useRef(handleDeactivate);
    const listLength = useRef(null);
    const listIndex = useRef(0);

    useEffect(() => {
        handleActivateRef.current = handleActivate;
        handleDeactivateRef.current = handleDeactivate;
    }, [handleActivate, handleDeactivate]);

    useEffect(() => {
        if (!delegateElementRef?.current.children.length) {
            return;
        }

        const delegateElement = delegateElementRef.current;
        listLength.current = delegateElementRef.current?.children.length;

        const handleFocusinElement = (e) => {
            switch (true) {
                case delegateElement && delegateElement.contains(e.target):
                    listIndex.current++;
                    break;

                case delegateElement &&
                    !delegateElement.contains(e.target) &&
                    listIndex.current === listLength.current:
                    listIndex.current = 0;
                    delegateElement.children[listIndex.current].focus();
                    break;

                case delegateElement && !delegateElement.contains(e.target):
                    listIndex.current = 0;
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('focusin', handleFocusinElement);

        return () => {
            document.removeEventListener('focusin', handleFocusinElement);
        };
    });
};

export { useTabNavigateElementList };
