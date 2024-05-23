package com.umeng;

import android.content.Context;
import android.util.Log;

import com.umeng.commonsdk.UMConfigure;

public class UMPreInitialize {

    public static void initialize(Context context, String AppKey, String Channel) {
        UMConfigure.preInit(context,AppKey,Channel);
        Log.d("UM SDK","preInit 预初始化成功！");
    }
}
