# CHANGELOG

> Package changelog.

<section class="release" id="v0.4.1">

## 0.4.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.4.0">

## 0.4.0 (2026-01-30)

<section class="features">

### Features

-   [`19c80d8`](https://github.com/stdlib-js/stdlib/commit/19c80d8007bc63d10eadd2365dff255d3f71205b) - add constructor name property
-   [`289cb51`](https://github.com/stdlib-js/stdlib/commit/289cb519b04aac1731b7b872c7fd980090230fc8) - update `complex/float32/base/assert` TypeScript declarations [(#9200)](https://github.com/stdlib-js/stdlib/pull/9200)
-   [`895d417`](https://github.com/stdlib-js/stdlib/commit/895d417410e631120c7d482ba6a07ab130e18c85) - add `isAlmostSameValue` to namespace
-   [`95732eb`](https://github.com/stdlib-js/stdlib/commit/95732eba68a330d4038479784cd0d79cc002540a) - add `complex/float32/base/assert/is-almost-same-value`
-   [`9f96d8d`](https://github.com/stdlib-js/stdlib/commit/9f96d8df1b8e843be0ee98019248a8399745d0f8) - update `complex/float32/base` TypeScript declarations
-   [`46781e0`](https://github.com/stdlib-js/stdlib/commit/46781e08e44b6f569313453dfd517799e98da393) - update `complex/float32/base/assert` TypeScript declarations
-   [`c60545c`](https://github.com/stdlib-js/stdlib/commit/c60545c5ac8624783808e72e5a91dbbf6ddb7cad) - add `complex/float32/base/mul-add` [(#5214)](https://github.com/stdlib-js/stdlib/pull/5214)
-   [`7c8ed3b`](https://github.com/stdlib-js/stdlib/commit/7c8ed3b2052a00de76bfdb1a4f5a8fb31cf98881) - add strided and assign APIs to `complex/float32/base/add` [(#5391)](https://github.com/stdlib-js/stdlib/pull/5391)
-   [`da256e5`](https://github.com/stdlib-js/stdlib/commit/da256e5fe42c5c31463be8f7e3a2c1b35c8c7144) - add `isAlmostEqual` to namespace
-   [`9d89154`](https://github.com/stdlib-js/stdlib/commit/9d8915457450867faad800fea902a043423f0e0e) - add `complex/float32/base/assert/is-almost-equal` [(#7622)](https://github.com/stdlib-js/stdlib/pull/7622)
-   [`6afa527`](https://github.com/stdlib-js/stdlib/commit/6afa5271c97c6b90710a4fb15d34bf04e8ae71b4) - add `scale` to namespace
-   [`7475c9d`](https://github.com/stdlib-js/stdlib/commit/7475c9dfd5461211d8071b7073b8958300dd5838) - add `complex/float32/base/scale` [(#7156)](https://github.com/stdlib-js/stdlib/pull/7156)
-   [`8ab1153`](https://github.com/stdlib-js/stdlib/commit/8ab1153533c1dcbe7eb1ce05590843dbeffa67e7) - update `complex/float32/base/identity` to accept stdlib complex numbers [(#6235)](https://github.com/stdlib-js/stdlib/pull/6235)
-   [`31343c9`](https://github.com/stdlib-js/stdlib/commit/31343c901e94328361327c4d7054a71052599916) - add `complex/float32/base/identity`
-   [`3a62008`](https://github.com/stdlib-js/stdlib/commit/3a620083a7978286cc05db9231ecbee4d0478e1a) - add `complex/float32/base/sub`
-   [`4866c10`](https://github.com/stdlib-js/stdlib/commit/4866c103418bc09e2c11a3f0238ac6941e830eca) - add `complex/float32/base/neg`
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254)
-   [`d7154e2`](https://github.com/stdlib-js/stdlib/commit/d7154e2c7756ce51a9bbbf38848960ea988d4ea6) - add `strided` and `assign` APIs to `complex/float32/base/mul` [(#5205)](https://github.com/stdlib-js/stdlib/pull/5205)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`66c3419`](https://github.com/stdlib-js/stdlib/commit/66c34197acf3eb6c43480fc93bc92d1ddd31b846) - add missing name to complex constructor TypeScript declarations
-   [`668e314`](https://github.com/stdlib-js/stdlib/commit/668e3142881cad00228c2931daa527525c71b000) - use interface rather than class definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8ab1153`](https://github.com/stdlib-js/stdlib/commit/8ab1153533c1dcbe7eb1ce05590843dbeffa67e7): use stdlib C complex64 dtype

    -   To migrate, users should provide a value having the type `stdlib_complex64_t`, rather than a built-in C99 single-precision complex dtype. This dtype is available via the package `@stdlib/complex-float32/ctor`.

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 5 issues were closed in this release:

[#5196](https://github.com/stdlib-js/stdlib/issues/5196), [#5203](https://github.com/stdlib-js/stdlib/issues/5203), [#5213](https://github.com/stdlib-js/stdlib/issues/5213), [#6698](https://github.com/stdlib-js/stdlib/issues/6698), [#7735](https://github.com/stdlib-js/stdlib/issues/7735)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`66c3419`](https://github.com/stdlib-js/stdlib/commit/66c34197acf3eb6c43480fc93bc92d1ddd31b846) - **fix:** add missing name to complex constructor TypeScript declarations _(by Philipp Burckhardt)_
-   [`3642086`](https://github.com/stdlib-js/stdlib/commit/3642086d8a240a2d9d0d0b480ff7475faba28cfa) - **docs:** document property _(by Athan Reines)_
-   [`19c80d8`](https://github.com/stdlib-js/stdlib/commit/19c80d8007bc63d10eadd2365dff255d3f71205b) - **feat:** add constructor name property _(by Athan Reines)_
-   [`6cfb626`](https://github.com/stdlib-js/stdlib/commit/6cfb626f79f98649c752a652e003c0917d0a5d19) - **refactor:** use utility to set properties _(by Athan Reines)_
-   [`289cb51`](https://github.com/stdlib-js/stdlib/commit/289cb519b04aac1731b7b872c7fd980090230fc8) - **feat:** update `complex/float32/base/assert` TypeScript declarations [(#9200)](https://github.com/stdlib-js/stdlib/pull/9200) _(by stdlib-bot)_
-   [`de9dec4`](https://github.com/stdlib-js/stdlib/commit/de9dec49411a9f71d800970e9324e87dca52098b) - **docs:** update namespace table of contents [(#9205)](https://github.com/stdlib-js/stdlib/pull/9205) _(by stdlib-bot)_
-   [`668e314`](https://github.com/stdlib-js/stdlib/commit/668e3142881cad00228c2931daa527525c71b000) - **fix:** use interface rather than class definition _(by Athan Reines)_
-   [`ed084b9`](https://github.com/stdlib-js/stdlib/commit/ed084b9112e1fc708074b29fcb63bbc31cdfaf09) - **chore:** rename variables _(by Athan Reines)_
-   [`895d417`](https://github.com/stdlib-js/stdlib/commit/895d417410e631120c7d482ba6a07ab130e18c85) - **feat:** add `isAlmostSameValue` to namespace _(by Athan Reines)_
-   [`95732eb`](https://github.com/stdlib-js/stdlib/commit/95732eba68a330d4038479784cd0d79cc002540a) - **feat:** add `complex/float32/base/assert/is-almost-same-value` _(by Athan Reines)_
-   [`7db5b32`](https://github.com/stdlib-js/stdlib/commit/7db5b32afe976e2d3c216a45e0927c88e668d340) - **chore:** add `alias_prefix` to parent namespaces [(#8540)](https://github.com/stdlib-js/stdlib/pull/8540) _(by Gunj Joshi)_
-   [`5f5bb2d`](https://github.com/stdlib-js/stdlib/commit/5f5bb2d4277a24000b57fb07bc28d821500cd7e8) - **docs:** update namespace table of contents [(#8425)](https://github.com/stdlib-js/stdlib/pull/8425) _(by stdlib-bot, Athan Reines)_
-   [`9f96d8d`](https://github.com/stdlib-js/stdlib/commit/9f96d8df1b8e843be0ee98019248a8399745d0f8) - **feat:** update `complex/float32/base` TypeScript declarations _(by Philipp Burckhardt)_
-   [`46781e0`](https://github.com/stdlib-js/stdlib/commit/46781e08e44b6f569313453dfd517799e98da393) - **feat:** update `complex/float32/base/assert` TypeScript declarations _(by Philipp Burckhardt)_
-   [`14fbe2a`](https://github.com/stdlib-js/stdlib/commit/14fbe2a5ced542c4183b6cae8a5d369462a6023a) - **docs:** clean-up TypeScript declarations example code _(by Philipp Burckhardt)_
-   [`29bd670`](https://github.com/stdlib-js/stdlib/commit/29bd6700071a2bcb775ad67639e167ab0fad2ce2) - **style:** consolidate redundant lint directives _(by Athan Reines)_
-   [`6af3333`](https://github.com/stdlib-js/stdlib/commit/6af33331f46100b46fdb69dc89a4c08299371951) - **test:** use strictEqual check _(by Philipp Burckhardt)_
-   [`c60545c`](https://github.com/stdlib-js/stdlib/commit/c60545c5ac8624783808e72e5a91dbbf6ddb7cad) - **feat:** add `complex/float32/base/mul-add` [(#5214)](https://github.com/stdlib-js/stdlib/pull/5214) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`7c8ed3b`](https://github.com/stdlib-js/stdlib/commit/7c8ed3b2052a00de76bfdb1a4f5a8fb31cf98881) - **feat:** add strided and assign APIs to `complex/float32/base/add` [(#5391)](https://github.com/stdlib-js/stdlib/pull/5391) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`5acfd64`](https://github.com/stdlib-js/stdlib/commit/5acfd64326637640433a7e3ffc5d101db23ab1d8) - **docs:** fix example code _(by Philipp Burckhardt)_
-   [`da256e5`](https://github.com/stdlib-js/stdlib/commit/da256e5fe42c5c31463be8f7e3a2c1b35c8c7144) - **feat:** add `isAlmostEqual` to namespace _(by Philipp Burckhardt)_
-   [`7483bef`](https://github.com/stdlib-js/stdlib/commit/7483bef13b1d3241347266d25a02957269419825) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`6eee151`](https://github.com/stdlib-js/stdlib/commit/6eee15199727d04e3757e66f38384e97b8a333da) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`53c6429`](https://github.com/stdlib-js/stdlib/commit/53c6429aee35e48e178bc96072a39d1d9db325f3) - **chore:** fix EditorConfig lint errors [(#7737)](https://github.com/stdlib-js/stdlib/pull/7737) _(by Aryan J, Athan Reines)_
-   [`71e8e76`](https://github.com/stdlib-js/stdlib/commit/71e8e767185b454e8f68d7fee778f3177f2e7f85) - **test:** add TS test for third parameter _(by Philipp Burckhardt)_
-   [`9d89154`](https://github.com/stdlib-js/stdlib/commit/9d8915457450867faad800fea902a043423f0e0e) - **feat:** add `complex/float32/base/assert/is-almost-equal` [(#7622)](https://github.com/stdlib-js/stdlib/pull/7622) _(by Karan Anand)_
-   [`8ea46b6`](https://github.com/stdlib-js/stdlib/commit/8ea46b662dc6e27231d250d101e33a3cf770cd77) - **test:** update descriptions to match language used in JS tests _(by Philipp Burckhardt)_
-   [`dd6d9cf`](https://github.com/stdlib-js/stdlib/commit/dd6d9cff0105270f0664490f3c89b36d4df89032) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`46ff8ea`](https://github.com/stdlib-js/stdlib/commit/46ff8ea7761ae438c4718681c5890f146fb0985e) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`3bf64b6`](https://github.com/stdlib-js/stdlib/commit/3bf64b62546b1101028888918c0c6baf78de7781) - **docs:** update examples for `complex/float32/base/neg` [(#7291)](https://github.com/stdlib-js/stdlib/pull/7291) _(by Shabareesh Shetty, Athan Reines)_
-   [`d1c3e38`](https://github.com/stdlib-js/stdlib/commit/d1c3e38f0b788040e73f2ae4c6402e1d1337697c) - **docs:** update examples for `complex/float32/base/identity` [(#7289)](https://github.com/stdlib-js/stdlib/pull/7289) _(by Shabareesh Shetty)_
-   [`568a25d`](https://github.com/stdlib-js/stdlib/commit/568a25d9a472197659a97d53e7c27cbe455f1bbe) - **docs:** update examples for `complex/float32/base/mul` [(#7290)](https://github.com/stdlib-js/stdlib/pull/7290) _(by Shabareesh Shetty)_
-   [`30c471f`](https://github.com/stdlib-js/stdlib/commit/30c471f4887835a6ca2827fa9ef3cb2abb1756af) - **docs:** update examples for `complex/float32/base/scale` [(#7292)](https://github.com/stdlib-js/stdlib/pull/7292) _(by Shabareesh Shetty)_
-   [`93d2533`](https://github.com/stdlib-js/stdlib/commit/93d2533ff20f6ac32d1b1c35d04679a33476c34c) - **docs:** update examples for `complex/float32/base/sub` [(#7293)](https://github.com/stdlib-js/stdlib/pull/7293) _(by Shabareesh Shetty)_
-   [`2f0510e`](https://github.com/stdlib-js/stdlib/commit/2f0510e336f25ead3063f5e4cc16fa538e72bb0c) - **docs:** update examples for `complex/float32/conj` [(#7294)](https://github.com/stdlib-js/stdlib/pull/7294) _(by Shabareesh Shetty)_
-   [`74a62b6`](https://github.com/stdlib-js/stdlib/commit/74a62b6ea9087704c9890d3a220f952bc97a45c5) - **docs:** update examples for `complex/float32/base/add` [(#7288)](https://github.com/stdlib-js/stdlib/pull/7288) _(by Shabareesh Shetty)_
-   [`920ac76`](https://github.com/stdlib-js/stdlib/commit/920ac76fffbe4c5513bc7820c09b5b5fc3b507bb) - **chore:** change naming and examples for `complex/float32/base/add` [(#7169)](https://github.com/stdlib-js/stdlib/pull/7169) _(by Shabareesh Shetty, stdlib-bot)_
-   [`1b155f1`](https://github.com/stdlib-js/stdlib/commit/1b155f118f396a5e2ad21ab2ca50247684109062) - **chore:** change naming and examples for `complex/float32/base/sub` [(#7168)](https://github.com/stdlib-js/stdlib/pull/7168) _(by Shabareesh Shetty)_
-   [`b228bf3`](https://github.com/stdlib-js/stdlib/commit/b228bf31d96eacac782648edf8c29141d094a59b) - **docs:** update comments _(by Athan Reines)_
-   [`3b08499`](https://github.com/stdlib-js/stdlib/commit/3b08499dcdae21f946e61da757c0c21da2e8f9ed) - **docs:** change package naming and examples for `complex/float32/base/mul` [(#7167)](https://github.com/stdlib-js/stdlib/pull/7167) _(by Shabareesh Shetty)_
-   [`4514170`](https://github.com/stdlib-js/stdlib/commit/4514170ad8cf99fd55fc30804fd1f1d17e11ed7f) - **docs:** update namespace table of contents [(#7162)](https://github.com/stdlib-js/stdlib/pull/7162) _(by stdlib-bot)_
-   [`6afa527`](https://github.com/stdlib-js/stdlib/commit/6afa5271c97c6b90710a4fb15d34bf04e8ae71b4) - **feat:** add `scale` to namespace _(by Athan Reines)_
-   [`7475c9d`](https://github.com/stdlib-js/stdlib/commit/7475c9dfd5461211d8071b7073b8958300dd5838) - **feat:** add `complex/float32/base/scale` [(#7156)](https://github.com/stdlib-js/stdlib/pull/7156) _(by Shabareesh Shetty, Athan Reines)_
-   [`c3320f1`](https://github.com/stdlib-js/stdlib/commit/c3320f1da27e449679eecd2f19f865ae60f72aa5) - **docs:** update namespace table of contents [(#6764)](https://github.com/stdlib-js/stdlib/pull/6764) _(by stdlib-bot)_
-   [`93a9aa2`](https://github.com/stdlib-js/stdlib/commit/93a9aa2f18ce81d06fdaf04c136ed48851eb11f0) - **chore:** fix JavaScript lint errors [(#6699)](https://github.com/stdlib-js/stdlib/pull/6699) _(by SAHIL KUMAR, Philipp Burckhardt)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`8ab1153`](https://github.com/stdlib-js/stdlib/commit/8ab1153533c1dcbe7eb1ce05590843dbeffa67e7) - **feat:** update `complex/float32/base/identity` to accept stdlib complex numbers [(#6235)](https://github.com/stdlib-js/stdlib/pull/6235) _(by Gururaj Gurram)_
-   [`31343c9`](https://github.com/stdlib-js/stdlib/commit/31343c901e94328361327c4d7054a71052599916) - **feat:** add `complex/float32/base/identity` _(by Gururaj Gurram)_
-   [`89ecfe0`](https://github.com/stdlib-js/stdlib/commit/89ecfe0212aef0448017f8e404a3862fda851170) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`3a62008`](https://github.com/stdlib-js/stdlib/commit/3a620083a7978286cc05db9231ecbee4d0478e1a) - **feat:** add `complex/float32/base/sub` _(by Gururaj Gurram)_
-   [`4866c10`](https://github.com/stdlib-js/stdlib/commit/4866c103418bc09e2c11a3f0238ac6941e830eca) - **feat:** add `complex/float32/base/neg` _(by Gururaj Gurram)_
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - **feat:** update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254) _(by stdlib-bot)_
-   [`d7154e2`](https://github.com/stdlib-js/stdlib/commit/d7154e2c7756ce51a9bbbf38848960ea988d4ea6) - **feat:** add `strided` and `assign` APIs to `complex/float32/base/mul` [(#5205)](https://github.com/stdlib-js/stdlib/pull/5205) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`40308a8`](https://github.com/stdlib-js/stdlib/commit/40308a8953dd480537d4c4359cc6e09f679e3ec1) - **build:** update configurations _(by Athan Reines)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 8 people contributed to this release. Thank you to the following contributors:

-   Aryan J
-   Athan Reines
-   Gunj Joshi
-   Gururaj Gurram
-   Karan Anand
-   Philipp Burckhardt
-   SAHIL KUMAR
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="features">

### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`ea241a3`](https://github.com/stdlib-js/stdlib/commit/ea241a32e7bbd7f346ff993d932adbd1857108e1) - add `assert` to namespace
-   [`69eecad`](https://github.com/stdlib-js/stdlib/commit/69eecadd785a9ba5732e2d136b8755cad6341fd0) - add `complex/float32/base/assert` namespace
-   [`332a9ba`](https://github.com/stdlib-js/stdlib/commit/332a9ba0a364ca81eabc0d73ab8fa5b28f969074) - add `base` to namespace
-   [`21604d0`](https://github.com/stdlib-js/stdlib/commit/21604d0a1efaa60b3e2f477d36cdcb967312904d) - add `complex/float32/base` namespace
-   [`69cbd2b`](https://github.com/stdlib-js/stdlib/commit/69cbd2b280adece30d0ecb190787521e4b013be9) - add `parseComplex64` to namespace
-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f) - convert `complex/float32` to a namespace
-   [`d6bba38`](https://github.com/stdlib-js/stdlib/commit/d6bba3883b442a2338fb2dbc6a97c6fe6b69edd5) - add `complex/float32/base/mul`
-   [`10ef39d`](https://github.com/stdlib-js/stdlib/commit/10ef39d7b94513bf84f70eef5a673725f155e3d5) - add `complex/float32/base/add`
-   [`b95c785`](https://github.com/stdlib-js/stdlib/commit/b95c785e7de34adc2e5baa82ddfc460f2052ae4c) - add `complex/float32/real`
-   [`afca2df`](https://github.com/stdlib-js/stdlib/commit/afca2df7a738d071274a8acbec2683df668b9cde) - add `complex/float32/imag`
-   [`5325850`](https://github.com/stdlib-js/stdlib/commit/5325850f7954c973272d09973ab71ba112deb8e0) - add `complex/float32/reim`
-   [`cecc11a`](https://github.com/stdlib-js/stdlib/commit/cecc11af413b6065ed9a61d30d547fc07f656173) - add `complex/float32/conj`
-   [`77517fe`](https://github.com/stdlib-js/stdlib/commit/77517fea863cd0df1defa56ae9619bcd4f73b1b7) - add `complex/float32/base/assert/is-not-equal`
-   [`53ff701`](https://github.com/stdlib-js/stdlib/commit/53ff701453daab8775e560a20384b37522e48c54) - add `complex/float32/base/assert/is-equal`
-   [`6e0db34`](https://github.com/stdlib-js/stdlib/commit/6e0db34815925043c2b92c2e984a6c7f064bce3f) - add `complex/float32/base/assert/is-same-value-zero`
-   [`5ee47a5`](https://github.com/stdlib-js/stdlib/commit/5ee47a5cb81f9ed1694606d1cba77a542e8cc0b2) - add `complex/float32/assert/is-same-value`
-   [`933ebe4`](https://github.com/stdlib-js/stdlib/commit/933ebe4347a6c5c400e0e5fd93faabe1639fe205) - add `complex/float32/reviver`
-   [`f4cdf4d`](https://github.com/stdlib-js/stdlib/commit/f4cdf4d132061dfce99bad6a0e8a7f3d239d4065) - add `complex/float32/ctor`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f): `complex/float32` converted to a namespace

    -   This commit refactors `complex/float32` to be a namespace. The
        constructor is now the `complex/float32/ctor`. To migrate, users
        should update their import paths to `complex/float32/ctor` which
        provides the same API and implementation.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`a304cd8`](https://github.com/stdlib-js/stdlib/commit/a304cd8eba1aefe44f74a0273bd4c08345ee92f4) - **docs:** update namespace table of contents [(#2648)](https://github.com/stdlib-js/stdlib/pull/2648) _(by stdlib-bot, Athan Reines)_
-   [`9dc29b4`](https://github.com/stdlib-js/stdlib/commit/9dc29b4d2e6eb5ba0b2625c3bfe9f50034a3ed99) - **docs:** add sub-namespace sections and update namespace table of contents _(by Philipp Burckhardt)_
-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - **feat:** update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628) _(by stdlib-bot, Athan Reines)_
-   [`ea241a3`](https://github.com/stdlib-js/stdlib/commit/ea241a32e7bbd7f346ff993d932adbd1857108e1) - **feat:** add `assert` to namespace _(by Athan Reines)_
-   [`69eecad`](https://github.com/stdlib-js/stdlib/commit/69eecadd785a9ba5732e2d136b8755cad6341fd0) - **feat:** add `complex/float32/base/assert` namespace _(by Athan Reines)_
-   [`332a9ba`](https://github.com/stdlib-js/stdlib/commit/332a9ba0a364ca81eabc0d73ab8fa5b28f969074) - **feat:** add `base` to namespace _(by Athan Reines)_
-   [`21604d0`](https://github.com/stdlib-js/stdlib/commit/21604d0a1efaa60b3e2f477d36cdcb967312904d) - **feat:** add `complex/float32/base` namespace _(by Athan Reines)_
-   [`69cbd2b`](https://github.com/stdlib-js/stdlib/commit/69cbd2b280adece30d0ecb190787521e4b013be9) - **feat:** add `parseComplex64` to namespace _(by Athan Reines)_
-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f) - **feat:** convert `complex/float32` to a namespace _(by Athan Reines)_
-   [`e3a3679`](https://github.com/stdlib-js/stdlib/commit/e3a3679f1e733cf02ce47cdc4bd0137bd37bef41) - **refactor:** update paths _(by Athan Reines)_
-   [`ddd4403`](https://github.com/stdlib-js/stdlib/commit/ddd44032f9d8a6d318c80e3b239ff72280ffc599) - **refactor:** update paths _(by Athan Reines)_
-   [`d6bba38`](https://github.com/stdlib-js/stdlib/commit/d6bba3883b442a2338fb2dbc6a97c6fe6b69edd5) - **feat:** add `complex/float32/base/mul` _(by Athan Reines)_
-   [`0406147`](https://github.com/stdlib-js/stdlib/commit/04061476d1036e1b8b786736b1ba1653eddff1ef) - **refactor:** update paths _(by Athan Reines)_
-   [`10ef39d`](https://github.com/stdlib-js/stdlib/commit/10ef39d7b94513bf84f70eef5a673725f155e3d5) - **feat:** add `complex/float32/base/add` _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`b95c785`](https://github.com/stdlib-js/stdlib/commit/b95c785e7de34adc2e5baa82ddfc460f2052ae4c) - **feat:** add `complex/float32/real` _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`afca2df`](https://github.com/stdlib-js/stdlib/commit/afca2df7a738d071274a8acbec2683df668b9cde) - **feat:** add `complex/float32/imag` _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`ad760a9`](https://github.com/stdlib-js/stdlib/commit/ad760a922086631226d8f759a0d467c707fbc0fb) - **refactor:** update paths _(by Athan Reines)_
-   [`5325850`](https://github.com/stdlib-js/stdlib/commit/5325850f7954c973272d09973ab71ba112deb8e0) - **feat:** add `complex/float32/reim` _(by Athan Reines)_
-   [`87fdfa1`](https://github.com/stdlib-js/stdlib/commit/87fdfa106f4c75b60a3c79c7fb4ca08f5c172862) - **refactor:** update paths _(by Athan Reines)_
-   [`cecc11a`](https://github.com/stdlib-js/stdlib/commit/cecc11af413b6065ed9a61d30d547fc07f656173) - **feat:** add `complex/float32/conj` _(by Athan Reines)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`77517fe`](https://github.com/stdlib-js/stdlib/commit/77517fea863cd0df1defa56ae9619bcd4f73b1b7) - **feat:** add `complex/float32/base/assert/is-not-equal` _(by Athan Reines)_
-   [`53ff701`](https://github.com/stdlib-js/stdlib/commit/53ff701453daab8775e560a20384b37522e48c54) - **feat:** add `complex/float32/base/assert/is-equal` _(by Athan Reines)_
-   [`6e0db34`](https://github.com/stdlib-js/stdlib/commit/6e0db34815925043c2b92c2e984a6c7f064bce3f) - **feat:** add `complex/float32/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`5ee47a5`](https://github.com/stdlib-js/stdlib/commit/5ee47a5cb81f9ed1694606d1cba77a542e8cc0b2) - **feat:** add `complex/float32/assert/is-same-value` _(by Athan Reines)_
-   [`933ebe4`](https://github.com/stdlib-js/stdlib/commit/933ebe4347a6c5c400e0e5fd93faabe1639fe205) - **feat:** add `complex/float32/reviver` _(by Athan Reines)_
-   [`f4cdf4d`](https://github.com/stdlib-js/stdlib/commit/f4cdf4d132061dfce99bad6a0e8a7f3d239d4065) - **feat:** add `complex/float32/ctor` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-09)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`07cc80b`](https://github.com/stdlib-js/stdlib/commit/07cc80b4aa930750251fc70c8b9afe72801da142) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

