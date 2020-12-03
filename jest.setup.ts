import { enableFetchMocks } from 'jest-fetch-mock';
import { View } from 'react-native';

enableFetchMocks();

declare var jest: any;

jest.mock('react-native-share', () => {
  return {
    open: jest.fn(),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => ({
  KeyboardAwareScrollView: View,
}));

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('rn-fetch-blob', () => ({
  config: jest.fn(),
  fs: { dirs: { DocumentDir: 'mocked-dir' } },
}));

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const originalConsoleError = console.error;
console.error = (...args: any) => {
  if (
    typeof args[0] === 'string' &&
    !args[0].startsWith(
      'Warning: An update to %s inside a test was not wrapped in act(...).',
    )
  ) {
    originalConsoleError(...args);
  }
};

const coreApiMock = {
  v1: {
    i18n: {
      getTranslation: jest.fn(),
      t: jest.fn(),
      initI18N: jest.fn(),
      changeLanguage: jest.fn(),
    },
    sharing: {
      share: {
        message: jest.fn(),
        type: jest.fn(),
        url: jest.fn(),
      },
    },
  },
};

jest.mock('mobile-core-api-mock', () => ({
  createCoreAPIMock: () => coreApiMock,
}));

jest.mock('./src/CoreService', () => ({
  getRemoteConfigValues: jest.fn(),
  i18N: {
    init: (translations: string) => coreApiMock.v1.i18n.initI18N(translations),
    t: (key: string) => key,
    language: (language: string) =>
      coreApiMock.v1.i18n.changeLanguage(language),
  },
  getInstanceV1: jest.fn().mockReturnValue({
    analytics: {
      trackEvent: jest.fn(),
      trackUserId: jest.fn(),
      trackUserProperty: jest.fn(),
      trackCurrentScreen: jest.fn(),
    },
    logging: {
      logException: jest.fn(),
      setUserIdLogging: jest.fn(),
    },
    i18n: {
      initI18N: jest.fn(),
      getTranslation: jest.fn().mockReturnValue('text translation'),
    },
    remoteConfig: {
      setDefaults: jest.fn(),
      getStringFunction: jest.fn(),
      getNumberFunction: jest.fn(),
      getBooleanFunction: jest.fn(),
    },
    session: {
      authenticatedRequest: jest
        .fn()
        .mockResolvedValue({ ok: true, bodyJson: 'Lorem ipsum' }),
    },
    navigation: {
      goBack: jest.fn(),
      navigate: jest.fn(),
      reset: jest.fn(),
      push: jest.fn(),
    },
    coreComponents: {
      PdfView: jest.fn(),
    },
    ui: {
      bottomBar: {
        show: jest.fn(),
        hide: jest.fn(),
      },
    },
    v1: {
      session: {
        getUserSession: jest.fn().mockResolvedValue({
          token: {
            accessToken:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiODY2MDRhNzYtNjY5OC0xMWU5LWFhZGYtOWYzYjhhN2ZhMWFmIiwidXNlcl90eXBlIjoiY3VzdG9tZXIiLCJleHAiOjE1NzgzMjcxMzMsImlhdCI6MTU3ODMxOTkzMywiaXNzIjoiYmFua2ZhY2lsX2NvcmUifQ.xF7mNGALMW5L8G1j61qroMrgyJSC4lWrJz1QjHKNa9s',
            tokenType: 'bearer',
            refreshToken: '628e6252-c69a-11e8-bd83-47ec7a682745',
            expiresIn: 7200,
          },
        }),
      },
    },
  }),
}));
