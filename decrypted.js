(function() {
    /** Probably variable part, defines to which domain all set cookies are assigned */
    const _0x3cf4cb = '.betonline.ag'; // key: mimcu

    /** Time when script started its execution */
    const _0x11ec28 = new Date().getTime();

    /** Probably variable part, defines UUID of this generated script */
    const _0x3ee921 = 'd1dc928c-a3bd-453b-bdb9-45c7bc53e3c3'; // key: JEvre
    
    /** Assymetric encryption key: public */
    const _0x3a1367 = 'MIICWwIBAAKBgQDYL6VVQXPvQgSXVu4uznKZHDeX4sABpL19/h8AXSg4Z+VkHnWM\\n+xpVl4EB2DjsNu1Kw1IEoXFnMJJKs9nQ7bydvt26B4D4BnrWOSfB+sevn3UcJmk4\\nkE+uQv7TRX3no13YREhGSUVEqFSEkDdcLlta41BDb8bj51QhJzF5WZpa3QIDAQAB\\nAoGADfTtgJaMLIsfjsGu+NidL2NR931NFg4TqbmpOLXK7fFPLuqEfkiLx7DTRFI4\\nQo+9PBFmDyR5FMde+nGoA0QF5C7MJ+Ysz4XjgKVRfZVxXX4C2zjUeSqu/ApIHJv8\\nrUFLo/5Lys/c3LcXwn8Hm4ww6MQD0Wfj+BDVpngEi+02voUCQQD5PkVwVFMf5EAz\\njNfcguw16Puu4qig7LWLl+14H0Ukf7s5UoEqS5pk8rnYL5icf5s0AR0foBsv2hT/\\nB0vDlEYbAkEA3gv17o/z0YfZzJm12GMzoLUiuX7RVRZyzQ3He5vpl3B1oIsXfYFI\\nuwihlnF+Pge9NWpKkt3gkWASeDaGTVDSZwJAOWxCXUXgPNm+fOH3HaPAPg9mZP1t\\ncl322alwGZvCt00CWouKnK78bEOL06XrmCrCHDIhfpbJjLXG3pbUusOffwJAU4AB\\n8r1VffTtVYB0HrRnZMbZERJ8m9e+QhgtbPFbrWRQB5hms/6bICKFyXJSe/cjEuQu\\nuP4RBfov198BMC/1fwJAac7UIJ1WW9kp0Ov5QEWE0W60sabCab06sMugETY3Y+Ry\\ni0OAByrkBeMIN6wUt1bo1hgNtg1cSjNprv+oaxyNtg=='; // key: lEsPl

    /** Probably variable part of the app, depending on what site it is running on */
    const _0x5c8610 = {
        'name': 'betonline',
        'baseUrl': 'https://pixel.prdredir.com',
    };

    /** Intermediate handlers tracker for value */
    function _0x302693(_0x183ab6) {
        this.handlers = [];
        this.completed = false;
        this.value = null;
        // _0x183ab6 -> this is some function that accepts callback, result of wich is stored 
        //              in this object with 'updateResult' call
        if (typeof _0x183ab6 === 'function')
           _0x183ab6(_0x44bb11 => this.updateResult(_0x44bb11));
    }

    /** UUID generation service based on 'xxxx...' template */
    function _0x574f8a() {}
    
    /** Serializer object */
    function _0x5f3c7d() {}

    /** CookieService object */
    function _0x468f57({domain: _0x573996}) {        
        this.domain = _0x573996 ;
    }

    /** Main app state object */
    function _0x4a1750() {
        this.endpoint = this.getUrl(_0x5c8610);
        this.pixel = document.createElement('script');
        this.uuid = new _0x574f8a();
        /** Retrieves and stores reference first `script` node in thd document */
        this.closest = document.getElementsByTagName('script')[0];
        this.assimetric = new _0x5f3c7d();
        this.landingPage = document.location['href'];

        const _0x162392 = {};
        _0x162392['domain'] = _0x3cf4cb,
        this.cookieService = new _0x468f57(_0x162392);
    }

    _0x5f3c7d.prototype.serialize = function({uuidServer: _0x105507, uuidClient: _0x531eec}) {
        return new _0x302693(_0x445857 => {
            crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(_0x3a1367 + '-' + _0x105507 + '-' + _0x531eec))
                .then(_0x2fc96f => {
                    let _0xea564f = [], _0x48193e = new DataView(_0x2fc96f);
                    for ( let i = 0; i < _0x48193e.byteLength; i += 4 )
                        _0xea564f.push(('00000000' + _0x48193e.getUint32(i).toString(16)).slice(-8));

                    return _0xea564f.join('');
                }).then(_0x231744 => { // example: "834aecd3e5fd657497c909ac594f9a8bde8e292cb9a92b71236d9ef21e616951"
                    _0x445857(_0x231744);
                });
        });
    },

    _0x574f8a.prototype.generate = function() {
        let _0x5cb7f4 = new Date().getTime()
            , _0x196f00 = ((typeof performance !== 'unedfined') && performance.now && (performance.now() * 1000)) || 0;

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(_0x44483d) {
            let _0x28df1c = Math.random() * 16;
            
            if (_0x5cb7f4 > 0) {
                _0x28df1c = ((_0x5cb7f4 + _0x28df1c) % 16) | 0,
                _0x5cb7f4 = Math.floor(_0x5cb7f4 / 16);
            } else {
                _0x28df1c = ((_0x196f00 + _0x28df1c) % 16) | 0,
                _0x196f00 = Math.floor(_0x196f00 / 16)
            }

            return (
                (_0x44483d === 'x')
                    ? _0x28df1c
                    : ((_0x28df1c & 3) | 8)
                ).toString(16);
        });
    },

    _0x302693.prototype.updateResult = function(_0x3c57bb = null) {
        if (!this.completed) {
            this.completed = true,
            this.value = _0x3c57bb,
            this.executeHandlers();
        }
    };

    _0x302693.prototype.executeHandlers = function() {
        if (this['completed']) {
            for (const _0x267f55 of this['handlers']) {
                _0x267f55(this['value']);
            }
        }
    },

    _0x302693.prototype.next = function(_0x595ebe) {
        if (typeof _0x595ebe === 'function') {
            this.handlers.push(_0x595ebe),
            this.executeHandlers();
        }
        
        return this;
    };

    _0x468f57.prototype.listAll = function() {
        return document.cookie.split(';').map(_0x478259 => _0x478259.split('=')).map(([_0x103536,_0x5728a5]) => ({
            'name': _0x103536.trim(),
            'value': _0x5728a5
        }));
    },

    _0x468f57.prototype.getCookie = function(_0x488bd1) {
        const _0x21647d = this.listAll()
            , _0xc66947 = _0x21647d.find(_0x3edfe0 => _0x3edfe0.name === _0x488bd1);
        return _0xc66947 ? _0xc66947['value'] : null;
    },

    _0x468f57.prototype.addCookie = function({name: _0x136342, value: _0x178b99, days: _0x410771, path: _0x47763d, samesite: _0x55a081}) {
        let _0x58b835 = '';

        if (_0x410771) {
            const _0x535ed0 = new Date();
            _0x535ed0.setTime(_0x535ed0.getTime() + _0x410771 * 24 * 60 * 60 * 1000),
            _0x58b835 = '; expires=' + _0x535ed0.toUTCString();
        }

        document.cookie = _0x136342 + '=' + (_0x178b99 || '') + ';domain=' + this.domain + _0x58b835 + ';path=' + (_0x47763d || '/') + ';SameSite=' + (_0x55a081 || 'None') + '; Secure';
        
        const _0x156e58 = {};
        
        return _0x156e58['name'] = _0x136342,
        _0x156e58['value'] = _0x178b99,
        _0x156e58['days'] = _0x410771,
        _0x156e58['path'] = _0x47763d,
        _0x156e58['samesite'] = _0x55a081,
        _0x156e58;
    },

    _0x4a1750.prototype.getUrl = function({name: _0x17189e, baseUrl: _0x4a204b}) {
        return new URL('/rtg/sync/' + _0x17189e + '.gif',_0x4a204b);
    },

    _0x4a1750.prototype.getCookie = function({hash: _0x55f0d0, uuidBrowser: _0xc6343}) {
        const _0x1e13d5 = this.cookieService.getCookie('cslfp');
        
        if (_0x1e13d5) {
            const _0x3f401b = JSON.parse(atob(_0x1e13d5));
            /**example of unparsed value: {
                "uuidClient": "5aa24da5-b87f-43e4-80b2-0ec7a12d76b5",
                "key": "0dbd90fd1173a0388a232f4370c6612866832a60c4b94249881cab60acae5ae7"
            } */
            return _0x3f401b['uuidClient'];
        }

        const _0x2fddc8 = {};

        return _0x2fddc8['uuidClient'] = _0xc6343,
        _0x2fddc8['key'] = _0x55f0d0,
        this.cookieService.addCookie({
            'name': 'cslfp',
            'value': btoa(JSON.stringify(_0x2fddc8)),
            'days': 30,
            'samesite': 'None',
            'path': '/'
        }),
        _0xc6343;
    },

    _0x4a1750.prototype.start = function() {        
        const _0x42352f = this.uuid.generate()
            , _0x2ad89c = {};

        _0x2ad89c['uuidClient'] = _0x3ee921,
        _0x2ad89c['uuidServer'] = _0x42352f,

        this.assimetric.serialize(_0x2ad89c).next(_0x423ede => {        
            this.endpoint.searchParams.set('lp', this.landingPage),
            this.endpoint.searchParams.set('ts', '' + _0x11ec28);

            const _0x5fc805 = {};
            _0x5fc805['hash'] = _0x423ede,
            _0x5fc805['uuidBrowser'] = _0x42352f,
            this.endpoint.searchParams.set('cslfp', this.getCookie(_0x5fc805)),
            this.pixel.setAttribute('referrerPolicy', 'strict-origin-when-cross-origin'),
            this.pixel.setAttribute('async', 'true'),
            this.pixel.setAttribute('src', this.endpoint.href);
            
            if (this.closest) {
                this.closest.parentNode.insertBefore(this.pixel, this.closest);
            } else {
                document.body.appendChild(this.pixel);
            }
        });
    };
    
    try {
        new _0x4a1750().start();
    } catch (_0x3b48b6) {}
}())