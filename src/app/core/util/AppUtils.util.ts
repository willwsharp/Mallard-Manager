export class AppUtils {
    public static isDefined(base: any): boolean {
        return base !== null && base !== undefined;
    }

    public static isNotDefined(base: any): boolean {
        return !AppUtils.isDefined(base);
    }

    /**
     * Proper implementation of modulus.  Javascript's implementation doesn't play well with negative numbers.
     * @example
     * dividen modulus divisor
     * dividend % divisor
     * @param dividend
     * @param divisor
     */
    public static properModulus(dividend: number, divisor: number): number {
        return (dividend % divisor + divisor) % divisor;
    }
}
