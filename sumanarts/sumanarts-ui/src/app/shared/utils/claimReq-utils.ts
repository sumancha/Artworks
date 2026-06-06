export const claimReq = {
  adminOnly: (c: any) => c.role === 'Admin',
  adminOrArtist: (c: any) => c.role === 'Admin' || c.role === 'Artist',
  artistOnly: (c: any) => c.role === 'Artist',
  userOrArtist: (c: any) => c.role === 'User' || c.role === 'Artist',
  userOnly: (c: any) => c.role === 'User',
};
