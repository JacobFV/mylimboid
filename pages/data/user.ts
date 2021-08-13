export class User {
    constructor(
        public readonly userId: Number,
        public readonly name: String,
        public readonly email: String,
        public readonly viewableLimboids: {
            limboidId: Number,
        },
        public readonly controllableLimboids: {
            limboidId: Number,
        },
        public readonly ownedLimboids: {
            limboidId: Number,
        }
    ) { }
}