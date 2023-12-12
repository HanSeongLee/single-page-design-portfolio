export type Color = keyof typeof COLORS;

export const COLORS = {
    BLACK: '#030303',
    MEDIUM_BROWN: '#7A746E',
    LIGHT_CREAM: '#FFF7F0',
    GALACTIC_BLUE: '#755CDE',
    SUMMER_YELLOW: '#F6A560',
    PINK: '#F39E9E',
    LIGHT_RED: '#EB7565',
    CYAN: '#61C4B7',
    DARK_PURPLE: '#552049',
};

export const BRAND_COLORS: { [key: string]: Color; } = {
    PRIMARY: 'BLACK',
    PRIMARY_HOVER: 'GALACTIC_BLUE',
    SECONDARY: 'LIGHT_RED',
    SECONDARY_HOVER: 'SUMMER_YELLOW',
    NEUTRAL: 'MEDIUM_BROWN',
    BACKGROUND: 'LIGHT_CREAM',
    BOX: 'BLACK'
};
