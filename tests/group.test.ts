import { describe, expect, test, beforeEach } from '@jest/globals';
import Group from '../classes/Group';

let group: Group;

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
});