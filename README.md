# Creditas MiniApp - Mobile AtWork

## How to install

### Install tools

The tools required to build and run the project as well as its versions are:

- [git][git] v2.13 or greater
- [NodeJS][node] `>= v8.3 <= v10.17`
- [npm][npm] 6.9.0
- [yarn][yarn] 1.19.1
- [CocoaPods][cocoapods] 1.9.1
- [Android Studio][android_studio] 1.19.1
- [Xcode][xcode] >= 11.3

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
yarn --version
pod --version
```

### Setup the Project

- Navigate to the project root folder.
  - Install dependencies and the project by running `yarn install` or `yarn`.

## How to Build / Run

- IOS

  - Navigate to the ios folder located inside the project root folder.
  - Install dependencies by running `pod install` .
  - Open the .xcworkspace file on Xcode.
  - On Xcode, wait for the indexing process to finish.
  - From this point onwards you can run/build the project by either using the Xcode or running `yarn ios`

- Android
  - Open the project on Android Studio.
  - Wait for the prebuild to finish.
  - From this point onwards you can run/build the project by either using Android Studio or running `yarn android`

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[yarn]: https://yarnpkg.com/
[cocoapods]: https://cocoapods.org/
[android_studio]: https://developer.android.com/studio
[xcode]: https://developer.apple.com/xcode/
<!-- prettier-ignore-end -->
