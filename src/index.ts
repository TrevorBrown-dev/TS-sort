class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
        for (let j = 0; j < this.collection.length - 1 - i; j++) {
            if (this.collection[j] > this.collection[j + 1]) {
                const temp = this.collection[j];
                this.collection[j] = this.collection[j + 1];
                this.collection[j + 1] = temp;
            }
        }
    }
    }

}


const sorter = new Sorter([1,2,4,3])

sorter.sort();
console.log(sorter.collection);



