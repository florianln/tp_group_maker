import { describe, expect, test, beforeEach } from '@jest/globals';
import Group from '../classes/Group';
import { faker } from '@faker-js/faker'

let group: Group;

function createRandomFirstname() {
    return faker.person.firstName();
}

function createRandomLastname() {
    return faker.person.lastName();
}

beforeEach(() => {
    group = new Group();

});

describe('Group', () => {
    test("Group is defined", () => {
        expect(Group).toBeDefined();
    });
    test("Group group instance is defined", () => {
        expect(group).toBeDefined();
    });
    test("Group throws error when firstname is empty", () => {
        expect(() => {
            group.firstname("");
        }).toThrowError("Firstname is required");
    });
    test("Group throws error when lastname is empty", () => {
        expect(() => {
            group.lastname("");
        }).toThrowError("Lastname is required");
    });
    test("Group returns firstname", () => {
        expect(group.firstname("John")).toBe("John");
    });
    test("Group returns lastname", () => {
        expect(group.lastname("Doe")).toBe("Doe");
    });
    test("Group returns firstname and lastname", () => {
        expect(group.firstname("John")).toBe("John");
        expect(group.lastname("Doe")).toBe("Doe");
    });
    test("Group returns firstname and lastname with random values", () => {
        expect(group.firstname(createRandomFirstname())).toBeDefined();
        expect(group.lastname(createRandomLastname())).toBeDefined();
    });
    test("Group returns 20 firstname and lastname with random values", () => {
        for(let i = 0; i < 20; i++) {
            expect(group.firstname(createRandomFirstname())).toBeDefined();
            expect(group.lastname(createRandomLastname())).toBeDefined();
        }
    });
});