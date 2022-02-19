const roundingMethods = {
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
};

type RoundingMethods = keyof typeof roundingMethods;

export const random = (
    min: number,
    max: number,
    method: RoundingMethods = "round"
): number => {
    if (max < min) {
        [max, min] = [min, max];
    }

    return (
        roundingMethods[method].call(null, Math.random() * (max - min) + min) ??
        0
    );
};
