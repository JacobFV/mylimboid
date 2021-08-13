export class Limboid {
    constructor(
        // basic info
        public limboidId: number,
        public name: string,
        public description: string,
        // users
        public owner: {
            userId: number
        },
        public viewers: [{
            userId: number
        }],
        public controllers: [{
            userId: number
        }]
    ) { }
}