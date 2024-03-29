/**
 * Language class for internally managing language selection/configuration.
 */
export class Language {
    /**
     * @param iso2 Iso code of the language
     * @param name The language's name (native language)
     * @param iconName Icon class name of the flag to be displayed (flag-icon-css).
     */
    constructor(
        readonly iso2: string,
        readonly name: string,
        readonly iconName: string
    ) {}
}
