class coverageCode {
    fillArrayOfStrings(arr) {
        let formatedArray = [];
        if (!arr || arr.length === 0) {
            throw 'Invalid array';
        } else {
            for (const word of arr) {
                formatedArray.push(String(word));
            }
            let arrayOfstrings = [];
            formatedArray.forEach(element => {
                arrayOfstrings.push(element);
            })
            return arrayOfstrings;
        }
    }

    orderedArrayOfStrings(arr) {
        arr.forEach(element => {
            if (typeof element !== "string") throw "Invalid array";
        });
        const orderedArray = arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })

        return orderedArray;
    }
}

module.exports = coverageCode;