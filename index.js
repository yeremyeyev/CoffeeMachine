var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BiolAbstract = /** @class */ (function () {
    function BiolAbstract() {
    }
    BiolAbstract.prototype.work = function () {
        console.log('Im work');
    };
    return BiolAbstract;
}());
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    // ####################################
    function Water(current) {
        if (current === void 0) { current = 0; }
        var _this = _super.call(this) || this;
        _this.current = current;
        _this.max = 2000;
        _this.work();
        return _this;
    }
    // ####################################
    Water.prototype.get = function (val) {
        if (!this.has(val)) {
            throw new Error('Need add water!');
        }
        this.current = this.current - val;
        return val;
    };
    Water.prototype.set = function (val) {
        if ((this.current + val) > this.max) {
            throw new Error('Water boil is full!');
        }
        this.current = this.current + val;
    };
    Water.prototype.has = function (val) {
        if (this.current < val) {
            return false;
        }
        return true;
    };
    Water.prototype.getCurrent = function () {
        return this.current;
    };
    return Water;
}(BiolAbstract));
var Beans = /** @class */ (function () {
    // ####################################
    function Beans(current) {
        if (current === void 0) { current = 0; }
        this.current = current;
        this.max = 1000;
    }
    // ####################################
    Beans.prototype.get = function (val) {
        if (!this.has(val)) {
            throw new Error('Need add beans!');
        }
        this.current = this.current - val;
        return val;
    };
    Beans.prototype.set = function (val) {
        if ((this.current + val) > this.max) {
            throw new Error('Beans boil is full!');
        }
        this.current = this.current + val;
    };
    Beans.prototype.has = function (val) {
        if (this.current < val) {
            return false;
        }
        return true;
    };
    Beans.prototype.getCurrent = function () {
        return this.current;
    };
    return Beans;
}());
var Milk = /** @class */ (function () {
    // ####################################
    function Milk(current) {
        if (current === void 0) { current = 0; }
        this.current = current;
        this.max = 1500;
    }
    // ####################################
    Milk.prototype.get = function (val) {
        if (!this.has(val)) {
            throw new Error('Need add milk!');
        }
        this.current = this.current - val;
        return val;
    };
    Milk.prototype.set = function (val) {
        if ((this.current + val) > this.max) {
            throw new Error('Milk boil is full!');
        }
        this.current = this.current + val;
    };
    Milk.prototype.has = function (val) {
        if (this.current < val) {
            return false;
        }
        return true;
    };
    Milk.prototype.getCurrent = function () {
        return this.current;
    };
    return Milk;
}());
var CoffeMachine = /** @class */ (function () {
    // ####################################
    function CoffeMachine(water, beans, milk) {
        this.water = water;
        this.beans = beans;
        this.milk = milk;
    }
    // ####################################
    CoffeMachine.prototype.getAmericano = function () {
        var name = 'Americano';
        var wBoil = 200;
        var bBoil = 100;
        if (!this.validation(wBoil, bBoil)) {
            return;
        }
        return this.makeCoffe(name, wBoil, bBoil);
    };
    CoffeMachine.prototype.getEsspresso = function () {
        var name = 'Esspresso';
        var wBoil = 100;
        var bBoil = 70;
        if (!this.validation(wBoil, bBoil)) {
            return;
        }
        return this.makeCoffe(name, wBoil, bBoil);
    };
    CoffeMachine.prototype.getCapuchino = function () {
        var name = 'Capuchino';
        var wBoil = 150;
        var bBoil = 100;
        var mBoil = 70;
        if (!this.validation(wBoil, bBoil, mBoil)) {
            return;
        }
        return this.makeCoffe(name, wBoil, bBoil, mBoil);
    };
    CoffeMachine.prototype.getLatte = function () {
        var name = 'Latte';
        var wBoil = 200;
        var bBoil = 100;
        var mBoil = 150;
        if (!this.validation(wBoil, bBoil, mBoil)) {
            return;
        }
        return this.makeCoffe(name, wBoil, bBoil, mBoil);
    };
    // ####################################
    CoffeMachine.prototype.setWater = function (val) {
        this.water.set(val);
    };
    CoffeMachine.prototype.setBeans = function (val) {
        this.beans.set(val);
    };
    CoffeMachine.prototype.setMilk = function (val) {
        this.milk.set(val);
    };
    // ####################################
    CoffeMachine.prototype.validation = function (wBoil, bBoil, mBoil) {
        if (!this.water.has(wBoil)) {
            console.warn('Need add water!');
            return false;
        }
        if (!this.beans.has(bBoil)) {
            console.warn('Need add beans!');
            return false;
        }
        if (!this.milk.has(mBoil)) {
            console.warn('Need add milk!');
            return false;
        }
        return true;
    };
    CoffeMachine.prototype.makeCoffe = function (name, wBoil, bBoil, mBoil) {
        if (mBoil === void 0) { mBoil = null; }
        return {
            name: name,
            water: this.water.get(wBoil),
            beans: this.beans.get(bBoil),
            milk: this.milk.get(mBoil)
        };
    };
    return CoffeMachine;
}());
var milk = new Milk(750);
var water = new Water(1500);
var beans = new Beans(500);
var coffeMachine = new CoffeMachine(water, beans, milk);
//   debugger
console.log(coffeMachine.getAmericano());
console.log(coffeMachine.getEsspresso());
console.log(coffeMachine.getLatte());
console.log(coffeMachine.getCapuchino());
console.log(coffeMachine.getLatte());
coffeMachine.setBeans(500);
console.log(coffeMachine.getCapuchino());
//   21:00  дз звучит 21:01 
