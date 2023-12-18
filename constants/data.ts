import { COLORS } from 'styles/colors';
import { ICardProps } from 'components/commons/Card';

export const CARD_LIST_ITEMS: ICardProps[] = [
    {
        title: 'Graphic Design',
        backgroundColor: COLORS.GALACTIC_BLUE,
        patternName: 'graphic-design',
        size: 'large',
    },
    {
        title: 'UI/UX',
        backgroundColor: COLORS.SUMMER_YELLOW,
        patternName: 'ui-ux',
        size: 'small',
    },
    {
        title: 'Apps',
        backgroundColor: COLORS.PINK,
        patternName: 'apps',
        size: 'small',
    },
    {
        title: 'Illustrations',
        backgroundColor: COLORS.LIGHT_RED,
        patternName: 'illustrations',
        size: 'medium',
    },
    {
        title: 'Photography',
        backgroundColor: COLORS.CYAN,
        patternName: 'photography',
        size: 'medium',
    },
    {
        title: 'Motion Graphics',
        backgroundColor: COLORS.DARK_PURPLE,
        patternName: 'motion-graphics',
        size: 'medium',
    },
];
