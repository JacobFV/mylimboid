export default class Limboid {
    constructor(
        // basic info
        public limboidId: Number,
        public name: String,
        public description: String,
        // users
        public owner: {
            userId: Number
        },
        public viewers: [{
            userId: Number
        }],
        public controllers: [{
            userId: Number
        }]
    ) { }
}