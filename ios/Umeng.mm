#import "Umeng.h"
#import <UMCommon/UMCommon.h>
#import <UMCommon/MobClick.h>
#import <UMCommon/UMConfigure.h>


@interface Umeng ()
@property (nonatomic, copy) RCTPromiseResolveBlock payOrderResolve;
@end

@implementation Umeng
{
    NSString *alipayScheme;
}

RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(multiply:(double)a
                  b:(double)b
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(a * b);

    resolve(result);
}

// 初始化友盟SDK
RCT_EXPORT_METHOD(initUMSdk:(NSString *) appkey
                  channel:(NSString *) channel
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSString* deviceID = [UMConfigure deviceIDForIntegration];
    [UMConfigure initWithAppkey:appkey channel:channel];
    [UMConfigure setLogEnabled:YES];
    [UMConfigure setEncryptEnabled:YES];
    // 将获取到的deviceID回传给RN 用于集成测试
    resolve(deviceID);
}

// 开始页面浏览
RCT_EXPORT_METHOD(onPageStart:(NSString *) pageName
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick beginLogPageView:pageName];
}

// 停止页面浏览
RCT_EXPORT_METHOD(onPageEnd:(NSString *) pageName
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick endLogPageView:pageName];
}

RCT_EXPORT_METHOD(onEvent:(NSString *) eventId
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick event:eventId];
}

RCT_EXPORT_METHOD(onEventWithLable:(NSString *) eventId
                  label: (NSString *) label
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick event:eventId label:label];
}

RCT_EXPORT_METHOD(onEventWithMap:(NSString *) eventId
                  map: (NSDictionary *) map
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick event:eventId attributes:map];
}

RCT_EXPORT_METHOD(onEventWithMapAndCount:(NSString *) eventId
                  map: (NSDictionary *) map
                  counter:(int) counter
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick event:eventId attributes:map counter:counter];
}

RCT_EXPORT_METHOD(onEventObject:(NSString *) eventId
                  map: (NSDictionary *) map
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick event:eventId attributes:map];
}

RCT_EXPORT_METHOD(registerPreProperties:(NSDictionary *) map
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick registerPreProperties:map];
}

RCT_EXPORT_METHOD(unregisterPreProperty:(NSString *) propertyName
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick unregisterPreProperty:propertyName];
}

RCT_EXPORT_METHOD(profileSignInWithPUID:(NSString *) uid
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick profileSignInWithPUID:uid];
}

RCT_EXPORT_METHOD(profileSignOff:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )
{
    [MobClick profileSignOff];
}

@end

