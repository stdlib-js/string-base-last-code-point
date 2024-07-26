<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# lastCodePoint

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the last `n` Unicode code points of a string.



<section class="usage">

## Usage

```javascript
import lastCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-last-code-point@esm/index.mjs';
```

#### lastCodePoint( str, n )

Returns the last `n` Unicode code points of a string.

```javascript
var s = lastCodePoint( 'JavaScript', 1 );
// returns 't'

s = lastCodePoint( 'Hello World', 5 );
// returns 'World'

s = lastCodePoint( 'Good Evening', 9 );
// returns 'd Evening'

s = lastCodePoint( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import lastCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-last-code-point@esm/index.mjs';

var str = lastCodePoint( 'Hello World', 1 );
// returns 'd'

str = lastCodePoint( 'JavaScript', 6 );
// returns 'Script'

str = lastCodePoint( 'ASCII', 2 );
// returns 'II'

str = lastCodePoint( 'index', 10 );
// returns 'index'

str = lastCodePoint( 'अनुच्छेद', 1 );
// returns 'द'

str = lastCodePoint( '六书/六書', 3 );
// returns '/六書'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-base/first-code-point`][@stdlib/string/base/first-code-point]</span><span class="delimiter">: </span><span class="description">return the first Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string-base/last-grapheme-cluster`][@stdlib/string/base/last-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the last grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string-base/last`][@stdlib/string/base/last]</span><span class="delimiter">: </span><span class="description">return the last UTF-16 code unit of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-last-code-point.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-last-code-point

[test-image]: https://github.com/stdlib-js/string-base-last-code-point/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/string-base-last-code-point/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-last-code-point/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-last-code-point?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-last-code-point.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-last-code-point/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-last-code-point/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-last-code-point/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-last-code-point/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-last-code-point/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-last-code-point/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-last-code-point/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-last-code-point/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-last-code-point/main/LICENSE

<!-- <related-links> -->

[@stdlib/string/base/first-code-point]: https://github.com/stdlib-js/string-base-first-code-point/tree/esm

[@stdlib/string/base/last-grapheme-cluster]: https://github.com/stdlib-js/string-base-last-grapheme-cluster/tree/esm

[@stdlib/string/base/last]: https://github.com/stdlib-js/string-base-last/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
