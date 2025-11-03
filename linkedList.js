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
}


class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}



const lista = new LinkedList();
console.log(lista);

lista.append('kiko');
console.log(lista);

lista.append('pur');
console.log(lista);

lista.append('sous');
console.log(lista);

lista.prepend('jacky');
console.log(lista);

console.log(lista.head.value)
console.log(lista.head.next.value);
console.log(lista.head.next.next.value);
console.log(lista.head.next.next.next.value);
console.log(lista.head.next.next.next.next);