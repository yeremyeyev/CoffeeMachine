interface Coffe {

    name: string;
  
    water: number;
  
    beans: number;
  
    milk?: number;
  
  }
  
  abstract class BiolAbstract {
    protected work (): void {
      console.log('Im work')
    }
  }
  
  class Water extends BiolAbstract {
  
    private max: number = 2000;
  
    // ####################################
  
    constructor(private current: number = 0) {
      super();
  
      this.work();
    }
  
    // ####################################
  
    public get(val: number): number {
        if (!this.has(val)) {
            throw new Error('Need add water!');
        }
  
        this.current = this.current - val;
  
        return val;
    }
  
    public set(val: number): void {
        if ((this.current + val) > this.max) {
            throw new Error('Water boil is full!');
        }
  
        this.current = this.current + val;
    }
  
    public has(val: number): boolean {
        if (this.current < val) {
            return false;
        }
  
        return true;
    }
  
    public getCurrent(): number {
        return this.current;
    }
  
    // ####################################
  }
  
  class Beans {
  
    private max: number = 1000;
  
    // ####################################
  
    constructor(private current: number = 0) {}
  
    // ####################################
  
    public get(val: number): number {
        if (!this.has(val)) {
            throw new Error('Need add beans!');
        }
  
        this.current = this.current - val;
  
        return val;
    }
  
    public set(val: number): void {
        if ((this.current + val) > this.max) {
            throw new Error('Beans boil is full!');
        }
  
        this.current = this.current + val;
    }
  
    public has(val: number): boolean {
        if (this.current < val) {
            return false;
        }
  
        return true;
    }
  
    public getCurrent(): number {
        return this.current;
    }
  
    // ####################################
  }
  
  class Milk {
  
    private max: number = 1500;
  
    // ####################################
  
    constructor(private current: number = 0) {}
  
    // ####################################
  
    public get(val: number): number {
        if (!this.has(val)) {
            throw new Error('Need add milk!');
        }
  
        this.current = this.current - val;
  
        return val;
    }
  
    public set(val: number): void {
        if ((this.current + val) > this.max) {
            throw new Error('Milk boil is full!');
        }
  
        this.current = this.current + val;
    }
  
    public has(val: number): boolean {
        if (this.current < val) {
            return false;
        }
  
        return true;
    }
  
    public getCurrent(): number {
        return this.current;
    }
  
    // ####################################
  }
  
  class CoffeMachine {
    // ####################################
  
    constructor(private water: Water, private beans: Beans, private milk: Milk) {}
  
    // ####################################
  
    public getAmericano(): Coffe {
        const name = 'Americano';
        const wBoil = 200;
        const bBoil = 100;
  
        if (!this.validation(wBoil, bBoil)) {
            return;
        }
  
        return this.makeCoffe(name, wBoil, bBoil);
    }
  
    public getEsspresso(): Coffe {
        const name = 'Esspresso';
        const wBoil = 100;
        const bBoil = 70;
  
        if (!this.validation(wBoil, bBoil)) {
            return;
        }
  
        return this.makeCoffe(name, wBoil, bBoil);
    }
  
    public getCapuchino(): Coffe {
        const name = 'Capuchino';
        const wBoil = 150;
        const bBoil = 100;
        const mBoil = 70;
  
        if (!this.validation(wBoil, bBoil, mBoil)) {
            return;
        }
  
        return this.makeCoffe(name, wBoil, bBoil, mBoil);
    }
    
    public getLatte(): Coffe {
        const name = 'Latte';
        const wBoil = 200;
        const bBoil = 100;
        const mBoil = 150;
  
        if (!this.validation(wBoil, bBoil, mBoil)) {
            return;
        }
  
        return this.makeCoffe(name, wBoil, bBoil, mBoil);
    }
  
    // ####################################
  
    public setWater(val: number): void {
        this.water.set(val);
    }
  
    public setBeans(val: number): void {
        this.beans.set(val);
    }
  
    public setMilk(val: number): void {
        this.milk.set(val);
    }
  
    // ####################################
  
    private validation(wBoil: number, bBoil: number, mBoil?: number): boolean {
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
    }
  
    private makeCoffe(name: string, wBoil: number, bBoil: number, mBoil: number = null): Coffe {
        return {
            name,
            water: this.water.get(wBoil),
            beans: this.beans.get(bBoil),
            milk: this.milk.get(mBoil)
        }
    }
  
    // ####################################
  }
  
  const milk = new Milk(750);
  const water = new Water(1500);
  const beans = new Beans(500);
  
  const coffeMachine = new CoffeMachine(water, beans, milk);
//   debugger
  console.log(coffeMachine.getAmericano());
  console.log(coffeMachine.getEsspresso());
  console.log(coffeMachine.getLatte());
  console.log(coffeMachine.getCapuchino());
  console.log(coffeMachine.getLatte());
  
  coffeMachine.setBeans(500);
  console.log(coffeMachine.getCapuchino());
  
//   21:00  дз звучит 21:01 