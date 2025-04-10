### This document describes how `k_betonline.js` works

### Definitions
*User* - the visitor of `betonline.ag`
*Client* - the `k_betonline.js` code (script)
*Pixel* - the tracking script itself

#### Notes

- The final version is found in `decrypted.js` file.
- The source code is provided in `k_betonline.js` file.
- The *ORIGIN* version is a formatted version of the same file as seen in Chrome Dev Tools. It is used to link the decrypted code (`decrypted.js`) with the original code for future reviews.
- The `core` part is an actual script code that is been executed. This is a `iif` function, hidden in lines 30-1946.
- The ofuscation mechanism and it's code was not decoded here and is stripped away in final version as useless. THe soul purpose of that code is to cloack the `core` part of the script.
- This scrypt is generated for `betonline.ag` site SPECIFICALY as it contains CONSTANT values that are base url and domain names.

#### The logic behind this script

1. Generate `new UUID` for users's browser
2. Generate `new Hash` for `client's app version` + user's browser
2. Search for cookie named `cslfp`
    1. IF cookie is found
        1. Extract `uuidClient` value from that cookie 
        2. Return `uuidClient` value
        3. Replace content of `new UUID` with `uuidClient`
    2. ELSE
        1. Use passed value `new UUID` and `new Hash` to generate new `cslfp` cookie content
        2. Store that cookie in user's browser
        3. Return `new UUID` as a result back
3. Create new `script` named `pixel` in DOM
    1. Take `base url` that is provided as constant value (`https://pixel.prdredir.com`)
        1. Append params to the`base url`
            1. Add `lp` parameter with `document.location.href` (current page viewed by user)
            2. Add `ts` parameter that is a timestamp when the script was started AFTER it was decrypted
            3. Add `cslfp` parameter with `cslfp` cookie value
    2. Set `referrerPolicy` to `strict-origin-when-cross-origin`
    3. Set `async` to `true`
    4. Set `src` to `{https://pixel.prdredir.com}/rtg/sync/{betonline}.gif?ts={}&lp={betonline.ag}&cslfp={}`
4. Append `pixel` script before the first `script` tag in DOM and execute it
5. In response, the `GIF` request sets another cookie, that contains the following data:
```
slfp=eyJ1dWlkIjoiNjY1MTdkZTgtNzgyMC00ZmFjLWE5MjItOTNmMmY3NjhjMDFj%0AIiwibmFtZSI6ImJldG9ubGluZSIsInRzIjoiMjAyNS0wNC0xMCAwNzowNjo0%0AMCAtMDMwMCJ9%0A; domain=.prdredir.com; path=/; expires=Sat, 10 May 2025 10:06:47 GMT; secure; SameSite=None
```

#### The control flow:

