function Parent(names) {
    this.names = names || ['Kevin', 'Bolin'];
}

Parent.prototype.getNames = function() {
    console.log(this.names);
}

function Child(names) {
    Parent.call(this, names);
}

Child.prototype = new Parent(); // 一次
Child.prototype.constructor = Child;


const c1 = new Child(); // 两次
c1.getNames();
const c2 = new Child(['Tom', 'Jim']);
console.log(c2.names);

// 缺点，会调用两次父构造函数,可能会创建了多余的属性
