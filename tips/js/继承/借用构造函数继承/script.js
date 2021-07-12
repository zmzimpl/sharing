function Parent(names) {
    this.names = names || ['Kevin', 'Bolin'];
}

Parent.prototype.getNames = function() {
    console.log(this.names);
}

function Child(names) {
    Parent.call(this, names);
}

const c1 = new Child();
console.log(c1.names);
const c2 = new Child(['Tom', 'Jim']);

c2.getNames();  // 报错
// console.log(c2.names);


// 缺点，不能继承父类原型对象上的方法

