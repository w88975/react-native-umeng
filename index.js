import { NativeModules } from 'react-native'

const { Umeng: UModule } = NativeModules

const Umeng = {
    initSDK: (app_key, channel) => {
        UModule.initUMSdk(app_key, channel)
    },
    onPageStart(pageName) {
        UModule.onPageStart(pageName)
    },
    onPageEnd(pageName) {
        UModule.onPageEnd(pageName)
    },
    onEvent(evnetId) {
        UModule.onEvent(evnetId)
    },
    onEventWithLable(evnetId, label) {
        UModule.onEventWithLable(evnetId, label)
    },
    onEventWithMap(evnetId, map) {
        UModule.onEventWithMap(evnetId, map)
    },
    onEventWithMapAndCount(evnetId, map, count) {
        UModule.onEventWithMapAndCount(evnetId, map)
    },
    profileSignInWithPUID(userId) {
        UModule.profileSignInWithPUID(userId)
    },
    profileSignOff() {
        UModule.profileSignOff()
    }
}

export {
    Umeng
}