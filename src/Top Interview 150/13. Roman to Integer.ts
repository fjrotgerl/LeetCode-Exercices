function romanToInt(s: string): number {
    const chars: string[] = [...s];
    let nextValue: number = 0;
    let finalValue: number = 0;
    chars.forEach((number, index) => {

        let actualNumber = checkSingleRomanNumber(number);

        if (index < chars.length) {
            nextValue = checkSingleRomanNumber(chars[index + 1]);
        }

        if (actualNumber > nextValue || actualNumber === nextValue) {
            finalValue += actualNumber;
        } else if (actualNumber < nextValue) {
            finalValue -= actualNumber;
        }
        
    })

    return finalValue;
};

// Esto se puede convertir en un map dentro de la funcion para evitar hacer llamadas
function checkSingleRomanNumber(s: string): number {
    switch(s) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return 0;
    }
}