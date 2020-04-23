import summary from '../../../redux/selectors/summary';

test('Should return object of total amount and length', () => {
    const expenses = [
        {
            id: 1,
            description: 'coffee',
            amount: 250
        },
        {
            id: 2,
            description: 'pen',
            amount: 130
        }
    ];
    const result = summary(expenses);
    expect(result).toEqual({
        total: 380,
        length: 2
    });
})