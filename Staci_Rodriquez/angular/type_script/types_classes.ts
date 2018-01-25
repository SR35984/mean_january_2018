var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];

interface ObjectInterface {
	name?: string,
	x?: number,
	y?: number
}
var myObj: ObjectInterface = { name: 'Bill' };

var anythingVariable: any = "Hey";
anythingVariable = 25;

var arrayOne: boolean [] = [true, false, true, true];
var arrayTwo: any [] = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };

class MyNode {
	val: number;
	_priv: number;

	constructor(val: number) {
		this.val = 0;
		this.val = val;
	}
	doSomething() :void {
		this._priv = 10;
		return;
	}
}

var myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() :void {
	console.log("Hello World");
	return;
}

function sendingErrors() :never {
	throw new Error('Error Message');
}