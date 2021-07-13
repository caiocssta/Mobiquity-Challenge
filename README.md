# Mobiquity QA Challenge

### Test cases
- Returns the correct user ID for specific user
- Returns the correct post length when making a request
- Validate emails of comments authors in posts
- Return empty data for an invalid username
- Return empty comments for invalid post ID
- Return status code 404 for invalid post ID
- Return status code 404 for invalid user ID
- Return status code 201 when creating a new post
- Return status code 200 when updating an existing post
- Return status code 200 when deleting an existing post

### Details
- Cypress as the testing framework
- NPM as the package/dependency manager
- JavaScript as the main programming language
- mochawesome and mochawesome-merge as the reports generator for the tests

### Requirements
- Node.js 12 or 14 and above
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above

Tests can be ran using the following command:
```
npm run test
```

### Test reporting
The test reports among with the HTML page generated are stored in the **results/mochareports** folder

### CircleCI
The invite link for the Pipelines on CircleCI was sent to the recruiter who is handling my interview process.
