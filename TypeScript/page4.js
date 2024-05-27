var Person1 = /** @class */ (function () {
    // constructor
    function Person1(name, age, address) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        if (address === void 0) { address = ''; }
        this._name = name;
        this._age = age;
        this._address = address;
    }
    Object.defineProperty(Person1.prototype, "Name", {
        // getter
        get: function () { return this._name; },
        // settter
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "address", {
        get: function () { return this._address; },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) {
            if ((age > 0) && (age <= 100)) {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Facilitator
    Person1.prototype.printInfo = function () {
        console.log("name:".concat(this._name));
        console.log("Age:".concat(this._age));
        console.log("Address:".concat(this._address));
    };
    return Person1;
}());
var p3 = new Person1('Ganesh', 30, 'Sangli');
p3.printInfo();
var p4 = new Person1('Akash', 29, 'Mumbai');
p4.printInfo();
