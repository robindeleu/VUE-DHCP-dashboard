import api from './api';

export default {
    resource: 'deviceid',
        patchClaim(deviceid){
            console.log("patchClaim from claimdevice.js: deviceid",deviceid)
        return api().patch(`/devices/${deviceid}/claim`)
    }
}