const getSpecials = require('../utils/getSpecials');

describe('getSpecials', () => {
    test('should extract specials with default description if missing', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const expected = [
            { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
            { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно' }
        ];

        expect(getSpecials(character)).toEqual(expected);
    });

    test('should handle empty special array', () => {
        const character = {
            name: 'Воин',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 50,
            defence: 20,
            special: []
        };

        const expected = [];

        expect(getSpecials(character)).toEqual(expected);
    });

    test('should handle undefined special property', () => {
        const character = {
            name: 'Маг',
            type: 'Magician',
            health: 80,
            level: 2,
            attack: 60,
            defence: 15
        };

        const expected = [];

        expect(getSpecials(character)).toEqual(expected);
    });
});