export class User {
    constructor(
        public readonly userId: number,
        public readonly name: string,
        public readonly email: string,
        public readonly viewableLimboids: {
            limboidId: number,
        },
        public readonly controllableLimboids: {
            limboidId: number,
        },
        public readonly ownedLimboids: {
            limboidId: number,
        }
    ) { }
}