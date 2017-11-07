function Obj() {

    this.name = "Mujib";

    this.get = function () {
        console.log(this.name);
    }
};

var obj = new Obj();
obj.get();
