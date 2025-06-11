package com.cookingassistant

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader
import com.cookingassistant.BuildConfig  // <-- Add this explicitly

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : ReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Add additional packages here if needed
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)  // Don't use OpenSourceMergedSoMapping unless your version supports it.

    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // Add your new architecture load code here, if available
      // e.g., DefaultNewArchitectureEntryPoint.load()
    }
  }
}
