const { appendFile } = require("graceful-fs");

class Node {
	constructor(value) {
		this.value = null;
		this.nextNode = null;
	};
}

class LinkedList {
	constructor(headNode) {
		this.HEAD = headNode;
		this.HEAD.nextNode = null;
	}

	append(value) {
		const newNode = new Node(value);
		let temp = this.HEAD;

		while (temp.nextNode != null) {
			temp = temp.newNode;
		}

		temp.newNode = newNode;
	};

	prepend(value) {
		let newHead = new Node(value);

		newHead.nextNode = this.HEAD;
		this.HEAD = newHead;
	}
}
