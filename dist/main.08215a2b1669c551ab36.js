/*! For license information please see main.08215a2b1669c551ab36.js.LICENSE.txt */
(() => {
  var e = {
      526: (e, t) => {
        'use strict';
        (t.byteLength = function (e) {
          var t = o(e),
            s = t[0],
            r = t[1];
          return (3 * (s + r)) / 4 - r;
        }),
          (t.toByteArray = function (e) {
            var t,
              s,
              i = o(e),
              n = i[0],
              h = i[1],
              u = new a(
                (function (e, t, s) {
                  return (3 * (t + s)) / 4 - s;
                })(0, n, h),
              ),
              d = 0,
              l = h > 0 ? n - 4 : n;
            for (s = 0; s < l; s += 4)
              (t =
                (r[e.charCodeAt(s)] << 18) |
                (r[e.charCodeAt(s + 1)] << 12) |
                (r[e.charCodeAt(s + 2)] << 6) |
                r[e.charCodeAt(s + 3)]),
                (u[d++] = (t >> 16) & 255),
                (u[d++] = (t >> 8) & 255),
                (u[d++] = 255 & t);
            return (
              2 === h &&
                ((t =
                  (r[e.charCodeAt(s)] << 2) | (r[e.charCodeAt(s + 1)] >> 4)),
                (u[d++] = 255 & t)),
              1 === h &&
                ((t =
                  (r[e.charCodeAt(s)] << 10) |
                  (r[e.charCodeAt(s + 1)] << 4) |
                  (r[e.charCodeAt(s + 2)] >> 2)),
                (u[d++] = (t >> 8) & 255),
                (u[d++] = 255 & t)),
              u
            );
          }),
          (t.fromByteArray = function (e) {
            for (
              var t,
                r = e.length,
                a = r % 3,
                i = [],
                n = 16383,
                o = 0,
                u = r - a;
              o < u;
              o += n
            )
              i.push(h(e, o, o + n > u ? u : o + n));
            return (
              1 === a
                ? ((t = e[r - 1]), i.push(s[t >> 2] + s[(t << 4) & 63] + '=='))
                : 2 === a &&
                  ((t = (e[r - 2] << 8) + e[r - 1]),
                  i.push(
                    s[t >> 10] + s[(t >> 4) & 63] + s[(t << 2) & 63] + '=',
                  )),
              i.join('')
            );
          });
        for (
          var s = [],
            r = [],
            a = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            i =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            n = 0;
          n < 64;
          ++n
        )
          (s[n] = i[n]), (r[i.charCodeAt(n)] = n);
        function o(e) {
          var t = e.length;
          if (t % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4');
          var s = e.indexOf('=');
          return -1 === s && (s = t), [s, s === t ? 0 : 4 - (s % 4)];
        }
        function h(e, t, r) {
          for (var a, i, n = [], o = t; o < r; o += 3)
            (a =
              ((e[o] << 16) & 16711680) +
              ((e[o + 1] << 8) & 65280) +
              (255 & e[o + 2])),
              n.push(
                s[((i = a) >> 18) & 63] +
                  s[(i >> 12) & 63] +
                  s[(i >> 6) & 63] +
                  s[63 & i],
              );
          return n.join('');
        }
        (r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63);
      },
      287: (e, t, s) => {
        'use strict';
        const r = s(526),
          a = s(251),
          i =
            'function' == typeof Symbol && 'function' == typeof Symbol.for
              ? Symbol.for('nodejs.util.inspect.custom')
              : null;
        (t.hp = h), (t.IS = 50);
        const n = 2147483647;
        function o(e) {
          if (e > n)
            throw new RangeError(
              'The value "' + e + '" is invalid for option "size"',
            );
          const t = new Uint8Array(e);
          return Object.setPrototypeOf(t, h.prototype), t;
        }
        function h(e, t, s) {
          if ('number' == typeof e) {
            if ('string' == typeof t)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number',
              );
            return l(e);
          }
          return u(e, t, s);
        }
        function u(e, t, s) {
          if ('string' == typeof e)
            return (function (e, t) {
              if (
                (('string' == typeof t && '' !== t) || (t = 'utf8'),
                !h.isEncoding(t))
              )
                throw new TypeError('Unknown encoding: ' + t);
              const s = 0 | y(e, t);
              let r = o(s);
              const a = r.write(e, t);
              return a !== s && (r = r.slice(0, a)), r;
            })(e, t);
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (Y(e, Uint8Array)) {
                const t = new Uint8Array(e);
                return c(t.buffer, t.byteOffset, t.byteLength);
              }
              return p(e);
            })(e);
          if (null == e)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof e,
            );
          if (Y(e, ArrayBuffer) || (e && Y(e.buffer, ArrayBuffer)))
            return c(e, t, s);
          if (
            'undefined' != typeof SharedArrayBuffer &&
            (Y(e, SharedArrayBuffer) || (e && Y(e.buffer, SharedArrayBuffer)))
          )
            return c(e, t, s);
          if ('number' == typeof e)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number',
            );
          const r = e.valueOf && e.valueOf();
          if (null != r && r !== e) return h.from(r, t, s);
          const a = (function (e) {
            if (h.isBuffer(e)) {
              const t = 0 | g(e.length),
                s = o(t);
              return 0 === s.length || e.copy(s, 0, 0, t), s;
            }
            return void 0 !== e.length
              ? 'number' != typeof e.length || X(e.length)
                ? o(0)
                : p(e)
              : 'Buffer' === e.type && Array.isArray(e.data)
                ? p(e.data)
                : void 0;
          })(e);
          if (a) return a;
          if (
            'undefined' != typeof Symbol &&
            null != Symbol.toPrimitive &&
            'function' == typeof e[Symbol.toPrimitive]
          )
            return h.from(e[Symbol.toPrimitive]('string'), t, s);
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e,
          );
        }
        function d(e) {
          if ('number' != typeof e)
            throw new TypeError('"size" argument must be of type number');
          if (e < 0)
            throw new RangeError(
              'The value "' + e + '" is invalid for option "size"',
            );
        }
        function l(e) {
          return d(e), o(e < 0 ? 0 : 0 | g(e));
        }
        function p(e) {
          const t = e.length < 0 ? 0 : 0 | g(e.length),
            s = o(t);
          for (let r = 0; r < t; r += 1) s[r] = 255 & e[r];
          return s;
        }
        function c(e, t, s) {
          if (t < 0 || e.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (e.byteLength < t + (s || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let r;
          return (
            (r =
              void 0 === t && void 0 === s
                ? new Uint8Array(e)
                : void 0 === s
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, s)),
            Object.setPrototypeOf(r, h.prototype),
            r
          );
        }
        function g(e) {
          if (e >= n)
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                n.toString(16) +
                ' bytes',
            );
          return 0 | e;
        }
        function y(e, t) {
          if (h.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || Y(e, ArrayBuffer)) return e.byteLength;
          if ('string' != typeof e)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof e,
            );
          const s = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === s) return 0;
          let a = !1;
          for (;;)
            switch (t) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return s;
              case 'utf8':
              case 'utf-8':
                return N(e).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * s;
              case 'hex':
                return s >>> 1;
              case 'base64':
                return z(e).length;
              default:
                if (a) return r ? -1 : N(e).length;
                (t = ('' + t).toLowerCase()), (a = !0);
            }
        }
        function b(e, t, s) {
          let r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
          if (((void 0 === s || s > this.length) && (s = this.length), s <= 0))
            return '';
          if ((s >>>= 0) <= (t >>>= 0)) return '';
          for (e || (e = 'utf8'); ; )
            switch (e) {
              case 'hex':
                return j(this, t, s);
              case 'utf8':
              case 'utf-8':
                return E(this, t, s);
              case 'ascii':
                return P(this, t, s);
              case 'latin1':
              case 'binary':
                return k(this, t, s);
              case 'base64':
                return v(this, t, s);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return C(this, t, s);
              default:
                if (r) throw new TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (r = !0);
            }
        }
        function m(e, t, s) {
          const r = e[t];
          (e[t] = e[s]), (e[s] = r);
        }
        function w(e, t, s, r, a) {
          if (0 === e.length) return -1;
          if (
            ('string' == typeof s
              ? ((r = s), (s = 0))
              : s > 2147483647
                ? (s = 2147483647)
                : s < -2147483648 && (s = -2147483648),
            X((s = +s)) && (s = a ? 0 : e.length - 1),
            s < 0 && (s = e.length + s),
            s >= e.length)
          ) {
            if (a) return -1;
            s = e.length - 1;
          } else if (s < 0) {
            if (!a) return -1;
            s = 0;
          }
          if (('string' == typeof t && (t = h.from(t, r)), h.isBuffer(t)))
            return 0 === t.length ? -1 : q(e, t, s, r, a);
          if ('number' == typeof t)
            return (
              (t &= 255),
              'function' == typeof Uint8Array.prototype.indexOf
                ? a
                  ? Uint8Array.prototype.indexOf.call(e, t, s)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, s)
                : q(e, [t], s, r, a)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function q(e, t, s, r, a) {
          let i,
            n = 1,
            o = e.length,
            h = t.length;
          if (
            void 0 !== r &&
            ('ucs2' === (r = String(r).toLowerCase()) ||
              'ucs-2' === r ||
              'utf16le' === r ||
              'utf-16le' === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (n = 2), (o /= 2), (h /= 2), (s /= 2);
          }
          function u(e, t) {
            return 1 === n ? e[t] : e.readUInt16BE(t * n);
          }
          if (a) {
            let r = -1;
            for (i = s; i < o; i++)
              if (u(e, i) === u(t, -1 === r ? 0 : i - r)) {
                if ((-1 === r && (r = i), i - r + 1 === h)) return r * n;
              } else -1 !== r && (i -= i - r), (r = -1);
          } else
            for (s + h > o && (s = o - h), i = s; i >= 0; i--) {
              let s = !0;
              for (let r = 0; r < h; r++)
                if (u(e, i + r) !== u(t, r)) {
                  s = !1;
                  break;
                }
              if (s) return i;
            }
          return -1;
        }
        function f(e, t, s, r) {
          s = Number(s) || 0;
          const a = e.length - s;
          r ? (r = Number(r)) > a && (r = a) : (r = a);
          const i = t.length;
          let n;
          for (r > i / 2 && (r = i / 2), n = 0; n < r; ++n) {
            const r = parseInt(t.substr(2 * n, 2), 16);
            if (X(r)) return n;
            e[s + n] = r;
          }
          return n;
        }
        function A(e, t, s, r) {
          return W(N(t, e.length - s), e, s, r);
        }
        function T(e, t, s, r) {
          return W(
            (function (e) {
              const t = [];
              for (let s = 0; s < e.length; ++s) t.push(255 & e.charCodeAt(s));
              return t;
            })(t),
            e,
            s,
            r,
          );
        }
        function U(e, t, s, r) {
          return W(z(t), e, s, r);
        }
        function x(e, t, s, r) {
          return W(
            (function (e, t) {
              let s, r, a;
              const i = [];
              for (let n = 0; n < e.length && !((t -= 2) < 0); ++n)
                (s = e.charCodeAt(n)),
                  (r = s >> 8),
                  (a = s % 256),
                  i.push(a),
                  i.push(r);
              return i;
            })(t, e.length - s),
            e,
            s,
            r,
          );
        }
        function v(e, t, s) {
          return 0 === t && s === e.length
            ? r.fromByteArray(e)
            : r.fromByteArray(e.slice(t, s));
        }
        function E(e, t, s) {
          s = Math.min(e.length, s);
          const r = [];
          let a = t;
          for (; a < s; ) {
            const t = e[a];
            let i = null,
              n = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (a + n <= s) {
              let s, r, o, h;
              switch (n) {
                case 1:
                  t < 128 && (i = t);
                  break;
                case 2:
                  (s = e[a + 1]),
                    128 == (192 & s) &&
                      ((h = ((31 & t) << 6) | (63 & s)), h > 127 && (i = h));
                  break;
                case 3:
                  (s = e[a + 1]),
                    (r = e[a + 2]),
                    128 == (192 & s) &&
                      128 == (192 & r) &&
                      ((h = ((15 & t) << 12) | ((63 & s) << 6) | (63 & r)),
                      h > 2047 && (h < 55296 || h > 57343) && (i = h));
                  break;
                case 4:
                  (s = e[a + 1]),
                    (r = e[a + 2]),
                    (o = e[a + 3]),
                    128 == (192 & s) &&
                      128 == (192 & r) &&
                      128 == (192 & o) &&
                      ((h =
                        ((15 & t) << 18) |
                        ((63 & s) << 12) |
                        ((63 & r) << 6) |
                        (63 & o)),
                      h > 65535 && h < 1114112 && (i = h));
              }
            }
            null === i
              ? ((i = 65533), (n = 1))
              : i > 65535 &&
                ((i -= 65536),
                r.push(((i >>> 10) & 1023) | 55296),
                (i = 56320 | (1023 & i))),
              r.push(i),
              (a += n);
          }
          return (function (e) {
            const t = e.length;
            if (t <= R) return String.fromCharCode.apply(String, e);
            let s = '',
              r = 0;
            for (; r < t; )
              s += String.fromCharCode.apply(String, e.slice(r, (r += R)));
            return s;
          })(r);
        }
        (h.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
          h.TYPED_ARRAY_SUPPORT ||
            'undefined' == typeof console ||
            'function' != typeof console.error ||
            console.error(
              'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
            ),
          Object.defineProperty(h.prototype, 'parent', {
            enumerable: !0,
            get: function () {
              if (h.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(h.prototype, 'offset', {
            enumerable: !0,
            get: function () {
              if (h.isBuffer(this)) return this.byteOffset;
            },
          }),
          (h.poolSize = 8192),
          (h.from = function (e, t, s) {
            return u(e, t, s);
          }),
          Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(h, Uint8Array),
          (h.alloc = function (e, t, s) {
            return (function (e, t, s) {
              return (
                d(e),
                e <= 0
                  ? o(e)
                  : void 0 !== t
                    ? 'string' == typeof s
                      ? o(e).fill(t, s)
                      : o(e).fill(t)
                    : o(e)
              );
            })(e, t, s);
          }),
          (h.allocUnsafe = function (e) {
            return l(e);
          }),
          (h.allocUnsafeSlow = function (e) {
            return l(e);
          }),
          (h.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== h.prototype;
          }),
          (h.compare = function (e, t) {
            if (
              (Y(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
              Y(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
              !h.isBuffer(e) || !h.isBuffer(t))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
              );
            if (e === t) return 0;
            let s = e.length,
              r = t.length;
            for (let a = 0, i = Math.min(s, r); a < i; ++a)
              if (e[a] !== t[a]) {
                (s = e[a]), (r = t[a]);
                break;
              }
            return s < r ? -1 : r < s ? 1 : 0;
          }),
          (h.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (h.concat = function (e, t) {
            if (!Array.isArray(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (0 === e.length) return h.alloc(0);
            let s;
            if (void 0 === t)
              for (t = 0, s = 0; s < e.length; ++s) t += e[s].length;
            const r = h.allocUnsafe(t);
            let a = 0;
            for (s = 0; s < e.length; ++s) {
              let t = e[s];
              if (Y(t, Uint8Array))
                a + t.length > r.length
                  ? (h.isBuffer(t) || (t = h.from(t)), t.copy(r, a))
                  : Uint8Array.prototype.set.call(r, t, a);
              else {
                if (!h.isBuffer(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers',
                  );
                t.copy(r, a);
              }
              a += t.length;
            }
            return r;
          }),
          (h.byteLength = y),
          (h.prototype._isBuffer = !0),
          (h.prototype.swap16 = function () {
            const e = this.length;
            if (e % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (let t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (h.prototype.swap32 = function () {
            const e = this.length;
            if (e % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let t = 0; t < e; t += 4)
              m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (h.prototype.swap64 = function () {
            const e = this.length;
            if (e % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let t = 0; t < e; t += 8)
              m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this;
          }),
          (h.prototype.toString = function () {
            const e = this.length;
            return 0 === e
              ? ''
              : 0 === arguments.length
                ? E(this, 0, e)
                : b.apply(this, arguments);
          }),
          (h.prototype.toLocaleString = h.prototype.toString),
          (h.prototype.equals = function (e) {
            if (!h.isBuffer(e))
              throw new TypeError('Argument must be a Buffer');
            return this === e || 0 === h.compare(this, e);
          }),
          (h.prototype.inspect = function () {
            let e = '';
            const s = t.IS;
            return (
              (e = this.toString('hex', 0, s)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
              this.length > s && (e += ' ... '),
              '<Buffer ' + e + '>'
            );
          }),
          i && (h.prototype[i] = h.prototype.inspect),
          (h.prototype.compare = function (e, t, s, r, a) {
            if (
              (Y(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
              !h.isBuffer(e))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof e,
              );
            if (
              (void 0 === t && (t = 0),
              void 0 === s && (s = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === a && (a = this.length),
              t < 0 || s > e.length || r < 0 || a > this.length)
            )
              throw new RangeError('out of range index');
            if (r >= a && t >= s) return 0;
            if (r >= a) return -1;
            if (t >= s) return 1;
            if (this === e) return 0;
            let i = (a >>>= 0) - (r >>>= 0),
              n = (s >>>= 0) - (t >>>= 0);
            const o = Math.min(i, n),
              u = this.slice(r, a),
              d = e.slice(t, s);
            for (let e = 0; e < o; ++e)
              if (u[e] !== d[e]) {
                (i = u[e]), (n = d[e]);
                break;
              }
            return i < n ? -1 : n < i ? 1 : 0;
          }),
          (h.prototype.includes = function (e, t, s) {
            return -1 !== this.indexOf(e, t, s);
          }),
          (h.prototype.indexOf = function (e, t, s) {
            return w(this, e, t, s, !0);
          }),
          (h.prototype.lastIndexOf = function (e, t, s) {
            return w(this, e, t, s, !1);
          }),
          (h.prototype.write = function (e, t, s, r) {
            if (void 0 === t) (r = 'utf8'), (s = this.length), (t = 0);
            else if (void 0 === s && 'string' == typeof t)
              (r = t), (s = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported',
                );
              (t >>>= 0),
                isFinite(s)
                  ? ((s >>>= 0), void 0 === r && (r = 'utf8'))
                  : ((r = s), (s = void 0));
            }
            const a = this.length - t;
            if (
              ((void 0 === s || s > a) && (s = a),
              (e.length > 0 && (s < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            let i = !1;
            for (;;)
              switch (r) {
                case 'hex':
                  return f(this, e, t, s);
                case 'utf8':
                case 'utf-8':
                  return A(this, e, t, s);
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return T(this, e, t, s);
                case 'base64':
                  return U(this, e, t, s);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return x(this, e, t, s);
                default:
                  if (i) throw new TypeError('Unknown encoding: ' + r);
                  (r = ('' + r).toLowerCase()), (i = !0);
              }
          }),
          (h.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        const R = 4096;
        function P(e, t, s) {
          let r = '';
          s = Math.min(e.length, s);
          for (let a = t; a < s; ++a) r += String.fromCharCode(127 & e[a]);
          return r;
        }
        function k(e, t, s) {
          let r = '';
          s = Math.min(e.length, s);
          for (let a = t; a < s; ++a) r += String.fromCharCode(e[a]);
          return r;
        }
        function j(e, t, s) {
          const r = e.length;
          (!t || t < 0) && (t = 0), (!s || s < 0 || s > r) && (s = r);
          let a = '';
          for (let r = t; r < s; ++r) a += J[e[r]];
          return a;
        }
        function C(e, t, s) {
          const r = e.slice(t, s);
          let a = '';
          for (let e = 0; e < r.length - 1; e += 2)
            a += String.fromCharCode(r[e] + 256 * r[e + 1]);
          return a;
        }
        function S(e, t, s) {
          if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
          if (e + t > s)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function K(e, t, s, r, a, i) {
          if (!h.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > a || t < i)
            throw new RangeError('"value" argument is out of bounds');
          if (s + r > e.length) throw new RangeError('Index out of range');
        }
        function I(e, t, s, r, a) {
          _(t, r, a, e, s, 7);
          let i = Number(t & BigInt(4294967295));
          (e[s++] = i),
            (i >>= 8),
            (e[s++] = i),
            (i >>= 8),
            (e[s++] = i),
            (i >>= 8),
            (e[s++] = i);
          let n = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (
            (e[s++] = n),
            (n >>= 8),
            (e[s++] = n),
            (n >>= 8),
            (e[s++] = n),
            (n >>= 8),
            (e[s++] = n),
            s
          );
        }
        function V(e, t, s, r, a) {
          _(t, r, a, e, s, 7);
          let i = Number(t & BigInt(4294967295));
          (e[s + 7] = i),
            (i >>= 8),
            (e[s + 6] = i),
            (i >>= 8),
            (e[s + 5] = i),
            (i >>= 8),
            (e[s + 4] = i);
          let n = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (
            (e[s + 3] = n),
            (n >>= 8),
            (e[s + 2] = n),
            (n >>= 8),
            (e[s + 1] = n),
            (n >>= 8),
            (e[s] = n),
            s + 8
          );
        }
        function L(e, t, s, r, a, i) {
          if (s + r > e.length) throw new RangeError('Index out of range');
          if (s < 0) throw new RangeError('Index out of range');
        }
        function D(e, t, s, r, i) {
          return (
            (t = +t),
            (s >>>= 0),
            i || L(e, 0, s, 4),
            a.write(e, t, s, r, 23, 4),
            s + 4
          );
        }
        function O(e, t, s, r, i) {
          return (
            (t = +t),
            (s >>>= 0),
            i || L(e, 0, s, 8),
            a.write(e, t, s, r, 52, 8),
            s + 8
          );
        }
        (h.prototype.slice = function (e, t) {
          const s = this.length;
          (e = ~~e) < 0 ? (e += s) < 0 && (e = 0) : e > s && (e = s),
            (t = void 0 === t ? s : ~~t) < 0
              ? (t += s) < 0 && (t = 0)
              : t > s && (t = s),
            t < e && (t = e);
          const r = this.subarray(e, t);
          return Object.setPrototypeOf(r, h.prototype), r;
        }),
          (h.prototype.readUintLE = h.prototype.readUIntLE =
            function (e, t, s) {
              (e >>>= 0), (t >>>= 0), s || S(e, t, this.length);
              let r = this[e],
                a = 1,
                i = 0;
              for (; ++i < t && (a *= 256); ) r += this[e + i] * a;
              return r;
            }),
          (h.prototype.readUintBE = h.prototype.readUIntBE =
            function (e, t, s) {
              (e >>>= 0), (t >>>= 0), s || S(e, t, this.length);
              let r = this[e + --t],
                a = 1;
              for (; t > 0 && (a *= 256); ) r += this[e + --t] * a;
              return r;
            }),
          (h.prototype.readUint8 = h.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || S(e, 1, this.length), this[e];
            }),
          (h.prototype.readUint16LE = h.prototype.readUInt16LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || S(e, 2, this.length),
                this[e] | (this[e + 1] << 8)
              );
            }),
          (h.prototype.readUint16BE = h.prototype.readUInt16BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || S(e, 2, this.length),
                (this[e] << 8) | this[e + 1]
              );
            }),
          (h.prototype.readUint32LE = h.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || S(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              );
            }),
          (h.prototype.readUint32BE = h.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || S(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
          (h.prototype.readBigUInt64LE = Q(function (e) {
            H((e >>>= 0), 'offset');
            const t = this[e],
              s = this[e + 7];
            (void 0 !== t && void 0 !== s) || F(e, this.length - 8);
            const r =
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              a = this[++e] + 256 * this[++e] + 65536 * this[++e] + s * 2 ** 24;
            return BigInt(r) + (BigInt(a) << BigInt(32));
          })),
          (h.prototype.readBigUInt64BE = Q(function (e) {
            H((e >>>= 0), 'offset');
            const t = this[e],
              s = this[e + 7];
            (void 0 !== t && void 0 !== s) || F(e, this.length - 8);
            const r =
                t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              a = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + s;
            return (BigInt(r) << BigInt(32)) + BigInt(a);
          })),
          (h.prototype.readIntLE = function (e, t, s) {
            (e >>>= 0), (t >>>= 0), s || S(e, t, this.length);
            let r = this[e],
              a = 1,
              i = 0;
            for (; ++i < t && (a *= 256); ) r += this[e + i] * a;
            return (a *= 128), r >= a && (r -= Math.pow(2, 8 * t)), r;
          }),
          (h.prototype.readIntBE = function (e, t, s) {
            (e >>>= 0), (t >>>= 0), s || S(e, t, this.length);
            let r = t,
              a = 1,
              i = this[e + --r];
            for (; r > 0 && (a *= 256); ) i += this[e + --r] * a;
            return (a *= 128), i >= a && (i -= Math.pow(2, 8 * t)), i;
          }),
          (h.prototype.readInt8 = function (e, t) {
            return (
              (e >>>= 0),
              t || S(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (h.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || S(e, 2, this.length);
            const s = this[e] | (this[e + 1] << 8);
            return 32768 & s ? 4294901760 | s : s;
          }),
          (h.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || S(e, 2, this.length);
            const s = this[e + 1] | (this[e] << 8);
            return 32768 & s ? 4294901760 | s : s;
          }),
          (h.prototype.readInt32LE = function (e, t) {
            return (
              (e >>>= 0),
              t || S(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (h.prototype.readInt32BE = function (e, t) {
            return (
              (e >>>= 0),
              t || S(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (h.prototype.readBigInt64LE = Q(function (e) {
            H((e >>>= 0), 'offset');
            const t = this[e],
              s = this[e + 7];
            (void 0 !== t && void 0 !== s) || F(e, this.length - 8);
            const r =
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (s << 24);
            return (
              (BigInt(r) << BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              )
            );
          })),
          (h.prototype.readBigInt64BE = Q(function (e) {
            H((e >>>= 0), 'offset');
            const t = this[e],
              s = this[e + 7];
            (void 0 !== t && void 0 !== s) || F(e, this.length - 8);
            const r =
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (
              (BigInt(r) << BigInt(32)) +
              BigInt(
                this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + s,
              )
            );
          })),
          (h.prototype.readFloatLE = function (e, t) {
            return (
              (e >>>= 0), t || S(e, 4, this.length), a.read(this, e, !0, 23, 4)
            );
          }),
          (h.prototype.readFloatBE = function (e, t) {
            return (
              (e >>>= 0), t || S(e, 4, this.length), a.read(this, e, !1, 23, 4)
            );
          }),
          (h.prototype.readDoubleLE = function (e, t) {
            return (
              (e >>>= 0), t || S(e, 8, this.length), a.read(this, e, !0, 52, 8)
            );
          }),
          (h.prototype.readDoubleBE = function (e, t) {
            return (
              (e >>>= 0), t || S(e, 8, this.length), a.read(this, e, !1, 52, 8)
            );
          }),
          (h.prototype.writeUintLE = h.prototype.writeUIntLE =
            function (e, t, s, r) {
              (e = +e),
                (t >>>= 0),
                (s >>>= 0),
                r || K(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
              let a = 1,
                i = 0;
              for (this[t] = 255 & e; ++i < s && (a *= 256); )
                this[t + i] = (e / a) & 255;
              return t + s;
            }),
          (h.prototype.writeUintBE = h.prototype.writeUIntBE =
            function (e, t, s, r) {
              (e = +e),
                (t >>>= 0),
                (s >>>= 0),
                r || K(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
              let a = s - 1,
                i = 1;
              for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
                this[t + a] = (e / i) & 255;
              return t + s;
            }),
          (h.prototype.writeUint8 = h.prototype.writeUInt8 =
            function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || K(this, e, t, 1, 255, 0),
                (this[t] = 255 & e),
                t + 1
              );
            }),
          (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
            function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || K(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
          (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
            function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || K(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
          (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
            function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || K(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
          (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
            function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || K(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
          (h.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
            return I(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
            return V(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeIntLE = function (e, t, s, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              const r = Math.pow(2, 8 * s - 1);
              K(this, e, t, s, r - 1, -r);
            }
            let a = 0,
              i = 1,
              n = 0;
            for (this[t] = 255 & e; ++a < s && (i *= 256); )
              e < 0 && 0 === n && 0 !== this[t + a - 1] && (n = 1),
                (this[t + a] = (((e / i) | 0) - n) & 255);
            return t + s;
          }),
          (h.prototype.writeIntBE = function (e, t, s, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              const r = Math.pow(2, 8 * s - 1);
              K(this, e, t, s, r - 1, -r);
            }
            let a = s - 1,
              i = 1,
              n = 0;
            for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
              e < 0 && 0 === n && 0 !== this[t + a + 1] && (n = 1),
                (this[t + a] = (((e / i) | 0) - n) & 255);
            return t + s;
          }),
          (h.prototype.writeInt8 = function (e, t, s) {
            return (
              (e = +e),
              (t >>>= 0),
              s || K(this, e, t, 1, 127, -128),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (h.prototype.writeInt16LE = function (e, t, s) {
            return (
              (e = +e),
              (t >>>= 0),
              s || K(this, e, t, 2, 32767, -32768),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
          (h.prototype.writeInt16BE = function (e, t, s) {
            return (
              (e = +e),
              (t >>>= 0),
              s || K(this, e, t, 2, 32767, -32768),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
          (h.prototype.writeInt32LE = function (e, t, s) {
            return (
              (e = +e),
              (t >>>= 0),
              s || K(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            );
          }),
          (h.prototype.writeInt32BE = function (e, t, s) {
            return (
              (e = +e),
              (t >>>= 0),
              s || K(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (h.prototype.writeBigInt64LE = Q(function (e, t = 0) {
            return I(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff'),
            );
          })),
          (h.prototype.writeBigInt64BE = Q(function (e, t = 0) {
            return V(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff'),
            );
          })),
          (h.prototype.writeFloatLE = function (e, t, s) {
            return D(this, e, t, !0, s);
          }),
          (h.prototype.writeFloatBE = function (e, t, s) {
            return D(this, e, t, !1, s);
          }),
          (h.prototype.writeDoubleLE = function (e, t, s) {
            return O(this, e, t, !0, s);
          }),
          (h.prototype.writeDoubleBE = function (e, t, s) {
            return O(this, e, t, !1, s);
          }),
          (h.prototype.copy = function (e, t, s, r) {
            if (!h.isBuffer(e))
              throw new TypeError('argument should be a Buffer');
            if (
              (s || (s = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < s && (r = s),
              r === s)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError('targetStart out of bounds');
            if (s < 0 || s >= this.length)
              throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length),
              e.length - t < r - s && (r = e.length - t + s);
            const a = r - s;
            return (
              this === e && 'function' == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, s, r)
                : Uint8Array.prototype.set.call(e, this.subarray(s, r), t),
              a
            );
          }),
          (h.prototype.fill = function (e, t, s, r) {
            if ('string' == typeof e) {
              if (
                ('string' == typeof t
                  ? ((r = t), (t = 0), (s = this.length))
                  : 'string' == typeof s && ((r = s), (s = this.length)),
                void 0 !== r && 'string' != typeof r)
              )
                throw new TypeError('encoding must be a string');
              if ('string' == typeof r && !h.isEncoding(r))
                throw new TypeError('Unknown encoding: ' + r);
              if (1 === e.length) {
                const t = e.charCodeAt(0);
                (('utf8' === r && t < 128) || 'latin1' === r) && (e = t);
              }
            } else
              'number' == typeof e
                ? (e &= 255)
                : 'boolean' == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < s)
              throw new RangeError('Out of range index');
            if (s <= t) return this;
            let a;
            if (
              ((t >>>= 0),
              (s = void 0 === s ? this.length : s >>> 0),
              e || (e = 0),
              'number' == typeof e)
            )
              for (a = t; a < s; ++a) this[a] = e;
            else {
              const i = h.isBuffer(e) ? e : h.from(e, r),
                n = i.length;
              if (0 === n)
                throw new TypeError(
                  'The value "' + e + '" is invalid for argument "value"',
                );
              for (a = 0; a < s - t; ++a) this[a + t] = i[a % n];
            }
            return this;
          });
        const M = {};
        function B(e, t, s) {
          M[e] = class extends s {
            constructor() {
              super(),
                Object.defineProperty(this, 'message', {
                  value: t.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${e}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return e;
            }
            set code(e) {
              Object.defineProperty(this, 'code', {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${e}]: ${this.message}`;
            }
          };
        }
        function G(e) {
          let t = '',
            s = e.length;
          const r = '-' === e[0] ? 1 : 0;
          for (; s >= r + 4; s -= 3) t = `_${e.slice(s - 3, s)}${t}`;
          return `${e.slice(0, s)}${t}`;
        }
        function _(e, t, s, r, a, i) {
          if (e > s || e < t) {
            const r = 'bigint' == typeof t ? 'n' : '';
            let a;
            throw (
              ((a =
                i > 3
                  ? 0 === t || t === BigInt(0)
                    ? `>= 0${r} and < 2${r} ** ${8 * (i + 1)}${r}`
                    : `>= -(2${r} ** ${8 * (i + 1) - 1}${r}) and < 2 ** ${8 * (i + 1) - 1}${r}`
                  : `>= ${t}${r} and <= ${s}${r}`),
              new M.ERR_OUT_OF_RANGE('value', a, e))
            );
          }
          !(function (e, t, s) {
            H(t, 'offset'),
              (void 0 !== e[t] && void 0 !== e[t + s]) ||
                F(t, e.length - (s + 1));
          })(r, a, i);
        }
        function H(e, t) {
          if ('number' != typeof e)
            throw new M.ERR_INVALID_ARG_TYPE(t, 'number', e);
        }
        function F(e, t, s) {
          if (Math.floor(e) !== e)
            throw (
              (H(e, s), new M.ERR_OUT_OF_RANGE(s || 'offset', 'an integer', e))
            );
          if (t < 0) throw new M.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new M.ERR_OUT_OF_RANGE(
            s || 'offset',
            `>= ${s ? 1 : 0} and <= ${t}`,
            e,
          );
        }
        B(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (e) {
            return e
              ? `${e} is outside of buffer bounds`
              : 'Attempt to access memory outside buffer bounds';
          },
          RangeError,
        ),
          B(
            'ERR_INVALID_ARG_TYPE',
            function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`;
            },
            TypeError,
          ),
          B(
            'ERR_OUT_OF_RANGE',
            function (e, t, s) {
              let r = `The value of "${e}" is out of range.`,
                a = s;
              return (
                Number.isInteger(s) && Math.abs(s) > 2 ** 32
                  ? (a = G(String(s)))
                  : 'bigint' == typeof s &&
                    ((a = String(s)),
                    (s > BigInt(2) ** BigInt(32) ||
                      s < -(BigInt(2) ** BigInt(32))) &&
                      (a = G(a)),
                    (a += 'n')),
                (r += ` It must be ${t}. Received ${a}`),
                r
              );
            },
            RangeError,
          );
        const $ = /[^+/0-9A-Za-z-_]/g;
        function N(e, t) {
          let s;
          t = t || 1 / 0;
          const r = e.length;
          let a = null;
          const i = [];
          for (let n = 0; n < r; ++n) {
            if (((s = e.charCodeAt(n)), s > 55295 && s < 57344)) {
              if (!a) {
                if (s > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (n + 1 === r) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                a = s;
                continue;
              }
              if (s < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), (a = s);
                continue;
              }
              s = 65536 + (((a - 55296) << 10) | (s - 56320));
            } else a && (t -= 3) > -1 && i.push(239, 191, 189);
            if (((a = null), s < 128)) {
              if ((t -= 1) < 0) break;
              i.push(s);
            } else if (s < 2048) {
              if ((t -= 2) < 0) break;
              i.push((s >> 6) | 192, (63 & s) | 128);
            } else if (s < 65536) {
              if ((t -= 3) < 0) break;
              i.push((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128);
            } else {
              if (!(s < 1114112)) throw new Error('Invalid code point');
              if ((t -= 4) < 0) break;
              i.push(
                (s >> 18) | 240,
                ((s >> 12) & 63) | 128,
                ((s >> 6) & 63) | 128,
                (63 & s) | 128,
              );
            }
          }
          return i;
        }
        function z(e) {
          return r.toByteArray(
            (function (e) {
              if ((e = (e = e.split('=')[0]).trim().replace($, '')).length < 2)
                return '';
              for (; e.length % 4 != 0; ) e += '=';
              return e;
            })(e),
          );
        }
        function W(e, t, s, r) {
          let a;
          for (a = 0; a < r && !(a + s >= t.length || a >= e.length); ++a)
            t[a + s] = e[a];
          return a;
        }
        function Y(e, t) {
          return (
            e instanceof t ||
            (null != e &&
              null != e.constructor &&
              null != e.constructor.name &&
              e.constructor.name === t.name)
          );
        }
        function X(e) {
          return e != e;
        }
        const J = (function () {
          const e = '0123456789abcdef',
            t = new Array(256);
          for (let s = 0; s < 16; ++s) {
            const r = 16 * s;
            for (let a = 0; a < 16; ++a) t[r + a] = e[s] + e[a];
          }
          return t;
        })();
        function Q(e) {
          return 'undefined' == typeof BigInt ? Z : e;
        }
        function Z() {
          throw new Error('BigInt not supported');
        }
      },
      251: (e, t) => {
        (t.read = function (e, t, s, r, a) {
          var i,
            n,
            o = 8 * a - r - 1,
            h = (1 << o) - 1,
            u = h >> 1,
            d = -7,
            l = s ? a - 1 : 0,
            p = s ? -1 : 1,
            c = e[t + l];
          for (
            l += p, i = c & ((1 << -d) - 1), c >>= -d, d += o;
            d > 0;
            i = 256 * i + e[t + l], l += p, d -= 8
          );
          for (
            n = i & ((1 << -d) - 1), i >>= -d, d += r;
            d > 0;
            n = 256 * n + e[t + l], l += p, d -= 8
          );
          if (0 === i) i = 1 - u;
          else {
            if (i === h) return n ? NaN : (1 / 0) * (c ? -1 : 1);
            (n += Math.pow(2, r)), (i -= u);
          }
          return (c ? -1 : 1) * n * Math.pow(2, i - r);
        }),
          (t.write = function (e, t, s, r, a, i) {
            var n,
              o,
              h,
              u = 8 * i - a - 1,
              d = (1 << u) - 1,
              l = d >> 1,
              p = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              c = r ? 0 : i - 1,
              g = r ? 1 : -1,
              y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((o = isNaN(t) ? 1 : 0), (n = d))
                  : ((n = Math.floor(Math.log(t) / Math.LN2)),
                    t * (h = Math.pow(2, -n)) < 1 && (n--, (h *= 2)),
                    (t += n + l >= 1 ? p / h : p * Math.pow(2, 1 - l)) * h >=
                      2 && (n++, (h /= 2)),
                    n + l >= d
                      ? ((o = 0), (n = d))
                      : n + l >= 1
                        ? ((o = (t * h - 1) * Math.pow(2, a)), (n += l))
                        : ((o = t * Math.pow(2, l - 1) * Math.pow(2, a)),
                          (n = 0)));
              a >= 8;
              e[s + c] = 255 & o, c += g, o /= 256, a -= 8
            );
            for (
              n = (n << a) | o, u += a;
              u > 0;
              e[s + c] = 255 & n, c += g, n /= 256, u -= 8
            );
            e[s + c - g] |= 128 * y;
          });
      },
      92: (e, t, s) => {
        'use strict';
        var r = (function () {
          if ('undefined' != typeof self) return self;
          if ('undefined' != typeof window) return window;
          if (void 0 !== s.g) return s.g;
          throw new Error('unable to locate global object');
        })();
        (e.exports = t = r.fetch),
          r.fetch && (t.default = r.fetch.bind(r)),
          (t.Headers = r.Headers),
          (t.Request = r.Request),
          (t.Response = r.Response);
      },
    },
    t = {};
  function s(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, s), i.exports;
  }
  (s.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, { a: t }), t;
  }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) &&
          !s.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        if (r.length)
          for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[a--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      'use strict';
      function e(e, t, s) {
        const r = document.createElement(e);
        for (let e = 0; e < t.length; e += 1) r.classList.add(t[e]);
        return (
          Object.entries(s).forEach(([e, t]) => {
            'string' == typeof e &&
              'string' == typeof t &&
              r.setAttribute(e, t);
          }),
          r
        );
      }
      var t = s(92),
        r = s.n(t),
        a = s(287);
      function i(e, t, s) {
        return (
          (t =
            'symbol' ==
            typeof (r = (function (e, t) {
              if ('object' != typeof e || !e) return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                var r = s.call(e, 'string');
                if ('object' != typeof r) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return String(e);
            })(t))
              ? r
              : r + '') in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
        var r;
      }
      function n(e) {
        return null != e;
      }
      function o(e) {
        const t = {},
          s = new URLSearchParams(e);
        for (let e of s.keys())
          s.getAll(e).length > 1 ? (t[e] = s.getAll(e)) : (t[e] = s.get(e));
        return t;
      }
      function h(e) {
        var t;
        if (
          !(e = n((t = e))
            ? 'string' == typeof t
              ? t
              : Object.fromEntries(
                  Object.entries(t).filter(
                    ([e, t]) => ![null, void 0, ''].includes(t),
                  ),
                )
            : '')
        )
          return '';
        const s = new URLSearchParams(e);
        for (const [t, r] of Object.entries(e))
          Array.isArray(r) &&
            (s.delete(t), r.filter(n).forEach((e) => s.append(t, e)));
        return s.toString();
      }
      function u(e, t = o) {
        return t(e);
      }
      function d(e, t = h) {
        return t(e);
      }
      var l = [
        'ACL',
        'BIND',
        'CHECKOUT',
        'CONNECT',
        'COPY',
        'DELETE',
        'GET',
        'HEAD',
        'LINK',
        'LOCK',
        'M-SEARCH',
        'MERGE',
        'MKACTIVITY',
        'MKCALENDAR',
        'MKCOL',
        'MOVE',
        'NOTIFY',
        'OPTIONS',
        'PATCH',
        'POST',
        'PROPFIND',
        'PROPPATCH',
        'PURGE',
        'PUT',
        'REBIND',
        'REPORT',
        'SEARCH',
        'SOURCE',
        'SUBSCRIBE',
        'TRACE',
        'UNBIND',
        'UNLINK',
        'UNLOCK',
        'UNSUBSCRIBE',
      ];
      function p(e, t, s = { allowedMethods: l }) {
        if (!t)
          throw new Error(
            `The "${e}" function requires a "Request" object as an argument. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`,
          );
        if ('string' != typeof t.uri)
          throw new Error(
            `The "${e}" Request object requires a valid uri. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`,
          );
        if (!s.allowedMethods.includes(t.method))
          throw new Error(
            `The "${e}" Request object requires a valid method. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`,
          );
      }
      let c;
      const g = 20;
      function y(e, t, s) {
        if (
          (p('process', e, { allowedMethods: ['GET'] }), 'function' != typeof t)
        )
          throw new Error(
            'The "process" function accepts a "Function" as a second argument that returns a Promise. See https://commercetools.github.io/nodejs/sdk/api/sdkClient.html#processrequest-processfn-options',
          );
        const r = {
          limit: g,
          total: Number.POSITIVE_INFINITY,
          accumulate: !0,
          ...s,
        };
        return new Promise((s, a) => {
          let i,
            n = '';
          if (e && e.uri) {
            const [t, s] = e.uri.split('?');
            (i = t), (n = s);
          }
          const o = { ...u(n) },
            h = { limit: r.limit, ...o };
          let l = !1,
            p = r.total;
          const g = async (n, o = []) => {
            const u = h.limit < p ? h.limit : p,
              y = d({ ...h, limit: u }),
              m = d({
                sort: r.sort || 'id asc',
                withTotal: !1,
                ...(n ? { where: `id > "${n}"` } : {}),
              }),
              w = { ...e, uri: `${i}?${m}&${y}` };
            try {
              const e = await b(c).execute(w),
                { results: a, count: i } = e.body;
              if (!i && l) return s(o || []);
              const n = await Promise.resolve(t(e));
              let u = [];
              if (
                ((l = !0),
                r.accumulate && (u = o.concat(n || [])),
                (p -= i),
                i < h.limit || !p)
              )
                return s(u || []);
              const d = a[i - 1],
                y = d && d.id;
              g(y, u);
            } catch (e) {
              a(e);
            }
          };
          g();
        });
      }
      function b(e) {
        if (((c = e), !e)) throw new Error('Missing required options');
        if (e.middlewares && !Array.isArray(e.middlewares))
          throw new Error('Middlewares should be an array');
        if (
          !e.middlewares ||
          !Array.isArray(e.middlewares) ||
          !e.middlewares.length
        )
          throw new Error('You need to provide at least one middleware');
        return {
          process: y,
          execute: (t) => (
            p('exec', t),
            new Promise((s, r) => {
              !(function (...e) {
                return 1 ===
                  (e = e.filter((e) => 'function' == typeof e)).length
                  ? e[0]
                  : e.reduce(
                      (e, t) =>
                        (...s) =>
                          e(t(...s)),
                    );
              })(...e.middlewares)((e, t) => {
                if (t.error) t.reject(t.error);
                else {
                  const e = { body: t.body || {}, statusCode: t.statusCode };
                  t.headers && (e.headers = t.headers),
                    t.request && (e.request = t.request),
                    t.resolve(e);
                }
              })(t, { resolve: s, reject: r, body: void 0, error: void 0 });
            })
          ),
        };
      }
      function m(e) {
        if (!e) throw new Error('Missing required options');
        if (!e.host) throw new Error('Missing required option (host)');
        if (!e.projectKey)
          throw new Error('Missing required option (projectKey)');
        if (!e.credentials)
          throw new Error('Missing required option (credentials)');
        const { clientId: t, clientSecret: s } = e.credentials;
        if (!t || !s)
          throw new Error(
            'Missing required credentials (clientId, clientSecret)',
          );
        const r = e.scopes ? e.scopes.join(' ') : void 0,
          i = a.hp.from(`${t}:${s}`).toString('base64'),
          n = e.oauthUri || '/oauth/token';
        return {
          basicAuth: i,
          url: e.host.replace(/\/$/, '') + n,
          body: 'grant_type=client_credentials' + (r ? `&scope=${r}` : ''),
        };
      }
      function w(e) {
        if (!e) throw new Error('Missing required options');
        if (!e.host) throw new Error('Missing required option (host)');
        if (!e.projectKey)
          throw new Error('Missing required option (projectKey)');
        if (!e.credentials)
          throw new Error('Missing required option (credentials)');
        const { clientId: t, clientSecret: s, user: r } = e.credentials,
          i = e.projectKey;
        if (!(t && s && r))
          throw new Error(
            'Missing required credentials (clientId, clientSecret, user)',
          );
        const { username: n, password: o } = r;
        if (!n || !o)
          throw new Error(
            'Missing required user credentials (username, password)',
          );
        const h = (e.scopes || []).join(' '),
          u = h ? `&scope=${h}` : '',
          d = a.hp.from(`${t}:${s}`).toString('base64'),
          l = e.oauthUri || `/oauth/${i}/customers/token`;
        return {
          basicAuth: d,
          url: e.host.replace(/\/$/, '') + l,
          body: `grant_type=password&username=${encodeURIComponent(n)}&password=${encodeURIComponent(o)}${u}`,
        };
      }
      function q(e) {
        if (!e) throw new Error('Missing required options');
        if (!e.host) throw new Error('Missing required option (host)');
        if (!e.projectKey)
          throw new Error('Missing required option (projectKey)');
        if (!e.credentials)
          throw new Error('Missing required option (credentials)');
        if (!e.refreshToken)
          throw new Error('Missing required option (refreshToken)');
        const { clientId: t, clientSecret: s } = e.credentials;
        if (!t || !s)
          throw new Error(
            'Missing required credentials (clientId, clientSecret)',
          );
        const r = a.hp.from(`${t}:${s}`).toString('base64'),
          i = e.oauthUri || '/oauth/token';
        return {
          basicAuth: r,
          url: e.host.replace(/\/$/, '') + i,
          body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(e.refreshToken)}`,
        };
      }
      function f(e) {
        if (!e) throw new Error('Missing required options');
        if (!e.projectKey)
          throw new Error('Missing required option (projectKey)');
        const t = e.projectKey;
        e.oauthUri = e.oauthUri || `/oauth/${t}/anonymous/token`;
        const s = m(e);
        return (
          e.credentials.anonymousId &&
            (s.body += `&anonymous_id=${e.credentials.anonymousId}`),
          { ...s }
        );
      }
      function A(e, t) {
        return {
          ...t,
          headers: { ...t.headers, Authorization: `Bearer ${e}` },
        };
      }
      async function T({
        fetcher: e,
        url: t,
        basicAuth: s,
        body: r,
        tokenCache: i,
        requestState: n,
        pendingTasks: o,
        response: h,
        tokenCacheKey: u,
      }) {
        try {
          const d = await e(t, {
            method: 'POST',
            headers: {
              Authorization: `Basic ${s}`,
              'Content-Length': a.hp.byteLength(r).toString(),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: r,
          });
          if (d.ok) {
            const {
                access_token: e,
                expires_in: t,
                refresh_token: s,
              } = await d.json(),
              r = (function (e) {
                return Date.now() + 1e3 * e - 3e5;
              })(t);
            i.set({ token: e, expirationTime: r, refreshToken: s }, u),
              n.set(!1);
            const a = o.slice();
            return (
              (o = []),
              void a.forEach((t) => {
                const s = A(e, t.request);
                t.next(s, t.response);
              })
            );
          }
          let l;
          const p = await d.text();
          try {
            l = JSON.parse(p);
          } catch (e) {}
          const c = new Error(l ? l.message : p);
          l && (c.body = l), n.set(!1), h.reject(c);
        } catch (e) {
          n.set(!1), h && 'function' == typeof h.reject && h.reject(e);
        }
      }
      function U(
        {
          request: e,
          response: t,
          url: s,
          basicAuth: r,
          body: a,
          pendingTasks: i,
          requestState: n,
          tokenCache: o,
          tokenCacheKey: h,
          fetch: u,
        },
        d,
        l,
      ) {
        if (!u && 'undefined' == typeof fetch)
          throw new Error(
            '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.',
          );
        if (
          (u || (u = fetch),
          (e.headers && e.headers.authorization) ||
            (e.headers && e.headers.Authorization))
        )
          return void d(e, t);
        const p = o.get(h);
        if (p && p.token && Date.now() < p.expirationTime) d(A(p.token, e), t);
        else if ((i.push({ request: e, response: t, next: d }), !n.get()))
          if (
            (n.set(!0),
            p &&
              p.refreshToken &&
              (!p.token || (p.token && Date.now() > p.expirationTime)))
          ) {
            if (!l) throw new Error('Missing required options');
            T({
              fetcher: u,
              ...q({ ...l, refreshToken: p.refreshToken }),
              tokenCacheKey: h,
              tokenCache: o,
              requestState: n,
              pendingTasks: i,
              response: t,
            });
          } else
            T({
              fetcher: u,
              url: s,
              basicAuth: r,
              body: a,
              tokenCacheKey: h,
              tokenCache: o,
              requestState: n,
              pendingTasks: i,
              response: t,
            });
      }
      function x(e) {
        let t = e;
        return {
          get: (e) => t,
          set: (e, s) => {
            t = e;
          },
        };
      }
      function v(e) {
        return {
          clientId: e.credentials.clientId,
          host: e.host,
          projectKey: e.projectKey,
        };
      }
      var E = Object.freeze({
        __proto__: null,
        createAuthMiddlewareForAnonymousSessionFlow: function (e) {
          const t = e.tokenCache || x({ token: '', expirationTime: -1 }),
            s = [],
            r = x(!1);
          return (a) => (i, n) => {
            (i.headers && i.headers.authorization) ||
            (i.headers && i.headers.Authorization)
              ? a(i, n)
              : U(
                  {
                    request: i,
                    response: n,
                    ...f(e),
                    pendingTasks: s,
                    requestState: r,
                    tokenCache: t,
                    fetch: e.fetch,
                  },
                  a,
                  e,
                );
          };
        },
        createAuthMiddlewareForClientCredentialsFlow: function (e) {
          const t = e.tokenCache || x({ token: '', expirationTime: -1 }),
            s = x(!1),
            r = [];
          return (a) => (i, n) => {
            (i.headers && i.headers.authorization) ||
            (i.headers && i.headers.Authorization)
              ? a(i, n)
              : U(
                  {
                    request: i,
                    response: n,
                    ...m(e),
                    pendingTasks: r,
                    requestState: s,
                    tokenCache: t,
                    tokenCacheKey: v(e),
                    fetch: e.fetch,
                  },
                  a,
                );
          };
        },
        createAuthMiddlewareWithExistingToken: function (e = '', t = {}) {
          return (s) => (r, a) => {
            if ('string' != typeof e)
              throw new Error('authorization must be a string');
            const i = void 0 === t.force || t.force;
            if (
              !e ||
              (((r.headers && r.headers.authorization) ||
                (r.headers && r.headers.Authorization)) &&
                !1 === i)
            )
              return s(r, a);
            const n = { ...r, headers: { ...r.headers, Authorization: e } };
            return s(n, a);
          };
        },
        createAuthMiddlewareForPasswordFlow: function (e) {
          const t = e.tokenCache || x({}),
            s = [],
            r = x(!1);
          return (a) => (i, n) => {
            (i.headers && i.headers.authorization) ||
            (i.headers && i.headers.Authorization)
              ? a(i, n)
              : U(
                  {
                    request: i,
                    response: n,
                    ...w(e),
                    pendingTasks: s,
                    requestState: r,
                    tokenCache: t,
                    fetch: e.fetch,
                  },
                  a,
                  e,
                );
          };
        },
        createAuthMiddlewareForRefreshTokenFlow: function (e) {
          const t = e.tokenCache || x({ token: '', expirationTime: -1 }),
            s = [],
            r = x(!1);
          return (a) => (i, n) => {
            (i.headers && i.headers.authorization) ||
            (i.headers && i.headers.Authorization)
              ? a(i, n)
              : U(
                  {
                    request: i,
                    response: n,
                    ...q(e),
                    pendingTasks: s,
                    requestState: r,
                    tokenCache: t,
                    fetch: e.fetch,
                  },
                  a,
                );
          };
        },
      });
      function R(e, t, s = {}) {
        (this.status = this.statusCode = this.code = e),
          (this.message = t),
          Object.assign(this, s),
          (this.name = this.constructor.name),
          (this.constructor.prototype.__proto__ = Error.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, this.constructor);
      }
      function P(...e) {
        R.call(this, 0, ...e);
      }
      function k(...e) {
        R.call(this, ...e);
      }
      function j(...e) {
        R.call(this, 400, ...e);
      }
      function C(...e) {
        R.call(this, 401, ...e);
      }
      function S(...e) {
        R.call(this, 403, ...e);
      }
      function K(...e) {
        R.call(this, 404, ...e);
      }
      function I(...e) {
        R.call(this, 409, ...e);
      }
      function V(...e) {
        R.call(this, 500, ...e);
      }
      function L(...e) {
        R.call(this, 503, ...e);
      }
      function D(e) {
        if (e.raw) return e.raw();
        if (!e.forEach) return {};
        const t = {};
        return (
          e.forEach((e, s) => {
            t[s] = e;
          }),
          t
        );
      }
      function O(e) {
        return (
          null != e &&
          null != e.constructor &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      function M(e, t, s, r, a) {
        return r && 0 !== e
          ? Math.min(Math.round((Math.random() + 1) * t * 2 ** e), a)
          : t;
      }
      function B(e, t) {
        t &&
          (e &&
            e.headers &&
            e.headers.authorization &&
            (e.headers.authorization = 'Bearer ********'),
          e &&
            e.headers &&
            e.headers.Authorization &&
            (e.headers.Authorization = 'Bearer ********'));
      }
      const {
        createAuthMiddlewareForPasswordFlow: G,
        createAuthMiddlewareForAnonymousSessionFlow: _,
        createAuthMiddlewareForClientCredentialsFlow: H,
        createAuthMiddlewareForRefreshTokenFlow: F,
        createAuthMiddlewareWithExistingToken: $,
      } = E;
      function N(e, t, s) {
        return (
          (t =
            'symbol' ==
            typeof (r = (function (e, t) {
              if ('object' != typeof e || !e) return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                var r = s.call(e, 'string');
                if ('object' != typeof r) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return String(e);
            })(t))
              ? r
              : r + '') in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
        var r;
      }
      function z(e) {
        return null != e;
      }
      function W(e) {
        const t = e.pathVariables;
        var s = e.uriTemplate;
        for (const e in t) {
          const r = encodeURIComponent(`${t[e]}`);
          s = s.replace(`{${e}}`, `${r}`);
        }
        return `${s}${(function (e) {
          var t;
          const s = (function (e) {
            const t = new URLSearchParams(e);
            for (const [s, r] of Object.entries(e))
              Array.isArray(r) &&
                (t.delete(s), r.filter(Boolean).forEach((e) => t.append(s, e)));
            return t.toString();
          })(
            ((t = e),
            Object.keys(t).reduce((e, s) => {
              const r = t[s];
              if (Array.isArray(r)) {
                const t = r.filter(z);
                return t.length ? { ...e, [s]: t } : e;
              }
              return z(r) ? { ...e, [s]: r } : e;
            }, {})),
          );
          return '' === s ? '' : `?${s}`;
        })(e.queryParams || {})}`;
      }
      class Y {
        constructor(e, t) {
          (this.requestExecutor = t),
            N(this, 'request', void 0),
            (this.request = { ...e, uri: W(e) });
        }
        clientRequest() {
          return this.request;
        }
        execute() {
          return this.requestExecutor(this.request);
        }
      }
      class X {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/active-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/active-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class J {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/active-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/active-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Q {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/api-clients/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/api-clients/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/api-clients/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Z {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new Q({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/api-clients',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/api-clients',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/api-clients',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ee {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class te {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class se {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new te({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ee({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class re {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ae {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new re({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ie {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ne {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class oe {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new ie({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new ne({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class he {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/replicate',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ue {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class de {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class le {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new de({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ue({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new he({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class pe {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ce {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ge {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ye {
        constructor(e) {
          this.args = e;
        }
        orderQuote() {
          return new pe({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withOrderNumber(e) {
          return new ge({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ce({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class be {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class me {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class we {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new me({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new be({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class qe {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class fe {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ae {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new fe({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new qe({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Te {
        constructor(e) {
          this.args = e;
        }
        approvalRules() {
          return new oe({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        approvalFlows() {
          return new ae({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new le({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new ye({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new Ae({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new we({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class Ue {
        constructor(e) {
          this.args = e;
        }
        businessUnits() {
          return new se({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inBusinessUnitKeyWithBusinessUnitKeyValue(e) {
          return new Te({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class xe {
        constructor(e) {
          this.args = e;
        }
        withAssociateIdValue(e) {
          return new Ue({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class ve {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/associate-roles/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/associate-roles/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/associate-roles/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/associate-roles/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ee {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/associate-roles/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/associate-roles/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/associate-roles/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/associate-roles/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Re {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Ee({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ve({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/associate-roles',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/associate-roles',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/associate-roles',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Pe {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/attribute-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/attribute-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/attribute-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/attribute-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ke {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/attribute-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/attribute-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/attribute-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/attribute-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class je {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ke({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Pe({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/attribute-groups',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/attribute-groups',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/attribute-groups',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ce {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Se {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ke {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Se({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Ce({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/business-units',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ie {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ve {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Le {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Ve({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Ie({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class De {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/carts/replicate',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Oe {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Me {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/carts/customer-id={customerId}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/carts/customer-id={customerId}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Be {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ge {
        constructor(e) {
          this.args = e;
        }
        replicate() {
          return new De({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withCustomerId(e) {
          return new Me({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new Be({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Oe({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class _e {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class He {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Fe {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new He({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new _e({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/categories',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/categories',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/categories',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class $e {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/channels/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/channels/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/channels/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/channels/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ne {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new $e({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/channels',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/channels',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/channels',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ze {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/custom-objects/{container}/{key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/custom-objects/{container}/{key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class We {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/custom-objects/{container}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ye {
        constructor(e) {
          this.args = e;
        }
        withContainerAndKey(e) {
          return new ze({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withContainer(e) {
          return new We({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/custom-objects',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/custom-objects',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/custom-objects',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Xe {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customer-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customer-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customer-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/customer-groups/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Je {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customer-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customer-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customer-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/customer-groups/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Qe {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Je({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Xe({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customer-groups',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customer-groups',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customer-groups',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ze {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/email/confirm',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class et {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/email-token',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/password-token',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class st {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/password',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/password/reset',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class at {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class it {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customers/email-token={emailToken}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class nt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ot {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/customers/password-token={passwordToken}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ht {
        constructor(e) {
          this.args = e;
        }
        withPasswordToken(e) {
          return new ot({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withEmailToken(e) {
          return new it({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailToken() {
          return new et({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new Ze({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new st({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordReset() {
          return new rt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordToken() {
          return new tt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new nt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new at({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ut {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/discount-codes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/discount-codes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/discount-codes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/discount-codes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class dt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/discount-codes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/discount-codes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/discount-codes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/discount-codes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class lt {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new ut({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new dt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/discount-codes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/discount-codes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/discount-codes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class pt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/extensions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/extensions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/extensions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/extensions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ct {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/extensions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/extensions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/extensions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/extensions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class gt {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ct({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new pt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/extensions',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/extensions',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/extensions',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class yt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/graphql',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/graphql', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class bt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-business-unit/key={businessUnitKey}/me/customers',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class mt {
        constructor(e) {
          this.args = e;
        }
        customers() {
          return new bt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class wt {
        constructor(e) {
          this.args = e;
        }
        me() {
          return new mt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class qt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ft {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class At {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ft({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new qt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/cart-discounts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Tt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/replicate',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ut {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class xt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class vt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Et {
        constructor(e) {
          this.args = e;
        }
        withCustomerId(e) {
          return new xt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new vt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new Tt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Ut({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Rt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/email/confirm',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Pt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/email-token',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class kt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/password-token',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class jt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/password',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ct {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/password/reset',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class St {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Kt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/email-token={emailToken}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class It {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Vt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/customers/password-token={passwordToken}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Lt {
        constructor(e) {
          this.args = e;
        }
        withPasswordToken(e) {
          return new Vt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withEmailToken(e) {
          return new Kt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailToken() {
          return new Pt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new Rt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new jt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordReset() {
          return new Ct({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordToken() {
          return new kt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new It({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new St({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Dt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/login',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ot {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Mt {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new Ot({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Bt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/email/confirm',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Gt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/login',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class _t {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Ht {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new _t({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ft {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/password/reset',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class $t {
        constructor(e) {
          this.args = e;
        }
        reset() {
          return new Ft({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/password',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Nt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class zt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Wt {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new zt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Nt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Yt {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/signup',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Xt {
        constructor(e) {
          this.args = e;
        }
        carts() {
          return new Mt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new Ht({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        activeCart() {
          return new X({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new Wt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new Bt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new $t({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        signup() {
          return new Yt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new Gt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Jt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Qt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Zt {
        constructor(e) {
          this.args = e;
        }
        withOrderNumber(e) {
          return new Qt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Jt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class es {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-projections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-projections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ts {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-projections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-projections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ss {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ts({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new es({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class rs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-selection-assignments',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class as {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class is {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ns {
        constructor(e) {
          this.args = e;
        }
        productTailoring() {
          return new is({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class os {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class hs {
        constructor(e) {
          this.args = e;
        }
        productTailoring() {
          return new os({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class us {
        constructor(e) {
          this.args = e;
        }
        withProductId(e) {
          return new ns({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withProductKey(e) {
          return new hs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class ds {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shipping-methods/matching-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shipping-methods/matching-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ls {
        constructor(e) {
          this.args = e;
        }
        matchingCart() {
          return new ds({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class ps {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class cs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class gs {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new cs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ps({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate:
                '/{projectKey}/in-store/key={storeKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ys {
        constructor(e) {
          this.args = e;
        }
        carts() {
          return new Et({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new Zt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        me() {
          return new Xt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customers() {
          return new Lt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new Dt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shippingMethods() {
          return new ls({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new gs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productProjections() {
          return new ss({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelectionAssignments() {
          return new rs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        cartDiscounts() {
          return new At({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTailoring() {
          return new as({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        products() {
          return new us({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class bs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/inventory/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/inventory/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/inventory/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/inventory/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ms {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/inventory/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/inventory/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/inventory/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/inventory/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ws {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new bs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new ms({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/inventory',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/inventory',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/inventory',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class qs {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/login',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class fs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/business-units/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class As {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/business-units/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ts {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new fs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new As({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/business-units',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/business-units',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Us {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/carts/replicate',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class xs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/carts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class vs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/carts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Es {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new vs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new xs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new Us({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/carts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Rs {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/email/confirm',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ps {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/login',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ks {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/orders/quotes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class js {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Cs {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new js({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orderQuote() {
          return new ks({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/orders',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ss {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/password/reset',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ks {
        constructor(e) {
          this.args = e;
        }
        reset() {
          return new Ss({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/password',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Is {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Vs {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new Is({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/payments',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/payments',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/payments',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ls {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ds {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Os {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new Ls({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new Ds({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ms {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Bs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Gs {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new Ms({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new Bs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class _s {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Hs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Fs {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new _s({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new Hs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class $s {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me/signup',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ns {
        constructor(e) {
          this.args = e;
        }
        emailConfirm() {
          return new Rs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new Ks({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        signup() {
          return new $s({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new Ps({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        activeCart() {
          return new J({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        businessUnits() {
          return new Ts({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new Es({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new Cs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        payments() {
          return new Vs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new Os({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new Gs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new Fs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/me',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class zs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/messages/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/messages/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Ws {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new zs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/messages',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/messages',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ys {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/edits/{ID}/apply',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Xs {
        constructor(e) {
          this.args = e;
        }
        apply() {
          return new Ys({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders/edits/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/edits/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/edits/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/orders/edits/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Js {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders/edits/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/edits/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/edits/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/orders/edits/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Qs {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Js({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Xs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders/edits',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/edits',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/edits',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Zs {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/import',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class er {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/quotes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/search',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/search',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class sr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/orders/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/orders/order-number={orderNumber}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ar {
        constructor(e) {
          this.args = e;
        }
        importOrder() {
          return new Zs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orderQuote() {
          return new er({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withOrderNumber(e) {
          return new rr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        edits() {
          return new Qs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new tr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/orders',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ir {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/payments/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class nr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/payments/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/payments/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/payments/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/payments/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class or {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new nr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ir({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/payments',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/payments',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/payments',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class hr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-discounts/matching',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ur {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-discounts/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class dr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-discounts/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class lr {
        constructor(e) {
          this.args = e;
        }
        matching() {
          return new hr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new dr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ur({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-discounts',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-discounts',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class pr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-projections/search',
              pathVariables: this.args.pathArgs,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                ...e?.headers,
              },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-projections/search',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class cr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-projections/suggest',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class gr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-projections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-projections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class yr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-projections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-projections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class br {
        constructor(e) {
          this.args = e;
        }
        search() {
          return new pr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        suggest() {
          return new cr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new yr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new gr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-projections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-projections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class mr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-selections/{ID}/products',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class wr {
        constructor(e) {
          this.args = e;
        }
        products() {
          return new mr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-selections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-selections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-selections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-selections/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class qr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/product-selections/key={key}/products',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class fr {
        constructor(e) {
          this.args = e;
        }
        products() {
          return new qr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-selections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-selections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-selections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-selections/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ar {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new fr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new wr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-selections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-selections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-selections',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Tr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-tailoring/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-tailoring/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-tailoring/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ur {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-tailoring/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-tailoring/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-tailoring/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class xr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Ur({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Tr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-tailoring',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class vr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Er {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Rr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Er({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new vr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-types',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/product-types',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/product-types',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Pr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/products/search',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class kr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/products/{ID}/images',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class jr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/products/{ID}/product-selections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Cr {
        constructor(e) {
          this.args = e;
        }
        images() {
          return new kr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelections() {
          return new jr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/products/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/products/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/products/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/products/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Sr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/products/key={key}/product-selections',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Kr {
        constructor(e) {
          this.args = e;
        }
        productSelections() {
          return new Sr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/products/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/products/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/products/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/products/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ir {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Kr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Cr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new Pr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/products',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/products',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/products',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Vr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/quote-requests/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Lr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/quote-requests/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Dr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Lr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Vr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quote-requests',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Or {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Mr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Br {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Mr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Or({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/quotes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Gr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/reviews/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/reviews/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/reviews/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/reviews/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class _r {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/reviews/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/reviews/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/reviews/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/reviews/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Hr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new _r({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Gr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/reviews',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/reviews',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/reviews',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Fr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate:
                '/{projectKey}/shipping-methods/matching-cart-location',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate:
                '/{projectKey}/shipping-methods/matching-cart-location',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class $r {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods/matching-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods/matching-cart',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Nr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods/matching-location',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods/matching-location',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class zr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods/matching-orderedit',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods/matching-orderedit',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Wr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shipping-methods/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/shipping-methods/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Yr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shipping-methods/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/shipping-methods/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Xr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Yr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingCart() {
          return new $r({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingCartLocation() {
          return new Fr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingOrderedit() {
          return new zr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingLocation() {
          return new Nr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Wr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shipping-methods',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shipping-methods',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shipping-methods',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Jr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/shopping-lists/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Qr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/shopping-lists/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Zr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Qr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Jr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/shopping-lists',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ea {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/staged-quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/staged-quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/staged-quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/staged-quotes/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ta {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/staged-quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/staged-quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/staged-quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/staged-quotes/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sa {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ta({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ea({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/staged-quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/staged-quotes',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/staged-quotes',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ra {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/standalone-prices/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/standalone-prices/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/standalone-prices/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/standalone-prices/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class aa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/standalone-prices/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/standalone-prices/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/standalone-prices/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/standalone-prices/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ia {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new aa({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ra({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/standalone-prices',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/standalone-prices',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/standalone-prices',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class na {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/states/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/states/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/states/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/states/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class oa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/states/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/states/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/states/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/states/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ha {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new oa({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new na({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/states',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/states',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/states',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ua {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/stores/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/stores/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/stores/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/stores/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class da {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/stores/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/stores/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/stores/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/stores/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class la {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new da({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ua({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/stores',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/stores',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/stores',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class pa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/subscriptions/{ID}/health',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ca {
        constructor(e) {
          this.args = e;
        }
        withIdHealth() {
          return new pa({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/subscriptions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/subscriptions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/subscriptions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/subscriptions/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ga {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ya {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ga({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ca({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/subscriptions',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/subscriptions',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/subscriptions',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ba {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/tax-categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/tax-categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/tax-categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/tax-categories/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ma {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/tax-categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/tax-categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/tax-categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/tax-categories/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class wa {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ma({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new ba({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/tax-categories',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/tax-categories',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/tax-categories',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class qa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/types/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class fa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/types/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Aa {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new fa({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new qa({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/types',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/types',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/types',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ta {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/zones/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/zones/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/zones/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/zones/{ID}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ua {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/zones/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/zones/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/zones/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/zones/key={key}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class xa {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new Ua({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Ta({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/zones',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}/zones',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/zones',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class va {
        constructor(e) {
          this.args = e;
        }
        asAssociate() {
          return new xe({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        associateRoles() {
          return new Re({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        businessUnits() {
          return new Ke({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        categories() {
          return new Fe({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new Ge({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        cartDiscounts() {
          return new Le({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        channels() {
          return new Ne({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customers() {
          return new ht({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customerGroups() {
          return new Qe({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customObjects() {
          return new Ye({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        discountCodes() {
          return new lt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        graphql() {
          return new yt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inventory() {
          return new ws({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new qs({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        messages() {
          return new Ws({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new ar({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        payments() {
          return new or({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        products() {
          return new Ir({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productDiscounts() {
          return new lr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productProjections() {
          return new br({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelections() {
          return new Ar({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTailoring() {
          return new xr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTypes() {
          return new Rr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new Br({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new Dr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        stagedQuotes() {
          return new sa({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        reviews() {
          return new Hr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shippingMethods() {
          return new Xr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new Zr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        states() {
          return new ha({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        subscriptions() {
          return new ya({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        taxCategories() {
          return new wa({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        types() {
          return new Aa({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        zones() {
          return new xa({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        me() {
          return new Ns({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        extensions() {
          return new gt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        apiClients() {
          return new Z({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        stores() {
          return new la({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inStoreKeyWithStoreKeyValue(e) {
          return new ys({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        standalonePrices() {
          return new ia({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inBusinessUnitKeyWithBusinessUnitKeyValue(e) {
          return new wt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        attributeGroups() {
          return new je({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'HEAD',
              uriTemplate: '/{projectKey}',
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new Y(
            {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}',
              pathVariables: this.args.pathArgs,
              headers: { 'Content-Type': 'application/json', ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class Ea {
        constructor(e) {
          N(this, 'executeRequest', void 0),
            N(this, 'baseUri', void 0),
            (this.executeRequest = e.executeRequest),
            (this.baseUri =
              e.baseUri || 'https://api.europe-west1.gcp.commercetools.com');
        }
        withProjectKey(e) {
          return new va({
            pathArgs: { ...e },
            executeRequest: this.executeRequest,
            baseUri: this.baseUri,
          });
        }
      }
      const Ra = {
          CTP_PROJECT_KEY: 'ecommerce-application-project',
          CTP_CLIENT_SECRET: 'hebehXtby6lH3KRlpq_dfsiaA9uI1H22',
          CTP_CLIENT_ID: 'Mt9vM_wZdATNYapenxLh2ENr',
          CTP_AUTH_URL: 'https://auth.europe-west1.gcp.commercetools.com',
          CTP_API_URL: 'https://api.europe-west1.gcp.commercetools.com',
          CTP_SCOPES: 'manage_project:ecommerce-application-project',
        },
        Pa = Ra.CTP_PROJECT_KEY,
        ka = [Ra.CTP_SCOPES],
        ja = {
          host: Ra.CTP_AUTH_URL,
          projectKey: Pa,
          credentials: {
            clientId: Ra.CTP_CLIENT_ID,
            clientSecret: Ra.CTP_CLIENT_SECRET,
          },
          scopes: ka,
          fetch: r(),
        },
        Ca = { host: Ra.CTP_API_URL, fetch: r() },
        Sa = new (class {
          constructor() {
            i(this, 'projectKey', void 0),
              i(this, 'authMiddleware', void 0),
              i(this, 'httpMiddleware', void 0),
              i(this, 'userAgentMiddleware', void 0),
              i(this, 'correlationIdMiddleware', void 0),
              i(this, 'loggerMiddleware', void 0),
              i(this, 'queueMiddleware', void 0),
              i(this, 'telemetryMiddleware', void 0),
              i(this, 'beforeMiddleware', void 0),
              i(this, 'afterMiddleware', void 0),
              i(this, 'middlewares', []);
          }
          withProjectKey(e) {
            return (this.projectKey = e), this;
          }
          defaultClient(e, t, s, a) {
            return this.withClientCredentialsFlow({
              host: s,
              projectKey: a || this.projectKey,
              credentials: t,
            })
              .withHttpMiddleware({ host: e, fetch: r() })
              .withLoggerMiddleware()
              .withUserAgentMiddleware();
          }
          withAuthMiddleware(e) {
            return (this.authMiddleware = e), this;
          }
          withMiddleware(e) {
            return this.middlewares.push(e), this;
          }
          withClientCredentialsFlow(e) {
            return this.withAuthMiddleware(
              H({
                host:
                  e.host || 'https://auth.europe-west1.gcp.commercetools.com',
                projectKey: e.projectKey || this.projectKey,
                credentials: {
                  clientId: e.credentials.clientId || '',
                  clientSecret: e.credentials.clientSecret || '',
                },
                oauthUri: e.oauthUri || '',
                scopes: e.scopes,
                fetch: e.fetch || r(),
                ...e,
              }),
            );
          }
          withPasswordFlow(e) {
            return this.withAuthMiddleware(
              G({
                host:
                  e.host || 'https://auth.europe-west1.gcp.commercetools.com',
                projectKey: e.projectKey || this.projectKey,
                credentials: {
                  clientId: e.credentials.clientId || '',
                  clientSecret: e.credentials.clientSecret || '',
                  user: {
                    username: e.credentials.user.username || '',
                    password: e.credentials.user.password || '',
                  },
                },
                fetch: e.fetch || r(),
                ...e,
              }),
            );
          }
          withAnonymousSessionFlow(e) {
            return this.withAuthMiddleware(
              _({
                host:
                  e.host || 'https://auth.europe-west1.gcp.commercetools.com',
                projectKey: this.projectKey || e.projectKey,
                credentials: {
                  clientId: e.credentials.clientId || '',
                  clientSecret: e.credentials.clientSecret || '',
                  anonymousId: e.credentials.anonymousId || '',
                },
                fetch: e.fetch || r(),
                ...e,
              }),
            );
          }
          withRefreshTokenFlow(e) {
            return this.withAuthMiddleware(
              F({
                host:
                  e.host || 'https://auth.europe-west1.gcp.commercetools.com',
                projectKey: this.projectKey || e.projectKey,
                credentials: {
                  clientId: e.credentials.clientId || '',
                  clientSecret: e.credentials.clientSecret || '',
                },
                fetch: e.fetch || r(),
                refreshToken: e.refreshToken || '',
                ...e,
              }),
            );
          }
          withExistingTokenFlow(e, t) {
            return this.withAuthMiddleware(
              $(e, { force: t.force || !0, ...t }),
            );
          }
          withHttpMiddleware(e) {
            return (
              (this.httpMiddleware = (function ({
                host: e,
                credentialsMode: t,
                includeResponseHeaders: s,
                includeOriginalRequest: r,
                includeRequestInErrorResponse: i = !0,
                maskSensitiveHeaderData: n = !0,
                headersWithStringBody: o = [],
                enableRetry: h,
                timeout: u,
                retryConfig: {
                  maxRetries: d = 10,
                  backoff: l = !0,
                  retryDelay: p = 200,
                  maxDelay: c = 1 / 0,
                  retryOnAbort: g = !1,
                  retryCodes: y = [503],
                } = {},
                fetch: b,
                getAbortController: m,
              }) {
                if (!b)
                  throw new Error(
                    '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.',
                  );
                if (u && !m)
                  throw new Error(
                    '`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout.',
                  );
                let w;
                if (((w = b || fetch), !Array.isArray(y)))
                  throw new Error(
                    '`retryCodes` option must be an array of retry status (error) codes.',
                  );
                if (!Array.isArray(o))
                  throw new Error(
                    '`headersWithStringBody` option must be an array of strings',
                  );
                return (b) => (q, f) => {
                  const A = e.replace(/\/$/, '') + q.uri,
                    T = { ...q.headers };
                  Object.prototype.hasOwnProperty.call(T, 'Content-Type') ||
                    Object.prototype.hasOwnProperty.call(T, 'content-type') ||
                    (T['Content-Type'] = 'application/json'),
                    null === T['Content-Type'] && delete T['Content-Type'];
                  const U =
                    (['application/json', 'application/graphql', ...o].indexOf(
                      T['Content-Type'],
                    ) > -1 &&
                      'string' == typeof q.body) ||
                    O(q.body)
                      ? q.body
                      : JSON.stringify(q.body || void 0);
                  U &&
                    ('string' == typeof U || O(U)) &&
                    (T['Content-Length'] = a.hp.byteLength(U).toString());
                  const x = { method: q.method, headers: T };
                  t && (x.credentialsMode = t), U && (x.body = U);
                  let v = 0;
                  !(function e() {
                    let t, a;
                    u &&
                      ((a = (m ? m() : null) || new AbortController()),
                      (x.signal = a.signal),
                      (t = setTimeout(() => {
                        a.abort();
                      }, u))),
                      w(A, x)
                        .then(
                          (t) => {
                            if (t.ok)
                              return 'HEAD' === x.method
                                ? void b(q, { ...f, statusCode: t.status })
                                : void t
                                    .text()
                                    .then((a) => {
                                      let i;
                                      try {
                                        i = a.length > 0 ? JSON.parse(a) : {};
                                      } catch (t) {
                                        if (h && v < d)
                                          return (
                                            setTimeout(e, M(v, p, 0, l, c)),
                                            void (v += 1)
                                          );
                                        i = a;
                                      }
                                      const o = {
                                        ...f,
                                        body: i,
                                        statusCode: t.status,
                                      };
                                      s && (o.headers = D(t.headers)),
                                        r &&
                                          ((o.request = { ...x }),
                                          B(o.request, n)),
                                        b(q, o);
                                    })
                                    .catch((t) => {
                                      if (h && v < d)
                                        return (
                                          setTimeout(e, M(v, p, 0, l, c)),
                                          void (v += 1)
                                        );
                                      const s = new P(t.message, {
                                        ...(i ? { originalRequest: q } : {}),
                                        retryCount: v,
                                      });
                                      B(s.originalRequest, n),
                                        b(q, { ...f, error: s, statusCode: 0 });
                                    });
                            t.text().then((s) => {
                              let r;
                              try {
                                r = JSON.parse(s);
                              } catch (a) {
                                r = s;
                              }
                              const a = (function ({
                                statusCode: e,
                                message: t,
                                ...s
                              }) {
                                let r =
                                  t || 'Unexpected non-JSON error response';
                                404 === e &&
                                  ((r = `URI not found: ${s.originalRequest?.uri || s.uri}`),
                                  delete s.uri);
                                const a = (function (e) {
                                  switch (e) {
                                    case 0:
                                      return P;
                                    case 400:
                                      return j;
                                    case 401:
                                      return C;
                                    case 403:
                                      return S;
                                    case 404:
                                      return K;
                                    case 409:
                                      return I;
                                    case 500:
                                      return V;
                                    case 503:
                                      return L;
                                    default:
                                      return;
                                  }
                                })(e);
                                return a ? new a(r, s) : new k(e, r, s);
                              })({
                                statusCode: t.status,
                                ...(i
                                  ? { originalRequest: q }
                                  : 404 === t.status
                                    ? { uri: q.uri }
                                    : {}),
                                retryCount: v,
                                headers: D(t.headers),
                                ...('object' == typeof r
                                  ? { message: r.message, body: r }
                                  : { message: r, body: r }),
                              });
                              if (
                                h &&
                                (-1 !== y.indexOf(a.statusCode) ||
                                  -1 !== y?.indexOf(a.message)) &&
                                v < d
                              )
                                return (
                                  setTimeout(e, M(v, p, 0, l, c)), void (v += 1)
                                );
                              B(a.originalRequest, n);
                              const o = {
                                ...f,
                                error: a,
                                statusCode: t.status,
                              };
                              b(q, o);
                            });
                          },
                          (t) => {
                            if (h && (g || !a || !a.signal) && v < d)
                              return (
                                setTimeout(e, M(v, p, 0, l, c)), void (v += 1)
                              );
                            const s = new P(t.message, {
                              ...(i ? { originalRequest: q } : {}),
                              retryCount: v,
                            });
                            B(s.originalRequest, n),
                              b(q, { ...f, error: s, statusCode: 0 });
                          },
                        )
                        .finally(() => {
                          clearTimeout(t);
                        });
                  })();
                };
              })({
                host:
                  e.host || 'https://api.europe-west1.gcp.commercetools.com',
                fetch: e.fetch || r(),
                ...e,
              })),
              this
            );
          }
          withUserAgentMiddleware(e) {
            return (
              (this.userAgentMiddleware = (function (e) {
                const t = (function (e) {
                  if (
                    !e ||
                    0 === Object.keys(e).length ||
                    !{}.hasOwnProperty.call(e, 'name')
                  )
                    throw new Error('Missing required option `name`');
                  const t = e.version ? `${e.name}/${e.version}` : e.name;
                  let s = null;
                  e.libraryName && !e.libraryVersion
                    ? (s = e.libraryName)
                    : e.libraryName &&
                      e.libraryVersion &&
                      (s = `${e.libraryName}/${e.libraryVersion}`);
                  let r = null;
                  return (
                    e.contactUrl && !e.contactEmail
                      ? (r = `(+${e.contactUrl})`)
                      : !e.contactUrl && e.contactEmail
                        ? (r = `(+${e.contactEmail})`)
                        : e.contactUrl &&
                          e.contactEmail &&
                          (r = `(+${e.contactUrl}; +${e.contactEmail})`),
                    [
                      t,
                      window.document && 9 === window.document.nodeType
                        ? window.navigator.userAgent
                        : `node.js/${process?.version.slice(1) || '12'}`,
                      s,
                      r,
                      e.customAgent || '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  );
                })({ ...e, name: 'commercetools-sdk-javascript-v2/2.5.0' });
                return (e) => (s, r) => {
                  const a = {
                    ...s,
                    headers: { ...s.headers, 'User-Agent': t },
                  };
                  e(a, r);
                };
              })(e)),
              this
            );
          }
          withQueueMiddleware(e) {
            return (
              (this.queueMiddleware = (function ({ concurrency: e = 20 }) {
                const t = [];
                let s = 0;
                const r = (r) => {
                  if (((s -= 1), t.length && s <= e)) {
                    const e = t.shift();
                    (s += 1), r(e.request, e.response);
                  }
                };
                return (a) => (i, n) => {
                  const o = {
                    ...n,
                    resolve(e) {
                      n.resolve(e), r(a);
                    },
                    reject(e) {
                      n.reject(e), r(a);
                    },
                  };
                  if ((t.push({ request: i, response: o }), s < e)) {
                    const e = t.shift();
                    (s += 1), a(e.request, e.response);
                  }
                };
              })({ concurrency: e.concurrency || 20, ...e })),
              this
            );
          }
          withLoggerMiddleware(e) {
            const { logger: t, ...s } = e || {};
            return (
              (this.loggerMiddleware =
                ('function' == typeof e?.logger && e.logger(s)) ||
                ((e) => (t, s) => {
                  const { error: r, body: a, statusCode: i } = s;
                  console.log('Request: ', t),
                    console.log('Response: ', {
                      error: r,
                      body: a,
                      statusCode: i,
                    }),
                    e(t, s);
                })),
              this
            );
          }
          withCorrelationIdMiddleware(e) {
            return (
              (this.correlationIdMiddleware = (function (e) {
                return (t) => (s, r) => {
                  const a = {
                    ...s,
                    headers: { ...s.headers, 'X-Correlation-ID': e.generate() },
                  };
                  t(a, r);
                };
              })({ generate: e.generate || null, ...e })),
              this
            );
          }
          withTelemetryMiddleware(e) {
            const { createTelemetryMiddleware: t, ...s } = e;
            return (
              this.withUserAgentMiddleware({
                customAgent: s?.userAgent || 'typescript-sdk-apm-middleware',
              }),
              (this.telemetryMiddleware = t(s)),
              this
            );
          }
          withBeforeExecutionMiddleware(e) {
            const { middleware: t, ...s } = e || {};
            return (this.beforeMiddleware = e.middleware(s)), this;
          }
          withAfterExecutionMiddleware(e) {
            const { middleware: t, ...s } = e || {};
            return (this.afterMiddleware = e.middleware(s)), this;
          }
          build() {
            const e = this.middlewares.slice();
            return (
              this.telemetryMiddleware && e.push(this.telemetryMiddleware),
              this.correlationIdMiddleware &&
                e.push(this.correlationIdMiddleware),
              this.userAgentMiddleware && e.push(this.userAgentMiddleware),
              this.authMiddleware && e.push(this.authMiddleware),
              this.beforeMiddleware && e.push(this.beforeMiddleware),
              this.queueMiddleware && e.push(this.queueMiddleware),
              this.httpMiddleware && e.push(this.httpMiddleware),
              this.afterMiddleware && e.push(this.afterMiddleware),
              this.loggerMiddleware && e.push(this.loggerMiddleware),
              b({ middlewares: e })
            );
          }
        })()
          .withProjectKey(Pa)
          .withClientCredentialsFlow(ja)
          .withHttpMiddleware(Ca)
          .build(),
        Ka = (function (e, t) {
          return new Ea({ executeRequest: e.execute, baseUri: void 0 });
        })(Sa).withProjectKey({ projectKey: Pa });
      function Ia(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = arguments[t];
          for (var r in s) e[r] = s[r];
        }
        return e;
      }
      var Va = (function e(t, s) {
        function r(e, r, a) {
          if ('undefined' != typeof document) {
            'number' == typeof (a = Ia({}, s, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var i = '';
            for (var n in a)
              a[n] &&
                ((i += '; ' + n),
                !0 !== a[n] && (i += '=' + a[n].split(';')[0]));
            return (document.cookie = e + '=' + t.write(r, e) + i);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (e) {
              if ('undefined' != typeof document && (!arguments.length || e)) {
                for (
                  var s = document.cookie ? document.cookie.split('; ') : [],
                    r = {},
                    a = 0;
                  a < s.length;
                  a++
                ) {
                  var i = s[a].split('='),
                    n = i.slice(1).join('=');
                  try {
                    var o = decodeURIComponent(i[0]);
                    if (((r[o] = t.read(n, o)), e === o)) break;
                  } catch (e) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              r(e, '', Ia({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, Ia({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(Ia({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(s) },
            converter: { value: Object.freeze(t) },
          },
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent,
            );
          },
        },
        { path: '/' },
      );
      const La = {
          main: ['wrap_modal'],
          modal: ['modal'],
          text: ['text_modal'],
          btn: ['btn_continue'],
        },
        Da = 'Continue';
      function Oa(t) {
        const s = e('div', La.main, {}),
          r = e('div', La.modal, {}),
          a = e('p', La.text, {}),
          i = e('button', La.btn, {});
        return (
          (i.textContent = Da),
          (a.innerText = t),
          r.append(a, i),
          s.append(r),
          document.body.append(s),
          document.body.classList.add('block'),
          r.classList.add('visible'),
          i.addEventListener('click', () => {
            document.body.classList.remove('block'),
              r.classList.remove('visible'),
              r.classList.add('hidden'),
              s.classList.remove('visible'),
              s.classList.add('hidden'),
              r.addEventListener('animationend', () => {
                r.classList.contains('visible') ||
                  (document.body.classList.remove('block'),
                  document.body.removeChild(s));
              });
          }),
          s
        );
      }
      const Ma = s.p + '041ddead596c2460a5fc.png',
        Ba = s.p + 'e2005eae45ceebdb1901.gif',
        Ga = 'Please select country',
        _a =
          'Please enter a valid postal code (format: "00000" or "00000-0000")',
        Ha = 'Please enter the required information',
        Fa = 'error-msg',
        $a = 'Some fields are not filled out correctly. Please check again',
        Na = 'Congratulations! Your changes are saved!',
        za = ' Changes are not saved!',
        Wa = 'An error occurred while updating customer information';
      class Ya {
        static validateName(e) {
          const t = e.value.trim(),
            s = /^[a-zA-Z]+$/.test(t);
          e.classList.toggle('error', !s),
            e.classList.toggle('correct', s),
            s
              ? Ya.hideError(e)
              : Ya.showError(e, 'Please enter only Latin letters');
        }
        static validateEmail(e) {
          const t = e.value.trim(),
            s = !t || !Ya.isValidEmailFormat(t);
          e.classList.toggle('error', s),
            e.classList.toggle('correct', !s),
            s
              ? Ya.showError(
                  e,
                  'Please enter a valid e-mail address (e.g. "example@email.com")',
                )
              : Ya.hideError(e);
        }
        static validateDateOfBirth(e) {
          const t = new Date(e.value),
            s = new Date(),
            r = new Date(s.getFullYear() - 13, s.getMonth(), s.getDate()),
            a = new Date(s.getFullYear() - 130, s.getMonth(), s.getDate()),
            i = !Number.isNaN(t.getTime()) && t <= s && t >= a && t < r;
          e.classList.toggle('error', !i),
            e.classList.toggle('correct', i),
            i
              ? Ya.hideError(e)
              : Ya.showError(
                  e,
                  'Please make sure the date format is accurate and that your age falls within the range of 13 to 130 years old',
                );
        }
        static isValidEmailFormat(e) {
          return /^\S+@\S+\.\S{2,}$/.test(e);
        }
        static validatePassword(e) {
          const t = e.value.trim(),
            s = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(t);
          e.classList.toggle('error', !s),
            e.classList.toggle('correct', s),
            s
              ? Ya.hideError(e)
              : Ya.showError(
                  e,
                  'Password must contain at least one uppercase letter, one lowercase letter, and one digit',
                );
        }
        static validateCountry(e) {
          const t = e,
            s = () => {
              const e = '' !== t.value;
              t.classList.toggle('error', !e),
                t.classList.toggle('correct', e),
                e ? Ya.hideError(t) : Ya.showError(t, Ga);
            };
          s(), t.addEventListener('change', s);
        }
        static validateShippingPostalCode(e) {
          const t = document.getElementById('country-shipping-address'),
            s = () => {
              const s = 'US' === t.value,
                r = /^\d{5}(-\d{4})?$/.test(e.value.trim());
              s
                ? (e.classList.toggle('error', !r),
                  e.classList.toggle('correct', r),
                  r ? Ya.hideError(e) : Ya.showError(e, _a))
                : (e.classList.add('error'),
                  e.classList.remove('correct'),
                  Ya.showError(e, Ga));
            };
          s(),
            t.addEventListener('change', () => {
              '' !== e.value.trim() && (Ya.hideError(e), s());
            }),
            e.addEventListener('input', () => {
              '' !== e.value.trim() && (Ya.hideError(e), s());
            });
        }
        static validateBillingPostalCode(e) {
          const t = document.getElementById('country-billing-address'),
            s = () => {
              const s = 'US' === t.value,
                r = /^\d{5}(-\d{4})?$/.test(e.value.trim());
              s
                ? (e.classList.toggle('error', !r),
                  e.classList.toggle('correct', r),
                  r ? Ya.hideError(e) : Ya.showError(e, _a))
                : (e.classList.add('error'),
                  e.classList.remove('correct'),
                  Ya.showError(e, Ga));
            };
          s(),
            t.addEventListener('change', () => {
              '' !== e.value.trim() && (Ya.hideError(e), s());
            }),
            e.addEventListener('input', () => {
              '' !== e.value.trim() && (Ya.hideError(e), s());
            });
        }
        static validateRequiredField(e) {
          const t = '' !== e.value.trim();
          e.classList.toggle('error', !t),
            e.classList.toggle('correct', t),
            t
              ? Ya.hideError(e)
              : Ya.showError(e, 'Please enter at least one character');
        }
        static showError(t, s) {
          const r = t.nextElementSibling;
          if (!r || !r.classList.contains(Fa)) {
            const r = e('span', [Fa], {});
            (r.innerText = s), t.insertAdjacentElement('afterend', r);
          }
        }
        static hideError(e) {
          const t = e.nextElementSibling;
          t && t.classList.contains(Fa) && t.remove();
        }
        static checkAllFieldsValidity() {
          let e = !0;
          document.querySelectorAll('input, select').forEach((t) => {
            const s = t;
            if (!s.type || 'checkbox' !== s.type)
              if ('' !== s.value.trim() && s.classList.contains('correct'))
                Ya.hideError(s);
              else {
                e = !1;
                const t = Ha;
                Ya.showError(s, t);
              }
            'checkbox' !== s.type &&
              (s.addEventListener('input', () => {
                const e = s;
                if ('' === e.value.trim()) {
                  const t = Ha;
                  Ya.showError(e, t);
                } else
                  Ya.hideError(s),
                    ('last-name-info' !== e.id &&
                      'first-name-info' !== e.id &&
                      'city-shipping-address' !== e.id &&
                      'city-billing-address' !== e.id) ||
                      Ya.validateName(e),
                    'birth-date-info' === e.id && Ya.validateDateOfBirth(e),
                    'email-info' === e.id && Ya.validateEmail(e),
                    'password-info' === e.id && Ya.validatePassword(e),
                    ('street-shipping-address' !== e.id &&
                      'street-billing-address' !== e.id) ||
                      Ya.validateRequiredField(e),
                    ('country-shipping-address' !== e.id &&
                      'country-billing-address' !== e.id) ||
                      Ya.validateCountry(e),
                    'postal-code-shipping-address' === e.id &&
                      Ya.validateShippingPostalCode(e),
                    'postal-code-billing-address' === e.id &&
                      Ya.validateBillingPostalCode(e);
              }),
              (Ya.isFormValid = !!e));
          });
        }
      }
      Ya.isFormValid = !1;
      const Xa = Ya;
      class Ja {
        constructor() {
          (this.profile = document.createElement('div')),
            this.profile.classList.add('profile__wrapper'),
            Ja.renderProfileForm(this.profile);
        }
        static renderProfileForm(t) {
          const s = e('div', ['profile'], {}),
            r = e('h2', ['page__title'], {});
          r.textContent = 'User Profile';
          const a = e('form', ['profile__form'], {}),
            i = e('div', ['personal-info', 'profile-page'], {}),
            n = e('p', ['personal-info-title'], {});
          (n.innerText = 'Personal Information'), i.prepend(n);
          const o = e('div', ['addresses'], {}),
            h = e('p', ['shipping-title'], {});
          h.innerText = 'Shipping Address';
          const u = e('p', ['billing-title'], {});
          u.innerText = 'Billing Address';
          const d = e(
              'div',
              ['shipping-address-container', 'profile-page'],
              {},
            ),
            l = e('div', ['billing-address-container', 'profile-page'], {});
          d.append(h),
            l.append(u),
            o.append(d, l),
            Ja.createFieldConfigs().forEach((e) => {
              let t;
              'input' === e.fieldType
                ? (t = Ja.createInputField(e))
                : 'select' === e.fieldType && (t = Ja.createSelectField(e)),
                t &&
                  (e.id.includes('shipping')
                    ? d.append(t)
                    : e.id.includes('billing')
                      ? l.append(t)
                      : i.append(t));
            });
          const p = e('button', ['btn', 'btn-edit'], { type: 'submit' });
          p.textContent = 'Edit Personal Information';
          const c = e('button', ['btn', 'btn-save', 'btn-hidden'], {
            type: 'submit',
          });
          (c.textContent = 'Save Changes'), i.append(p, c);
          const g = e('button', ['btn', 'btn-edit-shipping-address'], {
            type: 'submit',
          });
          g.textContent = 'Edit Shipping Address';
          const y = e(
            'button',
            ['btn', 'btn-save-shipping-address', 'btn-hidden'],
            { type: 'submit' },
          );
          y.textContent = 'Save Shipping Address';
          const b = e('button', ['btn', 'btn-edit-billing-address'], {
            type: 'submit',
          });
          b.textContent = 'Edit Billing Address';
          const m = e(
            'button',
            ['btn', 'btn-save-billing-address', 'btn-hidden'],
            { type: 'submit' },
          );
          (m.textContent = 'Save Billing Address'),
            d.append(g, y),
            l.append(b, m);
          const w = e('a', ['link-main'], { href: '/' });
          (w.textContent = 'Back To Home'),
            w &&
              w.addEventListener('click', (e) => {
                const t = document.querySelector('.centercard');
                t?.classList.remove('centercard'),
                  e.preventDefault(),
                  window.history.pushState({}, '', '/'),
                  window.dispatchEvent(new PopStateEvent('popstate'));
              });
          const q = document.querySelector('.logout-link');
          q?.addEventListener('click', () => {
            Ja.resetOnLogout();
          }),
            a.append(i, o),
            s.append(r, a, w),
            t.append(s);
          const f = e('label', ['checkbox-label'], {
              for: 'isShippingAddressDefaultInput',
            }),
            A = e('input', ['input-default-shipping'], {
              id: 'isShippingAddressDefaultInput',
              type: 'checkbox',
              name: 'isShippingAddressDefault',
            }),
            T = document.createTextNode('Set Shipping Address as default');
          f.append(A, T), h.append(f);
          const U = e('label', ['checkbox-label'], {
              for: 'isBillingAddressDefaultInput',
            }),
            x = e('input', ['input-default-billing'], {
              id: 'isBillingAddressDefaultInput',
              type: 'checkbox',
              name: 'isBillingAddressDefault',
            }),
            v = document.createTextNode('Set Billing Address as default');
          U.append(x, v), u.append(U), Ja.populateProfileForm();
        }
        static enablePersonalInfoInputs() {
          const e = document.querySelector('.btn-edit'),
            t = document.querySelector('.btn-save');
          e &&
            e.addEventListener('click', (s) => {
              s.preventDefault();
              const r = document.getElementById('first-name-info'),
                a = document.getElementById('last-name-info'),
                i = document.getElementById('birth-date-info'),
                n = document.getElementById('email-info');
              (r.disabled = !1),
                (a.disabled = !1),
                (i.disabled = !1),
                (n.disabled = !1),
                e.classList.add('btn-hidden'),
                t?.classList.remove('btn-hidden');
            });
        }
        static async updatePersonalInfo(e, t, s, r, a) {
          try {
            const i = await li(e),
              n = await Ka.customers()
                .withId({ ID: e })
                .post({
                  body: {
                    version: i.version,
                    actions: [
                      { action: 'setFirstName', firstName: t },
                      { action: 'setLastName', lastName: s },
                      { action: 'setDateOfBirth', dateOfBirth: a },
                      { action: 'changeEmail', email: r },
                    ],
                  },
                })
                .execute();
            return Oa(Na), n.body;
          } catch (e) {
            return e instanceof Error ? Oa(`${e.message} ${za}`) : Oa(Wa), null;
          }
        }
        static savePersonalInfoInputs(e) {
          const t = document.querySelector('.btn-edit'),
            s = document.querySelector('.btn-save');
          s &&
            s.addEventListener('click', async (r) => {
              r.preventDefault();
              const a = document.querySelector('.profile__form'),
                i = a?.querySelectorAll('input, select');
              let n = !1;
              if (
                (i &&
                  i.forEach((e) => {
                    e.classList.contains('error') && (n = !0);
                  }),
                n)
              )
                Oa($a);
              else {
                const r = document.getElementById('first-name-info'),
                  a = document.getElementById('last-name-info'),
                  i = document.getElementById('birth-date-info'),
                  n = document.getElementById('email-info');
                if (Ja.validatePersonalInfoInputs(r, a, i, n)) {
                  const o = r.value,
                    h = a.value,
                    u = n.value,
                    d = i.value;
                  try {
                    await Ja.updatePersonalInfo(e, o, h, u, d),
                      (r.disabled = !0),
                      (a.disabled = !0),
                      (i.disabled = !0),
                      (n.disabled = !0),
                      r.classList.remove('correct'),
                      a.classList.remove('correct'),
                      i.classList.remove('correct'),
                      n.classList.remove('correct'),
                      t?.classList.remove('btn-hidden'),
                      s.classList.add('btn-hidden');
                  } catch (e) {
                    e instanceof Error && Oa(e.message);
                  }
                }
              }
            });
        }
        static validatePersonalInfoInputs(e, t, s, r) {
          return (
            Xa.validateName(e),
            Xa.validateName(t),
            Xa.validateDateOfBirth(s),
            Xa.validateEmail(r),
            Ja.checkFormValidity(),
            Xa.isFormValid
          );
        }
        static enableShippingAddressInputs() {
          const e = document.querySelector('.btn-edit-shipping-address'),
            t = document.querySelector('.btn-save-shipping-address');
          e &&
            e.addEventListener('click', (s) => {
              s.preventDefault();
              const r = document.getElementById('street-shipping-address'),
                a = document.getElementById('city-shipping-address'),
                i = document.getElementById('postal-code-shipping-address'),
                n = document.getElementById('country-shipping-address'),
                o = document.getElementById('isShippingAddressDefaultInput');
              (r.disabled = !1),
                (a.disabled = !1),
                (i.disabled = !1),
                (n.disabled = !1),
                (o.disabled = !1),
                e.classList.add('btn-hidden'),
                t?.classList.remove('btn-hidden');
            });
        }
        static async updateShippingAddresses(e, t, s, r, a) {
          try {
            const i = await (async function (e) {
                const t = await Ka.customers()
                    .withId({ ID: e })
                    .get()
                    .execute(),
                  s = t.body.version;
                return t.body.addresses && t.body.addresses.length > 0
                  ? { addressId: t.body.addresses[0].id, currentVersion: s }
                  : { addressId: void 0, currentVersion: s };
              })(e),
              { addressId: n } = i,
              { currentVersion: o } = i,
              h = await Ka.customers()
                .withId({ ID: e })
                .post({
                  body: {
                    version: o,
                    actions: [
                      {
                        action: 'changeAddress',
                        addressId: n,
                        address: {
                          streetName: t,
                          city: s,
                          postalCode: r,
                          country: a,
                        },
                      },
                    ],
                  },
                })
                .execute();
            return Oa(Na), h.body;
          } catch (e) {
            return e instanceof Error ? Oa(`${e.message} ${za}`) : Oa(Wa), null;
          }
        }
        static saveShippingAddressInputs(e) {
          const t = document.querySelector('.btn-edit-shipping-address'),
            s = document.querySelector('.btn-save-shipping-address');
          s &&
            s.addEventListener('click', async (r) => {
              r.preventDefault();
              const a = document.querySelector('.profile__form'),
                i = a?.querySelectorAll('input, select');
              let n = !1;
              if (
                (i &&
                  i.forEach((e) => {
                    e.classList.contains('error') && (n = !0);
                  }),
                n)
              )
                Oa($a);
              else {
                const r = document.getElementById('street-shipping-address'),
                  a = document.getElementById('city-shipping-address'),
                  i = document.getElementById('postal-code-shipping-address'),
                  n = document.getElementById('country-shipping-address'),
                  o = document.getElementById('isShippingAddressDefaultInput');
                if (Ja.validateShippingAddressInputs(r, a, i, n)) {
                  const h = r.value,
                    u = a.value,
                    d = i.value,
                    l = n.value;
                  try {
                    await Ja.updateShippingAddresses(e, h, u, d, l),
                      (r.disabled = !0),
                      (a.disabled = !0),
                      (i.disabled = !0),
                      (n.disabled = !0),
                      (o.disabled = !0),
                      r.classList.remove('correct'),
                      a.classList.remove('correct'),
                      i.classList.remove('correct'),
                      n.classList.remove('correct'),
                      t?.classList.remove('btn-hidden'),
                      s.classList.add('btn-hidden');
                  } catch (e) {
                    e instanceof Error && Oa(e.message);
                  }
                }
              }
            });
        }
        static validateShippingAddressInputs(e, t, s, r) {
          return (
            Xa.validateRequiredField(e),
            Xa.validateName(t),
            Xa.validateShippingPostalCode(s),
            Xa.validateCountry(r),
            Ja.checkFormValidity(),
            Xa.isFormValid
          );
        }
        static enableBillingAddressInputs() {
          const e = document.querySelector('.btn-edit-billing-address'),
            t = document.querySelector('.btn-save-billing-address');
          e &&
            e.addEventListener('click', (s) => {
              s.preventDefault();
              const r = document.getElementById('street-billing-address'),
                a = document.getElementById('city-billing-address'),
                i = document.getElementById('postal-code-billing-address'),
                n = document.getElementById('country-billing-address'),
                o = document.getElementById('isBillingAddressDefaultInput');
              (r.disabled = !1),
                (a.disabled = !1),
                (i.disabled = !1),
                (n.disabled = !1),
                (o.disabled = !1),
                e.classList.add('btn-hidden'),
                t?.classList.remove('btn-hidden');
            });
        }
        static async updateBillingAddresses(e, t, s, r, a) {
          try {
            const i = await (async function (e) {
                const t = await Ka.customers()
                    .withId({ ID: e })
                    .get()
                    .execute(),
                  s = t.body.version;
                return t.body.addresses && t.body.addresses.length > 0
                  ? { addressId: t.body.addresses[1].id, currentVersion: s }
                  : { addressId: void 0, currentVersion: s };
              })(e),
              { addressId: n } = i,
              { currentVersion: o } = i,
              h = await Ka.customers()
                .withId({ ID: e })
                .post({
                  body: {
                    version: o,
                    actions: [
                      {
                        action: 'changeAddress',
                        addressId: n,
                        address: {
                          streetName: t,
                          city: s,
                          postalCode: r,
                          country: a,
                        },
                      },
                    ],
                  },
                })
                .execute();
            return Oa(Na), h.body;
          } catch (e) {
            return e instanceof Error ? Oa(`${e.message} ${za}`) : Oa(Wa), null;
          }
        }
        static saveBillingAddressInputs(e) {
          const t = document.querySelector('.btn-edit-billing-address'),
            s = document.querySelector('.btn-save-billing-address');
          s &&
            s.addEventListener('click', async (r) => {
              r.preventDefault();
              const a = document.querySelector('.profile__form'),
                i = a?.querySelectorAll('input, select');
              let n = !1;
              if (
                (i &&
                  i.forEach((e) => {
                    e.classList.contains('error') && (n = !0);
                  }),
                n)
              )
                Oa($a);
              else {
                const r = document.getElementById('street-billing-address'),
                  a = document.getElementById('city-billing-address'),
                  i = document.getElementById('postal-code-billing-address'),
                  n = document.getElementById('country-billing-address'),
                  o = document.getElementById('isBillingAddressDefaultInput');
                if (Ja.validateBillingAddressInputs(r, a, i, n)) {
                  const h = r.value,
                    u = a.value,
                    d = i.value,
                    l = n.value;
                  try {
                    await Ja.updateBillingAddresses(e, h, u, d, l),
                      (r.disabled = !0),
                      (a.disabled = !0),
                      (i.disabled = !0),
                      (n.disabled = !0),
                      (o.disabled = !0),
                      r.classList.remove('correct'),
                      a.classList.remove('correct'),
                      i.classList.remove('correct'),
                      n.classList.remove('correct'),
                      t?.classList.remove('btn-hidden'),
                      s.classList.add('btn-hidden');
                  } catch (e) {
                    e instanceof Error && Oa(e.message);
                  }
                }
              }
            });
        }
        static validateBillingAddressInputs(e, t, s, r) {
          return (
            Xa.validateRequiredField(e),
            Xa.validateName(t),
            Xa.validateBillingPostalCode(s),
            Xa.validateCountry(r),
            Ja.checkFormValidity(),
            Xa.isFormValid
          );
        }
        static checkFormValidity() {
          const e = document.querySelector('.registration__form'),
            t = e?.querySelectorAll('input, select');
          (Xa.isFormValid = !0),
            t &&
              t.forEach((e) => {
                (e instanceof HTMLInputElement ||
                  e instanceof HTMLSelectElement) &&
                  (('' !== e.value.trim() && !e.classList.contains('error')) ||
                    (e.classList.add('error'), (Xa.isFormValid = !1)));
              });
        }
        static populateProfileForm() {
          const e = Va.get('log');
          e &&
            li(atob(e))
              .then((e) => {
                if (e) {
                  const {
                    firstName: t,
                    lastName: s,
                    dateOfBirth: r,
                    email: a,
                    addresses: i,
                  } = e;
                  if (
                    (i.forEach((e, t) => {
                      const s = 0 === t ? 'shipping' : 'billing',
                        r = `street-${s}-address`,
                        a = `city-${s}-address`,
                        i = `postal-code-${s}-address`,
                        n = `country-${s}-address`,
                        o = document.getElementById(r);
                      o?.setAttribute('value', e.streetName || '');
                      const h = document.getElementById(a);
                      h?.setAttribute('value', e.city || '');
                      const u = document.getElementById(i);
                      u?.setAttribute('value', e.postalCode || '');
                      const d = document.getElementById(n);
                      d && (d.value = e.country || '');
                    }),
                    t && s && r && a)
                  ) {
                    const e = document.getElementById('first-name-info');
                    e?.setAttribute('value', t);
                    const i = document.getElementById('last-name-info');
                    i?.setAttribute('value', s);
                    const n = document.getElementById('birth-date-info');
                    n?.setAttribute('value', r);
                    const o = document.getElementById('email-info');
                    o?.setAttribute('value', a);
                  }
                  document
                    .querySelectorAll(
                      '.profile__wrapper input, .profile__wrapper select',
                    )
                    .forEach((e) => {
                      e.disabled = !0;
                    });
                }
              })
              .catch((e) => {
                Oa(e.body.message);
              });
        }
        static createFieldConfigs() {
          return [
            {
              label: 'First name',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'first-name-info',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Last name',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'last-name-info',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Date of Birth',
              fieldType: 'input',
              inputType: 'date',
              placeholder: '',
              id: 'birth-date-info',
              validationFunction: Xa.validateDateOfBirth,
            },
            {
              label: 'E-mail',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'email-info',
              validationFunction: Xa.validateEmail,
            },
            {
              label: 'Street',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'street-shipping-address',
              validationFunction: Xa.validateRequiredField,
            },
            {
              label: 'City',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'city-shipping-address',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Country',
              fieldType: 'select',
              id: 'country-shipping-address',
              validationFunction: Xa.validateCountry,
              options: [{ value: 'US', label: 'US' }],
            },
            {
              label: 'Postal Code',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'postal-code-shipping-address',
              validationFunction: Xa.validateShippingPostalCode,
            },
            {
              label: 'Street',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'street-billing-address',
              validationFunction: Xa.validateRequiredField,
            },
            {
              label: 'City',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'city-billing-address',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Country',
              fieldType: 'select',
              id: 'country-billing-address',
              validationFunction: Xa.validateCountry,
              options: [{ value: 'US', label: 'US' }],
            },
            {
              label: 'Postal Code',
              fieldType: 'input',
              inputType: 'text',
              placeholder: '',
              id: 'postal-code-billing-address',
              validationFunction: Xa.validateShippingPostalCode,
            },
          ];
        }
        static createLabel(t, s) {
          return e('label', ['input-label', 'profile-page'], { for: s || '' });
        }
        static createInputField(t) {
          const s = e('div', ['form-input'], {}),
            r = Ja.createLabel(t.label, t.id || '');
          r.innerText = t.label;
          const a = e('input', ['form-control'], {
            type: t.inputType || 'text',
            placeholder: t.placeholder || '',
            id: t.id || '',
          });
          return (
            s.append(r),
            s.append(a),
            a.addEventListener('input', () => {
              t.validationFunction(a);
            }),
            a.addEventListener('blur', () => {
              t.validationFunction(a);
            }),
            s
          );
        }
        static createSelectField(t) {
          const s = e('div', ['form-select'], {}),
            r = Ja.createLabel(t.label, t.id || '');
          r.innerText = t.label;
          const a = e('select', ['form-control', 'select-country'], {
              id: t.id || '',
            }),
            i = document.createElement('option');
          return (
            (i.value = ''),
            (i.text = 'Select Country:'),
            a.append(i),
            t.options?.forEach((e) => {
              const t = document.createElement('option');
              (t.value = e.value), (t.text = e.label), a.append(t);
            }),
            a.addEventListener('change', () => {
              t.validationFunction(a);
            }),
            s.append(r),
            s.append(a),
            s
          );
        }
        static resetOnLogout() {
          const e = document.querySelector('.page__form');
          e?.querySelectorAll('input, select').forEach((e) => {
            e.value = '';
          });
        }
        getWrap() {
          return this.profile;
        }
      }
      document.addEventListener('DOMContentLoaded', () => {
        const e = Va.get('log');
        if (e) {
          const t = atob(e);
          Ja.enablePersonalInfoInputs(),
            Ja.savePersonalInfoInputs(t),
            Ja.enableShippingAddressInputs(),
            Ja.saveShippingAddressInputs(t),
            Ja.enableBillingAddressInputs(),
            Ja.saveBillingAddressInputs(t);
        }
      });
      class Qa {
        constructor() {
          (this.cartLink = null),
            (this.cartItemCount = null),
            (this.header = e('header', ['header'], {})),
            (this.nav = e('nav', ['nav-items'], {})),
            (this.homeLink = null),
            (this.loginLink = null),
            (this.regLink = null),
            (this.catalogLink = null),
            (this.profileLink = null),
            (this.logoutLink = null),
            (this.aboutLink = null),
            (this.cartLink = null),
            (this.cartItemCount = null),
            this.updateHeaderCartCount(),
            this.render();
        }
        async updateCartItemCount() {
          const e = await qi();
          if (e && 'value' in e && 'anon' in e && 'token' in e) {
            const { value: t, anon: s, token: r } = e,
              a = await mi(t, s, r);
            if (
              a &&
              'lineItems' in a.body &&
              this.cartItemCount instanceof HTMLElement
            ) {
              const e = a.body.lineItems.reduce((e, t) => e + t.quantity, 0),
                t = document.querySelector('.cart-item-count');
              t && (t.textContent = e.toString());
            }
          }
        }
        updateHeaderCartCount() {
          document.addEventListener('cart-updated', async () => {
            await this.updateCartItemCount();
          });
        }
        async triggerCartUpdate() {
          const e = await qi();
          if (e && 'value' in e && 'anon' in e && 'token' in e) {
            const { value: t, anon: s, token: r } = e,
              a = await mi(t, s, r);
            a &&
              ((this.cartItemCount = document.createElement('span')),
              (this.cartItemCount.textContent =
                a.body.lineItems.length.toString()),
              (this.cartLink = document.createElement('a')),
              this.cartLink.setAttribute('href', '/cart'),
              (this.cartLink.textContent = 'Cart'));
          }
          const t = new CustomEvent('cart-updated');
          document.dispatchEvent(t);
        }
        render() {
          (this.homeLink = e('a', ['nav-link', 'home-link'], {})),
            (this.homeLink.textContent = 'Home'),
            this.homeLink.setAttribute('href', ''),
            (this.homeLink.innerHTML +=
              '<img width="24" height="24" src="https://img.icons8.com/sf-regular/48/FFFFFF/home-page.png" alt="home-page"/>'),
            this.homeLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.catalogLink = e('a', ['nav-link', 'catalog-link'], {})),
            (this.catalogLink.textContent = 'Catalog'),
            this.catalogLink.setAttribute('href', ''),
            (this.catalogLink.innerHTML +=
              '<img width="24" height="24" src="https://img.icons8.com/sf-regular/96/FFFFFF/spiral-bound-booklet.png" alt="spiral-bound-booklet"/>'),
            this.catalogLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/catalog'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.loginLink = e('a', ['nav-link', 'login-link'], {})),
            (this.loginLink.textContent = 'Login'),
            this.loginLink.setAttribute('href', ''),
            (this.loginLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/enter-2.png" alt="enter-2"/>'),
            this.loginLink.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/login'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.regLink = e('a', ['nav-link', 'reg-link'], {})),
            (this.regLink.textContent = 'Register'),
            this.regLink.setAttribute('href', ''),
            (this.regLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/add-user-male.png" alt="add-user-male"/>'),
            this.regLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/register'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.logoutLink = e('a', ['nav-link', 'logout-link'], {})),
            (this.logoutLink.textContent = 'Logout'),
            this.logoutLink.setAttribute('href', ''),
            (this.logoutLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/exit.png" alt="exit"/>'),
            this.logoutLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/'),
                window.dispatchEvent(new PopStateEvent('popstate')),
                Va.remove('log'),
                Va.remove('token'),
                ui(this);
              const s = new CustomEvent('restartCatalog');
              new Qa().triggerCartUpdate(), document.dispatchEvent(s);
            }),
            (this.profileLink = e('a', ['nav-link', 'profile-link'], {})),
            (this.profileLink.textContent = 'Profile'),
            this.profileLink.setAttribute('href', '/'),
            (this.profileLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/user-male.png" alt="user-profile"/>'),
            this.profileLink.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/profile'),
                window.dispatchEvent(new PopStateEvent('popstate')),
                Ja.populateProfileForm();
            }),
            (this.aboutLink = e('a', ['nav-link', 'about-link'], {})),
            (this.aboutLink.textContent = 'AboutUs'),
            (this.aboutLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-regular/96/FFFFFF/potted-plant.png" alt="about-page"/>'),
            this.aboutLink.setAttribute('href', ''),
            this.aboutLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/about'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.cartLink = e('a', ['nav-link', 'cart-link'], {})),
            (this.cartLink.innerHTML +=
              '<img width="22" height="22" src="https://img.icons8.com/sf-regular/96/FFFFFF/shopping-cart.png" alt="shopping-cart"/>'),
            this.cartLink.setAttribute('href', ''),
            this.cartLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/cart'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.cartItemCount = e('span', ['cart-item-count'], {})),
            this.cartItemCount &&
              (this.cartLink.appendChild(this.cartItemCount),
              this.updateCartItemCount()),
            this.header.append(this.homeLink, this.nav),
            this.nav.append(
              this.catalogLink,
              this.profileLink,
              this.loginLink,
              this.regLink,
              this.aboutLink,
              this.cartLink,
            );
        }
        getHeader() {
          return this.header;
        }
      }
      const Za = ['wrapper_card'],
        ei = ['img_card'],
        ti = ['title_card'],
        si = ['description_card'],
        ri = ['price'],
        ai = ['add-btn'],
        ii = ['img-cart'],
        ni = ['gif'];
      class oi {
        constructor(t, s, r, a, i, n) {
          (this.key = i),
            (this.wrapper_Card = e('div', Za, {})),
            (this.image = e('img', ei, { src: t, alt: 'catalogImg' })),
            (this.load = e('img', ni, { scr: Ba, alt: 'loading' })),
            (this.title = e('h2', ti, {})),
            (this.description = e('p', si, {})),
            (this.price = e('p', ri, {})),
            (this.discount = e('p', ri, {})),
            (this.addBtn = e('button', ai, {})),
            (this.imgCart = e('img', ii, { src: Ma, alt: 'Cart' })),
            (this.cart = fi()),
            this.render(s, r, a, n),
            this.addListener();
        }
        render(e, t, s, r) {
          (this.title.innerText = e),
            (this.description.innerText = t),
            (this.price.innerText = s),
            this.wrapper_Card.append(
              this.image,
              this.title,
              this.description,
              this.price,
            ),
            'undefined undefined' !== r &&
              (this.price.classList.add('discount'),
              (this.discount.innerText = r),
              this.wrapper_Card.append(this.discount)),
            (this.addBtn.innerText = 'Add to Cart'),
            this.addBtn.append(this.imgCart),
            this.wrapper_Card.append(this.addBtn),
            this.addBtn.classList.add('btnOff'),
            (this.addBtn.disabled = !0),
            this.cart.then((e) => {
              e.some((e) => e.productKey === this.key) ||
                (this.addBtn.classList.remove('btnOff'),
                (this.addBtn.disabled = !1));
            });
        }
        getCard() {
          return this.wrapper_Card;
        }
        addListener() {
          this.wrapper_Card.addEventListener('click', (e) => {
            e.target === this.addBtn
              ? qi().then((e) => {
                  wi(e.value, this.key, e.anon, e.token)
                    .then(() => {
                      this.addBtn.classList.add('btnOff'),
                        (this.addBtn.disabled = !0),
                        new Qa().triggerCartUpdate();
                    })
                    .catch((e) => {
                      Oa(e.name);
                    });
                })
              : (window.history.pushState({}, '', `/${this.key}`),
                window.dispatchEvent(new PopStateEvent('popstate')));
          });
        }
      }
      async function hi(e) {
        return Ka.productProjections()
          .search()
          .get({ queryArgs: { sort: 'name.en-US asc', limit: 10, offset: e } })
          .execute();
      }
      function ui(e) {
        const t = Va.get('log');
        if (!t) {
          const { pathname: e } = window.location;
          '/profile' === e &&
            (window.history.pushState({}, '', './'),
            window.dispatchEvent(new PopStateEvent('popstate')));
        }
        if (t) {
          e.nav.contains(e.loginLink) && e.nav.removeChild(e.loginLink),
            e.nav.contains(e.regLink) && e.nav.removeChild(e.regLink),
            e.nav.contains(e.profileLink) || e.nav.append(e.profileLink),
            e.nav.contains(e.logoutLink) || e.nav.append(e.logoutLink);
          const { pathname: t } = window.location;
          ('/login' !== t && '/register' !== t) ||
            (window.history.pushState({}, '', './'),
            window.dispatchEvent(new PopStateEvent('popstate')));
        } else
          e.nav.contains(e.loginLink) || e.nav.append(e.loginLink),
            e.nav.contains(e.regLink) || e.nav.append(e.regLink),
            e.nav.contains(e.logoutLink) && e.nav.removeChild(e.logoutLink),
            e.nav.contains(e.profileLink) && e.nav.removeChild(e.profileLink);
      }
      async function di(e, t) {
        const s = btoa(`${Ra.CTP_CLIENT_ID}:${Ra.CTP_CLIENT_SECRET}`),
          r = await fetch(
            `${Ra.CTP_AUTH_URL}/oauth/${Ra.CTP_PROJECT_KEY}/customers/token`,
            {
              method: 'POST',
              headers: {
                Authorization: `Basic ${s}`,
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `grant_type=password&username=${e}&password=${t}&scope=${Ra.CTP_SCOPES}`,
            },
          );
        return await r.json();
      }
      async function li(e) {
        return (await Ka.customers().withId({ ID: e }).get().execute()).body;
      }
      async function pi(e) {
        return (
          await Ka.products()
            .get({ queryArgs: { limit: 10, offset: e } })
            .execute()
        ).body;
      }
      async function ci(e, t) {
        return Ka.productProjections()
          .search()
          .get({
            queryArgs: {
              filter: `variants.price.centAmount:range (0 to ${100 * e})`,
              sort: 'price asc',
              limit: 10,
              offset: t,
            },
          })
          .execute();
      }
      function gi(e, t, s) {
        if (
          (s && (t.innerHTML = ''),
          t.classList.remove('oneCard'),
          'results' in e)
        )
          for (let s = 0; s < e.results.length; s += 1) {
            const r = e.results[s].masterData.current,
              a = r.masterVariant.images[0].url,
              i = r.name['en-US'],
              n = r.masterVariant.attributes[0].value['en-US'],
              o = `${r.masterVariant.prices[2].value.centAmount / 100} ${r.masterVariant.prices[2].value.currencyCode}`,
              h = e.results[s].key;
            let u;
            const d = r.masterVariant.prices[2].discounted?.value.centAmount;
            'number' == typeof d &&
              (u = `${(d / 100).toFixed(2)} ${r.masterVariant.prices[2].discounted?.value.currencyCode}`),
              t.append(new oi(a, i, n, o, h, u).getCard());
          }
        else
          for (let s = 0; s < e.body.results.length; s += 1) {
            const r = e.body.results[s],
              a = r.masterVariant.images[0].url,
              i = r.name['en-US'],
              n = r.masterVariant.attributes[0].value['en-US'],
              o = `${r.masterVariant.prices[2].value.centAmount / 100} ${r.masterVariant.prices[2].value.currencyCode}`,
              h = r.key;
            let u;
            const d = r.masterVariant.prices[2].discounted?.value.centAmount;
            'number' == typeof d &&
              (u = `${(d / 100).toFixed(2)} ${r.masterVariant.prices[2].discounted?.value.currencyCode}`),
              t.append(new oi(a, i, n, o, h, u).getCard());
          }
      }
      async function yi(e, t) {
        return Ka.productProjections()
          .search()
          .get({
            queryArgs: {
              filter: `variants.price.centAmount:range (${100 * e} to *)`,
              sort: 'price asc',
              limit: 10,
              offset: t,
            },
          })
          .execute();
      }
      async function bi(e) {
        return (await Ka.products().withKey({ key: e }).get().execute()).body;
      }
      async function mi(e, t, s) {
        try {
          return t
            ? await Ka.carts().withId({ ID: e }).get().execute()
            : await Ka.carts()
                .withCustomerId({ customerId: e })
                .get()
                .execute();
        } catch (r) {
          if (r instanceof Error) {
            if ('NetworkError' === r.name) return void Oa(`${r.name}`);
            if (!t)
              return await Ka.carts()
                .post({
                  body: { currency: 'USD', customerId: e, country: 'US' },
                  headers: { Authorization: `Bearer ${s}` },
                })
                .execute();
            const a = await Ka.carts()
              .post({
                body: { currency: 'USD', country: 'US' },
                headers: { Authorization: `Bearer ${s}` },
              })
              .execute();
            return sessionStorage.setItem('anonCart', btoa(a.body.id)), a;
          }
        }
        return null;
      }
      async function wi(e, t, s, r) {
        const a = await mi(e, s, r);
        if (a) {
          const e = await bi(t),
            { id: s } = a.body,
            { version: i } = a.body,
            n = e.id;
          return await Ka.carts()
            .withId({ ID: s })
            .post({
              body: {
                version: i,
                actions: [{ action: 'addLineItem', productId: n }],
              },
              headers: { Authorization: `Bearer ${r}` },
            })
            .execute();
        }
        return null;
      }
      async function qi() {
        const e = Va.get('log');
        if (e) {
          const t = Va.get('token');
          return { value: atob(e), anon: !1, token: atob(t) };
        }
        const t = sessionStorage.getItem('anonCart');
        if (t) {
          const e = sessionStorage.getItem('anonToken');
          return { value: atob(t), anon: !0, token: atob(e) };
        }
        const s = await (async function () {
          const e = `${Ra.CTP_AUTH_URL}/oauth/${Ra.CTP_PROJECT_KEY}/anonymous/token`,
            t = btoa(`${Ra.CTP_CLIENT_ID}:${Ra.CTP_CLIENT_SECRET}`),
            s = `grant_type=client_credentials&scope=${Ra.CTP_SCOPES}`,
            r = await fetch(e, {
              method: 'POST',
              headers: {
                Authorization: `Basic ${t}`,
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: s,
            });
          return await r.json();
        })();
        return (
          sessionStorage.setItem('anonToken', btoa(s.access_token)),
          { value: void 0, anon: !0, token: s.access_token }
        );
      }
      async function fi() {
        try {
          const e = await qi(),
            t = await mi(e.value, e.anon, e.token);
          return t?.body.lineItems || [];
        } catch (e) {
          return [];
        }
      }
      async function Ai() {
        const { value: e, anon: t } = await qi();
        if (e && !t)
          try {
            const t = await Ka.carts()
              .get({ queryArgs: { where: `customerId="${e}"` } })
              .execute();
            return t.body.results.length > 0
              ? t.body.results[0].id
              : (console.warn('No cart found for logged-in customer.'), null);
          } catch (e) {
            return console.error('Error fetching cart by customerId:', e), null;
          }
        else if (e && t) return e;
        return null;
      }
      function Ti(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          'constructor' in e &&
          e.constructor === Object
        );
      }
      function Ui(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((s) => {
            void 0 === e[s]
              ? (e[s] = t[s])
              : Ti(t[s]) &&
                Ti(e[s]) &&
                Object.keys(t[s]).length > 0 &&
                Ui(e[s], t[s]);
          });
      }
      const xi = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function vi() {
        const e = 'undefined' != typeof document ? document : {};
        return Ui(e, xi), e;
      }
      const Ei = {
        document: xi,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          'undefined' != typeof setTimeout && clearTimeout(e);
        },
      };
      function Ri() {
        const e = 'undefined' != typeof window ? window : {};
        return Ui(e, Ei), e;
      }
      function Pi(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function ki() {
        return Date.now();
      }
      function ji(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Ci() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ['__proto__', 'constructor', 'prototype'];
        for (let r = 1; r < arguments.length; r += 1) {
          const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (
            null != a &&
            ((s = a),
            !('undefined' != typeof window && void 0 !== window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = s.length; t < r; t += 1) {
              const r = s[t],
                i = Object.getOwnPropertyDescriptor(a, r);
              void 0 !== i &&
                i.enumerable &&
                (ji(e[r]) && ji(a[r])
                  ? a[r].__swiper__
                    ? (e[r] = a[r])
                    : Ci(e[r], a[r])
                  : !ji(e[r]) && ji(a[r])
                    ? ((e[r] = {}),
                      a[r].__swiper__ ? (e[r] = a[r]) : Ci(e[r], a[r]))
                    : (e[r] = a[r]));
            }
          }
        }
        var s;
        return e;
      }
      function Si(e, t, s) {
        e.style.setProperty(t, s);
      }
      function Ki(e) {
        let { swiper: t, targetPosition: s, side: r } = e;
        const a = Ri(),
          i = -t.translate;
        let n,
          o = null;
        const h = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = 'none'),
          a.cancelAnimationFrame(t.cssModeFrameID);
        const u = s > i ? 'next' : 'prev',
          d = (e, t) => ('next' === u && e >= t) || ('prev' === u && e <= t),
          l = () => {
            (n = new Date().getTime()), null === o && (o = n);
            const e = Math.max(Math.min((n - o) / h, 1), 0),
              u = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = i + u * (s - i);
            if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [r]: p }), d(p, s)))
              return (
                (t.wrapperEl.style.overflow = 'hidden'),
                (t.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ''),
                    t.wrapperEl.scrollTo({ [r]: p });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(l);
          };
        l();
      }
      function Ii(e, t) {
        return (
          void 0 === t && (t = ''), [...e.children].filter((e) => e.matches(t))
        );
      }
      function Vi(e) {
        try {
          return void console.warn(e);
        } catch (e) {}
      }
      function Li(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ''),
                    e
                      .trim()
                      .split(' ')
                      .filter((e) => !!e.trim())
                  );
                })(t)),
          ),
          s
        );
      }
      function Di(e, t) {
        return Ri().getComputedStyle(e, null).getPropertyValue(t);
      }
      function Oi(e) {
        let t,
          s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling); )
            1 === s.nodeType && (t += 1);
          return t;
        }
      }
      function Mi(e, t) {
        const s = [];
        let r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && s.push(r) : s.push(r), (r = r.parentElement);
        return s;
      }
      function Bi(e, t, s) {
        const r = Ri();
        return s
          ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-right' : 'margin-top',
                  ),
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-left' : 'margin-bottom',
                  ),
              )
          : e.offsetWidth;
      }
      function Gi(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
      let _i, Hi, Fi;
      function $i() {
        return (
          _i ||
            (_i = (function () {
              const e = Ri(),
                t = vi();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  'scrollBehavior' in t.documentElement.style,
                touch: !!(
                  'ontouchstart' in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          _i
        );
      }
      function Ni(e) {
        return (
          void 0 === e && (e = {}),
          Hi ||
            (Hi = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const s = $i(),
                r = Ri(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                n = { ios: !1, android: !1 },
                o = r.screen.width,
                h = r.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = i.match(/(iPad).*OS\s([\d_]+)/);
              const l = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                c = 'Win32' === a;
              let g = 'MacIntel' === a;
              return (
                !d &&
                  g &&
                  s.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(`${o}x${h}`) >= 0 &&
                  ((d = i.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, '13_0_0']),
                  (g = !1)),
                u && !c && ((n.os = 'android'), (n.android = !0)),
                (d || p || l) && ((n.os = 'ios'), (n.ios = !0)),
                n
              );
            })(e)),
          Hi
        );
      }
      var zi = {
        on(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ('function' != typeof t) return r;
          const a = s ? 'unshift' : 'push';
          return (
            e.split(' ').forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ('function' != typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
              i[n] = arguments[n];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof e) return s;
          const r = t ? 'unshift' : 'push';
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[r](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
              ? (e.split(' ').forEach((e) => {
                  void 0 === t
                    ? (s.eventsListeners[e] = [])
                    : s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((r, a) => {
                        (r === t ||
                          (r.__emitterProxy && r.__emitterProxy === t)) &&
                          s.eventsListeners[e].splice(a, 1);
                      });
                }),
                s)
              : s;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, r;
          for (var a = arguments.length, i = new Array(a), n = 0; n < a; n++)
            i[n] = arguments[n];
          return (
            'string' == typeof i[0] || Array.isArray(i[0])
              ? ((t = i[0]), (s = i.slice(1, i.length)), (r = e))
              : ((t = i[0].events), (s = i[0].data), (r = i[0].context || e)),
            s.unshift(r),
            (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, s);
                  });
            }),
            e
          );
        },
      };
      const Wi = (e, t, s) => {
          t && !e.classList.contains(s)
            ? e.classList.add(s)
            : !t && e.classList.contains(s) && e.classList.remove(s);
        },
        Yi = (e, t, s) => {
          t && !e.classList.contains(s)
            ? e.classList.add(s)
            : !t && e.classList.contains(s) && e.classList.remove(s);
        },
        Xi = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(
            e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`,
          );
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (s.shadowRoot
                ? (t = s.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`,
                  ))
                : requestAnimationFrame(() => {
                    s.shadowRoot &&
                      ((t = s.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`,
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        Ji = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute('loading');
        },
        Qi = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const r =
              'auto' === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = a,
              i = [s - t];
            return (
              i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              void e.slides.forEach((t, s) => {
                i.includes(t.column) && Ji(e, s);
              })
            );
          }
          const i = a + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = a - t; r <= i + t; r += 1) {
              const t = ((r % s) + s) % s;
              (t < a || t > i) && Ji(e, t);
            }
          else
            for (
              let r = Math.max(a - t, 0);
              r <= Math.min(i + t, s - 1);
              r += 1
            )
              r !== a && (r > i || r < a) && Ji(e, r);
        };
      var Zi = {
        updateSize: function () {
          const e = this;
          let t, s;
          const r = e.el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : r.clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(Di(r, 'padding-left') || 0, 10) -
                parseInt(Di(r, 'padding-right') || 0, 10)),
              (s =
                s -
                parseInt(Di(r, 'padding-top') || 0, 10) -
                parseInt(Di(r, 'padding-bottom') || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
          }
          const s = e.params,
            {
              wrapperEl: r,
              slidesEl: a,
              size: i,
              rtlTranslate: n,
              wrongRTL: o,
            } = e,
            h = e.virtual && s.virtual.enabled,
            u = h ? e.virtual.slides.length : e.slides.length,
            d = Ii(a, `.${e.params.slideClass}, swiper-slide`),
            l = h ? e.virtual.slides.length : d.length;
          let p = [];
          const c = [],
            g = [];
          let y = s.slidesOffsetBefore;
          'function' == typeof y && (y = s.slidesOffsetBefore.call(e));
          let b = s.slidesOffsetAfter;
          'function' == typeof b && (b = s.slidesOffsetAfter.call(e));
          const m = e.snapGrid.length,
            w = e.slidesGrid.length;
          let q = s.spaceBetween,
            f = -y,
            A = 0,
            T = 0;
          if (void 0 === i) return;
          'string' == typeof q && q.indexOf('%') >= 0
            ? (q = (parseFloat(q.replace('%', '')) / 100) * i)
            : 'string' == typeof q && (q = parseFloat(q)),
            (e.virtualSize = -q),
            d.forEach((e) => {
              n ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                (e.style.marginBottom = ''),
                (e.style.marginTop = '');
            }),
            s.centeredSlides &&
              s.cssMode &&
              (Si(r, '--swiper-centered-offset-before', ''),
              Si(r, '--swiper-centered-offset-after', ''));
          const U = s.grid && s.grid.rows > 1 && e.grid;
          let x;
          U ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
          const v =
            'auto' === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView,
            ).length > 0;
          for (let r = 0; r < l; r += 1) {
            let a;
            if (
              ((x = 0),
              d[r] && (a = d[r]),
              U && e.grid.updateSlide(r, a, d),
              !d[r] || 'none' !== Di(a, 'display'))
            ) {
              if ('auto' === s.slidesPerView) {
                v && (d[r].style[e.getDirectionLabel('width')] = '');
                const i = getComputedStyle(a),
                  n = a.style.transform,
                  o = a.style.webkitTransform;
                if (
                  (n && (a.style.transform = 'none'),
                  o && (a.style.webkitTransform = 'none'),
                  s.roundLengths)
                )
                  x = e.isHorizontal()
                    ? Bi(a, 'width', !0)
                    : Bi(a, 'height', !0);
                else {
                  const e = t(i, 'width'),
                    s = t(i, 'padding-left'),
                    r = t(i, 'padding-right'),
                    n = t(i, 'margin-left'),
                    o = t(i, 'margin-right'),
                    h = i.getPropertyValue('box-sizing');
                  if (h && 'border-box' === h) x = e + n + o;
                  else {
                    const { clientWidth: t, offsetWidth: i } = a;
                    x = e + s + r + n + o + (i - t);
                  }
                }
                n && (a.style.transform = n),
                  o && (a.style.webkitTransform = o),
                  s.roundLengths && (x = Math.floor(x));
              } else
                (x = (i - (s.slidesPerView - 1) * q) / s.slidesPerView),
                  s.roundLengths && (x = Math.floor(x)),
                  d[r] && (d[r].style[e.getDirectionLabel('width')] = `${x}px`);
              d[r] && (d[r].swiperSlideSize = x),
                g.push(x),
                s.centeredSlides
                  ? ((f = f + x / 2 + A / 2 + q),
                    0 === A && 0 !== r && (f = f - i / 2 - q),
                    0 === r && (f = f - i / 2 - q),
                    Math.abs(f) < 0.001 && (f = 0),
                    s.roundLengths && (f = Math.floor(f)),
                    T % s.slidesPerGroup == 0 && p.push(f),
                    c.push(f))
                  : (s.roundLengths && (f = Math.floor(f)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(f),
                    c.push(f),
                    (f = f + x + q)),
                (e.virtualSize += x + q),
                (A = x),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, i) + b),
            n &&
              o &&
              ('slide' === s.effect || 'coverflow' === s.effect) &&
              (r.style.width = `${e.virtualSize + q}px`),
            s.setWrapperSize &&
              (r.style[e.getDirectionLabel('width')] =
                `${e.virtualSize + q}px`),
            U && e.grid.updateWrapperSize(x, p),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < p.length; r += 1) {
              let a = p[r];
              s.roundLengths && (a = Math.floor(a)),
                p[r] <= e.virtualSize - i && t.push(a);
            }
            (p = t),
              Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - i);
          }
          if (h && s.loop) {
            const t = g[0] + q;
            if (s.slidesPerGroup > 1) {
              const r = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    s.slidesPerGroup,
                ),
                a = t * s.slidesPerGroup;
              for (let e = 0; e < r; e += 1) p.push(p[p.length - 1] + a);
            }
            for (
              let r = 0;
              r < e.virtual.slidesBefore + e.virtual.slidesAfter;
              r += 1
            )
              1 === s.slidesPerGroup && p.push(p[p.length - 1] + t),
                c.push(c[c.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === p.length && (p = [0]), 0 !== q)) {
            const t =
              e.isHorizontal() && n
                ? 'marginLeft'
                : e.getDirectionLabel('marginRight');
            d.filter(
              (e, t) => !(s.cssMode && !s.loop) || t !== d.length - 1,
            ).forEach((e) => {
              e.style[t] = `${q}px`;
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t) => {
              e += t + (q || 0);
            }),
              (e -= q);
            const t = e - i;
            p = p.map((e) => (e <= 0 ? -y : e > t ? t + b : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            g.forEach((t) => {
              e += t + (q || 0);
            }),
              (e -= q);
            const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
            if (e + t < i) {
              const s = (i - e - t) / 2;
              p.forEach((e, t) => {
                p[t] = e - s;
              }),
                c.forEach((e, t) => {
                  c[t] = e + s;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: c,
              slidesSizesGrid: g,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            Si(r, '--swiper-centered-offset-before', -p[0] + 'px'),
              Si(
                r,
                '--swiper-centered-offset-after',
                e.size / 2 - g[g.length - 1] / 2 + 'px',
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (l !== u && e.emit('slidesLengthChange'),
            p.length !== m &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit('snapGridLengthChange')),
            c.length !== w && e.emit('slidesGridLengthChange'),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit('slidesUpdated'),
            !(h || s.cssMode || ('slide' !== s.effect && 'fade' !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              r = e.el.classList.contains(t);
            l <= s.maxBackfaceHiddenSlides
              ? r || e.el.classList.add(t)
              : r && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            r = t.virtual && t.params.virtual.enabled;
          let a,
            i = 0;
          'number' == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const n = (e) =>
            r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                s.push(e);
              });
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                s.push(n(e));
              }
          else s.push(n(t.activeIndex));
          for (a = 0; a < s.length; a += 1)
            if (void 0 !== s[a]) {
              const e = s[a].offsetHeight;
              i = e > i ? e : i;
            }
          (i || 0 === i) && (t.wrapperEl.style.height = `${i}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            s = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset =
              (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
              s -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            s = t.params,
            { slides: r, rtlTranslate: a, snapGrid: i } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let n = -e;
          a && (n = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
          let o = s.spaceBetween;
          'string' == typeof o && o.indexOf('%') >= 0
            ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
            : 'string' == typeof o && (o = parseFloat(o));
          for (let e = 0; e < r.length; e += 1) {
            const h = r[e];
            let u = h.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (u -= r[0].swiperSlideOffset);
            const d =
                (n + (s.centeredSlides ? t.minTranslate() : 0) - u) /
                (h.swiperSlideSize + o),
              l =
                (n - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - u) /
                (h.swiperSlideSize + o),
              p = -(n - u),
              c = p + t.slidesSizesGrid[e],
              g = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
              y =
                (p >= 0 && p < t.size - 1) ||
                (c > 1 && c <= t.size) ||
                (p <= 0 && c >= t.size);
            y && (t.visibleSlides.push(h), t.visibleSlidesIndexes.push(e)),
              Wi(h, y, s.slideVisibleClass),
              Wi(h, g, s.slideFullyVisibleClass),
              (h.progress = a ? -d : d),
              (h.originalProgress = a ? -l : l);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: a, isBeginning: i, isEnd: n, progressLoop: o } = t;
          const h = i,
            u = n;
          if (0 === r) (a = 0), (i = !0), (n = !0);
          else {
            a = (e - t.minTranslate()) / r;
            const s = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (i = s || a <= 0), (n = o || a >= 1), s && (a = 0), o && (a = 1);
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[s],
              i = t.slidesGrid[r],
              n = t.slidesGrid[t.slidesGrid.length - 1],
              h = Math.abs(e);
            (o = h >= a ? (h - a) / n : (h + n - i) / n), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: a,
            progressLoop: o,
            isBeginning: i,
            isEnd: n,
          }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            i && !h && t.emit('reachBeginning toEdge'),
            n && !u && t.emit('reachEnd toEdge'),
            ((h && !i) || (u && !n)) && t.emit('fromEdge'),
            t.emit('progress', a);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: s, slidesEl: r, activeIndex: a } = e,
            i = e.virtual && s.virtual.enabled,
            n = e.grid && s.grid && s.grid.rows > 1,
            o = (e) => Ii(r, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let h, u, d;
          if (i)
            if (s.loop) {
              let t = a - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (h = o(`[data-swiper-slide-index="${t}"]`));
            } else h = o(`[data-swiper-slide-index="${a}"]`);
          else
            n
              ? ((h = t.filter((e) => e.column === a)[0]),
                (d = t.filter((e) => e.column === a + 1)[0]),
                (u = t.filter((e) => e.column === a - 1)[0]))
              : (h = t[a]);
          h &&
            (n ||
              ((d = (function (e, t) {
                const s = [];
                for (; e.nextElementSibling; ) {
                  const r = e.nextElementSibling;
                  t ? r.matches(t) && s.push(r) : s.push(r), (e = r);
                }
                return s;
              })(h, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && !d && (d = t[0]),
              (u = (function (e, t) {
                const s = [];
                for (; e.previousElementSibling; ) {
                  const r = e.previousElementSibling;
                  t ? r.matches(t) && s.push(r) : s.push(r), (e = r);
                }
                return s;
              })(h, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && 0 === !u && (u = t[t.length - 1]))),
            t.forEach((e) => {
              Yi(e, e === h, s.slideActiveClass),
                Yi(e, e === d, s.slideNextClass),
                Yi(e, e === u, s.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: a,
              activeIndex: i,
              realIndex: n,
              snapIndex: o,
            } = t;
          let h,
            u = e;
          const d = (e) => {
            let s = e - t.virtual.slidesBefore;
            return (
              s < 0 && (s = t.virtual.slides.length + s),
              s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
              s
            );
          };
          if (
            (void 0 === u &&
              (u = (function (e) {
                const { slidesGrid: t, params: s } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (a = e)
                      : r >= t[e] && r < t[e + 1] && (a = e + 1)
                    : r >= t[e] && (a = e);
                return (
                  s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
                );
              })(t)),
            r.indexOf(s) >= 0)
          )
            h = r.indexOf(s);
          else {
            const e = Math.min(a.slidesPerGroupSkip, u);
            h = e + Math.floor((u - e) / a.slidesPerGroup);
          }
          if ((h >= r.length && (h = r.length - 1), u === i && !t.params.loop))
            return void (
              h !== o && ((t.snapIndex = h), t.emit('snapIndexChange'))
            );
          if (u === i && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = d(u));
          const l = t.grid && a.grid && a.grid.rows > 1;
          let p;
          if (t.virtual && a.virtual.enabled && a.loop) p = d(u);
          else if (l) {
            const e = t.slides.filter((e) => e.column === u)[0];
            let s = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
              (p = Math.floor(s / a.grid.rows));
          } else if (t.slides[u]) {
            const e = t.slides[u].getAttribute('data-swiper-slide-index');
            p = e ? parseInt(e, 10) : u;
          } else p = u;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: h,
            previousRealIndex: n,
            realIndex: p,
            previousIndex: i,
            activeIndex: u,
          }),
            t.initialized && Qi(t),
            t.emit('activeIndexChange'),
            t.emit('snapIndexChange'),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (n !== p && t.emit('realIndexChange'), t.emit('slideChange'));
        },
        updateClickedSlide: function (e, t) {
          const s = this,
            r = s.params;
          let a = e.closest(`.${r.slideClass}, swiper-slide`);
          !a &&
            s.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !a &&
                e.matches &&
                e.matches(`.${r.slideClass}, swiper-slide`) &&
                (a = e);
            });
          let i,
            n = !1;
          if (a)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === a) {
                (n = !0), (i = e);
                break;
              }
          if (!a || !n)
            return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
          (s.clickedSlide = a),
            s.virtual && s.params.virtual.enabled
              ? (s.clickedIndex = parseInt(
                  a.getAttribute('data-swiper-slide-index'),
                  10,
                ))
              : (s.clickedIndex = i),
            r.slideToClickedSlide &&
              void 0 !== s.clickedIndex &&
              s.clickedIndex !== s.activeIndex &&
              s.slideToClickedSlide();
        },
      };
      function en(e) {
        let { swiper: t, runCallbacks: s, direction: r, step: a } = e;
        const { activeIndex: i, previousIndex: n } = t;
        let o = r;
        if (
          (o || (o = i > n ? 'next' : i < n ? 'prev' : 'reset'),
          t.emit(`transition${a}`),
          s && i !== n)
        ) {
          if ('reset' === o) return void t.emit(`slideResetTransition${a}`);
          t.emit(`slideChangeTransition${a}`),
            'next' === o
              ? t.emit(`slideNextTransition${a}`)
              : t.emit(`slidePrevTransition${a}`);
        }
      }
      var tn = {
          slideTo: function (e, t, s, r, a) {
            void 0 === e && (e = 0),
              void 0 === s && (s = !0),
              'string' == typeof e && (e = parseInt(e, 10));
            const i = this;
            let n = e;
            n < 0 && (n = 0);
            const {
              params: o,
              snapGrid: h,
              slidesGrid: u,
              previousIndex: d,
              activeIndex: l,
              rtlTranslate: p,
              wrapperEl: c,
              enabled: g,
            } = i;
            if (
              (!g && !r && !a) ||
              i.destroyed ||
              (i.animating && o.preventInteractionOnTransition)
            )
              return !1;
            void 0 === t && (t = i.params.speed);
            const y = Math.min(i.params.slidesPerGroupSkip, n);
            let b = y + Math.floor((n - y) / i.params.slidesPerGroup);
            b >= h.length && (b = h.length - 1);
            const m = -h[b];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < u.length; e += 1) {
                const t = -Math.floor(100 * m),
                  s = Math.floor(100 * u[e]),
                  r = Math.floor(100 * u[e + 1]);
                void 0 !== u[e + 1]
                  ? t >= s && t < r - (r - s) / 2
                    ? (n = e)
                    : t >= s && t < r && (n = e + 1)
                  : t >= s && (n = e);
              }
            if (i.initialized && n !== l) {
              if (
                !i.allowSlideNext &&
                (p
                  ? m > i.translate && m > i.minTranslate()
                  : m < i.translate && m < i.minTranslate())
              )
                return !1;
              if (
                !i.allowSlidePrev &&
                m > i.translate &&
                m > i.maxTranslate() &&
                (l || 0) !== n
              )
                return !1;
            }
            let w;
            if (
              (n !== (d || 0) && s && i.emit('beforeSlideChangeStart'),
              i.updateProgress(m),
              (w = n > l ? 'next' : n < l ? 'prev' : 'reset'),
              (p && -m === i.translate) || (!p && m === i.translate))
            )
              return (
                i.updateActiveIndex(n),
                o.autoHeight && i.updateAutoHeight(),
                i.updateSlidesClasses(),
                'slide' !== o.effect && i.setTranslate(m),
                'reset' !== w &&
                  (i.transitionStart(s, w), i.transitionEnd(s, w)),
                !1
              );
            if (o.cssMode) {
              const e = i.isHorizontal(),
                s = p ? m : -m;
              if (0 === t) {
                const t = i.virtual && i.params.virtual.enabled;
                t &&
                  ((i.wrapperEl.style.scrollSnapType = 'none'),
                  (i._immediateVirtual = !0)),
                  t && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
                    ? ((i._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                        c[e ? 'scrollLeft' : 'scrollTop'] = s;
                      }))
                    : (c[e ? 'scrollLeft' : 'scrollTop'] = s),
                  t &&
                    requestAnimationFrame(() => {
                      (i.wrapperEl.style.scrollSnapType = ''),
                        (i._immediateVirtual = !1);
                    });
              } else {
                if (!i.support.smoothScroll)
                  return (
                    Ki({
                      swiper: i,
                      targetPosition: s,
                      side: e ? 'left' : 'top',
                    }),
                    !0
                  );
                c.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              i.setTransition(t),
              i.setTranslate(m),
              i.updateActiveIndex(n),
              i.updateSlidesClasses(),
              i.emit('beforeTransitionStart', t, r),
              i.transitionStart(s, w),
              0 === t
                ? i.transitionEnd(s, w)
                : i.animating ||
                  ((i.animating = !0),
                  i.onSlideToWrapperTransitionEnd ||
                    (i.onSlideToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.wrapperEl.removeEventListener(
                          'transitionend',
                          i.onSlideToWrapperTransitionEnd,
                        ),
                        (i.onSlideToWrapperTransitionEnd = null),
                        delete i.onSlideToWrapperTransitionEnd,
                        i.transitionEnd(s, w));
                    }),
                  i.wrapperEl.addEventListener(
                    'transitionend',
                    i.onSlideToWrapperTransitionEnd,
                  )),
              !0
            );
          },
          slideToLoop: function (e, t, s, r) {
            void 0 === e && (e = 0),
              void 0 === s && (s = !0),
              'string' == typeof e && (e = parseInt(e, 10));
            const a = this;
            if (a.destroyed) return;
            void 0 === t && (t = a.params.speed);
            const i = a.grid && a.params.grid && a.params.grid.rows > 1;
            let n = e;
            if (a.params.loop)
              if (a.virtual && a.params.virtual.enabled)
                n += a.virtual.slidesBefore;
              else {
                let e;
                if (i) {
                  const t = n * a.params.grid.rows;
                  e = a.slides.filter(
                    (e) => 1 * e.getAttribute('data-swiper-slide-index') === t,
                  )[0].column;
                } else e = a.getSlideIndexByData(n);
                const t = i
                    ? Math.ceil(a.slides.length / a.params.grid.rows)
                    : a.slides.length,
                  { centeredSlides: s } = a.params;
                let o = a.params.slidesPerView;
                'auto' === o
                  ? (o = a.slidesPerViewDynamic())
                  : ((o = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                    s && o % 2 == 0 && (o += 1));
                let h = t - e < o;
                if (
                  (s && (h = h || e < Math.ceil(o / 2)),
                  r && s && 'auto' !== a.params.slidesPerView && !i && (h = !1),
                  h)
                ) {
                  const r = s
                    ? e < a.activeIndex
                      ? 'prev'
                      : 'next'
                    : e - a.activeIndex - 1 < a.params.slidesPerView
                      ? 'next'
                      : 'prev';
                  a.loopFix({
                    direction: r,
                    slideTo: !0,
                    activeSlideIndex: 'next' === r ? e + 1 : e - t + 1,
                    slideRealIndex: 'next' === r ? a.realIndex : void 0,
                  });
                }
                if (i) {
                  const e = n * a.params.grid.rows;
                  n = a.slides.filter(
                    (t) => 1 * t.getAttribute('data-swiper-slide-index') === e,
                  )[0].column;
                } else n = a.getSlideIndexByData(n);
              }
            return (
              requestAnimationFrame(() => {
                a.slideTo(n, t, s, r);
              }),
              a
            );
          },
          slideNext: function (e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              { enabled: a, params: i, animating: n } = r;
            if (!a || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            let o = i.slidesPerGroup;
            'auto' === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              (o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
            const h = r.activeIndex < i.slidesPerGroupSkip ? 1 : o,
              u = r.virtual && i.virtual.enabled;
            if (i.loop) {
              if (n && !u && i.loopPreventsSliding) return !1;
              if (
                (r.loopFix({ direction: 'next' }),
                (r._clientLeft = r.wrapperEl.clientLeft),
                r.activeIndex === r.slides.length - 1 && i.cssMode)
              )
                return (
                  requestAnimationFrame(() => {
                    r.slideTo(r.activeIndex + h, e, t, s);
                  }),
                  !0
                );
            }
            return i.rewind && r.isEnd
              ? r.slideTo(0, e, t, s)
              : r.slideTo(r.activeIndex + h, e, t, s);
          },
          slidePrev: function (e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              {
                params: a,
                snapGrid: i,
                slidesGrid: n,
                rtlTranslate: o,
                enabled: h,
                animating: u,
              } = r;
            if (!h || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            const d = r.virtual && a.virtual.enabled;
            if (a.loop) {
              if (u && !d && a.loopPreventsSliding) return !1;
              r.loopFix({ direction: 'prev' }),
                (r._clientLeft = r.wrapperEl.clientLeft);
            }
            function l(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = l(o ? r.translate : -r.translate),
              c = i.map((e) => l(e));
            let g = i[c.indexOf(p) - 1];
            if (void 0 === g && a.cssMode) {
              let e;
              i.forEach((t, s) => {
                p >= t && (e = s);
              }),
                void 0 !== e && (g = i[e > 0 ? e - 1 : e]);
            }
            let y = 0;
            if (
              (void 0 !== g &&
                ((y = n.indexOf(g)),
                y < 0 && (y = r.activeIndex - 1),
                'auto' === a.slidesPerView &&
                  1 === a.slidesPerGroup &&
                  a.slidesPerGroupAuto &&
                  ((y = y - r.slidesPerViewDynamic('previous', !0) + 1),
                  (y = Math.max(y, 0)))),
              a.rewind && r.isBeginning)
            ) {
              const a =
                r.params.virtual && r.params.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1;
              return r.slideTo(a, e, t, s);
            }
            return a.loop && 0 === r.activeIndex && a.cssMode
              ? (requestAnimationFrame(() => {
                  r.slideTo(y, e, t, s);
                }),
                !0)
              : r.slideTo(y, e, t, s);
          },
          slideReset: function (e, t, s) {
            void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed)
              return (
                void 0 === e && (e = r.params.speed),
                r.slideTo(r.activeIndex, e, t, s)
              );
          },
          slideToClosest: function (e, t, s, r) {
            void 0 === t && (t = !0), void 0 === r && (r = 0.5);
            const a = this;
            if (a.destroyed) return;
            void 0 === e && (e = a.params.speed);
            let i = a.activeIndex;
            const n = Math.min(a.params.slidesPerGroupSkip, i),
              o = n + Math.floor((i - n) / a.params.slidesPerGroup),
              h = a.rtlTranslate ? a.translate : -a.translate;
            if (h >= a.snapGrid[o]) {
              const e = a.snapGrid[o];
              h - e > (a.snapGrid[o + 1] - e) * r &&
                (i += a.params.slidesPerGroup);
            } else {
              const e = a.snapGrid[o - 1];
              h - e <= (a.snapGrid[o] - e) * r &&
                (i -= a.params.slidesPerGroup);
            }
            return (
              (i = Math.max(i, 0)),
              (i = Math.min(i, a.slidesGrid.length - 1)),
              a.slideTo(i, e, t, s)
            );
          },
          slideToClickedSlide: function () {
            const e = this;
            if (e.destroyed) return;
            const { params: t, slidesEl: s } = e,
              r =
                'auto' === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let a,
              i = e.clickedIndex;
            const n = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              (a = parseInt(
                e.clickedSlide.getAttribute('data-swiper-slide-index'),
                10,
              )),
                t.centeredSlides
                  ? i < e.loopedSlides - r / 2 ||
                    i > e.slides.length - e.loopedSlides + r / 2
                    ? (e.loopFix(),
                      (i = e.getSlideIndex(
                        Ii(s, `${n}[data-swiper-slide-index="${a}"]`)[0],
                      )),
                      Pi(() => {
                        e.slideTo(i);
                      }))
                    : e.slideTo(i)
                  : i > e.slides.length - r
                    ? (e.loopFix(),
                      (i = e.getSlideIndex(
                        Ii(s, `${n}[data-swiper-slide-index="${a}"]`)[0],
                      )),
                      Pi(() => {
                        e.slideTo(i);
                      }))
                    : e.slideTo(i);
            } else e.slideTo(i);
          },
        },
        sn = {
          loopCreate: function (e) {
            const t = this,
              { params: s, slidesEl: r } = t;
            if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
            const a = () => {
                Ii(r, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute('data-swiper-slide-index', t);
                });
              },
              i = t.grid && s.grid && s.grid.rows > 1,
              n = s.slidesPerGroup * (i ? s.grid.rows : 1),
              o = t.slides.length % n != 0,
              h = i && t.slides.length % s.grid.rows != 0,
              u = (e) => {
                for (let r = 0; r < e; r += 1) {
                  const e = t.isElement
                    ? Li('swiper-slide', [s.slideBlankClass])
                    : Li('div', [s.slideClass, s.slideBlankClass]);
                  t.slidesEl.append(e);
                }
              };
            o
              ? (s.loopAddBlankSlides
                  ? (u(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : Vi(
                      'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
                    ),
                a())
              : h
                ? (s.loopAddBlankSlides
                    ? (u(s.grid.rows - (t.slides.length % s.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : Vi(
                        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
                      ),
                  a())
                : a(),
              t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : 'next',
              });
          },
          loopFix: function (e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: r,
              setTranslate: a,
              activeSlideIndex: i,
              byController: n,
              byMousewheel: o,
            } = void 0 === e ? {} : e;
            const h = this;
            if (!h.params.loop) return;
            h.emit('beforeLoopFix');
            const {
                slides: u,
                allowSlidePrev: d,
                allowSlideNext: l,
                slidesEl: p,
                params: c,
              } = h,
              { centeredSlides: g } = c;
            if (
              ((h.allowSlidePrev = !0),
              (h.allowSlideNext = !0),
              h.virtual && c.virtual.enabled)
            )
              return (
                s &&
                  (c.centeredSlides || 0 !== h.snapIndex
                    ? c.centeredSlides && h.snapIndex < c.slidesPerView
                      ? h.slideTo(
                          h.virtual.slides.length + h.snapIndex,
                          0,
                          !1,
                          !0,
                        )
                      : h.snapIndex === h.snapGrid.length - 1 &&
                        h.slideTo(h.virtual.slidesBefore, 0, !1, !0)
                    : h.slideTo(h.virtual.slides.length, 0, !1, !0)),
                (h.allowSlidePrev = d),
                (h.allowSlideNext = l),
                void h.emit('loopFix')
              );
            let y = c.slidesPerView;
            'auto' === y
              ? (y = h.slidesPerViewDynamic())
              : ((y = Math.ceil(parseFloat(c.slidesPerView, 10))),
                g && y % 2 == 0 && (y += 1));
            const b = c.slidesPerGroupAuto ? y : c.slidesPerGroup;
            let m = b;
            m % b != 0 && (m += b - (m % b)),
              (m += c.loopAdditionalSlides),
              (h.loopedSlides = m);
            const w = h.grid && c.grid && c.grid.rows > 1;
            u.length < y + m
              ? Vi(
                  'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
                )
              : w &&
                'row' === c.grid.fill &&
                Vi(
                  'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`',
                );
            const q = [],
              f = [];
            let A = h.activeIndex;
            void 0 === i
              ? (i = h.getSlideIndex(
                  u.filter((e) => e.classList.contains(c.slideActiveClass))[0],
                ))
              : (A = i);
            const T = 'next' === r || !r,
              U = 'prev' === r || !r;
            let x = 0,
              v = 0;
            const E = w ? Math.ceil(u.length / c.grid.rows) : u.length,
              R =
                (w ? u[i].column : i) + (g && void 0 === a ? -y / 2 + 0.5 : 0);
            if (R < m) {
              x = Math.max(m - R, b);
              for (let e = 0; e < m - R; e += 1) {
                const t = e - Math.floor(e / E) * E;
                if (w) {
                  const e = E - t - 1;
                  for (let t = u.length - 1; t >= 0; t -= 1)
                    u[t].column === e && q.push(t);
                } else q.push(E - t - 1);
              }
            } else if (R + y > E - m) {
              v = Math.max(R - (E - 2 * m), b);
              for (let e = 0; e < v; e += 1) {
                const t = e - Math.floor(e / E) * E;
                w
                  ? u.forEach((e, s) => {
                      e.column === t && f.push(s);
                    })
                  : f.push(t);
              }
            }
            if (
              ((h.__preventObserver__ = !0),
              requestAnimationFrame(() => {
                h.__preventObserver__ = !1;
              }),
              U &&
                q.forEach((e) => {
                  (u[e].swiperLoopMoveDOM = !0),
                    p.prepend(u[e]),
                    (u[e].swiperLoopMoveDOM = !1);
                }),
              T &&
                f.forEach((e) => {
                  (u[e].swiperLoopMoveDOM = !0),
                    p.append(u[e]),
                    (u[e].swiperLoopMoveDOM = !1);
                }),
              h.recalcSlides(),
              'auto' === c.slidesPerView
                ? h.updateSlides()
                : w &&
                  ((q.length > 0 && U) || (f.length > 0 && T)) &&
                  h.slides.forEach((e, t) => {
                    h.grid.updateSlide(t, e, h.slides);
                  }),
              c.watchSlidesProgress && h.updateSlidesOffset(),
              s)
            )
              if (q.length > 0 && U) {
                if (void 0 === t) {
                  const e = h.slidesGrid[A],
                    t = h.slidesGrid[A + x] - e;
                  o
                    ? h.setTranslate(h.translate - t)
                    : (h.slideTo(A + Math.ceil(x), 0, !1, !0),
                      a &&
                        ((h.touchEventsData.startTranslate =
                          h.touchEventsData.startTranslate - t),
                        (h.touchEventsData.currentTranslate =
                          h.touchEventsData.currentTranslate - t)));
                } else if (a) {
                  const e = w ? q.length / c.grid.rows : q.length;
                  h.slideTo(h.activeIndex + e, 0, !1, !0),
                    (h.touchEventsData.currentTranslate = h.translate);
                }
              } else if (f.length > 0 && T)
                if (void 0 === t) {
                  const e = h.slidesGrid[A],
                    t = h.slidesGrid[A - v] - e;
                  o
                    ? h.setTranslate(h.translate - t)
                    : (h.slideTo(A - v, 0, !1, !0),
                      a &&
                        ((h.touchEventsData.startTranslate =
                          h.touchEventsData.startTranslate - t),
                        (h.touchEventsData.currentTranslate =
                          h.touchEventsData.currentTranslate - t)));
                } else {
                  const e = w ? f.length / c.grid.rows : f.length;
                  h.slideTo(h.activeIndex - e, 0, !1, !0);
                }
            if (
              ((h.allowSlidePrev = d),
              (h.allowSlideNext = l),
              h.controller && h.controller.control && !n)
            ) {
              const e = {
                slideRealIndex: t,
                direction: r,
                setTranslate: a,
                activeSlideIndex: i,
                byController: !0,
              };
              Array.isArray(h.controller.control)
                ? h.controller.control.forEach((t) => {
                    !t.destroyed &&
                      t.params.loop &&
                      t.loopFix({
                        ...e,
                        slideTo:
                          t.params.slidesPerView === c.slidesPerView && s,
                      });
                  })
                : h.controller.control instanceof h.constructor &&
                  h.controller.control.params.loop &&
                  h.controller.control.loopFix({
                    ...e,
                    slideTo:
                      h.controller.control.params.slidesPerView ===
                        c.slidesPerView && s,
                  });
            }
            h.emit('loopFix');
          },
          loopDestroy: function () {
            const e = this,
              { params: t, slidesEl: s } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach((e) => {
              const t =
                void 0 === e.swiperSlideIndex
                  ? 1 * e.getAttribute('data-swiper-slide-index')
                  : e.swiperSlideIndex;
              r[t] = e;
            }),
              e.slides.forEach((e) => {
                e.removeAttribute('data-swiper-slide-index');
              }),
              r.forEach((e) => {
                s.append(e);
              }),
              e.recalcSlides(),
              e.slideTo(e.realIndex, 0);
          },
        };
      function rn(e, t, s) {
        const r = Ri(),
          { params: a } = e,
          i = a.edgeSwipeDetection,
          n = a.edgeSwipeThreshold;
        return (
          !i ||
          !(s <= n || s >= r.innerWidth - n) ||
          ('prevent' === i && (t.preventDefault(), !0))
        );
      }
      function an(e) {
        const t = this,
          s = vi();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ('pointerdown' === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId;
        } else
          'touchstart' === r.type &&
            1 === r.targetTouches.length &&
            (a.touchId = r.targetTouches[0].identifier);
        if ('touchstart' === r.type)
          return void rn(t, r, r.targetTouches[0].pageX);
        const { params: i, touches: n, enabled: o } = t;
        if (!o) return;
        if (!i.simulateTouch && 'mouse' === r.pointerType) return;
        if (t.animating && i.preventInteractionOnTransition) return;
        !t.animating && i.cssMode && i.loop && t.loopFix();
        let h = r.target;
        if ('wrapper' === i.touchEventsTarget && !t.wrapperEl.contains(h))
          return;
        if ('which' in r && 3 === r.which) return;
        if ('button' in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!i.noSwipingClass && '' !== i.noSwipingClass,
          d = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && d && (h = d[0]);
        const l = i.noSwipingSelector
            ? i.noSwipingSelector
            : `.${i.noSwipingClass}`,
          p = !(!r.target || !r.target.shadowRoot);
        if (
          i.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(s) {
                    if (!s || s === vi() || s === Ri()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const r = s.closest(e);
                    return r || s.getRootNode
                      ? r || t(s.getRootNode().host)
                      : null;
                  })(t)
                );
              })(l, h)
            : h.closest(l))
        )
          return void (t.allowClick = !0);
        if (i.swipeHandler && !h.closest(i.swipeHandler)) return;
        (n.currentX = r.pageX), (n.currentY = r.pageY);
        const c = n.currentX,
          g = n.currentY;
        if (!rn(t, r, c)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = c),
          (n.startY = g),
          (a.touchStartTime = ki()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          i.threshold > 0 && (a.allowThresholdMove = !1);
        let y = !0;
        h.matches(a.focusableElements) &&
          ((y = !1), 'SELECT' === h.nodeName && (a.isTouched = !1)),
          s.activeElement &&
            s.activeElement.matches(a.focusableElements) &&
            s.activeElement !== h &&
            s.activeElement.blur();
        const b = y && t.allowTouchMove && i.touchStartPreventDefault;
        (!i.touchStartForcePreventDefault && !b) ||
          h.isContentEditable ||
          r.preventDefault(),
          i.freeMode &&
            i.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !i.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit('touchStart', r);
      }
      function nn(e) {
        const t = vi(),
          s = this,
          r = s.touchEventsData,
          { params: a, touches: i, rtlTranslate: n, enabled: o } = s;
        if (!o) return;
        if (!a.simulateTouch && 'mouse' === e.pointerType) return;
        let h,
          u = e;
        if (
          (u.originalEvent && (u = u.originalEvent), 'pointermove' === u.type)
        ) {
          if (null !== r.touchId) return;
          if (u.pointerId !== r.pointerId) return;
        }
        if ('touchmove' === u.type) {
          if (
            ((h = [...u.changedTouches].filter(
              (e) => e.identifier === r.touchId,
            )[0]),
            !h || h.identifier !== r.touchId)
          )
            return;
        } else h = u;
        if (!r.isTouched)
          return void (
            r.startMoving &&
            r.isScrolling &&
            s.emit('touchMoveOpposite', u)
          );
        const d = h.pageX,
          l = h.pageY;
        if (u.preventedByNestedSwiper)
          return (i.startX = d), void (i.startY = l);
        if (!s.allowTouchMove)
          return (
            u.target.matches(r.focusableElements) || (s.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(i, {
                startX: d,
                startY: l,
                currentX: d,
                currentY: l,
              }),
              (r.touchStartTime = ki()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (s.isVertical()) {
            if (
              (l < i.startY && s.translate <= s.maxTranslate()) ||
              (l > i.startY && s.translate >= s.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (d < i.startX && s.translate <= s.maxTranslate()) ||
            (d > i.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          u.target === t.activeElement &&
          u.target.matches(r.focusableElements)
        )
          return (r.isMoved = !0), void (s.allowClick = !1);
        r.allowTouchCallbacks && s.emit('touchMove', u),
          (i.previousX = i.currentX),
          (i.previousY = i.currentY),
          (i.currentX = d),
          (i.currentY = l);
        const p = i.currentX - i.startX,
          c = i.currentY - i.startY;
        if (
          s.params.threshold &&
          Math.sqrt(p ** 2 + c ** 2) < s.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (s.isHorizontal() && i.currentY === i.startY) ||
          (s.isVertical() && i.currentX === i.startX)
            ? (r.isScrolling = !1)
            : p * p + c * c >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(c), Math.abs(p))) / Math.PI),
              (r.isScrolling = s.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && s.emit('touchMoveOpposite', u),
          void 0 === r.startMoving &&
            ((i.currentX === i.startX && i.currentY === i.startY) ||
              (r.startMoving = !0)),
          r.isScrolling ||
            ('touchmove' === u.type && r.preventTouchMoveFromPointerMove))
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (s.allowClick = !1),
          !a.cssMode && u.cancelable && u.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let g = s.isHorizontal() ? p : c,
          y = s.isHorizontal()
            ? i.currentX - i.previousX
            : i.currentY - i.previousY;
        a.oneWayMovement &&
          ((g = Math.abs(g) * (n ? 1 : -1)), (y = Math.abs(y) * (n ? 1 : -1))),
          (i.diff = g),
          (g *= a.touchRatio),
          n && ((g = -g), (y = -y));
        const b = s.touchesDirection;
        (s.swipeDirection = g > 0 ? 'prev' : 'next'),
          (s.touchesDirection = y > 0 ? 'prev' : 'next');
        const m = s.params.loop && !a.cssMode,
          w =
            ('next' === s.touchesDirection && s.allowSlideNext) ||
            ('prev' === s.touchesDirection && s.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (m && w && s.loopFix({ direction: s.swipeDirection }),
            (r.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating)
          ) {
            const e = new window.CustomEvent('transitionend', {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            s.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit('sliderFirstMove', u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            b !== s.touchesDirection &&
            m &&
            w &&
            Math.abs(g) >= 1)
        )
          return (
            Object.assign(i, {
              startX: d,
              startY: l,
              currentX: d,
              currentY: l,
              startTranslate: r.currentTranslate,
            }),
            (r.loopSwapReset = !0),
            void (r.startTranslate = r.currentTranslate)
          );
        s.emit('sliderMove', u),
          (r.isMoved = !0),
          (r.currentTranslate = g + r.startTranslate);
        let q = !0,
          f = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (f = 0),
          g > 0
            ? (m &&
                w &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                    : s.minTranslate()) &&
                s.loopFix({
                  direction: 'prev',
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > s.minTranslate() &&
                ((q = !1),
                a.resistance &&
                  (r.currentTranslate =
                    s.minTranslate() -
                    1 +
                    (-s.minTranslate() + r.startTranslate + g) ** f)))
            : g < 0 &&
              (m &&
                w &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? s.maxTranslate() +
                      s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                    : s.maxTranslate()) &&
                s.loopFix({
                  direction: 'next',
                  setTranslate: !0,
                  activeSlideIndex:
                    s.slides.length -
                    ('auto' === a.slidesPerView
                      ? s.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < s.maxTranslate() &&
                ((q = !1),
                a.resistance &&
                  (r.currentTranslate =
                    s.maxTranslate() +
                    1 -
                    (s.maxTranslate() - r.startTranslate - g) ** f))),
          q && (u.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            'next' === s.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !s.allowSlidePrev &&
            'prev' === s.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(g) > a.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (i.startX = i.currentX),
              (i.startY = i.currentY),
              (r.currentTranslate = r.startTranslate),
              void (i.diff = s.isHorizontal()
                ? i.currentX - i.startX
                : i.currentY - i.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
            a.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(r.currentTranslate),
          s.setTranslate(r.currentTranslate));
      }
      function on(e) {
        const t = this,
          s = t.touchEventsData;
        let r,
          a = e;
        if (
          (a.originalEvent && (a = a.originalEvent),
          'touchend' === a.type || 'touchcancel' === a.type)
        ) {
          if (
            ((r = [...a.changedTouches].filter(
              (e) => e.identifier === s.touchId,
            )[0]),
            !r || r.identifier !== s.touchId)
          )
            return;
        } else {
          if (null !== s.touchId) return;
          if (a.pointerId !== s.pointerId) return;
          r = a;
        }
        if (
          [
            'pointercancel',
            'pointerout',
            'pointerleave',
            'contextmenu',
          ].includes(a.type) &&
          (!['pointercancel', 'contextmenu'].includes(a.type) ||
            (!t.browser.isSafari && !t.browser.isWebView))
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        const {
          params: i,
          touches: n,
          rtlTranslate: o,
          slidesGrid: h,
          enabled: u,
        } = t;
        if (!u) return;
        if (!i.simulateTouch && 'mouse' === a.pointerType) return;
        if (
          (s.allowTouchCallbacks && t.emit('touchEnd', a),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = ki(),
          l = d - s.touchStartTime;
        if (t.allowClick) {
          const e = a.path || (a.composedPath && a.composedPath());
          t.updateClickedSlide((e && e[0]) || a.target, e),
            t.emit('tap click', a),
            l < 300 &&
              d - s.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', a);
        }
        if (
          ((s.lastClickTime = ki()),
          Pi(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            (0 === n.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let p;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (p = i.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        const c = p >= -t.maxTranslate() && !t.params.loop;
        let g = 0,
          y = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < h.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== h[e + t]
            ? (c || (p >= h[e] && p < h[e + t])) &&
              ((g = e), (y = h[e + t] - h[e]))
            : (c || p >= h[e]) &&
              ((g = e), (y = h[h.length - 1] - h[h.length - 2]));
        }
        let b = null,
          m = null;
        i.rewind &&
          (t.isBeginning
            ? (m =
                i.virtual && i.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (b = 0));
        const w = (p - h[g]) / y,
          q = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (l > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection &&
            (w >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? b : g + q)
              : t.slideTo(g)),
            'prev' === t.swipeDirection &&
              (w > 1 - i.longSwipesRatio
                ? t.slideTo(g + q)
                : null !== m && w < 0 && Math.abs(w) > i.longSwipesRatio
                  ? t.slideTo(m)
                  : t.slideTo(g));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation ||
          (a.target !== t.navigation.nextEl && a.target !== t.navigation.prevEl)
            ? ('next' === t.swipeDirection && t.slideTo(null !== b ? b : g + q),
              'prev' === t.swipeDirection && t.slideTo(null !== m ? m : g))
            : a.target === t.navigation.nextEl
              ? t.slideTo(g + q)
              : t.slideTo(g);
        }
      }
      function hn() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: a, snapGrid: i } = e,
          n = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = n && t.loop;
        !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !n
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = r),
          e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
      }
      function un(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function dn() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: r } = e;
        if (!r) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const i = e.maxTranslate() - e.minTranslate();
        (a = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
          a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1);
      }
      function ln(e) {
        const t = this;
        Xi(t, e.target),
          t.params.cssMode ||
            ('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function pn() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
      }
      const cn = (e, t) => {
          const s = vi(),
            { params: r, el: a, wrapperEl: i, device: n } = e,
            o = !!r.nested,
            h = 'on' === t ? 'addEventListener' : 'removeEventListener',
            u = t;
          a &&
            'string' != typeof a &&
            (s[h]('touchstart', e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            a[h]('touchstart', e.onTouchStart, { passive: !1 }),
            a[h]('pointerdown', e.onTouchStart, { passive: !1 }),
            s[h]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
            s[h]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
            s[h]('touchend', e.onTouchEnd, { passive: !0 }),
            s[h]('pointerup', e.onTouchEnd, { passive: !0 }),
            s[h]('pointercancel', e.onTouchEnd, { passive: !0 }),
            s[h]('touchcancel', e.onTouchEnd, { passive: !0 }),
            s[h]('pointerout', e.onTouchEnd, { passive: !0 }),
            s[h]('pointerleave', e.onTouchEnd, { passive: !0 }),
            s[h]('contextmenu', e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              a[h]('click', e.onClick, !0),
            r.cssMode && i[h]('scroll', e.onScroll),
            r.updateOnWindowResize
              ? e[u](
                  n.ios || n.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  hn,
                  !0,
                )
              : e[u]('observerUpdate', hn, !0),
            a[h]('load', e.onLoad, { capture: !0 }));
        },
        gn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var yn = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        swiperElementNodeName: 'SWIPER-CONTAINER',
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: 'swiper',
        enabled: !0,
        focusableElements:
          'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-blank',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideFullyVisibleClass: 'swiper-slide-fully-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function bn(e, t) {
        return function (s) {
          void 0 === s && (s = {});
          const r = Object.keys(s)[0],
            a = s[r];
          'object' == typeof a && null !== a
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              'navigation' === r &&
                e[r] &&
                e[r].enabled &&
                !e[r].prevEl &&
                !e[r].nextEl &&
                (e[r].auto = !0),
              ['pagination', 'scrollbar'].indexOf(r) >= 0 &&
                e[r] &&
                e[r].enabled &&
                !e[r].el &&
                (e[r].auto = !0),
              r in e && 'enabled' in a
                ? ('object' != typeof e[r] ||
                    'enabled' in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Ci(t, s))
                : Ci(t, s))
            : Ci(t, s);
        };
      }
      const mn = {
          eventsEmitter: zi,
          update: Zi,
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
              const {
                params: t,
                rtlTranslate: s,
                translate: r,
                wrapperEl: a,
              } = this;
              if (t.virtualTranslate) return s ? -r : r;
              if (t.cssMode) return r;
              let i = (function (e, t) {
                void 0 === t && (t = 'x');
                const s = Ri();
                let r, a, i;
                const n = (function (e) {
                  const t = Ri();
                  let s;
                  return (
                    t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                    !s && e.currentStyle && (s = e.currentStyle),
                    s || (s = e.style),
                    s
                  );
                })(e);
                return (
                  s.WebKitCSSMatrix
                    ? ((a = n.transform || n.webkitTransform),
                      a.split(',').length > 6 &&
                        (a = a
                          .split(', ')
                          .map((e) => e.replace(',', '.'))
                          .join(', ')),
                      (i = new s.WebKitCSSMatrix('none' === a ? '' : a)))
                    : ((i =
                        n.MozTransform ||
                        n.OTransform ||
                        n.MsTransform ||
                        n.msTransform ||
                        n.transform ||
                        n
                          .getPropertyValue('transform')
                          .replace('translate(', 'matrix(1, 0, 0, 1,')),
                      (r = i.toString().split(','))),
                  'x' === t &&
                    (a = s.WebKitCSSMatrix
                      ? i.m41
                      : 16 === r.length
                        ? parseFloat(r[12])
                        : parseFloat(r[4])),
                  'y' === t &&
                    (a = s.WebKitCSSMatrix
                      ? i.m42
                      : 16 === r.length
                        ? parseFloat(r[13])
                        : parseFloat(r[5])),
                  a || 0
                );
              })(a, e);
              return (i += this.cssOverflowAdjustment()), s && (i = -i), i || 0;
            },
            setTranslate: function (e, t) {
              const s = this,
                { rtlTranslate: r, params: a, wrapperEl: i, progress: n } = s;
              let o,
                h = 0,
                u = 0;
              s.isHorizontal() ? (h = r ? -e : e) : (u = e),
                a.roundLengths && ((h = Math.floor(h)), (u = Math.floor(u))),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? h : u),
                a.cssMode
                  ? (i[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                      s.isHorizontal() ? -h : -u)
                  : a.virtualTranslate ||
                    (s.isHorizontal()
                      ? (h -= s.cssOverflowAdjustment())
                      : (u -= s.cssOverflowAdjustment()),
                    (i.style.transform = `translate3d(${h}px, ${u}px, 0px)`));
              const d = s.maxTranslate() - s.minTranslate();
              (o = 0 === d ? 0 : (e - s.minTranslate()) / d),
                o !== n && s.updateProgress(e),
                s.emit('setTranslate', s.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, s, r, a) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === r && (r = !0);
              const i = this,
                { params: n, wrapperEl: o } = i;
              if (i.animating && n.preventInteractionOnTransition) return !1;
              const h = i.minTranslate(),
                u = i.maxTranslate();
              let d;
              if (
                ((d = r && e > h ? h : r && e < u ? u : e),
                i.updateProgress(d),
                n.cssMode)
              ) {
                const e = i.isHorizontal();
                if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -d;
                else {
                  if (!i.support.smoothScroll)
                    return (
                      Ki({
                        swiper: i,
                        targetPosition: -d,
                        side: e ? 'left' : 'top',
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? 'left' : 'top']: -d, behavior: 'smooth' });
                }
                return !0;
              }
              return (
                0 === t
                  ? (i.setTransition(0),
                    i.setTranslate(d),
                    s &&
                      (i.emit('beforeTransitionStart', t, a),
                      i.emit('transitionEnd')))
                  : (i.setTransition(t),
                    i.setTranslate(d),
                    s &&
                      (i.emit('beforeTransitionStart', t, a),
                      i.emit('transitionStart')),
                    i.animating ||
                      ((i.animating = !0),
                      i.onTranslateToWrapperTransitionEnd ||
                        (i.onTranslateToWrapperTransitionEnd = function (e) {
                          i &&
                            !i.destroyed &&
                            e.target === this &&
                            (i.wrapperEl.removeEventListener(
                              'transitionend',
                              i.onTranslateToWrapperTransitionEnd,
                            ),
                            (i.onTranslateToWrapperTransitionEnd = null),
                            delete i.onTranslateToWrapperTransitionEnd,
                            (i.animating = !1),
                            s && i.emit('transitionEnd'));
                        }),
                      i.wrapperEl.addEventListener(
                        'transitionend',
                        i.onTranslateToWrapperTransitionEnd,
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode ||
                ((s.wrapperEl.style.transitionDuration = `${e}ms`),
                (s.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
                s.emit('setTransition', e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: r } = s;
              r.cssMode ||
                (r.autoHeight && s.updateAutoHeight(),
                en({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: 'Start',
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: r } = s;
              (s.animating = !1),
                r.cssMode ||
                  (s.setTransition(0),
                  en({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: 'End',
                  }));
            },
          },
          slide: tn,
          loop: sn,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (s.style.cursor = 'move'),
                (s.style.cursor = e ? 'grabbing' : 'grab'),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  'container' === e.params.touchEventsTarget
                    ? 'el'
                    : 'wrapperEl'
                ].style.cursor = ''),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                { params: t } = e;
              (e.onTouchStart = an.bind(e)),
                (e.onTouchMove = nn.bind(e)),
                (e.onTouchEnd = on.bind(e)),
                (e.onDocumentTouchStart = pn.bind(e)),
                t.cssMode && (e.onScroll = dn.bind(e)),
                (e.onClick = un.bind(e)),
                (e.onLoad = ln.bind(e)),
                cn(e, 'on');
            },
            detachEvents: function () {
              cn(this, 'off');
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: s, params: r, el: a } = e,
                i = r.breakpoints;
              if (!i || (i && 0 === Object.keys(i).length)) return;
              const n = e.getBreakpoint(i, e.params.breakpointsBase, e.el);
              if (!n || e.currentBreakpoint === n) return;
              const o = (n in i ? i[n] : void 0) || e.originalParams,
                h = gn(e, r),
                u = gn(e, o),
                d = e.params.grabCursor,
                l = o.grabCursor,
                p = r.enabled;
              h && !u
                ? (a.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`,
                  ),
                  e.emitContainerClasses())
                : !h &&
                  u &&
                  (a.classList.add(`${r.containerModifierClass}grid`),
                  ((o.grid.fill && 'column' === o.grid.fill) ||
                    (!o.grid.fill && 'column' === r.grid.fill)) &&
                    a.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                d && !l ? e.unsetGrabCursor() : !d && l && e.setGrabCursor(),
                ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                  if (void 0 === o[t]) return;
                  const s = r[t] && r[t].enabled,
                    a = o[t] && o[t].enabled;
                  s && !a && e[t].disable(), !s && a && e[t].enable();
                });
              const c = o.direction && o.direction !== r.direction,
                g = r.loop && (o.slidesPerView !== r.slidesPerView || c),
                y = r.loop;
              c && s && e.changeDirection(), Ci(e.params, o);
              const b = e.params.enabled,
                m = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                p && !b ? e.disable() : !p && b && e.enable(),
                (e.currentBreakpoint = n),
                e.emit('_beforeBreakpoint', o),
                s &&
                  (g
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !y && m
                      ? (e.loopCreate(t), e.updateSlides())
                      : y && !m && e.loopDestroy()),
                e.emit('breakpoint', o);
            },
            getBreakpoint: function (e, t, s) {
              if (
                (void 0 === t && (t = 'window'),
                !e || ('container' === t && !s))
              )
                return;
              let r = !1;
              const a = Ri(),
                i = 'window' === t ? a.innerHeight : s.clientHeight,
                n = Object.keys(e).map((e) => {
                  if ('string' == typeof e && 0 === e.indexOf('@')) {
                    const t = parseFloat(e.substr(1));
                    return { value: i * t, point: e };
                  }
                  return { value: e, point: e };
                });
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < n.length; e += 1) {
                const { point: i, value: o } = n[e];
                'window' === t
                  ? a.matchMedia(`(min-width: ${o}px)`).matches && (r = i)
                  : o <= s.clientWidth && (r = i);
              }
              return r || 'max';
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: r } = s;
              if (r) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: s, rtl: r, el: a, device: i } = e,
                n = (function (e, t) {
                  const s = [];
                  return (
                    e.forEach((e) => {
                      'object' == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && s.push(t + r);
                          })
                        : 'string' == typeof e && s.push(t + e);
                    }),
                    s
                  );
                })(
                  [
                    'initialized',
                    s.direction,
                    { 'free-mode': e.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: r },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                      'grid-column':
                        s.grid && s.grid.rows > 1 && 'column' === s.grid.fill,
                    },
                    { android: i.android },
                    { ios: i.ios },
                    { 'css-mode': s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                    { 'watch-progress': s.watchSlidesProgress },
                  ],
                  s.containerModifierClass,
                );
              t.push(...n), a.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e &&
                'string' != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        wn = {};
      class qn {
        constructor() {
          let e, t;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
          1 === r.length &&
          r[0].constructor &&
          'Object' === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = Ci({}, t)),
            e && !t.el && (t.el = e);
          const i = vi();
          if (
            t.el &&
            'string' == typeof t.el &&
            i.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              i.querySelectorAll(t.el).forEach((s) => {
                const r = Ci({}, t, { el: s });
                e.push(new qn(r));
              }),
              e
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = $i()),
            (n.device = Ni({ userAgent: t.userAgent })),
            (n.browser =
              (Fi ||
                (Fi = (function () {
                  const e = Ri(),
                    t = Ni();
                  let s = !1;
                  function r() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf('safari') >= 0 &&
                      t.indexOf('chrome') < 0 &&
                      t.indexOf('android') < 0
                    );
                  }
                  if (r()) {
                    const t = String(e.navigator.userAgent);
                    if (t.includes('Version/')) {
                      const [e, r] = t
                        .split('Version/')[1]
                        .split(' ')[0]
                        .split('.')
                        .map((e) => Number(e));
                      s = e < 16 || (16 === e && r < 2);
                    }
                  }
                  const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent,
                    ),
                    i = r();
                  return {
                    isSafari: s || i,
                    needPerspectiveFix: s,
                    need3dFix: i || (a && t.ios),
                    isWebView: a,
                  };
                })()),
              Fi)),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              n.modules.push(...t.modules);
          const o = {};
          n.modules.forEach((e) => {
            e({
              params: t,
              swiper: n,
              extendParams: bn(t, o),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const h = Ci({}, yn, o);
          return (
            (n.params = Ci({}, h, wn, t)),
            (n.originalParams = Ci({}, n.params)),
            (n.passedParams = Ci({}, t)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === n.params.direction,
              isVertical: () => 'vertical' === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit('_swiper'),
            n.params.init && n.init(),
            n
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                marginRight: 'marginBottom',
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: s } = this,
            r = Oi(Ii(t, `.${s.slideClass}, swiper-slide`)[0]);
          return Oi(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute('data-swiper-slide-index') === e,
            )[0],
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = Ii(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit('enable'));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit('disable'));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = s.minTranslate(),
            a = (s.maxTranslate() - r) * e + r;
          s.translateTo(a, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(' ')
            .filter(
              (t) =>
                0 === t.indexOf('swiper') ||
                0 === t.indexOf(e.params.containerModifierClass),
            );
          e.emit('_containerClasses', t.join(' '));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ''
            : e.className
                .split(' ')
                .filter(
                  (e) =>
                    0 === e.indexOf('swiper-slide') ||
                    0 === e.indexOf(t.params.slideClass),
                )
                .join(' ');
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((s) => {
            const r = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: r }), e.emit('_slideClass', s, r);
          }),
            e.emit('_slideClasses', t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = 'current'), void 0 === t && (t = !1);
          const {
            params: s,
            slides: r,
            slidesGrid: a,
            slidesSizesGrid: i,
            size: n,
            activeIndex: o,
          } = this;
          let h = 1;
          if ('number' == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e,
              t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let s = o + 1; s < r.length; s += 1)
              r[s] &&
                !e &&
                ((t += Math.ceil(r[s].swiperSlideSize)),
                (h += 1),
                t > n && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1)
              r[s] &&
                !e &&
                ((t += r[s].swiperSlideSize), (h += 1), t > n && (e = !0));
          } else if ('current' === e)
            for (let e = o + 1; e < r.length; e += 1)
              (t ? a[e] + i[e] - a[o] < n : a[e] - a[o] < n) && (h += 1);
          else for (let e = o - 1; e >= 0; e -= 1) a[o] - a[e] < n && (h += 1);
          return h;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && Xi(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            r(), s.autoHeight && e.updateAutoHeight();
          else {
            if (
              ('auto' === s.slidesPerView || s.slidesPerView > 1) &&
              e.isEnd &&
              !s.centeredSlides
            ) {
              const t =
                e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r();
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update');
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            r = s.params.direction;
          return (
            e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
            e === r ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
              s.el.classList.add(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.forEach((t) => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              s.emit('changeDirection'),
              t && s.update()),
            s
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && 'rtl' === e) ||
            (!t.rtl && 'ltr' === e) ||
            ((t.rtl = 'rtl' === e),
            (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = 'rtl'))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = 'ltr')),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if (('string' == typeof s && (s = document.querySelector(s)), !s))
            return !1;
          (s.swiper = t),
            s.parentNode &&
              s.parentNode.host &&
              s.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const r = () =>
            `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
          let a =
            s && s.shadowRoot && s.shadowRoot.querySelector
              ? s.shadowRoot.querySelector(r())
              : Ii(s, r())[0];
          return (
            !a &&
              t.params.createElements &&
              ((a = Li('div', t.params.wrapperClass)),
              s.append(a),
              Ii(s, `.${t.params.slideClass}`).forEach((e) => {
                a.append(e);
              })),
            Object.assign(t, {
              el: s,
              wrapperEl: a,
              slidesEl:
                t.isElement && !s.parentNode.host.slideSlots
                  ? s.parentNode.host
                  : a,
              hostEl: t.isElement ? s.parentNode.host : s,
              mounted: !0,
              rtl:
                'rtl' === s.dir.toLowerCase() || 'rtl' === Di(s, 'direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === s.dir.toLowerCase() || 'rtl' === Di(s, 'direction')),
              wrongRTL: '-webkit-box' === Di(a, 'display'),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e) => {
              e.complete
                ? Xi(t, e)
                : e.addEventListener('load', (e) => {
                    Xi(t, e.target);
                  });
            }),
            Qi(t),
            (t.initialized = !0),
            Qi(t),
            t.emit('init'),
            t.emit('afterInit'),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            { params: r, el: a, wrapperEl: i, slides: n } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit('beforeDestroy'),
              (s.initialized = !1),
              s.detachEvents(),
              r.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                a && 'string' != typeof a && a.removeAttribute('style'),
                i && i.removeAttribute('style'),
                n &&
                  n.length &&
                  n.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass,
                    ),
                      e.removeAttribute('style'),
                      e.removeAttribute('data-swiper-slide-index');
                  })),
              s.emit('destroy'),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                (s.el && 'string' != typeof s.el && (s.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          Ci(wn, e);
        }
        static get extendedDefaults() {
          return wn;
        }
        static get defaults() {
          return yn;
        }
        static installModule(e) {
          qn.prototype.__modules__ || (qn.prototype.__modules__ = []);
          const t = qn.prototype.__modules__;
          'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => qn.installModule(e)), qn)
            : (qn.installModule(e), qn);
        }
      }
      function fn(e, t, s, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((a) => {
              if (!s[a] && !0 === s.auto) {
                let i = Ii(e.el, `.${r[a]}`)[0];
                i ||
                  ((i = Li('div', r[a])), (i.className = r[a]), e.el.append(i)),
                  (s[a] = i),
                  (t[a] = i);
              }
            }),
          s
        );
      }
      function An(e) {
        let { swiper: t, extendParams: s, on: r, emit: a } = e;
        function i(e) {
          let s;
          return e &&
            'string' == typeof e &&
            t.isElement &&
            ((s = t.el.querySelector(e)), s)
            ? s
            : (e &&
                ('string' == typeof e &&
                  (s = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                'string' == typeof e &&
                s &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (s = t.el.querySelector(e))
                  : s && 1 === s.length && (s = s[0])),
              e && !s ? e : s);
        }
        function n(e, s) {
          const r = t.params.navigation;
          (e = Gi(e)).forEach((e) => {
            e &&
              (e.classList[s ? 'add' : 'remove'](...r.disabledClass.split(' ')),
              'BUTTON' === e.tagName && (e.disabled = s),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? 'add' : 'remove'](r.lockClass));
          });
        }
        function o() {
          const { nextEl: e, prevEl: s } = t.navigation;
          if (t.params.loop) return n(s, !1), void n(e, !1);
          n(s, t.isBeginning && !t.params.rewind),
            n(e, t.isEnd && !t.params.rewind);
        }
        function h(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a('navigationPrev'));
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a('navigationNext'));
        }
        function d() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = fn(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          let s = i(e.nextEl),
            r = i(e.prevEl);
          Object.assign(t.navigation, { nextEl: s, prevEl: r }),
            (s = Gi(s)),
            (r = Gi(r));
          const a = (s, r) => {
            s && s.addEventListener('click', 'next' === r ? u : h),
              !t.enabled && s && s.classList.add(...e.lockClass.split(' '));
          };
          s.forEach((e) => a(e, 'next')), r.forEach((e) => a(e, 'prev'));
        }
        function l() {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = Gi(e)), (s = Gi(s));
          const r = (e, s) => {
            e.removeEventListener('click', 'next' === s ? u : h),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(' '),
              );
          };
          e.forEach((e) => r(e, 'next')), s.forEach((e) => r(e, 'prev'));
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r('init', () => {
            !1 === t.params.navigation.enabled ? p() : (d(), o());
          }),
          r('toEdge fromEdge lock unlock', () => {
            o();
          }),
          r('destroy', () => {
            l();
          }),
          r('enable disable', () => {
            let { nextEl: e, prevEl: s } = t.navigation;
            (e = Gi(e)),
              (s = Gi(s)),
              t.enabled
                ? o()
                : [...e, ...s]
                    .filter((e) => !!e)
                    .forEach((e) =>
                      e.classList.add(t.params.navigation.lockClass),
                    );
          }),
          r('click', (e, s) => {
            let { nextEl: r, prevEl: i } = t.navigation;
            (r = Gi(r)), (i = Gi(i));
            const n = s.target;
            let o = i.includes(n) || r.includes(n);
            if (t.isElement && !o) {
              const e = s.path || (s.composedPath && s.composedPath());
              e && (o = e.find((e) => r.includes(e) || i.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === n || t.pagination.el.contains(n))
              )
                return;
              let e;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : i.length &&
                  (e = i[0].classList.contains(
                    t.params.navigation.hiddenClass,
                  )),
                a(!0 === e ? 'navigationShow' : 'navigationHide'),
                [...r, ...i]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass),
                  );
            }
          });
        const p = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(' '),
          ),
            l();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(' '),
            ),
              d(),
              o();
          },
          disable: p,
          update: o,
          init: d,
          destroy: l,
        });
      }
      function Tn(e) {
        return (
          void 0 === e && (e = ''),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, '\\$1')
            .replace(/ /g, '.')}`
        );
      }
      function Un(e) {
        let { swiper: t, extendParams: s, on: r, emit: a } = e;
        const i = 'swiper-pagination';
        let n;
        s({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
            paginationDisabledClass: `${i}-disabled`,
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        function h() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, s) {
          const { bulletActiveClass: r } = t.params.pagination;
          e &&
            (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
            (e.classList.add(`${r}-${s}`),
            (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
              e.classList.add(`${r}-${s}-${s}`));
        }
        function d(e) {
          const s = e.target.closest(Tn(t.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const r = Oi(s) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            t.slideToLoop(r);
          } else t.slideTo(r);
        }
        function l() {
          const e = t.rtl,
            s = t.params.pagination;
          if (h()) return;
          let r,
            i,
            d = t.pagination.el;
          d = Gi(d);
          const l =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            p = t.params.loop
              ? Math.ceil(l / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((i = t.previousRealIndex || 0),
                (r =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : void 0 !== t.snapIndex
                ? ((r = t.snapIndex), (i = t.previousSnapIndex))
                : ((i = t.previousIndex || 0), (r = t.activeIndex || 0)),
            'bullets' === s.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let h, l, p;
            if (
              (s.dynamicBullets &&
                ((n = Bi(a[0], t.isHorizontal() ? 'width' : 'height', !0)),
                d.forEach((e) => {
                  e.style[t.isHorizontal() ? 'width' : 'height'] =
                    n * (s.dynamicMainBullets + 4) + 'px';
                }),
                s.dynamicMainBullets > 1 &&
                  void 0 !== i &&
                  ((o += r - (i || 0)),
                  o > s.dynamicMainBullets - 1
                    ? (o = s.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (h = Math.max(r - o, 0)),
                (l = h + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                (p = (l + h) / 2)),
              a.forEach((e) => {
                const t = [
                  ...[
                    '',
                    '-next',
                    '-next-next',
                    '-prev',
                    '-prev-prev',
                    '-main',
                  ].map((e) => `${s.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    'string' == typeof e && e.includes(' ') ? e.split(' ') : e,
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              a.forEach((e) => {
                const a = Oi(e);
                a === r
                  ? e.classList.add(...s.bulletActiveClass.split(' '))
                  : t.isElement && e.setAttribute('part', 'bullet'),
                  s.dynamicBullets &&
                    (a >= h &&
                      a <= l &&
                      e.classList.add(
                        ...`${s.bulletActiveClass}-main`.split(' '),
                      ),
                    a === h && u(e, 'prev'),
                    a === l && u(e, 'next'));
              });
            else {
              const e = a[r];
              if (
                (e && e.classList.add(...s.bulletActiveClass.split(' ')),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute(
                      'part',
                      t === r ? 'bullet-active' : 'bullet',
                    );
                  }),
                s.dynamicBullets)
              ) {
                const e = a[h],
                  t = a[l];
                for (let e = h; e <= l; e += 1)
                  a[e] &&
                    a[e].classList.add(
                      ...`${s.bulletActiveClass}-main`.split(' '),
                    );
                u(e, 'prev'), u(t, 'next');
              }
            }
            if (s.dynamicBullets) {
              const r = Math.min(a.length, s.dynamicMainBullets + 4),
                i = (n * r - n) / 2 - p * n,
                o = e ? 'right' : 'left';
              a.forEach((e) => {
                e.style[t.isHorizontal() ? o : 'top'] = `${i}px`;
              });
            }
          }
          d.forEach((e, i) => {
            if (
              ('fraction' === s.type &&
                (e.querySelectorAll(Tn(s.currentClass)).forEach((e) => {
                  e.textContent = s.formatFractionCurrent(r + 1);
                }),
                e.querySelectorAll(Tn(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(p);
                })),
              'progressbar' === s.type)
            ) {
              let a;
              a = s.progressbarOpposite
                ? t.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : t.isHorizontal()
                  ? 'horizontal'
                  : 'vertical';
              const i = (r + 1) / p;
              let n = 1,
                o = 1;
              'horizontal' === a ? (n = i) : (o = i),
                e.querySelectorAll(Tn(s.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`),
                    (e.style.transitionDuration = `${t.params.speed}ms`);
                });
            }
            'custom' === s.type && s.renderCustom
              ? ((e.innerHTML = s.renderCustom(t, r + 1, p)),
                0 === i && a('paginationRender', e))
              : (0 === i && a('paginationRender', e), a('paginationUpdate', e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? 'add' : 'remove'](s.lockClass);
          });
        }
        function p() {
          const e = t.params.pagination;
          if (h()) return;
          const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
                ? t.slides.length / Math.ceil(t.params.grid.rows)
                : t.slides.length;
          let r = t.pagination.el;
          r = Gi(r);
          let i = '';
          if ('bullets' === e.type) {
            let r = t.params.loop
              ? Math.ceil(s / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > s && (r = s);
            for (let s = 0; s < r; s += 1)
              e.renderBullet
                ? (i += e.renderBullet.call(t, s, e.bulletClass))
                : (i += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          'fraction' === e.type &&
            (i = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            'progressbar' === e.type &&
              (i = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (t.pagination.bullets = []),
            r.forEach((s) => {
              'custom' !== e.type && (s.innerHTML = i || ''),
                'bullets' === e.type &&
                  t.pagination.bullets.push(
                    ...s.querySelectorAll(Tn(e.bulletClass)),
                  );
            }),
            'custom' !== e.type && a('paginationRender', r[0]);
        }
        function c() {
          t.params.pagination = fn(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: 'swiper-pagination' },
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let s;
          'string' == typeof e.el &&
            t.isElement &&
            (s = t.el.querySelector(e.el)),
            s ||
              'string' != typeof e.el ||
              (s = [...document.querySelectorAll(e.el)]),
            s || (s = e.el),
            s &&
              0 !== s.length &&
              (t.params.uniqueNavElements &&
                'string' == typeof e.el &&
                Array.isArray(s) &&
                s.length > 1 &&
                ((s = [...t.el.querySelectorAll(e.el)]),
                s.length > 1 &&
                  (s = s.filter((e) => Mi(e, '.swiper')[0] === t.el)[0])),
              Array.isArray(s) && 1 === s.length && (s = s[0]),
              Object.assign(t.pagination, { el: s }),
              (s = Gi(s)),
              s.forEach((s) => {
                'bullets' === e.type &&
                  e.clickable &&
                  s.classList.add(...(e.clickableClass || '').split(' ')),
                  s.classList.add(e.modifierClass + e.type),
                  s.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                  ),
                  'bullets' === e.type &&
                    e.dynamicBullets &&
                    (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  'progressbar' === e.type &&
                    e.progressbarOpposite &&
                    s.classList.add(e.progressbarOppositeClass),
                  e.clickable && s.addEventListener('click', d),
                  t.enabled || s.classList.add(e.lockClass);
              }));
        }
        function g() {
          const e = t.params.pagination;
          if (h()) return;
          let s = t.pagination.el;
          s &&
            ((s = Gi(s)),
            s.forEach((s) => {
              s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                e.clickable &&
                  (s.classList.remove(...(e.clickableClass || '').split(' ')),
                  s.removeEventListener('click', d));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(' ')),
              );
        }
        r('changeDirection', () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: s } = t.pagination;
          (s = Gi(s)),
            s.forEach((s) => {
              s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                );
            });
        }),
          r('init', () => {
            !1 === t.params.pagination.enabled ? y() : (c(), p(), l());
          }),
          r('activeIndexChange', () => {
            void 0 === t.snapIndex && l();
          }),
          r('snapIndexChange', () => {
            l();
          }),
          r('snapGridLengthChange', () => {
            p(), l();
          }),
          r('destroy', () => {
            g();
          }),
          r('enable disable', () => {
            let { el: e } = t.pagination;
            e &&
              ((e = Gi(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? 'remove' : 'add'](
                  t.params.pagination.lockClass,
                ),
              ));
          }),
          r('lock unlock', () => {
            l();
          }),
          r('click', (e, s) => {
            const r = s.target,
              i = Gi(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              i &&
              i.length > 0 &&
              !r.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = i[0].classList.contains(
                t.params.pagination.hiddenClass,
              );
              a(!0 === e ? 'paginationShow' : 'paginationHide'),
                i.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass),
                );
            }
          });
        const y = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = Gi(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass),
            )),
            g();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = Gi(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass),
              )),
              c(),
              p(),
              l();
          },
          disable: y,
          render: p,
          update: l,
          init: c,
          destroy: g,
        });
      }
      Object.keys(mn).forEach((e) => {
        Object.keys(mn[e]).forEach((t) => {
          qn.prototype[t] = mn[e][t];
        });
      }),
        qn.use([
          function (e) {
            let { swiper: t, on: s, emit: r } = e;
            const a = Ri();
            let i = null,
              n = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r('beforeResize'), r('resize'));
              },
              h = () => {
                t && !t.destroyed && t.initialized && r('orientationchange');
              };
            s('init', () => {
              t.params.resizeObserver && void 0 !== a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver((e) => {
                    n = a.requestAnimationFrame(() => {
                      const { width: s, height: r } = t;
                      let a = s,
                        i = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: s,
                          contentRect: r,
                          target: n,
                        } = e;
                        (n && n !== t.el) ||
                          ((a = r ? r.width : (s[0] || s).inlineSize),
                          (i = r ? r.height : (s[0] || s).blockSize));
                      }),
                        (a === s && i === r) || o();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener('resize', o),
                  a.addEventListener('orientationchange', h));
            }),
              s('destroy', () => {
                n && a.cancelAnimationFrame(n),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener('resize', o),
                  a.removeEventListener('orientationchange', h);
              });
          },
          function (e) {
            let { swiper: t, extendParams: s, on: r, emit: a } = e;
            const i = [],
              n = Ri(),
              o = function (e, s) {
                void 0 === s && (s = {});
                const r = new (n.MutationObserver || n.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void a('observerUpdate', e[0]);
                    const s = function () {
                      a('observerUpdate', e[0]);
                    };
                    n.requestAnimationFrame
                      ? n.requestAnimationFrame(s)
                      : n.setTimeout(s, 0);
                  },
                );
                r.observe(e, {
                  attributes: void 0 === s.attributes || s.attributes,
                  childList: void 0 === s.childList || s.childList,
                  characterData: void 0 === s.characterData || s.characterData,
                }),
                  i.push(r);
              };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r('init', () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = Mi(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              r('destroy', () => {
                i.forEach((e) => {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      const xn = 'Add to Cart',
        vn = ['page-prod'],
        En = ['info-prod'],
        Rn = ['img-prod'],
        Pn = ['title-prod'],
        kn = ['price-box'],
        jn = ['price-prod', 'discount-price'],
        Cn = ['price-prod', 'start-price'],
        Sn = ['description-prod'],
        Kn = ['btn-cart-product'],
        In = ['img-cart'],
        Vn = ['gif'];
      class Ln {
        constructor(t, s = '', r = '', a = '', i = '') {
          (this.currentModal = null),
            (this.pageProd = e('div', vn, {})),
            (this.infoContainer = e('div', En, {})),
            (this.title = e('h2', Pn, {})),
            (this.priceBox = e('div', kn, {})),
            (this.discountPrice = e('div', jn, {})),
            (this.price = e('div', Cn, {})),
            (this.description = e('p', Sn, {})),
            (this.swiperContainer = e('div', ['swiper-container'], {})),
            (this.btnCart = e('button', Kn, {})),
            (this.imgCart = e('img', In, { src: Ma, alt: 'Cart' })),
            (this.isCard = !1),
            (this.load = e('img', Vn, { src: Ba, alt: 'loading' })),
            (this.key = t),
            (this.cart = fi()),
            this.createProductPage(s, r, a, i),
            this.renderProduct(t);
        }
        createProductPage(e, t, s, r) {
          (this.title.innerText = e),
            (this.discountPrice.innerText = `$${t}`),
            (this.price.innerText = `$${s}`),
            (this.description.innerText = r),
            this.pageProd.append(this.swiperContainer, this.infoContainer),
            (this.btnCart.innerText = xn),
            this.btnCart.append(this.imgCart),
            this.infoContainer.append(
              this.title,
              this.priceBox,
              this.description,
              this.btnCart,
            ),
            this.priceBox.append(this.discountPrice, this.price),
            this.cart.then((e) => {
              e.some((e) => e.productKey === this.key) &&
                ((this.btnCart.textContent = 'Remove from Cart'),
                this.btnCart.append(this.imgCart),
                (this.isCard = !0));
            }),
            this.addListenerBtn();
        }
        async renderProduct(e) {
          try {
            const t = (await bi(e)).masterData.current,
              { images: s = [] } = t.masterVariant,
              r = t.name['en-US'];
            let a;
            if (t.masterVariant.prices && t.masterVariant.prices[2]) {
              const e = t.masterVariant.prices[2].discounted?.value.centAmount;
              'number' == typeof e && (a = e / 100);
            }
            const i = t.masterVariant.prices[2].value.centAmount / 100,
              { 'en-US': n } = t.description;
            (this.title.innerText = r),
              (this.discountPrice.innerText = a ? `$${a}` : ''),
              (this.price.innerText = `$${i}`),
              (this.description.innerText = n),
              this.createImageSlider(s);
          } catch (e) {
            window.history.pushState({}, '', '/err'),
              window.dispatchEvent(new PopStateEvent('popstate'));
          }
        }
        createImageSlider(t) {
          this.swiperContainer.innerHTML = '';
          const s = e('div', ['swiper-wrapper'], {});
          if (
            (t.forEach((r, a) => {
              const i = e('div', ['swiper-slide'], {}),
                n = e('img', Rn, { src: r.url, alt: 'Product image' });
              i.appendChild(n),
                s.appendChild(i),
                this.swiperContainer.appendChild(s),
                n.addEventListener('click', () =>
                  this.openModal(
                    t.map((e) => e.url),
                    a,
                  ),
                );
            }),
            this.swiperContainer.appendChild(s),
            1 === t.length)
          )
            this.addClickHandlerToSingleImage(t[0].url);
          else {
            const t = e('div', ['swiper-button-next'], {}),
              s = e('div', ['swiper-button-prev'], {}),
              r = e('div', ['swiper-pagination'], {});
            this.swiperContainer.appendChild(t),
              this.swiperContainer.appendChild(s),
              this.swiperContainer.appendChild(r),
              new qn(this.swiperContainer, {
                modules: [An, Un],
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: !0 },
                loop: !0,
                spaceBetween: 30,
                centeredSlides: !0,
                slidesPerView: 1,
                watchOverflow: !0,
              }).init();
          }
        }
        addClickHandlerToSingleImage(e) {
          const t = this.swiperContainer.querySelector('.swiper-slide');
          t &&
            (t.classList.add('swiper-slide-active'),
            t.addEventListener('click', () => this.openModal([e], 0)));
        }
        openModal(t, s) {
          if (this.currentModal) return;
          document.body.style.overflow = 'hidden';
          const r = e('div', ['product-modal'], {}),
            a = e('div', ['modal-content'], {}),
            i = e('span', ['close-button'], {});
          (i.innerHTML = '&times;'), (i.onclick = () => this.closeModal());
          const n = e(
              'div',
              ['modal-swiper-container', 'swiper-container'],
              {},
            ),
            o = e('div', ['swiper-wrapper'], {});
          if (
            (t.length > 1 &&
              (t.forEach((t) => {
                const s = e('div', ['swiper-slide', 'swiper-slide-modal'], {}),
                  r = e('img', ['modal-image'], {
                    src: t,
                    alt: 'Enlarged Product Image',
                  });
                s.appendChild(r), o.appendChild(s);
              }),
              n.appendChild(o),
              a.append(n)),
            a.appendChild(i),
            r.appendChild(a),
            document.body.appendChild(r),
            (this.currentModal = r),
            (r.style.display = 'flex'),
            (r.onclick = (e) => {
              e.target === r && this.closeModal();
            }),
            t.length > 1)
          ) {
            const t = e('div', ['swiper-button-next'], {}),
              r = e('div', ['swiper-button-prev'], {}),
              a = e('div', ['swiper-pagination'], {});
            n.appendChild(t),
              n.appendChild(r),
              n.appendChild(a),
              new qn(n, {
                modules: [An, Un],
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: !0 },
                loop: !0,
                spaceBetween: 30,
                centeredSlides: !0,
                slidesPerView: 1,
                watchOverflow: !0,
                initialSlide: s,
              }).init();
          } else {
            const s = e('img', ['modal-image'], {
              src: t[0],
              alt: 'Enlarged Product Image',
            });
            a.appendChild(s);
          }
        }
        closeModal() {
          (document.body.style.overflow = ''),
            this.currentModal &&
              ((this.currentModal.style.display = 'none'),
              this.currentModal.remove(),
              (this.currentModal = null));
        }
        getPage() {
          const e = document.querySelector('.center');
          return e?.classList.add('centercard'), this.pageProd;
        }
        getProd() {
          const e = document.querySelector('.center');
          e && e.appendChild(this.pageProd);
        }
        addListenerBtn() {
          this.btnCart.addEventListener('click', () => {
            const e = qi();
            this.btnCart.removeChild(this.imgCart),
              (this.btnCart.innerText = ''),
              this.btnCart.append(this.load),
              e.then((e) => {
                this.isCard
                  ? (async function (e, t, s, r) {
                      const a = await mi(e, s, r);
                      let i = '';
                      const n = await bi(t),
                        { id: o } = a.body,
                        h = n.id,
                        { version: u } = a.body;
                      for (let e = 0; e < a.body.lineItems.length; e += 1)
                        a.body.lineItems[e].productId === h &&
                          (i = a.body.lineItems[e].id);
                      return await Ka.carts()
                        .withId({ ID: o })
                        .post({
                          body: {
                            version: u,
                            actions: [
                              { action: 'removeLineItem', lineItemId: i },
                            ],
                          },
                          headers: { Authorization: `Bearer ${r}` },
                        })
                        .execute();
                    })(e.value, this.key, e.anon, e.token)
                      .then(() => {
                        this.btnCart.removeChild(this.load),
                          (this.isCard = !1),
                          (this.btnCart.innerText = xn),
                          this.btnCart.append(this.imgCart);
                        const e = new CustomEvent('buttonClickedDell', {
                          detail: { key: this.title.textContent },
                        });
                        document.dispatchEvent(e),
                          Oa('The product is removed from cart'),
                          new Qa().triggerCartUpdate();
                      })
                      .catch((e) => {
                        Oa(e.name);
                      })
                  : wi(e.value, this.key, e.anon, e.token)
                      .then(() => {
                        this.btnCart.removeChild(this.load),
                          (this.isCard = !0),
                          (this.btnCart.innerText = 'Remove from Cart'),
                          this.btnCart.append(this.imgCart);
                        const e = new CustomEvent('buttonClicked', {
                          detail: { key: this.title.textContent },
                        });
                        document.dispatchEvent(e), new Qa().triggerCartUpdate();
                      })
                      .catch((e) => {
                        Oa(e.name);
                      });
              });
          });
        }
      }
      class Dn {
        constructor(e, t) {
          (this.routers = e), (this.wrapper = t), this.init();
        }
        init() {
          window.addEventListener('DOMContentLoaded', this.rout.bind(this)),
            window.addEventListener('popstate', this.rout.bind(this));
        }
        rout() {
          const e = window.location.pathname,
            t = this.routers[e];
          if (t) (this.wrapper.innerHTML = ''), this.wrapper.append(t);
          else {
            const t = e.split('/').join('');
            (this.wrapper.innerHTML = ''),
              this.wrapper.append(new Ln(t).getPage());
          }
        }
      }
      const On = s.p + 'e008a2a152328e53923b.png';
      class Mn {
        constructor() {
          (this.wrap_main = e('div', ['wrap_main'], {})),
            (this.main = e('main', ['main'], {})),
            (this.nav = e('nav', ['main-items'], {})),
            (this.homeLink = e('a', ['main-links', 'home-link'], {})),
            (this.loginLink = e('a', ['main-links', 'login-link'], {})),
            (this.regLink = e('a', ['main-links', 'reg-link'], {})),
            (this.profileLink = e('a', ['main-links', 'profile-link'], {})),
            (this.catalogLink = e('a', ['main-links', 'catalog-link'], {})),
            (this.cartLink = e('a', ['main-links', 'cart-link'], {})),
            (this.aboutLink = e('a', ['main-links', 'about-link'], {})),
            this.render();
        }
        render() {
          (this.homeLink.textContent = 'Home'),
            this.homeLink.setAttribute('href', ''),
            this.homeLink.addEventListener('click', (e) => {
              const t = document.querySelector('.centercard');
              t?.classList.remove('centercard'),
                e.preventDefault(),
                window.history.pushState({}, '', '/'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.loginLink.textContent = 'Login'),
            this.loginLink.setAttribute('href', ''),
            this.loginLink.addEventListener('click', (e) => {
              e.preventDefault(),
                Va.get('log') ||
                  (window.history.pushState({}, '', '/login'),
                  window.dispatchEvent(new PopStateEvent('popstate')));
            }),
            (this.regLink.textContent = 'Register'),
            this.regLink.setAttribute('href', ''),
            this.regLink.addEventListener('click', (e) => {
              e.preventDefault(),
                Va.get('log') ||
                  (window.history.pushState({}, '', '/register'),
                  window.dispatchEvent(new PopStateEvent('popstate')));
            }),
            (this.profileLink.textContent = 'Profile'),
            this.profileLink.setAttribute('href', ''),
            this.profileLink.addEventListener('click', (e) => {
              e.preventDefault();
              const t = Va.get('log');
              t &&
                (Ja.populateProfileForm(),
                window.history.pushState({}, '', '/profile'),
                window.dispatchEvent(new PopStateEvent('popstate'))),
                t ||
                  (window.history.pushState({}, '', '/login'),
                  window.dispatchEvent(new PopStateEvent('popstate')));
            }),
            (this.catalogLink.textContent = 'Catalog'),
            this.catalogLink.setAttribute('href', ''),
            this.catalogLink.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/catalog'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.cartLink.textContent = 'Cart'),
            this.cartLink.setAttribute('href', ''),
            this.cartLink.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/cart'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            }),
            (this.aboutLink.textContent = 'About Us'),
            this.aboutLink.setAttribute('href', ''),
            this.aboutLink.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/about'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            });
          const t = e('div', ['image-container'], {}),
            s = e('img', ['main-image'], {});
          s.setAttribute('src', On),
            s.setAttribute(
              'alt',
              'Minimalistically designed living room in light colors',
            ),
            t.append(s),
            this.wrap_main.append(this.main),
            this.main.append(this.nav, t),
            this.nav.append(
              this.homeLink,
              this.loginLink,
              this.regLink,
              this.profileLink,
              this.catalogLink,
              this.cartLink,
              this.aboutLink,
            );
        }
        getMain() {
          return this.wrap_main;
        }
      }
      const Bn = s.p + '79d3be772c89831dd017.png',
        Gn = ['wrapper_errorlog'],
        _n = ['wrapper_top'],
        Hn = ['wrapper_bot'],
        Fn = ['messageError'],
        $n = ['four'],
        Nn = ['smallFour'],
        zn = ['img_error'],
        Wn = ['wraps_img'],
        Yn = ['text_err'],
        Xn = ['btn_main'],
        Jn = '404 Not Found';
      class Qn {
        constructor() {
          (this.wrapper = e('div', Gn, {})),
            (this.messageError = e('div', Fn, {})),
            (this.four = e('p', $n, {})),
            (this.smallFour = e('p', Nn, {})),
            (this.top_wrapper = e('div', _n, {})),
            (this.bot_wrapper = e('div', Hn, {})),
            (this.image = e('img', zn, { src: Bn, alt: Jn })),
            (this.img_wrapper = e('div', Wn, {})),
            (this.text_err = e('p', Yn, {})),
            (this.btnMain = e('button', Xn, {})),
            this.init();
        }
        init() {
          (this.four.innerText = Jn),
            (this.smallFour.innerText = Jn),
            this.messageError.append(this.four, this.smallFour),
            this.top_wrapper.append(this.messageError),
            (this.text_err.innerText =
              'Oops!  The page you requested was not found!'),
            this.initBtn(),
            this.img_wrapper.append(this.image, this.text_err, this.btnMain),
            this.bot_wrapper.append(this.img_wrapper),
            this.wrapper.append(this.top_wrapper, this.bot_wrapper);
        }
        initBtn() {
          (this.btnMain.innerText = 'Back To Home'),
            this.btnMain.addEventListener('click', () => {
              window.history.pushState({}, '', '/'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            });
        }
        getWrap() {
          return this.wrapper;
        }
      }
      class Zn extends HTMLElement {
        constructor(e) {
          super(), (this.header = e), (Zn.SHeader = this.header);
        }
        static createLoginForm() {
          const t = e('form', ['login-form'], { noValidate: 'true' }),
            s = e('h1', ['form-title'], {});
          s.textContent = 'Login';
          const r = e('p', ['form-subtitle'], {});
          r.textContent = 'Please login using account detail bellow.';
          const a = Zn.createInput('email', 'email'),
            i = Zn.createInput('password', 'password'),
            n = Zn.createButton('Sign In', 'sign-in'),
            o = e('a', ['create-account-link'], { href: '/register' });
          o.textContent = 'Create account';
          const h = e('p', ['account-text'], {});
          return (
            (h.textContent = 'Don’t have an Account? '),
            h.appendChild(o),
            o &&
              o.addEventListener('click', (e) => {
                e.preventDefault(),
                  window.history.pushState({}, '', '/register'),
                  window.dispatchEvent(new PopStateEvent('popstate'));
              }),
            t.appendChild(s),
            t.appendChild(r),
            t.appendChild(a),
            t.appendChild(i),
            t.appendChild(n),
            t.appendChild(h),
            (t.onsubmit = (e) => {
              e.preventDefault();
              const s = t.querySelectorAll('.input-field');
              let r = !0;
              if (
                (s.forEach((e) => {
                  r = Zn.validateInput(e) && r;
                }),
                r)
              ) {
                const e = document.querySelector('#email'),
                  t = document.querySelector('#password'),
                  s = (async function (e, t) {
                    try {
                      return {
                        istrue: !0,
                        response: (
                          await Ka.login()
                            .post({ body: { email: e, password: t } })
                            .execute()
                        ).body,
                      };
                    } catch (e) {
                      return { istrue: !1, error: e.body };
                    }
                  })(e.value, t.value);
                s.then((s) => {
                  s.istrue
                    ? (Va.set('log', btoa(s.response.customer.id), {
                        expires: 10,
                      }),
                      di(e.value, t.value).then((e) => {
                        Va.set('token', btoa(e.access_token), { expires: 10 });
                        const t = new CustomEvent('restartCatalog');
                        Zn.SHeader.triggerCartUpdate(),
                          document.dispatchEvent(t);
                      }),
                      ui(Zn.SHeader),
                      (e.value = ''),
                      (t.value = ''))
                    : Oa(`${s.error.message}`);
                });
              }
            }),
            t
          );
        }
        static createInput(t, s) {
          const r =
              'email' === s
                ? 'Email Address'
                : s.charAt(0).toUpperCase() + s.slice(1),
            a = e('input', ['input-field'], {
              type: t,
              id: s,
              name: s,
              placeholder: r,
            }),
            i = e('div', ['input-container'], {});
          if (
            (i.appendChild(a),
            a.addEventListener('input', function () {
              (this.value = this.value.trim()), Zn.validateInput(this);
            }),
            'password' === t)
          ) {
            const t = e(
              'button',
              ['password-toggle', 'fa', 'fa-eye-slash'],
              {},
            );
            (t.type = 'button'),
              t.addEventListener('click', () => {
                Zn.togglePasswordVisibility(a, t);
              }),
              i.appendChild(t);
          }
          return i;
        }
        static togglePasswordVisibility(e, t) {
          const s = e,
            r = 'password' === e.type ? 'text' : 'password';
          (s.type = r), (s.autocomplete = 'off');
          const a = 'text' === r ? 'fa-eye' : 'fa-eye-slash';
          t.classList.replace('fa-eye', 'fa-eye-slash'),
            t.classList.replace('fa-eye-slash', a),
            Zn.validateInput(e);
        }
        static createButton(t, s) {
          const r = e('button', ['button'], { id: s });
          return (r.textContent = t), r;
        }
        static validateEmail(e) {
          if (!e) return { isValid: !1, message: 'Email address is required' };
          if (!/^[^\s]+$/.test(e))
            return {
              isValid: !1,
              message: 'Email address must not contain spaces',
            };
          if (!e.includes('@'))
            return {
              isValid: !1,
              message: 'Email address must contain the "@" symbol',
            };
          const t = e.split('@')[1];
          return t && t.includes('.')
            ? /^(?![\s@])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
                e,
              )
              ? { isValid: !0, message: '' }
              : {
                  isValid: !1,
                  message: 'Email address must be correctly formatted',
                }
            : {
                isValid: !1,
                message: 'Email address must contain a domain name',
              };
        }
        static validatePassword(e) {
          return e
            ? /^[^\s]+$/.test(e)
              ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(e)
                ? e.length < 8
                  ? {
                      isValid: !1,
                      message: 'Password must be at least 8 characters long',
                    }
                  : { isValid: !0, message: '' }
                : {
                    isValid: !1,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, and one digit',
                  }
              : { isValid: !1, message: 'Password should not contain spaces' }
            : { isValid: !1, message: 'Password is required' };
        }
        static validateInput(e) {
          const t = e.parentElement;
          if (t) {
            const e = t.querySelector('.error-message');
            e && t.removeChild(e);
          }
          let s;
          if (
            (e.classList.remove('input-error', 'input-invalid', 'input-valid'),
            e.classList.add('input-invalid'),
            'email' === e.type)
          )
            s = Zn.validateEmail(e.value);
          else {
            if ('password' !== e.type && 'text' !== e.type)
              return e.classList.add('input-invalid'), !1;
            s = Zn.validatePassword(e.value);
          }
          if (!s.isValid) {
            e.classList.add('input-error', 'input-invalid');
            const r = document.createElement('span');
            return (
              (r.textContent = s.message),
              r.classList.add('error-message'),
              t ? t.insertBefore(r, e.nextSibling) : e.after(r),
              !1
            );
          }
          return (
            e.classList.remove('input-invalid'),
            e.classList.add('input-valid'),
            !0
          );
        }
      }
      Zn.initLoginPage = () => {
        const e = document.querySelector('.center');
        if (e) {
          const t = Zn.createLoginForm();
          e.appendChild(t);
        }
      };
      const eo = Zn;
      document.addEventListener('DOMContentLoaded', Zn.initLoginPage);
      class to {
        constructor(e) {
          (this.registrationForm = document.createElement('div')),
            this.registrationForm.classList.add('registration__wrapper'),
            to.renderRegistrationForm(this.registrationForm),
            (this.header = e),
            (to.Sheader = this.header);
        }
        static renderRegistrationForm(t) {
          const s = e('div', ['registration'], {}),
            r = e('h2', ['page__title'], {});
          r.textContent = 'Registration';
          const a = e('form', ['registration__form'], {}),
            i = e('div', ['personal-info'], {}),
            n = e('div', ['addresses'], {}),
            o = e('p', ['personal-info-title'], {});
          (o.innerText = 'Personal Information'), i.prepend(o);
          const h = e('p', ['shipping-title'], {});
          h.innerText = 'Shipping Address';
          const u = e('p', ['billing-title'], {});
          u.innerText = 'Billing Address';
          const d = e('label', ['checkbox-label'], {
              for: 'isShippingAddressDefaultInput',
            }),
            l = e('input', ['input-default-shipping'], {
              id: 'isShippingAddressDefaultInput',
              type: 'checkbox',
              name: 'isShippingAddressDefault',
            }),
            p = document.createTextNode('Set Shipping Address as default');
          d.append(l, p);
          const c = e('label', ['checkbox-label'], {
              for: 'isBillingAddressDefaultInput',
            }),
            g = e('input', ['input-default-billing'], {
              id: 'isBillingAddressDefaultInput',
              type: 'checkbox',
              name: 'isShippingAddressDefault',
            }),
            y = document.createTextNode('Set Billing Address as default');
          c.append(g, y);
          const b = e('label', ['checkbox-label'], { for: 'billTo' }),
            m = e('input', ['input-billing'], {
              id: 'billTo',
              type: 'checkbox',
              name: 'billTo',
            }),
            w = document.createTextNode(
              'Billing address matches the Shipping address',
            );
          b.append(m, w);
          let q = null,
            f = null;
          to.createFieldConfigs().forEach((e) => {
            let t, s;
            if (
              ('input' === e.fieldType
                ? (t = to.createInputField(e))
                : 'select' === e.fieldType && (s = to.createSelectField(e)),
              e.id.includes('shipping')
                ? (q ||
                    ((q = document.createElement('div')),
                    q.classList.add('shipping-address-container'),
                    q.prepend(h),
                    q.append(d, b)),
                  t ? q.append(t) : s && q.append(s))
                : e.id.includes('billing')
                  ? (f ||
                      ((f = document.createElement('div')),
                      f.classList.add('billing-address-container'),
                      f.prepend(u),
                      f.append(b, c)),
                    t ? f.append(t) : s && f.append(s))
                  : t
                    ? i.append(t)
                    : s && i.append(s),
              'password' === e.inputType)
            ) {
              const e = document.createElement('i');
              e.classList.add('password-icon', 'fa', 'fa-eye-slash'),
                t?.append(e);
              let s = !1;
              const r = () => {
                s = !s;
                const r = s ? 'text' : 'password',
                  a = t?.querySelector('input');
                a && (a.type = r),
                  e.classList.toggle('fa-eye', s),
                  e.classList.toggle('fa-eye-slash', !s);
              };
              e.addEventListener('click', r);
            }
          }),
            q && n.append(q),
            f && n.append(f),
            m.addEventListener('change', (e) => {
              const t = e.target;
              if (t) {
                const e = t.checked,
                  s = {
                    street: document.getElementById('street-shipping-address'),
                    city: document.getElementById('city-shipping-address'),
                    country: document.getElementById(
                      'country-shipping-address',
                    ),
                    postalCode: document.getElementById(
                      'postal-code-shipping-address',
                    ),
                  },
                  r = {
                    street: document.getElementById('street-billing-address'),
                    city: document.getElementById('city-billing-address'),
                    country: document.getElementById('country-billing-address'),
                    postalCode: document.getElementById(
                      'postal-code-billing-address',
                    ),
                  },
                  a = () => {
                    e &&
                      ((r.street.value = s.street.value),
                      (r.city.value = s.city.value),
                      (r.country.selectedIndex = s.country.selectedIndex),
                      (r.postalCode.value = s.postalCode.value));
                  },
                  i = (t) => {
                    t.addEventListener('input', () => {
                      e && a();
                    });
                  },
                  n = (e) => {
                    Object.values(r).forEach((t) => {
                      t.disabled = e;
                    });
                  };
                Object.values(s).forEach((e) => {
                  i(e);
                }),
                  a(),
                  n(e);
              }
            });
          const A = e('button', ['btn', 'btn-submit'], { type: 'submit' });
          (A.textContent = 'Sign up'),
            A.addEventListener('click', (e) => {
              e.preventDefault(),
                Xa.checkAllFieldsValidity(),
                to.checkFormValidity(),
                to.isFormValid
                  ? (window.history.pushState({}, '', '/'),
                    window.dispatchEvent(new PopStateEvent('popstate')))
                  : Oa($a);
            });
          const T = e('a', ['link-login'], { href: '/login' });
          (T.textContent = 'Already have an account? Login here'),
            T &&
              T.addEventListener('click', (e) => {
                e.preventDefault(),
                  window.history.pushState({}, '', '/login'),
                  window.dispatchEvent(new PopStateEvent('popstate'));
              }),
            a.append(i, n, A),
            s.append(r, a, T),
            t.append(s);
        }
        static async processCustomerRegistration() {
          const e = document.getElementById('first-name-info'),
            t = document.getElementById('last-name-info'),
            s = document.getElementById('email-info'),
            r = document.getElementById('password-info'),
            a = document.getElementById('birth-date-info'),
            i = to.getShippingAddressData(),
            n = to.getBillingAddressData(),
            o = [],
            h = {
              email: s.value,
              password: r.value,
              firstName: e.value,
              lastName: t.value,
              dateOfBirth: a.value,
              addresses: o,
              shippingAddresses: [0],
              billingAddresses: [0],
              defaultShippingAddress: 0,
              defaultBillingAddress: 0,
            };
          o.push(i),
            o.push(n),
            to.isFormValid &&
              (async function (e) {
                return (await Ka.customers().post({ body: e }).execute()).body;
              })(h)
                .then((e) => {
                  const t = e.customer.id;
                  return (
                    Va.set('log', btoa(t), { expires: 10 }),
                    di(h.email, h.password).then((e) => {
                      Va.set('token', btoa(e.access_token), { expires: 10 }),
                        ui(this.Sheader),
                        Oa(
                          'Registration is succeessful! You are now logged in!',
                        );
                      const t = new CustomEvent('restartCatalog');
                      document.dispatchEvent(t);
                    }),
                    t
                  );
                })
                .catch((e) => {
                  Oa(e.body.message);
                });
        }
        static createFieldConfigs() {
          return [
            {
              label: 'First name',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your first name',
              id: 'first-name-info',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Last name',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your last name',
              id: 'last-name-info',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Date of Birth',
              fieldType: 'input',
              inputType: 'date',
              placeholder: '',
              id: 'birth-date-info',
              validationFunction: Xa.validateDateOfBirth,
            },
            {
              label: 'E-mail',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your e-mail address',
              id: 'email-info',
              validationFunction: Xa.validateEmail,
            },
            {
              label: 'Password',
              fieldType: 'input',
              inputType: 'password',
              placeholder: 'Enter your password',
              id: 'password-info',
              validationFunction: Xa.validatePassword,
            },
            {
              label: 'Street',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your street',
              id: 'street-shipping-address',
              validationFunction: Xa.validateRequiredField,
            },
            {
              label: 'City',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your city',
              id: 'city-shipping-address',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Country',
              fieldType: 'select',
              id: 'country-shipping-address',
              validationFunction: Xa.validateCountry,
              options: [{ value: 'US', label: 'US' }],
            },
            {
              label: 'Postal Code',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your postal code',
              id: 'postal-code-shipping-address',
              validationFunction: Xa.validateShippingPostalCode,
            },
            {
              label: 'Street',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your street',
              id: 'street-billing-address',
              validationFunction: Xa.validateRequiredField,
            },
            {
              label: 'City',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your city',
              id: 'city-billing-address',
              validationFunction: Xa.validateName,
            },
            {
              label: 'Country',
              fieldType: 'select',
              id: 'country-billing-address',
              validationFunction: Xa.validateCountry,
              options: [{ value: 'US', label: 'US' }],
            },
            {
              label: 'Postal Code',
              fieldType: 'input',
              inputType: 'text',
              placeholder: 'Enter your postal code',
              id: 'postal-code-billing-address',
              validationFunction: Xa.validateBillingPostalCode,
            },
          ];
        }
        static checkFormValidity() {
          const e = document.querySelector('.registration__form'),
            t = e?.querySelectorAll('input, select');
          (to.isFormValid = !0),
            t &&
              t.forEach((e) => {
                (e instanceof HTMLInputElement ||
                  e instanceof HTMLSelectElement) &&
                  (('' !== e.value.trim() && !e.classList.contains('error')) ||
                    (e.classList.add('error'), (to.isFormValid = !1)));
              }),
            this.isFormValid && to.processCustomerRegistration();
        }
        static clearErrorsAndInputs() {
          const e = document.querySelector('.registration__form');
          e?.querySelectorAll(`.${Fa}`).forEach((e) => {
            e.remove();
          }),
            e?.querySelectorAll('input, select').forEach((e) => {
              const t = e;
              'submit' !== t.type &&
                ('checkbox' === t.type ? (t.checked = !1) : (t.value = '')),
                'disabled' in t && t.disabled && (t.disabled = !1),
                t.classList.remove('error', 'correct');
            });
        }
        static createLabel(t, s) {
          return e('label', ['input-label'], { for: s || '' });
        }
        static createInputField(t) {
          const s = e('div', ['form-input'], {}),
            r = to.createLabel(t.label, t.id || '');
          r.innerText = t.label;
          const a = e('input', ['form-control'], {
            type: t.inputType || 'text',
            placeholder: t.placeholder || '',
            id: t.id || '',
          });
          return (
            s.append(r),
            s.append(a),
            a.addEventListener('input', () => {
              t.validationFunction(a);
            }),
            a.addEventListener('blur', () => {
              t.validationFunction(a);
            }),
            s
          );
        }
        static createSelectField(t) {
          const s = e('div', ['form-select'], {}),
            r = to.createLabel(t.label, t.id || '');
          r.innerText = t.label;
          const a = e('select', ['form-control', 'select-country'], {
              id: t.id || '',
            }),
            i = document.createElement('option');
          return (
            (i.value = ''),
            (i.text = 'Select Country:'),
            a.append(i),
            t.options?.forEach((e) => {
              const t = document.createElement('option');
              (t.value = e.value), (t.text = e.label), a.append(t);
            }),
            a.addEventListener('change', () => {
              t.validationFunction(a);
            }),
            s.append(r),
            s.append(a),
            s
          );
        }
        static getShippingAddressData() {
          return {
            streetName: document.getElementById('street-shipping-address')
              .value,
            city: document.getElementById('city-shipping-address').value,
            country: document.getElementById('country-shipping-address').value,
            postalCode: document.getElementById('postal-code-shipping-address')
              .value,
          };
        }
        static getBillingAddressData() {
          return {
            streetName: document.getElementById('street-billing-address').value,
            city: document.getElementById('city-billing-address').value,
            country: document.getElementById('country-billing-address').value,
            postalCode: document.getElementById('postal-code-billing-address')
              .value,
          };
        }
        getWrap() {
          return this.registrationForm;
        }
      }
      to.isFormValid = !1;
      const so = to;
      window.addEventListener('popstate', () => {
        to.clearErrorsAndInputs();
      });
      const ro = ['wrapper_search'],
        ao = ['input_search'],
        io = ['select'],
        no = ['search_btn'],
        oo = ['options'],
        ho = ['wrap_select'],
        uo = ['price is less', 'price is higher', 'by name'];
      class lo {
        constructor(t, s, r) {
          (this.header = s),
            (this.head = t),
            (this.parent = r),
            (this.index = 0),
            (this.wrapper = e('div', ro, {})),
            (this.search = e('input', ao, {})),
            (this.categories = e('select', io, {})),
            (this.price = e('input', ao, { type: 'number' })),
            (this.load = e('img', ['gifLoad'], { src: Ba, alt: 'loading' })),
            (this.select = e('select', io, {})),
            (this.selectWrap = e('div', ho, {})),
            (this.btn = e('button', no, {})),
            (this.btnReset = e('button', no, {})),
            (this.selectOption = uo[0]),
            this.render(),
            this.createSelect(),
            this.categoryAdd(),
            this.addSelectListener(),
            this.addBtnListner(),
            this.addListnerRestart();
        }
        createSelect() {
          for (let t = 0; t < uo.length; t += 1) {
            const s = e('option', oo, {});
            (s.innerText = uo[t]), this.select.append(s);
          }
        }
        categoryAdd() {
          (async function () {
            return (
              await Ka.categories()
                .get({ queryArgs: { where: 'parent is not defined' } })
                .execute()
            ).body.results.map((e) => e.key);
          })()
            .then((t) => {
              for (let s = 0; s < t.length; s += 1) {
                const r = e('option', oo, {});
                (r.innerText = t[s]), this.categories.append(r);
              }
            })
            .catch((e) => {
              Oa(`error ${e}`);
            });
        }
        render() {
          (this.btn.innerText = 'Search'),
            (this.btnReset.innerText = 'Reset'),
            this.selectWrap.append(this.price),
            this.wrapper.append(
              this.select,
              this.selectWrap,
              this.btn,
              this.btnReset,
            );
        }
        addSelectListener() {
          this.select.addEventListener('change', (e) => {
            switch (
              ((this.selectOption = e.target.value),
              (this.selectWrap.innerHTML = ''),
              this.selectOption)
            ) {
              case 'price is less':
              case 'price is higher':
              default:
                (this.price.value = ''), this.selectWrap.append(this.price);
              case 'by name':
            }
          });
        }
        addBtnListner() {
          this.btn.addEventListener('click', () => {
            if ('price is less' === this.selectOption) {
              const e = this.price.value;
              e.match(/[0-9]/) && '' !== e.trim()
                ? (this.price.setCustomValidity(''),
                  ci(Number(e), 0)
                    .then((t) => {
                      gi(t, this.head, !0),
                        this.addListnerScroll(ci, Number(e));
                    })
                    .catch((e) => {
                      Oa(e.name);
                    }))
                : (this.price.setCustomValidity('Please enter letters 0-9'),
                  this.price.reportValidity());
            } else if ('price is higher' === this.selectOption) {
              const e = this.price.value;
              e.match(/[0-9]/) && '' !== e.trim()
                ? (this.price.setCustomValidity(''),
                  yi(Number(e), 0)
                    .then((t) => {
                      gi(t, this.head, !0),
                        this.addListnerScroll(yi, Number(e));
                    })
                    .catch((e) => {
                      Oa(e.name);
                    }))
                : (this.price.setCustomValidity('Please enter letters 0-9'),
                  this.price.reportValidity());
            } else
              hi(0)
                .then((e) => {
                  gi(e, this.head, !0), this.addListrerNoValue(hi);
                })
                .catch((e) => {
                  Oa(e.name);
                });
          }),
            this.btnReset.addEventListener('click', () => {
              (this.header.value = ''), (this.price.value = '');
              const e = new CustomEvent('restartCatalog');
              document.dispatchEvent(e);
            });
        }
        getFilter() {
          return this.wrapper;
        }
        addListnerScrollReset() {
          window.onscroll = null;
          let e = 0,
            t = !1;
          window.onscroll = () => {
            if (t) return;
            this.parent.append(this.load);
            const {
              scrollHeight: s,
              clientHeight: r,
              scrollTop: a,
            } = document.documentElement;
            a + r >= s &&
              ((t = !0),
              (e += 10),
              pi(e).then((e) => {
                this.parent.removeChild(this.load),
                  0 === e.results.length
                    ? (window.onscroll = null)
                    : gi(e, this.head, !1),
                  (t = !1);
              }));
          };
        }
        addListnerScroll(e, t) {
          window.onscroll = null;
          let s = 0,
            r = !1;
          window.onscroll = () => {
            if (r) return;
            const {
              scrollHeight: a,
              clientHeight: i,
              scrollTop: n,
            } = document.documentElement;
            n + i >= a &&
              ((r = !0),
              (s += 10),
              this.parent.append(this.load),
              e(t, s).then((e) => {
                this.parent.removeChild(this.load),
                  0 === e.body.results.length
                    ? (window.onscroll = null)
                    : gi(e, this.head, !1),
                  (r = !1);
              }));
          };
        }
        addListrerNoValue(e) {
          window.onscroll = null;
          let t = 0,
            s = !1;
          window.onscroll = () => {
            if (s) return;
            this.parent.append(this.load);
            const {
              scrollHeight: r,
              clientHeight: a,
              scrollTop: i,
            } = document.documentElement;
            i + a >= r &&
              ((s = !0),
              (t += 10),
              e(t).then((e) => {
                this.parent.removeChild(this.load),
                  0 === e.body.results.length
                    ? (window.onscroll = null)
                    : gi(e, this.head, !1),
                  (s = !1);
              }));
          };
        }
        addListnerRestart() {
          document.addEventListener('restartCatalog', () => {
            pi(0)
              .then((e) => {
                gi(e, this.head, !0), this.addListnerScrollReset();
              })
              .catch((e) => {
                Oa(e.name);
              });
          });
        }
      }
      const po = s.p + '3ecaeec0c01af14bd399.png';
      class co {
        constructor() {
          (this.wrap_main = e('div', ['catalog'], {})),
            (this.wrapper_filter = e('div', ['filter'], {})),
            (this.wrapper_Catalog = e('div', ['wrapper_catalog'], {})),
            (this.searchName = e('input', ['select_search'], {})),
            (this.search_wrapper = e('div', ['wrapper_searchs'], {})),
            (this.load = e('img', ['gifLoad'], { src: Ba, alt: 'loading' })),
            (this.btnSech = e('button', ['btn_search'], {})),
            (this.btmImg = e('img', [], {})),
            (this.search = new lo(
              this.wrapper_Catalog,
              this.searchName,
              this.wrap_main,
            ).getFilter()),
            this.renderSeatch(),
            this.renderCatalog(),
            this.addListnerScroll();
        }
        renderSeatch() {
          this.wrapper_filter.append(this.search_wrapper),
            this.search_wrapper.append(this.searchName, this.btnSech),
            (this.btmImg.src = po),
            this.btnSech.append(this.btmImg),
            this.wrap_main.append(this.wrapper_filter),
            this.addListenerBtn(),
            this.wrap_main.append(this.search);
        }
        renderCatalog() {
          pi(0).then((e) => {
            gi(e, this.wrapper_Catalog, !0);
          }),
            this.wrap_main.append(this.wrapper_Catalog),
            document.addEventListener('buttonClicked', (e) => {
              const t = e,
                { key: s } = t.detail,
                { childNodes: r } = this.wrapper_Catalog;
              for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                t.childNodes[1] instanceof HTMLElement &&
                  'h2' === t.childNodes[1].tagName.toLowerCase() &&
                  t.childNodes[1].textContent === s &&
                  (t.lastChild.classList.add('btnOff'),
                  (t.lastChild.disabled = !0));
              }
            }),
            document.addEventListener('buttonClickedDell', (e) => {
              const t = e,
                { key: s } = t.detail,
                { childNodes: r } = this.wrapper_Catalog;
              for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                t.childNodes[1] instanceof HTMLElement &&
                  'h2' === t.childNodes[1].tagName.toLowerCase() &&
                  t.childNodes[1].textContent === s &&
                  (t.lastChild.classList.remove('btnOff'),
                  (t.lastChild.disabled = !1));
              }
            });
        }
        getCatalog() {
          return this.wrap_main;
        }
        addListenerBtn() {
          this.btnSech.addEventListener('click', () => {
            const { value: e } = this.searchName;
            '' !== e.trim() &&
              (async function (e) {
                return await Ka.productProjections()
                  .search()
                  .get({ queryArgs: { 'text.en-US': `{${e}}`, staged: !1 } })
                  .execute();
              })(e)
                .then((e) => {
                  gi(e, this.wrapper_Catalog, !0);
                })
                .catch((e) => {
                  Oa(e.name);
                });
          });
        }
        addListnerScroll() {
          window.onscroll = null;
          let e = 0,
            t = !1;
          window.onscroll = () => {
            if (t) return;
            const {
              scrollHeight: s,
              clientHeight: r,
              scrollTop: a,
            } = document.documentElement;
            a + r >= s &&
              ((t = !0),
              this.wrap_main.append(this.load),
              (e += 10),
              pi(e)
                .then((e) => {
                  0 === e.results.length
                    ? (window.onscroll = null)
                    : gi(e, this.wrapper_Catalog, !1),
                    this.wrap_main.removeChild(this.load),
                    (t = !1);
                })
                .catch(() => {
                  t = !0;
                }));
          };
        }
      }
      const go = s.p + '49d7ad2b13360e514657.png',
        yo = s.p + 'ed025d9343768615ac4b.png';
      class bo {
        constructor() {
          (this.wrap_main = e('div', ['cart'], {})),
            (this.wrapper_cart = e('div', ['wrapper_cart'], {})),
            bo.fetchAndDisplayCartItems(),
            this.renderCart();
        }
        renderCart() {
          this.wrap_main.append(this.wrapper_cart),
            this.addCartSection('title', 'Shopping Cart'),
            this.addCartSection(
              'emptyContent',
              'Continue shopping and add items to your cart',
            ),
            this.addCartSection('content', ''),
            this.addToCatalogButton('To Catalog');
        }
        static renderCartItem(t, s) {
          const r = e('li', ['cart-item'], {}),
            a = e('p', ['item-name'], {});
          a.textContent = s.name['en-US'];
          const i = e('div', ['product-info'], {}),
            n = e('div', ['quantity-container'], {}),
            o = e('span', ['quantity-label'], {});
          o.textContent = 'Qty: ';
          const h = e('input', ['item-quantity'], {
            type: 'number',
            min: '1',
            value: s.quantity.toString(),
          });
          h.addEventListener('change', async (e) => {
            const t = parseInt(e.target.value, 10);
            t > 0 && (await bo.updateCartItemQuantity(s.id, t, s));
          });
          const u = e('button', ['delete-icon'], {});
          u.addEventListener('click', async () => {});
          const d = document.createElement('img');
          (d.src = yo),
            (d.alt = 'Delete Item'),
            d.classList.add('delete-icon-image'),
            u.append(d);
          const l = e('div', ['image-container'], {}),
            p = e('img', ['item-image'], { alt: 'Product Image' });
          s.variant.images &&
            s.variant.images.length > 0 &&
            (p.src = s.variant.images[0].url),
            l.append(p),
            l.append(u),
            n.append(o, h);
          const c = e('p', ['item-price'], {});
          (c.dataset.itemId = s.id),
            bo.updatePriceElement(c, s),
            i.append(l, a, n, c),
            r.append(i),
            t.append(r);
        }
        static updatePriceElement(e, t) {
          let s = '';
          if (t.price.discounted && t.price.discounted.value) {
            const e = t.price.value.centAmount / 100,
              r = t.price.discounted.value.centAmount / 100,
              a = (r * t.quantity).toFixed(2);
            s = `Price: <del style="color: rgb(251, 46, 134);">${e} ${t.price.value.currencyCode}</del> ${r} ${t.price.value.currencyCode} (Total: ${a} ${t.price.value.currencyCode})`;
          } else {
            const e = ((t.price.value.centAmount * t.quantity) / 100).toFixed(
              2,
            );
            s = `Price: ${t.price.value.centAmount / 100} ${t.price.value.currencyCode} (Total: ${e} ${t.price.value.currencyCode})`;
          }
          e.innerHTML = s;
        }
        static async fetchAndDisplayCartItems() {
          const t = await Ai();
          if (!t) return;
          const s = await Ka.carts().withId({ ID: t }).get().execute(),
            r = document.querySelector('.cart-container');
          if (!r) return;
          const a = s.body.lineItems;
          if (0 !== a.length) a.forEach((e) => bo.renderCartItem(r, e));
          else {
            r.innerHTML = '<p>Your cart is currently empty</p>';
            const t = e('img', ['empty-cart-img'], {
              src: go,
              alt: 'Empty cart image',
            });
            r.append(t);
          }
        }
        static async updateCartItemQuantity(e, t, s) {
          const r = await Ai();
          if (r)
            try {
              const a = (await Ka.carts().withId({ ID: r }).get().execute())
                .body.version;
              await Ka.carts()
                .withId({ ID: r })
                .post({
                  body: {
                    version: a,
                    actions: [
                      {
                        action: 'changeLineItemQuantity',
                        lineItemId: e,
                        quantity: t,
                      },
                    ],
                  },
                })
                .execute();
              const i = document.querySelector(`[data-item-id="${e}"]`);
              if (i) {
                const e = { ...s, quantity: t };
                bo.updatePriceElement(i, e);
              }
            } catch (e) {
              let t = 'An error occurred';
              e && 'object' == typeof e && 'message' in e && (t = e.message),
                Oa(t);
            }
        }
        addCartSection(t, s) {
          switch (t) {
            case 'title': {
              const t = e('span', ['cart-title'], {});
              (t.textContent = s), this.wrapper_cart.append(t);
              break;
            }
            case 'emptyContent': {
              const t = e('div', ['empty-cart-container'], {}),
                r = e('a', ['empty-cart-link'], {});
              (r.textContent = s),
                this.wrapper_cart.append(r),
                r.addEventListener('click', (e) => {
                  e.preventDefault(),
                    window.history.pushState({}, '', '/catalog'),
                    window.dispatchEvent(new PopStateEvent('popstate'));
                }),
                t.append(r),
                this.wrapper_cart.append(t);
              break;
            }
            case 'content': {
              const t = e('div', ['cart-container'], {}),
                r = e('span', ['empty-cart-text'], {});
              (r.textContent = s), t.append(r), this.wrapper_cart.append(t);
              break;
            }
            default:
              throw new Error('Invalid section type');
          }
        }
        addToCatalogButton(t) {
          const s = e('button', ['btn-catalog'], {});
          (s.textContent = t),
            this.wrapper_cart.append(s),
            s.addEventListener('click', (e) => {
              e.preventDefault(),
                window.history.pushState({}, '', '/catalog'),
                window.dispatchEvent(new PopStateEvent('popstate'));
            });
        }
        getWrap() {
          return this.wrap_main;
        }
      }
      const mo = s.p + 'f4a7251e1dbadeee388a.png',
        wo = s.p + '3377721591d9c80c05e6.png',
        qo = s.p + '1d40119380ce85abbe13.png',
        fo = s.p + '8915464f152b61ace578.png',
        Ao = s.p + 'bfbc9bba7b01fd8e8f50.png',
        To = s.p + '6687c380dd3ae737208f.png',
        Uo = s.p + 'c7fe58fec540785594e0.svg',
        xo = ['about-page'],
        vo = ['intro-section'],
        Eo = ['intro-image-container'],
        Ro = ['intro-image'],
        Po = ['rs-link'],
        ko = ['rs-logo'],
        jo = ['intro-text'],
        Co = ['team-section'],
        So = ['team-member'],
        Ko = ['photo-wrap'],
        Io = ['photo-member'],
        Vo = ['title-wrap'],
        Lo = ['git-icon'],
        Do = ['name-wrap'],
        Oo = ['name-link'],
        Mo = ['name-member'],
        Bo = ['role-member'],
        Go = ['bio-header'],
        _o = ['bio-member'],
        Ho = ['works-wrap'],
        Fo = ['works-header'],
        $o = ['works-list'],
        No = ['work-item'],
        zo = ['work-icon'],
        Wo = ['work-text'],
        Yo = ['divider'],
        Xo = [
          {
            name: 'Liudmila Rodzina',
            role: 'Frontend Developer',
            bio: 'Entered the IT field unexpectedly in 2022 after working in a cruise company and receiving education in hospitality. Starting with Python, transitioned to JavaScript and decided to test skills in the Front-end course at RS School. Perseveres and continues to master new technologies and deepen knowledge in web development.',
            photo: qo,
            github: 'https://github.com/liudmilarodzina',
            works: [
              { title: 'Registration Page' },
              { title: 'Profile Page' },
              { title: 'Cart Page ...' },
            ],
          },
          {
            name: 'Ihar Bystrou',
            role: 'Team Lead, Frontend Developer',
            bio: 'Completed two courses at BSUIR. During studies, became interested in programming and learned C++. Discovered RS courses and JavaScript language. Passionate about expanding knowledge of technologies to confidently apply them in future developments.',
            photo: wo,
            github: 'https://github.com/k0nnte',
            works: [
              { title: 'Routing, Navigation' },
              { title: 'Catalog Page' },
              { title: 'Filtering, Sorting, Searching ...' },
            ],
          },
          {
            name: 'Valeria Stavriadi',
            role: 'Frontend Developer',
            bio: 'Worked as an accountant for a long time, nurturing a dream of a career in IT. Transitioned to frontend development after completing the "Web Developer" retraining course at ITMO. Discovered RS School, where currently studying and steadily advancing towards the goal.',
            photo: fo,
            github: 'https://github.com/valeriastav',
            works: [
              { title: 'Login Page' },
              { title: 'Product Page' },
              { title: 'About Us Page ...' },
            ],
          },
        ];
      class Jo {
        constructor() {
          (this.aboutPage = e('div', xo, {})),
            this.addIntroduction(),
            this.addTeamMembers();
        }
        addIntroduction() {
          const t = e('div', vo, {}),
            s = e('div', Eo, {}),
            r = e('img', Ro, { src: mo, alt: 'IntroFicus' }),
            a = e('a', Po, { href: 'https://rs.school', target: '_blank' }),
            i = e('img', ko, { src: Uo, alt: 'RS School' }),
            n = e('p', jo, {});
          (n.innerHTML =
            "We are the web development team 'LIV', brought together by RS School in May 2024. Over the past two months, we've created this e-commerce application, working cohesively and effectively. By leveraging our strengths, we clearly defined roles, communicated actively through Discord, and tracked tasks on the GitHub project board. Regular meetings helped us address issues and monitor progress. We are proud of our application and grateful to RS School for the support and opportunity to realize this project."),
            a.appendChild(i),
            s.append(r, a),
            t.append(s, n),
            this.aboutPage.appendChild(t);
        }
        static addWorksList(t) {
          const s = e('ul', $o, {});
          return (
            t.forEach((t) => {
              const r = e('li', No, {}),
                a = e('img', zo, { src: To, alt: 'Ficus Icon' }),
                i = e('span', Wo, {});
              (i.textContent = t.title), r.append(a, i), s.appendChild(r);
            }),
            s
          );
        }
        addTeamMembers() {
          const t = e('div', Co, {});
          Xo.forEach((s) => {
            const r = e('div', So, {}),
              a = e('div', Ko, {}),
              i = e('img', Io, { src: s.photo, alt: s.name });
            a.appendChild(i);
            const n = e('div', Do, {}),
              o = e('div', Vo, {}),
              h = e('a', Oo, { href: s.github });
            n.appendChild(h);
            const u = e('img', Lo, { src: Ao, alt: 'GitHub' }),
              d = e('h2', Mo, {});
            (d.textContent = s.name), h.append(d, u);
            const l = e('h3', Bo, {});
            l.textContent = s.role;
            const p = e('p', _o, {});
            (p.textContent = s.bio), p.classList.add('hidden');
            const c = e('h4', Go, {});
            (c.textContent = 'Short Bio'),
              (c.innerHTML += ' &#9658;'),
              c.addEventListener('click', () => {
                p.classList.toggle('hidden'),
                  (c.innerHTML = p.classList.contains('hidden')
                    ? 'Short Bio &#9658;'
                    : 'Short Bio &#9660;');
              });
            const g = e('div', Yo, {}),
              y = e('div', Ho, {}),
              b = e('h2', Fo, {});
            b.textContent = 'Contributions to the project';
            const m = Jo.addWorksList(s.works);
            o.append(h, l, c),
              y.append(b, m),
              r.append(a, o, p, g, y),
              t.appendChild(r),
              this.aboutPage.appendChild(t);
          });
        }
        getWrap() {
          return this.aboutPage;
        }
      }
      const Qo = ['main_wrap'],
        Zo = ['center'];
      customElements.define('login-element', eo),
        new (class {
          constructor() {
            (this.catalog = new co().getCatalog()),
              (this.headermain = new Qa()),
              (this.header = this.headermain.getHeader()),
              (this.main = new Mn().getMain()),
              (this.center = e('main', Zo, {})),
              (this.login = new eo(this.headermain)),
              (this.register = new so(this.headermain).getWrap()),
              (this.profile = new Ja().getWrap()),
              (this.err = new Qn().getWrap()),
              (this.cart = new bo().getWrap()),
              (this.about = new Jo().getWrap()),
              (this.wrapper = e('div', Qo, {})),
              (this.routing = new Dn(this.createRoutes(), this.center));
          }
          createRoutes() {
            return {
              '/': this.main,
              '/login': eo.createLoginForm(),
              '/err': this.err,
              '/register': this.register,
              '/profile': this.profile,
              '/catalog': this.catalog,
              '/cart': this.cart,
              '/about': this.about,
            };
          }
          view() {
            this.wrapper.append(this.header, this.center),
              document.body.append(this.wrapper),
              this.routing.rout(),
              ui(this.headermain);
          }
        })().view();
    })();
})();
