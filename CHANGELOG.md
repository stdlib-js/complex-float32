# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-12-01)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="packages">

### Packages

<section class="package" id="complex-float32-v0.3.0">

#### [@stdlib/complex/float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`332a9ba`](https://github.com/stdlib-js/stdlib/commit/332a9ba0a364ca81eabc0d73ab8fa5b28f969074) - add `base` to namespace
-   [`69cbd2b`](https://github.com/stdlib-js/stdlib/commit/69cbd2b280adece30d0ecb190787521e4b013be9) - add `parseComplex64` to namespace
-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f) - convert `complex/float32` to a namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f): `complex/float32` converted to a namespace

    -   This commit refactors `complex/float32` to be a namespace. The
        constructor is now the `complex/float32/ctor`. To migrate, users
        should update their import paths to `complex/float32/ctor` which
        provides the same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-v0.3.0">

#### [@stdlib/complex/float32/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`ea241a3`](https://github.com/stdlib-js/stdlib/commit/ea241a32e7bbd7f346ff993d932adbd1857108e1) - add `assert` to namespace
-   [`21604d0`](https://github.com/stdlib-js/stdlib/commit/21604d0a1efaa60b3e2f477d36cdcb967312904d) - add `complex/float32/base` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-add-v0.3.0">

#### [@stdlib/complex/float32/base/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/add)

<details>

<section class="features">

##### Features

-   [`10ef39d`](https://github.com/stdlib-js/stdlib/commit/10ef39d7b94513bf84f70eef5a673725f155e3d5) - add `complex/float32/base/add`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-v0.3.0">

#### [@stdlib/complex/float32/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`69eecad`](https://github.com/stdlib-js/stdlib/commit/69eecadd785a9ba5732e2d136b8755cad6341fd0) - add `complex/float32/base/assert` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-equal-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-equal)

<details>

<section class="features">

##### Features

-   [`53ff701`](https://github.com/stdlib-js/stdlib/commit/53ff701453daab8775e560a20384b37522e48c54) - add `complex/float32/base/assert/is-equal`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-not-equal-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-not-equal)

<details>

<section class="features">

##### Features

-   [`77517fe`](https://github.com/stdlib-js/stdlib/commit/77517fea863cd0df1defa56ae9619bcd4f73b1b7) - add `complex/float32/base/assert/is-not-equal`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-same-value-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`5ee47a5`](https://github.com/stdlib-js/stdlib/commit/5ee47a5cb81f9ed1694606d1cba77a542e8cc0b2) - add `complex/float32/assert/is-same-value`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-same-value-zero-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`6e0db34`](https://github.com/stdlib-js/stdlib/commit/6e0db34815925043c2b92c2e984a6c7f064bce3f) - add `complex/float32/base/assert/is-same-value-zero`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-mul-v0.3.0">

#### [@stdlib/complex/float32/base/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/mul)

<details>

<section class="features">

##### Features

-   [`d6bba38`](https://github.com/stdlib-js/stdlib/commit/d6bba3883b442a2338fb2dbc6a97c6fe6b69edd5) - add `complex/float32/base/mul`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-conj-v0.3.0">

#### [@stdlib/complex/float32/conj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/conj)

<details>

<section class="features">

##### Features

-   [`cecc11a`](https://github.com/stdlib-js/stdlib/commit/cecc11af413b6065ed9a61d30d547fc07f656173) - add `complex/float32/conj`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-ctor-v0.3.0">

#### [@stdlib/complex/float32/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/ctor)

<details>

<section class="features">

##### Features

-   [`f4cdf4d`](https://github.com/stdlib-js/stdlib/commit/f4cdf4d132061dfce99bad6a0e8a7f3d239d4065) - add `complex/float32/ctor`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-imag-v0.3.0">

#### [@stdlib/complex/float32/imag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/imag)

<details>

<section class="features">

##### Features

-   [`afca2df`](https://github.com/stdlib-js/stdlib/commit/afca2df7a738d071274a8acbec2683df668b9cde) - add `complex/float32/imag`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-real-v0.3.0">

#### [@stdlib/complex/float32/real](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/real)

<details>

<section class="features">

##### Features

-   [`b95c785`](https://github.com/stdlib-js/stdlib/commit/b95c785e7de34adc2e5baa82ddfc460f2052ae4c) - add `complex/float32/real`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-reim-v0.3.0">

#### [@stdlib/complex/float32/reim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/reim)

<details>

<section class="features">

##### Features

-   [`5325850`](https://github.com/stdlib-js/stdlib/commit/5325850f7954c973272d09973ab71ba112deb8e0) - add `complex/float32/reim`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-reviver-v0.3.0">

#### [@stdlib/complex/float32/reviver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/reviver)

<details>

<section class="features">

##### Features

-   [`933ebe4`](https://github.com/stdlib-js/stdlib/commit/933ebe4347a6c5c400e0e5fd93faabe1639fe205) - add `complex/float32/reviver`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

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

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

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

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-09)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="packages">

### Packages

<section class="package" id="complex-float32-v0.1.0">

#### [@stdlib/complex/float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

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

