const useCurrency = (options) => {
    const convert = (value) => {
        return Number(value).toLocaleString();
    }
    const formatToCurrency = (value) => {
        return Intl.NumberFormat("en-us", { style: 'currency', currency: options?.currency }).format(value);
    }
    return { convert, formatToCurrency }
}




export default useCurrency;