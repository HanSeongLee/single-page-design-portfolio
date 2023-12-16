export type ResponsiveValue<T> = T | [T, T, T] | undefined;

export const createResponsiveStyle = <T extends number | string | undefined>(propertyName: string, values: ResponsiveValue<T>) => {
    if (values === undefined) {
        return {};
    }

    const valuesStyle = Array.isArray(values) ? values : Array(3).fill(values);
    const suffixes = ['mobile', 'tablet', 'desktop'];
    const styleObject: Record<string, string> = {};

    valuesStyle.forEach((value, index) => {
        if (value !== undefined) {
            const cssVarName = `--${propertyName}-${suffixes[index]}`;
            styleObject[cssVarName] = typeof value === 'number' ? `${value}px` : value;
        }
    });

    return styleObject;
};
