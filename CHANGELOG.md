
[Release 2.0.18](https://github.com/OpusCapita/react-select/releases/tag/v2.0.18) Fri Feb 21 2020 11:36:28 GMT+0300 (MSK)
=======================================================

- Merge styles prop with default styles instead of replacing entirely ([#20](https://github.com/OpusCapita/react-select/issues/20)) (GitHub 31243790+estambakio-sc@users.noreply.github.com, 2020-02-21 11:34:17 +0300)

[Release 2.0.17](https://github.com/OpusCapita/react-select/releases/tag/v2.0.17) Fri Feb 21 2020 09:06:43 GMT+0300 (MSK)
=======================================================

- Reexport createFilter, mergeStyles from original react-select (Egor Stambakio egor.stambakio@opuscapita.com, 2020-02-21 08:59:57 +0300)

[Release 2.0.16](https://github.com/OpusCapita/react-select/releases/tag/v2.0.16) Tue Feb 18 2020 13:43:56 GMT+0300 (MSK)
=======================================================

- (OpusCapita/minsk-core-externals[#494](https://github.com/OpusCapita/react-select/issues/494)) Making styles for react-select customizable via style function ([#19](https://github.com/OpusCapita/react-select/issues/19)) (GitHub ksafin-sc@users.noreply.github.com, 2020-02-18 13:38:46 +0300)

[Release 2.0.15](https://github.com/OpusCapita/react-select/releases/tag/v2.0.15) Tue Dec 10 2019 13:24:06 GMT+0300 (MSK)
=======================================================

- Updated 'react-select' dependency version (Dmitriy Sanko dmitriy.sanko@opuscapita.com, 2019-12-10 13:15:05 +0300)
- Fix - The first entered character is slightly cut in Edge Browser (kvolkovich-sc volkovich@scand.com, 2019-12-09 14:37:18 +0300)

[Release 2.0.14](https://github.com/OpusCapita/react-select/releases/tag/v2.0.14) Fri Oct 04 2019 16:18:40 GMT+0300 (MSK)
=======================================================

- Add style for disabled state ([#13](https://github.com/OpusCapita/react-select/issues/13)) (GitHub 31243790+estambakio-sc@users.noreply.github.com, 2019-10-04 15:58:43 +0300)

[Release 2.0.12](https://github.com/OpusCapita/react-select/releases/tag/v2.0.12) Wed Mar 13 2019 15:57:35 GMT+0300 (MSK)
=======================================================

- Fixing compatible by z-index with jcatalog-bootstrap inputs (Andrey Shchitlyak shchitlyak@scand.com, 2019-03-13 15:53:34 +0300)

[Release 2.0.11](https://github.com/OpusCapita/react-select/releases/tag/v2.0.11) Wed Mar 13 2019 11:18:27 GMT+0300 (MSK)
=======================================================

- Fixing compatible by z-index with jcatalog-bootstrap inputs (GitHub ddivin-sc@users.noreply.github.com, 2019-03-13 11:16:47 +0300)

[Release 2.0.10](https://github.com/OpusCapita/react-select/releases/tag/v2.0.10) Thu Feb 28 2019 12:15:16 GMT+0300 (MSK)
=======================================================

- Export also react-select components to enable custom components according to docs (Egor Stambakio stambakio@scand.com, 2019-02-28 12:11:49 +0300)

[Release 2.0.9](https://github.com/OpusCapita/react-select/releases/tag/v2.0.9) Thu Nov 22 2018 14:17:25 GMT+0300 (MSK)
=======================================================

- Fix property 'isClearable' passing to react-select components ([#9](https://github.com/OpusCapita/react-select/issues/9)) ([#10](https://github.com/OpusCapita/react-select/issues/10)) (Kirill Volkovich 32921638+jluukka@users.noreply.github.com, 2018-11-22 13:14:29 +0200)

[Release 2.0.8](https://github.com/OpusCapita/react-select/releases/tag/v2.0.8) Fri Oct 26 2018 20:50:48 GMT+0300 (MSK)
=======================================================

- Merge branch 'master' of github.com:OpusCapita/react-select (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-10-26 20:48:43 +0300)
-  [#8](https://github.com/OpusCapita/react-select/issues/8) Introduce "innerRef" prop (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-10-26 20:46:20 +0300)

[Release 2.0.7](https://github.com/OpusCapita/react-select/releases/tag/v2.0.7) Fri Oct 26 2018 20:47:40 GMT+0300 (MSK)
=======================================================


[Release 2.0.6](https://github.com/OpusCapita/react-select/releases/tag/v2.0.6) Fri Oct 26 2018 20:12:29 GMT+0300 (MSK)
=======================================================

- Merge branch 'master' of github.com:OpusCapita/react-select (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-10-26 20:10:53 +0300)
- Fix lint (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-10-26 20:08:32 +0300)

[Release 2.0.2](https://github.com/OpusCapita/react-select/releases/tag/v2.0.2) Fri Oct 26 2018 20:02:45 GMT+0300 (MSK)
=======================================================

-  [#7](https://github.com/OpusCapita/react-select/issues/7) Don't extend React.Component. Just return react-select "as is" (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-10-26 20:00:42 +0300)

[Release 2.0.1](https://github.com/OpusCapita/react-select/releases/tag/v2.0.1) Fri Oct 05 2018 09:39:49 GMT+0300 (MSK)
=======================================================

- API changes === Previously `Select` could be imported via `import Select from '@opuscapita/react-select'` which is a `umd` bundle with `react-select` bundled within, which is useful if someone wants to load it via browser `script` tag. But this is not ideal for `Node.js` environment, because in this case it's better to `import` only actually needed code, without any dependencies copied inside. (Egor Stambakio stambakio@scand.com, 2018-10-05 09:29:39 +0300)
- Refactor imports and build config to produce smaller artifacts (Egor Stambakio stambakio@scand.com, 2018-10-05 09:26:40 +0300)

[Release 2.0.0](https://github.com/OpusCapita/react-select/releases/tag/v2.0.0) Thu Oct 04 2018 16:56:44 GMT+0300 (MSK)
=======================================================

- Upgrade to react-select@2.x.x ([#6](https://github.com/OpusCapita/react-select/issues/6)) (Egor Stambakio kvolkovich-sc@users.noreply.github.com, 2018-10-04 16:52:41 +0300)
- Update README.md (GitHub kvolkovich-sc@users.noreply.github.com, 2018-09-28 12:04:02 +0300)
- Force gh-pages update (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-09-28 11:51:16 +0300)

[Release 2.0.0-oc.1-beta](https://github.com/OpusCapita/react-select/releases/tag/v2.0.0-oc.1-beta) Thu Sep 27 2018 22:08:57 GMT+0300 (MSK)
=======================================================

- Upgrade to react-select@2.x.x [#5](https://github.com/OpusCapita/react-select/issues/5) (Sergey Tamkov tamkov@scand.com, 2018-09-27 22:04:41 +0300)

[Release 1.0.0-oc.3](https://github.com/OpusCapita/react-select/releases/tag/v1.0.0-oc.3) Wed Jul 25 2018 10:20:55 GMT+0300 (MSK)
=======================================================

- Set proper CSS classes version (Kirill Volkovich kirill.volkovich@opuscapita.com, 2018-07-25 10:18:24 +0300)
-  [#2](https://github.com/OpusCapita/react-select/issues/2) Remove shadow for unfocused "Select" wrapped with .has-error el (PR [#3](https://github.com/OpusCapita/react-select/issues/3)) (GitHub kvolkovich-sc@users.noreply.github.com, 2018-07-25 10:12:20 +0300)

Release 1.0.0-oc.2 Tue May 15 2018 16:55:26 GMT+0300 (MSK)
=======================================================

- Merge branch 'master' of https://github.com/OpusCapita/react-select (Alexey Sergeev sab@scand.com, 2018-05-15 16:54:19 +0300)
- Fixing build process [skip ci] (Alexey Sergeev sab@scand.com, 2018-05-15 16:54:12 +0300)

Release 1.0.0-oc.1 Tue May 15 2018 16:51:26 GMT+0300 (MSK)
=======================================================

- Fixing build process (Alexey Sergeev sab@scand.com, 2018-05-15 16:29:00 +0300)
- Fixing build process (Alexey Sergeev sab@scand.com, 2018-05-15 16:21:03 +0300)
- Fixing build process (Alexey Sergeev sab@scand.com, 2018-05-15 16:15:46 +0300)
- Reconfiguring build process (Alexey Sergeev sab@scand.com, 2018-05-15 15:57:52 +0300)
- Updated border colors (Sergey Tamkov tamkov@scand.com, 2018-05-15 15:04:48 +0300)
- Update README.md (GitHub kvolkovich-sc@users.noreply.github.com, 2018-04-14 17:36:25 +0300)
- Update package.json (GitHub kvolkovich-sc@users.noreply.github.com, 2018-01-31 13:07:17 +0300)
- Updating to a version to  1.0.0-oc.1 (Kirill Volkovich kirill.volkovich@jcatalog.com, 2017-12-14 19:48:06 +0300)
## [v1.0.0-oc.0](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-oc.0) (Thu, 14 Dec 2017 16:47:51 GMT)
 - Drop React v. 0.14.x support (Kirill Volkovich <kirill.volkovich@jcatalog.com>, 507cff1)
 - Update "react-select" to v1.0.0 (Kirill Volkovich <kirill.volkovich@jcatalog.com>, 9db4fd5)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, 7494989)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, 54ed530)
 - Updated styles (Kirill Volkovich <volkovich@scand.com>, 28df443)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, cac907a)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, 648feeb)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, ccfaace)
 - Merge branch 'master' of opuscapita.github.com:OpusCapita/react-select (6febb93 df4e898, 81f05a2)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, df4e898)
 - Update docs (Kirill Volkovich <volkovich@scand.com>, 6febb93)
 - Fix index.js path in demo page index.html (Kirill Volkovich <volkovich@scand.com>, e066ac5)
 - Publish to registry.npmjs.org (Kirill Volkovich <volkovich@scand.com>, 1bbb162)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.6](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.6) (Thu, 24 Aug 2017 15:04:19 GMT)
 - Updated styles (Kirill Volkovich <volkovich@scand.com>, 28df443)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, cac907a)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, 648feeb)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, ccfaace)
 - Merge branch 'master' of opuscapita.github.com:OpusCapita/react-select (6febb93 df4e898, 81f05a2)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, df4e898)
 - Update docs (Kirill Volkovich <volkovich@scand.com>, 6febb93)
 - Fix index.js path in demo page index.html (Kirill Volkovich <volkovich@scand.com>, e066ac5)
 - Publish to registry.npmjs.org (Kirill Volkovich <volkovich@scand.com>, 1bbb162)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.5](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.5) (Thu, 24 Aug 2017 14:58:40 GMT)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, cac907a)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, 648feeb)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, ccfaace)
 - Merge branch 'master' of opuscapita.github.com:OpusCapita/react-select (6febb93 df4e898, 81f05a2)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, df4e898)
 - Update docs (Kirill Volkovich <volkovich@scand.com>, 6febb93)
 - Fix index.js path in demo page index.html (Kirill Volkovich <volkovich@scand.com>, e066ac5)
 - Publish to registry.npmjs.org (Kirill Volkovich <volkovich@scand.com>, 1bbb162)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.4](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.4) (Thu, 24 Aug 2017 14:53:53 GMT)
 - Fix exports (Kirill Volkovich <volkovich@scand.com>, ccfaace)
 - Merge branch 'master' of opuscapita.github.com:OpusCapita/react-select (6febb93 df4e898, 81f05a2)
 - Update README.md (Kirill Volkovich <kvolkovich-sc@users.noreply.github.com>, df4e898)
 - Update docs (Kirill Volkovich <volkovich@scand.com>, 6febb93)
 - Fix index.js path in demo page index.html (Kirill Volkovich <volkovich@scand.com>, e066ac5)
 - Publish to registry.npmjs.org (Kirill Volkovich <volkovich@scand.com>, 1bbb162)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.3](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.3) (Thu, 24 Aug 2017 14:28:34 GMT)
 - Publish to registry.npmjs.org (Kirill Volkovich <volkovich@scand.com>, 1bbb162)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.2](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.2) (Thu, 24 Aug 2017 14:14:03 GMT)
 - Fix build. Add "webpack-buindle-analyzer" (Kirill Volkovich <volkovich@scand.com>, 982ead1)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, 389a991)
 - Fix build, fix deps versions (Kirill Volkovich <volkovich@scand.com>, db4df98)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, cc07b80)
 - Add webpack.docs.config.js (Kirill Volkovich <volkovich@scand.com>, dfd13cb)
 - Add gh-pages-update.sh (Kirill Volkovich <volkovich@scand.com>, af3761e)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc.1](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.5-oc.1) (Thu, 24 Aug 2017 13:59:02 GMT)
 - Fix version (Kirill Volkovich <volkovich@scand.com>, 17b4bf8)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.6](https://github.com/OpusCapita/react-select/compare/v1.0.0-rc.5-oc-1...v1.0.0-rc.6) (Thu, 24 Aug 2017 13:58:16 GMT)
 - Fix lint, exports (Kirill Volkovich <volkovich@scand.com>, fccb109)

## [v1.0.0-rc.5-oc-1](https://github.com/OpusCapita/react-select/compare/null...v1.0.0-rc.5-oc-1) (Thu, 24 Aug 2017 13:56:07 GMT)
 - Fix build (Kirill Volkovich <volkovich@scand.com>, e192772)
 - Ready to release (Kirill Volkovich <volkovich@scand.com>, 946755a)
 - Update (Kirill Volkovich <volkovich@scand.com>, 1969f44)
 - Initial commit (Kirill Volkovich <volkovich@scand.com>, 9f14dbe)

