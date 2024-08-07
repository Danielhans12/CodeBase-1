//sorting an array 
export let sortingalgo = {
    bubblesort: function(numss, ascending = true) {
        if (!Array.isArray(numss)) {
            throw new TypeError('Invalid input: numss should be an array of numbers');
        }
        
        let n = numss.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                let shouldSwap = ascending ? numss[i] > numss[i + 1] : numss[i] < numss[i + 1];
                if (shouldSwap) {
                    [numss[i], numss[i + 1]] = [numss[i + 1], numss[i]];
                    swapped = true;
                }
            }
            n--;
        } while (swapped);

        return numss;
    },
    mergesort: function(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return this.merge(this.mergesort(left), this.mergesort(right));
    },
    merge: function(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    },
    quicksort: function(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[Math.floor(arr.length / 2)];
        let left = arr.filter(x => x < pivot);
        let middle = arr.filter(x => x === pivot);
        let right = arr.filter(x => x > pivot);

        return [...this.quicksort(left), ...middle, ...this.quicksort(right)];
    },
    insertionSort: function(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    },
    selectionSort: function(arr) {
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
        return arr;
    },
    heapSort: function(arr) {
        const heapify = (arr, n, i) => {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }
            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }
            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                heapify(arr, n, largest);
            }
        };

        let n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        for (let i = n - 1; i >= 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
        }

        return arr;
    },
    radixSort: function(arr) {
        const getMax = arr => Math.max(...arr);

        const countingSort = (arr, exp) => {
            let n = arr.length;
            let output = new Array(n);
            let count = new Array(10).fill(0);

            for (let i = 0; i < n; i++) {
                let index = Math.floor(arr[i] / exp) % 10;
                count[index]++;
            }

            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = n - 1; i >= 0; i--) {
                let index = Math.floor(arr[i] / exp) % 10;
                output[count[index] - 1] = arr[i];
                count[index]--;
            }

            for (let i = 0; i < n; i++) {
                arr[i] = output[i];
            }
        };

        let m = getMax(arr);

        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
            countingSort(arr, exp);
        }

        return arr;
    },
    shellSort: function(arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
        return arr;
    }
};



