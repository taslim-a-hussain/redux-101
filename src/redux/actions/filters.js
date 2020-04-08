// Set_Text_Filter
export const setTextfilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sort_By_Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort_By_Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Set_Start_Date
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

// Set_End_Date
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});