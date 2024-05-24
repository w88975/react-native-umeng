import { NativeModules, Platform } from 'react-native'

const LINKING_ERROR =
    `The package 'react-native-umeng' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';

const UModule = NativeModules.Umeng
    ? NativeModules.Umeng
    : new Proxy(
        {},
        {
            get() {
                throw new Error(LINKING_ERROR);
            },
        }
    );

const Umeng = {
    /**
     * 初始化友盟SDK
     * @description - 调用此方法前，需要再 react-native android项目里进行预初始化
     * - android原生项目目录
     * - {project}/android/app/src/main/java/com/{identity}/MainApplication.kt 或者 MainApplication.java 里的 onCreate 生命周期里调用预初始化方法
     * @example 
     * // 示例java代码
     * UMPreInitialize.initialize(context,"友盟appKey", "渠道名称");
     * // 再在js代码里调用initSDK进行初始化
     * @link [SDK预初始化文档](https://developer.umeng.com/docs/119267/detail/118588#title-hm8-22f-6pc)
     * @link [SDK初始化文档](https://developer.umeng.com/docs/119267/detail/118588#title-yb4-p8i-jdc)
     * @param app_key 友盟appKey
     * @param channel 渠道名称
     */
    initSDK: (app_key: string, channel: string): void => {
        UModule.initUMSdk(app_key, channel)
    },

    /**
     * 定义页面进入
     * @description react-native项目不能自动采集页面停留时间，需要手动在页面进入时调用 `onPageStart`
     * @link https://developer.umeng.com/docs/119267/detail/118637#title-ts5-7f3-122
     * @param pageName 页面名称,视图名称
     */
    onPageStart(pageName: string): void {
        UModule.onPageStart(pageName)
    },

    /**
     * 定义页面退出
     * @description react-native项目不能自动采集页面停留时间，需要手动在页面退出时调用 `onPageEnd`
     * @link https://developer.umeng.com/docs/119267/detail/118637#title-ts5-7f3-122
     * @param pageName 页面名称,视图名称
     */
    onPageEnd(pageName: string): void {
        UModule.onPageEnd(pageName)
    },

    /**
     * 自定义事件上报
     * @param evnetId 自定义事件ID
     */
    onEvent(evnetId: string): void {
        UModule.onEvent(evnetId)
    },

    /**
     * 自定义事件上报
     * @param evnetId 自定义事件ID
     * @param label 自定义事件标签
     */
    onEventWithLable(evnetId: string, label: string): void {
        UModule.onEventWithLable(evnetId, label)
    },

    /**
     * 自定义事件上报
     * @param evnetId 自定义事件ID
     * @param map 事件参数对象
     */
    onEventWithMap(evnetId: string, map: string): void {
        UModule.onEventWithMap(evnetId, map)
    },

    /**
     * 自定义事件上报
     * @param evnetId 自定义事件ID
     * @param object 事件参数对象
     */
    onEventObject(evnetId: string, object: string): void {
        UModule.onEventObject(evnetId, object)
    },

    /**
     * 自定义事件上报
     * @param evnetId 自定义事件ID
     * @param map 事件参数对象
     * @param count 
     */
    onEventWithMapAndCount(evnetId: string, map: string, count: number): void {
        UModule.onEventWithMapAndCount(evnetId, map, count)
    },

    /**
     * 账号统计功能
     * @description 【友盟+】在统计用户时以设备为标准，如果需要统计应用自身的账号，可以使用此功能
     * @link [参考文档](https://developer.umeng.com/docs/119267/detail/119517#h1-u8D26u53F7u7EDFu8BA1u529Fu80FD1)
     * @param userId 用户账号ID.长度小于64字节
     */
    profileSignInWithPUID(userId: string): void {
        UModule.profileSignInWithPUID(userId)
    },

    /**
     * Signoff调用后，不再发送账号内容
     */
    profileSignOff(): void {
        UModule.profileSignOff()
    }
}

export {
    Umeng
}