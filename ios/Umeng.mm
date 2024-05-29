#import "Umeng.h"

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

@end

