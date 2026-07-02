import { getProjectType } from '../getProjectType';

describe('getProjectType', () => {
  it('returns "Community" when there is no license', () => {
    expect(getProjectType({ isEE: false })).toBe('Community');
    expect(getProjectType({ isEE: false, plan: 'growth' })).toBe('Community');
  });

  it('returns "Growth" when the plan name contains "growth" (case-insensitive)', () => {
    expect(getProjectType({ isEE: true, plan: 'growth' })).toBe('Growth');
    expect(getProjectType({ isEE: true, plan: 'Growth' })).toBe('Growth');
    expect(getProjectType({ isEE: true, plan: 'Growth SSO CLI' })).toBe('Growth');
  });

  it('returns "Enterprise" for any other licensed plan', () => {
    expect(getProjectType({ isEE: true })).toBe('Enterprise');
    expect(getProjectType({ isEE: true, plan: 'enterprise' })).toBe('Enterprise');
    expect(getProjectType({ isEE: true, plan: 'Scale' })).toBe('Enterprise');
  });
});
