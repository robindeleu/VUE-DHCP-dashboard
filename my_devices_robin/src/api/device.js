import api from './api';

export default {
    resource: 'deviceid',
        getDevice(deviceid){
            console.log("getDevice from device.js: deviceid",deviceid)
        return api().get(`/devices/${deviceid}`);
    },
    getDevicelist(){
        console.log("getDevicelist from device.js")
        return api().get(`/devices`);
    },
    getOrphaned(){
        console.log("getOrphaned from device.js")
        return api().get(`/ipreports/orphaned`);
    },
    sendOrphaned(ipreport){
        console.log("sendOrphaned from device.js: ipreport",ipreport)
        return api().post(`/devices`, ipreport)
    }
}