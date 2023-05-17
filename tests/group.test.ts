import { describe, expect, test, beforeEach } from '@jest/globals';
import Group from '../classes/Group';

let group: Group;

beforeEach(() => {
    group = new Group();
});

describe('Group', () => {
    test("Group is defined", () => {
        expect(group).toBeDefined();
    });
});