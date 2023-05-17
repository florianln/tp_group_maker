class Group {
    firstname(firstname: string): string {
        if (firstname === "") {
            throw new Error("Firstname is required");
        }
        let value: string;
        value = firstname;
        return value;
    }
    lastname(lastname: string): string {
        if (lastname === "") {
            throw new Error("Lastname is required");
        }
        let value: string;
        value = lastname;
        return value;
    }
}

export default Group;