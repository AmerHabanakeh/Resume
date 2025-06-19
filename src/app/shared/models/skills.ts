export type Skill = {
    title:string
    percent:Percent
}

export type Percent = number & { readonly __brand: unique symbol };
export function createPercent(value: number): Percent {
    if (value < 0 || value > 100) {
        throw new Error('Percent must be between 0 and 100');
    }
    return value as Percent;
}
