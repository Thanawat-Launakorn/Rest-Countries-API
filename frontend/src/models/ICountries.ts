import Flag from "./IFlag";
import Name from "./IName";

export default interface DataCountries {
    name: Name,
    topLevelDomain: any[],
    capital: string,
    subregion: string,
    region: string,
    population: number,
    borders: any[],
    currencies: any[],
    flag: string
    flags: Flag
}   