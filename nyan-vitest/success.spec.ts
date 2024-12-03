import { describe, expect, it } from 'vitest';
import { tests } from './index.ts';

describe('success', () => {
  it.each(tests)('runs test number %s', async (num, delay) => {
    await delay();
    expect(num).toBeTruthy();
  });
});
