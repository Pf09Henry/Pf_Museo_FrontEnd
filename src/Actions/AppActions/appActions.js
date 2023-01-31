export const SET_APP_IS_LOADING = 'app/loading'

export function setLoading(value){
    return{
        type:SET_APP_IS_LOADING,
        payload:value
    }
}