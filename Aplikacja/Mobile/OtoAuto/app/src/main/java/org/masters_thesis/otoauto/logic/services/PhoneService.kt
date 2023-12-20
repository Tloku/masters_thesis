package org.masters_thesis.otoauto.logic.services

import android.content.Context
import android.telephony.TelephonyCallback
import android.telephony.TelephonyManager

class PhoneService(context: Context) {
    private val telephonyManager: TelephonyManager

    init {
        telephonyManager = context.getSystemService(Context.TELEPHONY_SERVICE) as TelephonyManager

        telephonyManager.registerTelephonyCallback(
            context.mainExecutor,
            object : TelephonyCallback(), TelephonyCallback.CallStateListener {
                override fun onCallStateChanged(state: Int) {
                    when (state) {
                        TelephonyManager.CALL_STATE_IDLE -> {

                        }
                        TelephonyManager.CALL_STATE_OFFHOOK -> {

                        }
                        TelephonyManager.CALL_STATE_RINGING -> {
                        }
                    }
                }
            }
        )
    }
}

