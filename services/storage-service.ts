import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
    static storeValue = async (key: string, value: string): Promise<boolean> => {
        try {
            await AsyncStorage.setItem(key, value)
            return true
        } catch (e) {
            console.log('[Saving Value Error]')
            return false
        }
    }

    static storeObject = async (key: string, obj: object): Promise<boolean> => {
        try {
            const jsonValue = JSON.stringify(obj)
            await AsyncStorage.setItem(key, jsonValue)
            return true
        } catch (e) {
            console.log('[Saving Object Error]')
            return false
        }
    }

    static getValue = async (key: string): Promise<string | null> => {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            console.log('[Getting Value Error]')
            return null
        }
    }

    static getObject = async(key: string): Promise<any> => {
        try {
            const value = await AsyncStorage.getItem(key)
            return value ? JSON.parse(value) : null 
        } catch (e) {
            console.log('[Getting Value Error]')
            return null
        }
    }

}
