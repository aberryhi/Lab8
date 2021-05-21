/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';

describe('pushToHistory with settings state', () => {
    test('increases length of history stack by 1', () => {
        const histLength = history.length;
        expect(pushToHistory('settings').length).toBe(histLength + 1);
    });
    test('sets current state object correctly', () => {
        expect(pushToHistory('settings').state).toEqual({page: 'settings'});
    });
});

describe('pushToHistory with entry state', () => {
    describe('entry num 0', () => {
        test('increases length of history stack by 1', () => {
            const histLength = history.length;
            expect(pushToHistory('entry',0).length).toBe(histLength + 1);
        });
        test('sets current state object correctly', () => {
            expect(pushToHistory('entry',0).state).toEqual({page: 'entry0'});
        });
    });
    describe('entry num 5', () => {
        test('increases length of history stack by 1', () => {
            const histLength = history.length;
            expect(pushToHistory('entry',5).length).toBe(histLength + 1);
        });
        test('sets current state object correctly', () => {
            expect(pushToHistory('entry',5).state).toEqual({page: 'entry5'});
        });
    });
    describe('entry num 10', () => {
        test('increases length of history stack by 1', () => {
            const histLength = history.length;
            expect(pushToHistory('entry',10).length).toBe(histLength + 1);
        });
        test('sets current state object correctly', () => {
            expect(pushToHistory('entry',10).state).toEqual({page: 'entry10'});
        });
    });
});

describe('pushToHistory with other state', () => {
    test('increases length of history stack by 1', () => {
        const histLength = history.length;
        expect(pushToHistory('other').length).toBe(histLength + 1);
    });
    test('sets current state object correctly', () => {
        expect(pushToHistory('other').state).toEqual({});
    });
});