1. The `core` script is been decrypted
2. Constant values are set as external values:
```
/** Probably variable part, defines for which domain all set cookies are assigned */
const _0x3cf4cb = '.betonline.ag';
/** Time when script started its execution */
const _0x11ec28 = new Date().getTime()
/** Probably variable part, defines UUID of this generated script */
const _0x3ee921 = 'd1dc928c-a3bd-453b-bdb9-45c7bc53e3c3'; 
/** Assymetric encryption key `public part`. Useless for decryption by itself, as it used in combination with `private part` that is stored inside server */
const _0x3a1367 = 'MIICWwIBAAKBgQDYL6VVQXPvQgSXVu4uznKZHDeX4sABpL19/h8AXSg4Z+VkHnWM\\n+xpVl4EB2DjsNu1Kw1IEoXFnMJJKs9nQ7bydvt26B4D4BnrWOSfB+sevn3UcJmk4\\nkE+uQv7TRX3no13YREhGSUVEqFSEkDdcLlta41BDb8bj51QhJzF5WZpa3QIDAQAB\\nAoGADfTtgJaMLIsfjsGu+NidL2NR931NFg4TqbmpOLXK7fFPLuqEfkiLx7DTRFI4\\nQo+9PBFmDyR5FMde+nGoA0QF5C7MJ+Ysz4XjgKVRfZVxXX4C2zjUeSqu/ApIHJv8\\nrUFLo/5Lys/c3LcXwn8Hm4ww6MQD0Wfj+BDVpngEi+02voUCQQD5PkVwVFMf5EAz\\njNfcguw16Puu4qig7LWLl+14H0Ukf7s5UoEqS5pk8rnYL5icf5s0AR0foBsv2hT/\\nB0vDlEYbAkEA3gv17o/z0YfZzJm12GMzoLUiuX7RVRZyzQ3He5vpl3B1oIsXfYFI\\nuwihlnF+Pge9NWpKkt3gkWASeDaGTVDSZwJAOWxCXUXgPNm+fOH3HaPAPg9mZP1t\\ncl322alwGZvCt00CWouKnK78bEOL06XrmCrCHDIhfpbJjLXG3pbUusOffwJAU4AB\\n8r1VffTtVYB0HrRnZMbZERJ8m9e+QhgtbPFbrWRQB5hms/6bICKFyXJSe/cjEuQu\\nuP4RBfov198BMC/1fwJAac7UIJ1WW9kp0Ov5QEWE0W60sabCab06sMugETY3Y+Ry\\ni0OAByrkBeMIN6wUt1bo1hgNtg1cSjNprv+oaxyNtg=='; // key: lEsPl
/** Probably variable part of the app, depending on what site it is running on */
const _0x5c8610 = {
    'name': 'betonline',
    // ORIGIN: _0x2049d1[_0x58d162(0x1d, -0x194, -0x1b9, -0xde, 0x41) + 'rl'] 
    'baseUrl': 'https://pixel.prdredir.com',
};
```
3. Script starts execution at line
```new _0x4a1750()[_0x1c4300(0x4c1, 0x4a7, 0x4da, 0x56e, 0x639)]()```
4. It creates new state object
```
function _0x4a1750() {
    this.endpoint = this.getUrl(_0x5c8610);
    this.pixel = document.createElement('script');
    this.uuid = new _0x574f8a();
    this.closest = document.getElementsByTagName('script')[0];
    this.assimetric = new _0x5f3c7d();
    this.landingPage = document.location['href'];

    const _0x162392 = {};
    _0x162392['domain'] = _0x3cf4cb,
    this.cookieService = new _0x468f57(_0x162392);
}
```
5. Helper objects are been initialized:
```
/** UUID generation service based on 'xxxx...' template */
function _0x574f8a() {}

/** Serializer object */
function _0x5f3c7d() {}

/** CookieService object */
function _0x468f57({domain: _0x573996}) {        
    // ORIGIN: _0xedd9a[_0x4a15bb(0x58b, 0x4ea, 0x5ee, 0x59c, 0x3d4)](_0xedd9a[_0x4a15bb(0x5f8, 0x58d, 0x622, 0x520, 0x57a)], _0xedd9a[_0x1fc2cb(0x42, 0xe, 0x121, 0x164, 0xa5)])
    this.domain = _0x573996 ;
}
```
6. The new `new UUID` value is been generated for user's browser as unique identifier
7. Script verifies if `cslfp` cookie exists and 
    1. Either takes the `uuidClient` value from that cookie
    2. Or creates new `cslfp` cookie with passed `new UUDI` value
    3. Returns used `uuidClient` version (either stored or genreated)
8. Using object `_0x5c8610` and its `baseURL` and `name` values, script generates new `pixel` url: `https://pixel.prdredir.com/rtg/sync/betonline.gif`
9. New query parameters are been added:
    1. Add `lp` parameter with `document.location['href']` (current page viewed by user)
    2. Add `ts` parameter that is a timestamp when the script was run
    3. Add `cslfp` parameter with `cslfp` cookie value
```
{https://pixel.prdredir.com}/rtg/sync/{betonline}.gif?ts={}&lp={betonline.ag}&cslfp={}
```
10. Sets additional script attributes:
    1. Set `referrerPolicy` to `strict-origin-when-cross-origin`
    2. Set `async` to `true`
    3. Set `src` to `{https://pixel.prdredir.com}/rtg/sync/{betonline}.gif?ts={}&lp={betonline.ag}&cslfp={}`
11. Executes script
