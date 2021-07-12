function Parent() {
    this.names = ['Tom', 'Jack'];
}

Parent.prototype.getNames = function () {
    console.log(this.names.join());
}

function Children() {

}

Children.prototype = new Parent();

const c1 = new Children();
c1.names.push('Ming');
const c2 = new Children();

c1.getNames();
c2.getNames();

// 缺点，引用类型的属性会被所有的实例共享