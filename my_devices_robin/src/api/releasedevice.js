import api from './api';

export default {
    resource: 'deviceid',
        patchRelease(deviceid){
            console.log("patchRelease from relaesedevice.js: deviceid",deviceid)
        return api().patch(`/devices/${deviceid}/release`)
    }
}