class LinkedList {
    constructor() {
        this.head = new Node();
        this.size = 0;
    }

    append(value) {
        if (this.head.value == null) {
            const node = new Node(value, null)
            this.head.value = node.value;
            this.head.next = node.next;
            this.size++
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }

            current.next = new Node(value, null);
            this.size++;
        }
    }

    prepend(value) {
        if (this.head.value == null) {
            const node = new Node(value, null)
            this.head.value = node.value;
            this.head.next = node.next;
            this.size++
        } else {
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }

    getSize() {
        return `Size: ${this.size}`;
    }

    getHead() {
        if (this.head.value == null) return 'No elements in the list';
        return `HEAD ->  value: ${this.head.value}  next: ${this.head.next.value}`;
    }

    getTail() {
        if (this.head.value == null) return 'No elements in the list';
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }

        return `TAIL ->  value: ${current.value}  next: ${current.next}`;
    }
}


class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}


const lista = new LinkedList();

lista.append('kiko');
lista.append('pur');
lista.append('sous');
lista.prepend('jacky');

console.log(lista.getSize());
console.log(lista.getHead());
console.log(lista.getTail());