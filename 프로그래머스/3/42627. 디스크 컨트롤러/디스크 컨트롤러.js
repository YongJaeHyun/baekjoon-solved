class HardDisk {
    constructor() {
        this.jobs = [];
    }
    
    swap(index1, index2) {
        [this.jobs[index1], this.jobs[index2]] = [this.jobs[index2], this.jobs[index1]];
    }
    
    compare(a, b) {
        if (a.duration !== b.duration) return a.duration - b.duration;
        if (a.reqTime !== b.reqTime) return a.reqTime - b.reqTime;
        return a.num - b.num;
    }
    
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    
    heapifyDown() {
        const length = this.jobs.length;
        let index = 0;
        
        while(true) {
            let smallest = index;
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            
            if(leftChildIndex < length && this.compare(this.jobs[smallest], this.jobs[leftChildIndex]) > 0) {
                smallest = leftChildIndex;
            }
            if(rightChildIndex < length && this.compare(this.jobs[smallest], this.jobs[rightChildIndex]) > 0) {
                smallest = rightChildIndex;
            }
            if(index === smallest) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }
    
    heapifyUp() {
        let index = this.jobs.length - 1;
        
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.jobs[parentIndex];
            const child = this.jobs[index];
            
            if(this.compare(parent, child) <= 0) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    push(job) {
        this.jobs.push(job);
        this.heapifyUp();
    }
    
    shift() {
        if(this.jobs.length === 0) return;
        
        const job = this.peek();
        const lastJob = this.jobs.pop();
        if(!this.isEmpty()) {
            this.jobs[0] = lastJob;
            this.heapifyDown();
        }
        return job;
    }
    
    isEmpty() {
        return this.jobs.length === 0;
    }
    
    peek() {
        return this.jobs[0];
    }
}

function solution(jobs) {
    let time = 0;
    let total = 0;
    let count = 0;
    let index = 0;
    const hardDisk = new HardDisk();
    jobs = jobs.map((job, index) => ({
        num: index,
        reqTime: job[0],
        duration: job[1],
    }));
    jobs.sort((a, b) => a.reqTime - b.reqTime);
    
    while (count < jobs.length) {
        while (index < jobs.length && jobs[index].reqTime <= time) {
            hardDisk.push(jobs[index++]);
        }

        if (!hardDisk.isEmpty()) {
            const job = hardDisk.shift();
            time += job.duration;
            total += time - job.reqTime;
            count++;
        } else {
            time = jobs[index].reqTime;
        }
    }
    
    return Math.floor(total / jobs.length);
}