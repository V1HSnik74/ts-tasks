class HanoiTower<T> {
    first: string;
    second: string;
    third: string;
    firstStack: T[] = [];
    secondStack: T[] = [];
    thirdStack: T[] = [];

    constructor(first: string = "First", second: string = "Second", third: string = "Third") {
        this.first = first;
        this.second = second;
        this.third = third;
    }

    public addDisks(disks: Array<T>): void {
        for (const disk of disks) {
            this.firstStack.push(disk);
        }
    }

    public solve(): void{
        this.moveToBar(this.firstStack, this.secondStack, this.first, this.second, this.firstStack.length, this.thirdStack, this.third)
    }

    private moveToBar(from: T[], target: T[],
                        nameFrom: string, nameTarget: string,
                        diskCount: number, helpBar: T[], nameHelpBar: string): void
    {
        if (diskCount === 0) return
        this.moveToBar(from, helpBar, nameFrom, nameHelpBar, diskCount - 1, target, nameTarget);
        const disk = from.pop()!
        target.push(disk)
        console.log(`Переместить диск ${disk} с ${nameFrom} на ${nameTarget}`)
        this.moveToBar(helpBar, target, nameHelpBar, nameTarget, diskCount - 1, from, nameFrom);
    }
}


const hanoiNumber = new HanoiTower();
hanoiNumber.addDisks([3, 2, 1]);
hanoiNumber.solve();

const hanoiString = new HanoiTower('A', 'C', 'B');
hanoiString.addDisks(["C", "B", "A"]);
hanoiString.solve();