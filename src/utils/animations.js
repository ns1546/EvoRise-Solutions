// Reusable Framer Motion Animation Variants - Performance Optimized

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut" }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } // Custom smooth easing
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

export const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 }
    }
};

export const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 }
    }
};

export const rotateIn = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
};

export const hoverGlow = {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.2, ease: "easeInOut" }
};
