function Parent(names) {
    this.names = names;
}

Parent.prototype.getNames = function() {
    console.log(this.names);
}

function Child(names) {
    Parent.call(this, names);
}

const Fn = function() { }

Fn.prototype = Parent.prototype;

Child.prototype = new Fn();

const c1 = new Child(['Jim', 'Tom']);

c1.getNames();

// 优点，只调用了一次父构造函数，避免了创建不必要的属性