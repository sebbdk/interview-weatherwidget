export const dkDirections = [
    "Nord",
    "Nord Nord-øst",
    "Nord-øst",
    "Øst Nord-øst",
    "Øst",
    "Øst Syd-øst",
    "Syd-øst",
    "Syd Syd-øst",
    "Syd",
    "Syd Syd-vest",
    "Syd-vest",
    "Vest Syd-vest",
    "Vest",
    "Vest Nord-vest",
    "Nord-vest",
    "Nord Nord-vest"
];

export const ENShortdirections = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
];

/**
 * Converts a degree to cardinal compass directions including fractions like NNE and ENE etc.
 *
 * @param Number num
 * @param Array<String>[16] directions
 */
export function degToCompass(num, directions = ENShortdirections) {
    var val = Math.floor((num / 22.5) + 0.5);
    return directions[(val % 16)];
}
