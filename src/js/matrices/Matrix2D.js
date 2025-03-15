var MATRIX_VALUES = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7
};

function Matrix2D(sizeX, sizeY, array) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.length = this.sizeX * this.sizeY;
    // Инициализируем матрицу: каждый элемент хранит битовую маску значений
    this.matrix = new Uint16Array(array || this.length);
    // Допустимые значения от 0 до 7
}

Matrix2D.prototype = {

    constructor: Matrix2D,

    cellExist: function(x, y) {
        return !(x < 0 || y < 0 || x > this.sizeX - 1 || y > this.sizeY - 1);
    },

    // Добавляет значение в ячейку, не стирая уже записанные значения
    setCell: function(x, y, value) {
        if (!this.cellExist(x, y)) return;
        var index = x * this.sizeX + y;
        // Вычисляем битовую маску: для value 0 будет 1 << 0 = 1, для 1 – 1<<1 = 2 и т.д.
        var mask = 1 << value;
        this.matrix[index] |= mask;
    },

    // Возвращает массив значений, установленных в ячейке
    getCell: function(x, y) {
        if (!this.cellExist(x, y)) return [];
        var index = x * this.sizeX + y;
        var cellValue = this.matrix[index];
        var values = [];
        for (var key in MATRIX_VALUES) {
            var numKey = parseInt(key, 10);
            var mask = 1 << numKey;
            if (cellValue & mask) {
                values.push(numKey);
            }
        }
        return values;
    },

    // Удаляет указанное значение из ячейки
    deleteValue: function(x, y, value) {
        if (!this.cellExist(x, y)) return;
        var index = x * this.sizeX + y;
        var mask = 1 << value;
        // Сбрасываем бит, соответствующий значению
        this.matrix[index] &= ~mask;
    },

    // Очищает ячейку (удаляет все значения)
    clearCell: function(x, y) {
        if (!this.cellExist(x, y)) return;
        var index = x * this.sizeX + y;
        this.matrix[index] = 0;
    }
};

export {Matrix2D, MATRIX_VALUES};
