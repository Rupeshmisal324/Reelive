
package com.reelive

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String? {
        return "Reelive" // Make sure this matches the name of your app component
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return ReactRootView(this@MainActivity)
            }
        }
    }
}

