
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNUmengSpec.h"

@interface Umeng : NSObject <NativeUmengSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Umeng : NSObject <RCTBridgeModule>
#endif

@end
