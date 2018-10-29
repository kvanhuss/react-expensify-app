import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = getExpensesTotal([expenses[0]]);
    const amount = expenses[0].amount;
    expect(res).toBe(amount);
});

test('should correctly add up multiple expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(114195);
});