import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('./journey.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(source, { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 });
const { ground, bodyGround, foot, leg, knee, hipHeight, LEG_SEGMENT, RUN, DOWN, VALLEY, UP, SUMMIT, LOW } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

test('staircase descends and ascends to the original elevation', () => {
  assert.equal(ground(DOWN - 1), 400);
  assert.equal(ground(VALLEY), LOW);
  assert.equal(ground(UP - 1), LOW);
  assert.equal(ground(SUMMIT), 400);
  for (let x = DOWN; x < VALLEY; x += RUN) assert.ok(ground(x + 1) >= ground(x - 1));
  for (let x = UP; x < SUMMIT; x += RUN) assert.ok(ground(x + 1) <= ground(x - 1));
});
test('body stays continuous at stair edges and landings', () => {
  for (let x = 300; x < 4700; x++) assert.ok(Math.abs(bodyGround(x + .001) - bodyGround(x - .001)) < .001);
});
test('planted feet remain fixed on their tread during the stance phase', () => {
  for (let k = 0; k < 30; k++) {
    for (const offset of [0, 1]) {
      const start = 120 + (k * 2 - offset + .1) * RUN;
      const end = start + .7 * RUN;
      assert.deepEqual(foot(start, offset), foot(end, offset));
      const toe = foot(start, offset);
      assert.equal(toe.y, ground(toe.x));
    }
  }
});
test('feet do not teleport when switching between stance and swing', () => {
  for (let k = 0; k < 65; k++) {
    for (const offset of [0, 1]) {
      const x = 120 + k * RUN;
      const before = foot(x - .0001, offset), after = foot(x + .0001, offset);
      assert.ok(Math.hypot(before.x - after.x, before.y - after.y) < .001);
    }
  }
});
test('the same playhead produces the same pose when scrubbing backwards', () => {
  const positions = Array.from({ length: 100 }, (_, i) => 120 + i * 47);
  const forward = positions.map(x => [foot(x, 0), foot(x, 1)]);
  const backward = [...positions].reverse().map(x => [foot(x, 0), foot(x, 1)]).reverse();
  assert.deepEqual(backward, forward);
});
test('leg geometry remains finite along the entire route', () => {
  for (let x = 120; x <= 4980; x += 5) {
    for (const offset of [0, 1]) {
      const toe = foot(x, offset);
      assert.doesNotMatch(leg(x, bodyGround(x) - 91, toe.x, toe.y), /NaN|Infinity/);
    }
  }
});

test('both leg segments keep their length on flats and stairs, including reduced motion', () => {
  for (const reduced of [false, true]) {
    for (let x = 120; x <= 4980; x += 1.25) {
      const feet = [foot(x, 0, reduced), foot(x, 1, reduced)];
      const hipY = hipHeight(x, ...feet, reduced);
      for (const toe of feet) {
        const joint = knee(x, hipY, toe.x, toe.y);
        assert.ok(Math.abs(Math.hypot(joint.x - x, joint.y - hipY) - LEG_SEGMENT) < 1e-6);
        assert.ok(Math.abs(Math.hypot(toe.x - joint.x, toe.y - joint.y) - LEG_SEGMENT) < 1e-6);
        assert.ok(toe.y <= ground(toe.x) + 1e-6, `foot clips a stair at ${x}`);
        assert.ok(joint.y >= hipY - LEG_SEGMENT / 3, `knee lifts too high at ${x}`);
      }
    }
  }
});

test('pelvis and feet remain continuous when crossing steps and gait phases', () => {
  for (let x = 120; x <= 4980; x++) {
    const before = x - .0001, after = x + .0001;
    const previous = hipHeight(before, foot(before, 0), foot(before, 1));
    const next = hipHeight(after, foot(after, 0), foot(after, 1));
    assert.ok(Math.abs(previous - next) < .01, `hip snaps at ${x}`);
  }
});
