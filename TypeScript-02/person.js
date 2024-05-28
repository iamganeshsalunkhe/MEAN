var Person = /** @class */ (function () {
    //  constructor
    function Person(name, address, age, email, phone) {
        this._name = name;
        this._address = address;
        this._age = age;
        this._email = email;
        this._phone = phone;
    }
    Object.defineProperty(Person.prototype, "name", {
        // getter
        get: function () { return this._name; },
        // setter
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () { return this._address; },
        set: function (address) { this._address = address; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) { this._age = age; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phone", {
        set: function (phone) { this._phone = phone; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "email", {
        get: function () { return this._email; },
        set: function (email) { this._email = email; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phonne", {
        get: function () { return this._phone; },
        enumerable: false,
        configurable: true
    });
    // facilitator
    Person.prototype.canVote = function () {
        if (this._age >= 18) {
            console.log("".concat(this._name, " is eligible for voting."));
        }
        else {
            console.log("".concat(this._name, " is not eligible for voting."));
        }
    };
    Person.prototype.printInfo = function () {
        console.log("name:".concat(this._name));
        console.log("address:".concat(this._address));
        console.log("age:".concat(this._age));
        console.log("phone:".concat(this._phone));
        console.log("email:".concat(this._email));
    };
    return Person;
}());
var p1 = new Person('Person1', 'Sangli', 27, '+62624', 'person1test.com');
p1.canVote();
p1.printInfo();
