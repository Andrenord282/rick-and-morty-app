//-----hooks-----//
import { useEffect } from 'react';

const useScrollToElement = (elementRef, actionElementSelector, eventName = 'click') => {
    useEffect(() => {
        if (!elementRef.current) {
            return;
        }

        const scrollToFilter = (e) => {
            if (e.target.closest(actionElementSelector)) {
                const elementTopPosition = elementRef.current.getBoundingClientRect().top;
                const scrollOffset = window.scrollY;
                const targetScrollPosition = elementTopPosition + scrollOffset;
                window.scrollTo({
                    top: targetScrollPosition,
                    behavior: 'smooth',
                });
            }
        };

        document.addEventListener(eventName, scrollToFilter);

        return () => document.removeEventListener(eventName, scrollToFilter);
    }, [elementRef, eventName]);
};

export { useScrollToElement };
