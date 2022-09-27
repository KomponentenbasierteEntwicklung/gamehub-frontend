import axios from 'axios'

export const Currency = {
    EURO: { symbol: '€', name: 'euro', abbrevation: 'EUR' },
    USD: { symbol: '$', name: 'US dollar', abbrevation: 'USD' },
    INR: { symbol: '₹', name: 'rupee', abbrevation: 'INR' },
    JPY: { symbol: '¥', name: 'Yen', abbrevation: 'JPY' },
    GBP: { symbol: '£', name: 'Pound sterling', abbrevation: 'GBP' },
}

export async function getMultiplier(currencyObject) {
    return axios
        .get(
            `http://localhost:8100/currency-converter/from/eur/to/${currencyObject.abbrevation}/quantity/1`
        )
        .then((response) => {
            const multiplier = response?.data?.info.rate
            return multiplier
        })
}
