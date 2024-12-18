class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element[0] >= parent[0]) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

var smallestRange = function(nums) {
    let heap = new MinHeap();
    let minRange = [-Infinity, Infinity];
    let maxVal = -Infinity;

    // Step 1: Initialize the heap with the first element of each list
    for (let i = 0; i < nums.length; i++) {
        heap.push([nums[i][0], i, 0]); // [value, list index, element index]
        maxVal = Math.max(maxVal, nums[i][0]);
    }

    // Step 2: While heap has elements
    while (true) {
        let [minVal, listIdx, elemIdx] = heap.pop(); // Get the smallest element

        // Update the range [minVal, maxVal] if it's smaller than the current range
        if (maxVal - minVal < minRange[1] - minRange[0]) {
            minRange = [minVal, maxVal];
        }

        // Move to the next element in the same list
        if (elemIdx + 1 < nums[listIdx].length) {
            let nextVal = nums[listIdx][elemIdx + 1];
            heap.push([nextVal, listIdx, elemIdx + 1]); // Add the next element to the heap
            maxVal = Math.max(maxVal, nextVal); // Update max value
        } else {
            // If one of the lists is exhausted, we are done
            break;
        }
    }

    return minRange;
};
