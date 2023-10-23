class Poultry{
    constructor(id, category, price){
        this.id = id;
        this.category = category;
        this.price = price || 0;
    }
}
class Chicken extends Poultry {
    constructor(id, price, isMature){
        super(id, "chicken", price, isMature)
        this.isMature=isMature || 'n';
    }
}
class Duck extends Poultry {
    constructor(id, price, isMature){
        super(id, "duck", price,isMature)
        this.isMature=isMature|| 'n';
    }
}
class Turkey extends Poultry {
    constructor(id, price, isMature){
        super(id, "turkey", price,isMature)
        this.isMature=isMature|| 'n';
    }
}
class Quail extends Poultry {
    constructor(id, price, isMature){
        super(id, "quail", price,isMature)
        this.isMature=isMature|| 'n';
    }
}
class Other extends Poultry {
    constructor(id, price, isMature){
        super(id, "other", price,isMature)
        this.isMature=isMature|| 'n';
    }
}

module.exports = {
    Chicken, Duck, Turkey, Quail, Other
}