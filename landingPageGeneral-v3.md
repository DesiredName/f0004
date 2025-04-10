### The `landingPageGeneral-v3` control flow

URL: https://cdn.betonline.ag/js/aff/landingPageGeneral-v3.js

On script start:

1. Create object `Adp`
2. Call `addLoadEvent` function with new `Adp.persistAffiliateData` target
    1. If `window.onload` was already assinged a value
        1. Create new function
        2. Call original `oldonload` event that was assigned previously
        3. Append `Adp.persistAffiliateData` to call chain
    2. Append `Adp.persistAffiliateData` to `window.onload` event
3. Add listener to `window.onload` event, that calls `setAffiliateInformation` function

When `onload` event is fired:

1. `persistAffiliateData` is been called
    1. try to find `bTag` in `window.location.href` query parameters
        1. IF not found -> exit
        `if (!bTag) { return false; }`
    2. scan for all `a` (links) on the page
        1. IF not found -> exit
        `if (!aLinks) { return false; }`
    3. loop through all links that contain `localhost` or `betonline` string in it
        1. append `bTag` to every `a` on the page
        `aLinks[i].href = aLinks[i].href + "?" + bTag;`
    4. Done

2. `setAffiliateInformation` is been called
    1. look for `btag` in `window.location.serach` 
    2. look for `affid` in `window.location.serach` 
    3. IF ANY tag is found
        1. set cookie:
            ```
            setCookie('IncomeAccess', `btag=${btag}&affid=${affid}`);
            ```
    4. Done 
