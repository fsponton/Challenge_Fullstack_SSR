export class UserError extends Error {
    constructor(message, code = 404) {
        super(message);
        this.name = 'UserError'
        this.code = code;
    }
}


export class KeysError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'KeysError'
        this.code = code;
    }
}

export class DatabaseError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.name = 'DatabaseError';
        this.code = code;
    }
}

export class NotFoundError extends Error {
    constructor(message, code = 404) {
        super(message);
        this.name = 'Not Found'
        this.code = code;
    }
}

export class TokenError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'tokenError'
        this.code = code;
    }
}

export class AccessError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'accessError'
        this.code = code;
    }
}


export class DateError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'dateError'
        this.code = code;
    }
}