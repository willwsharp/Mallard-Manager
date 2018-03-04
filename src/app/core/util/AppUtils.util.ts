export class AppUtils {
    public static isDefined(base: any): boolean {
        return base !== null && base !== undefined;
    }

    public static isNotDefined(base: any): boolean {
        return !AppUtils.isDefined(base);
    }
}
