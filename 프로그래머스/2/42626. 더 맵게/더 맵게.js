class MinHeap {
    constructor(heap) {
        this.heap = [];
        heap.forEach((sc) => this.push(sc));
    }
    
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        const length = this.heap.length;
        const root = this.peek();
        let index = 0;
        
        while(true) {
            let minNodeIndex = index;
            const leftNodeIndex = 2 * index + 1;
            const rightNodeIndex = 2 * index + 2;
            
            const leftNode = this.heap[leftNodeIndex];
            const rightNode = this.heap[rightNodeIndex];
            
            if(leftNodeIndex < length && leftNode < this.heap[minNodeIndex]) {
                minNodeIndex = leftNodeIndex;
            }
            if(rightNodeIndex < length && rightNode < this.heap[minNodeIndex]) {
                minNodeIndex = rightNodeIndex;
            }
            if(minNodeIndex === index) break;
            
            this.swap(index, minNodeIndex);
            index = minNodeIndex;
        }
    }
    
    push(node) {
        this.heap.push(node);
        this.heapifyUp()
    }
    
    shift() {
        if(this.heap.length === 0) return;
        
        const root = this.heap[0];
        const lastNode = this.heap.pop();
        
        if(this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }
        
        return root;
    }
    
    peek() {
        return this.heap[0];
    }
    
    combine() {
        if(this.heap.length < 2) return;
        
        const first = this.shift();
        const second = this.shift();
        const result = first + 2 * second;
        this.push(result);
    }
}

function solution(scoville, K) {
    let answer = 0;
    const minHeap = new MinHeap(scoville);
    
    while(minHeap.heap.length > 1) {
        if(minHeap.peek() >= K) return answer;
        minHeap.combine();
        answer++;
    }
    
    return minHeap.peek() >= K ? answer : -1;
}