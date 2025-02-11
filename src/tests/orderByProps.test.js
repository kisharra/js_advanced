// src/tests/orderByProps.test.js

const orderByProps = require('../utils/orderByProps');

describe('orderByProps', () => {
    test('should return properties in specified order with remaining sorted alphabetically', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const sortKeys = ['name', 'level'];
        const expected = [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 }
        ];
        expect(orderByProps(obj, sortKeys)).toEqual(expected);
    });

    test('should handle empty sortKeys array', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const sortKeys = [];
        const expected = [
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'level', value: 2 },
            { key: 'name', value: 'мечник' }
        ];
        expect(orderByProps(obj, sortKeys)).toEqual(expected);
    });

    test('should handle object with no properties', () => {
        const obj = {};
        const sortKeys = ['name', 'level'];
        const expected = [];
        expect(orderByProps(obj, sortKeys)).toEqual(expected);
    });

    test('should handle missing keys in sortKeys', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const sortKeys = ['level'];
        const expected = [
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'name', value: 'мечник' }
        ];
        expect(orderByProps(obj, sortKeys)).toEqual(expected);
    });

    test('should handle duplicate keys in sortKeys', () => {
        const obj = { name: 'мечник', health: 10, level: 2 };
        const sortKeys = ['name', 'name', 'level'];
        const expected = [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'health', value: 10 }
        ];
        expect(orderByProps(obj, sortKeys)).toEqual(expected);
    });
});