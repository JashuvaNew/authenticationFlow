# TODO: Add Role-Based Access Control to JWT Auth System

## Steps to Complete:
- [ ] Update models/user.js: Add 'role' field with default 'user'
- [ ] Update routes.j/auth.js: Modify registration to accept optional 'role' parameter
- [ ] Update utils/tokens.js: Include role in signAccessToken payload
- [ ] Update middleware/auth.js: Extract and set role in req.user
- [ ] Update routes.j/profile.js: Ensure role is returned in user object

## Testing:
- [ ] Test user registration with and without role
- [ ] Test login and token generation
- [ ] Test profile endpoint returns role
