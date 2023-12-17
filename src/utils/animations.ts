export const appear = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 2,
        },
    }),
};

export const scale = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 0.85,
        },
    }),
};

