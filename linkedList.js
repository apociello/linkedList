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
        if (this.head.value != null) {
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.size++;
        } else {
            this.append(value);
        }
    }

    getSize() {
        return `Size: ${this.size}`;
    }

    getHead() {
        if (this.head.value == null) {
            return 'No elements in the list';
        } else if(this.head.next == null) {
            return `HEAD ->  value: ${this.head.value}  next: ${this.head.next}`;
        } else {
            return `HEAD ->  value: ${this.head.value}  next: ${this.head.next.value}`;
        }
        
    }

    getTail() {
        if (this.head.value == null) return 'No elements in the list';
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }

        return `TAIL ->  value: ${current.value}  next: ${current.next}`;
    }

    at(index) {
        if (index > this.size || index <= 0) return `No elements at index ${index}` ;

        let current = this.head;
        for (let i=1; i < index; i++) {
            current = current.next;
        }

        if (current.next == null) return `Node(${index}) -> value: ${current.value}  next: ${current.next}`;
        return `Node(${index}) -> value: ${current.value}  next: ${current.next.value}`;
    }

    pop() {
        if (this.head.value == null) return 'No elements in the list';
        let prev;
        let current = this.head;
        while (current.next != null) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.size--;
        return `Removed -> value: ${current.value}  next: ${current.next}`;
    }

    contains(value) {
        if (this.head.value == null) return `Contains(${value}) -> false`;
        let current = this.head;
        while(current != null) {
            if(current.value == value) return `Contains(${value}) -> true`;
            current = current.next;
        }

        return `Contains(${value}) -> false`;
    }

    find(value) {
        if (this.head.value == null) return `Find(${value}) -> null`;
        let index = 1;
        let current = this.head;
        while(current.value != value) {
            current = current.next;
            if (current == null) return `Find(${value}) -> null`;
            index++;
        }

        if (current.value == value) return `Find(${value}) -> ${index}`;
    }

    toString() {
        if (this.head.value == null) return 'null';
        let string = '';
        let current = this.head;
        while(current != null) {
            string+= `( ${current.value} ) -> `;
            current = current.next;
        }

        string += '( null )';
        return string;
    }

    insertAt(value, index) {

        if (index <= 0 || index > this.size + 1) {
            return `Insert(${index}) -> error`;
        } else if (index == this.size + 1) {
            this.append(value);
        } else if (index == 1) {
            this.prepend(value);
        } else {
            let prev;
            let current = this.head

            for(let i=1; i<index; i++) {
                prev = current;
                current = current.next;
            }
            
            const node = new Node(value);
            prev.next = node;
            node.next = current;
        }
        

        return `Insert(${index}) -> ${value}`;
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
console.log(lista.at(1));
console.log(lista.at(2));
console.log(lista.at(3));
console.log(lista.at(4));
console.log(lista.pop());
console.log(lista.contains('pur'));
console.log(lista.contains('sous'));
console.log(lista.find('jacky'));
console.log(lista.find('kiko'));
console.log(lista.find('pur'));
console.log(lista.find('sous'));
console.log(lista.toString());
console.log(lista.insertAt('dylan', 5));
console.log(lista.toString());


