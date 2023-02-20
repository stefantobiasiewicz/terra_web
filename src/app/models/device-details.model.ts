export interface DeviceDetailsModel {
    device:Device;
    envInfo:EnvInfo;
    heater:Heater;
    light: boolean;
    doors: boolean;
    fan: boolean;
    humidifier: boolean;
  }

export interface Device {
    id: number;
    name: string;
    image: string;
    status: string;
}

export interface EnvInfo {
    temperature: number;
    humidity: number;
    pressure: number;
}

export interface Heater {
    onOff: boolean;
    setTemp: number;
}


