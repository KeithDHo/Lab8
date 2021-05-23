/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js'

describe("length of the history stack", () => {
    test('push settings', () => {
        let history = pushToHistory('settings', '');
        expect(history.length).toBe(2);
        expect(history.state.page).toBe('settings');
    })
    test('push entry', () => {
        let history = pushToHistory('entry', 2);
        expect(history.length).toBe(3);
        expect(history.state.page).toBe('entry2');
    })
    test('push default', () => {
        let history = pushToHistory('', '');
        expect(history.length).toBe(4); 
        expect(history.state.page).toBe(undefined);
    })
})