


export class User  {
    
    

    constructor(

        private id:string,
        private name:string,
        private email:string,
        private password:string,
        private createAt: string



    ){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.createAt = createAt
    }



    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(value: string): void {
        this.email = value
    }

    public getPassword(): string {
        return this.password
    }

    public setPassword(value: string): void {
        this.password = value
    }

    public getCreatedAt(): string {
        return this.createAt
    }

    public setCreatedAt(value: string): void {
        this.createAt = value
    }



}



// private id: string,
//     public name: string,
//     public email: string,
//     password: string,
//     created_at: string